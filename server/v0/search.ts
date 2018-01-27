import * as express from 'express'
import * as _ from 'lodash'
import config from '../../config'
import * as cacheManager from 'cache-manager'
import * as redisStore from 'cache-manager-redis'
import { ObjectID, Collection } from 'mongodb'
import * as dbFactory from 'mongo-factory'
import * as GitHubApi from 'github'
import { WalletProvider, PeriodicPaymentProvider, UserProvider, ProjectTokenholdersSnapshotProvider } from '../providers'
import { FixedPayment } from 'models'


const walletProvider = new WalletProvider()
const paymentProvider = new PeriodicPaymentProvider()
const userProvider = new UserProvider()
const tokenholderSnapshotProvider = new ProjectTokenholdersSnapshotProvider()

let github = new GitHubApi()
github.authenticate({
    token: config.githubToken,
    type: 'oauth'
})

const redisCache = cacheManager.caching({
    store: redisStore,
    host: 'localhost', // default value 
    port: 6379, // default value 
    db: 1,
    ttl: 600
} as redisStore.IConfig)

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        let q = req.query.q

        let results = await Promise.all([
            searchGithubRepos(q),
            searchExpositoUsers(q),
            searchExpositoProjects(q)
        ])

       

        res.json({
            results:  _.chain(results)
                        .flatten()
                        .orderBy('score', 'desc')
                        .values()
        })
    } catch(e) {
        res.json({ error: e})
    }
})


async function searchUsers(query: string) {
    // TODO: Search for exposito users and github users,
    //       then remove duplicates by prioritizing Exposito users
}


async function searchExpositoUsers(query: string) {
    let db = await dbFactory.getConnection(config.database)

    let usersCol = db.collection('users') as Collection

    let users = (await usersCol
            .find(
                { $text: { $search: query } },
                { score: { $meta: "textScore" }}
            )
            .sort( { score: { $meta: "textScore" } } )
            .toArray())
            .map(user => {
                user.id = user._id
                user.searchItemType = 'ExpositoUser'
                return user
            })

    return users
}


async function searchExpositoProjects(query: string) {
    let db = await dbFactory.getConnection(config.database)

    let projectsCol = db.collection('projects') as Collection

    let projects = await projectsCol
                    .find(
                        { $text: { $search: query } },
                        { score: { $meta: "textScore" }}
                    )
                    .sort( { score: { $meta: "textScore" } } )
                    .toArray()

    for(let project of projects) {
        project.searchItemType = 'ExpositoProject'
        project.latestTokenholdersSnapshot = await tokenholderSnapshotProvider.getLatestSnapshot('')
    }

    return projects
}



async function searchGithubRepos(query: string) {
    return new Promise((res, rej) => {
        redisCache.wrap(`search:${query}`, cb => {
            github.search.repos({ q: query, per_page: 10 })
            .then(results => cb(null, results))
            .catch(err => cb(err, null))
        }, { ttl: 36000 }, (err, results: any) => {
            if (!err) {
                res(results.data.items.map(item => {
                    item.searchItemType = 'GithubRepo'
                    item.score  = item.score - 4
                    return item
                }))
            }
            else
                rej(err)
        })
    })
}

export default router