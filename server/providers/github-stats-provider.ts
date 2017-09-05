import { ObjectID, Collection } from 'mongodb'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, PeriodicPaymentOptions, FixedPayment, FixedPaymentOptions, Wallet, RepoParams, RepoAuthor, RepoStats } from 'models'
import { WalletProvider } from './wallet-provider'
import * as BigNumber from 'bignumber.js'
import * as _ from 'lodash'
import * as Queue from 'bull'

let repoStatsQueue = new Queue('repo-stats', config.queueServer)


export class GithubStatsProvider {


    constructor() {

    }


    /**
     * Returns the statistics of a Github repository if the stats
     * have already been compiled at least once. If they are requested 
     * for the first time, the promise will return a job object
     * since the calculation of the stats may take an unknown amount of time
     * to execute, depending on the size of the repository
     * 
     * @param params 
     */
    async getRepoStats(params: RepoParams): Promise<RepoStats | Queue.Job> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('repo-stats') as Collection

        let stats = await col.findOne(params)

        if (stats != null)
            return this.convertMongoRepoStats(stats)
        else {
            // TODO: test if a job already exists
            let job = await repoStatsQueue.add({ 
                owner: params.owner, 
                repo: params.repo 
            })

            return job
        }
    }

    /**
     * Returns stats for multiple Github repositories. If 
     * one or more of them have never been calculated, an error
     * will be thrown. But a job will be started for each 
     * missing repo stats.
     * 
     * @param repos 
     */
    async getMultipleRepoStats(repos: RepoParams[]): Promise<RepoStats> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('repo-stats') as Collection

        let stats = (await col.find({ $or: repos })
                             .toArray())
                             .map(this.convertMongoRepoStats)

        // TODO: Check if all the stats are available

        let authors = _(stats)
                        .flatMap(author => author.authors)
                        .groupBy('email')
                        .map(authorStats => ({
                            name: authorStats[0].name,
                            image: authorStats[0].image,
                            email: authorStats[0].email,
                            linesOfCode: authorStats.reduce((totalLines, authorStats) => totalLines.plus(authorStats.linesOfCode), new BigNumber(0)).toString(),
                            fileCount: authorStats.reduce((totalFiles, authorStats) => totalFiles.plus(authorStats.fileCount), new BigNumber(0)).toString(),
                            availablePaymentMethods: authorStats[0].availablePaymentMethods
                        }))
                        .value()
                        

        return {
            authors: authors,
            totalLinesOfCode: stats.reduce((totalLines, stat) => totalLines.plus(stat.totalLinesOfCode), new BigNumber(0)).toString(),
            totalFileCount: stats.reduce((totalFile, stat) => totalFile.plus(stat.totalFileCount), new BigNumber(0)).toString()
        }
    }


    private convertMongoRepoStats(stats: any): RepoStats {
        return {
            authors: stats.authors.map(author => {
                author.linesOfCode = author.linesOfCode.toString()
                author.fileCount = author.fileCount.toString()
                return author
            }),
            totalLinesOfCode: stats.totalLinesOfCode.toString(),
            totalFileCount: stats.totalFileCount.toString()
        }
    }

}






