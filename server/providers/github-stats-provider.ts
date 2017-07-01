import { ObjectID, Collection } from 'mongodb'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, PeriodicPaymentOptions, FixedPayment, FixedPaymentOptions, Wallet, RepoParams, RepoAuthor, RepoStats } from 'models'
import { WalletProvider } from './wallet-provider'
import * as BigNumber from 'bignumber.js'
import * as _ from 'lodash'


export class GithubStatsProvider {


    constructor() {

    }


    async getRepoStats(params: RepoParams): Promise<RepoStats> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('repo-stats') as Collection

        let stats = await col.findOne(params)

        return this.convertMongoRepoStats(stats)
    }

    async getMultipleRepoStats(repos: RepoParams[]): Promise<RepoStats> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('repo-stats') as Collection

        let stats = (await col.find({ $or: repos })
                             .toArray())
                             .map(this.convertMongoRepoStats)

        let authors = _(stats)
                        .flatMap(author => author.authors)
                        .groupBy('email')
                        .map(authorStats => ({
                            name: authorStats[0].name,
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






