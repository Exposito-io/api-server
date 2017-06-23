import { ObjectID, Collection } from 'mongodb'
import * as config from 'config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, PeriodicPaymentOptions, FixedPayment, FixedPaymentOptions, Wallet, RepoParams } from 'models'
import { WalletProvider } from './wallet-provider'
import * as BigNumber from 'bignumber.js'


export class GithubStatsProvider {


    constructor() {

    }


    async getRepoStats(params: RepoParams): Promise<RepoStats> {
        let db = await dbFactory.getConnection(config.get('database'))
        let col = db.collection('repo-stats') as Collection

        let stats = await col.findOne(params)

        return this.convertMongoRepoStats(stats)
    }

    async getMultipleRepoStats(repos: RepoParams[]): Promise<RepoStats[]> {
        let db = await dbFactory.getConnection(config.get('database'))
        let col = db.collection('repo-stats') as Collection

        let stats = await col.find({ $or: repos }).toArray()

        return stats.map(this.convertMongoRepoStats)   
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


export class RepoStats {
    authors: RepoAuthor[]
    totalLinesOfCode: string
    totalFileCount: string
}


export class RepoAuthor {
    name: string
    email: string
    linesOfCode: string
    fileCount: string
    availablePaymentMethods: any[]
}



