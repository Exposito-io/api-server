import * as express from 'express'
import * as cacheManager from 'cache-manager'
import * as redisStore from 'cache-manager-redis'
import config from '../../config'
import * as GitHubApi from 'github'

const redisCache = cacheManager.caching({
    store: redisStore,
    host: 'localhost', // default value 
    port: 6379, // default value 
    db: 1,
    ttl: 600
} as redisStore.IConfig)

/*
redisCache.store.events.on('redisError', function(error) {
	// handle error here
	console.log('Redis cache error: ', error)
})*/


let github = new GitHubApi()
github.authenticate({
    token: config.githubToken,
    type: 'oauth'
})





const router = express.Router()


//console.log('search forRepositories: ', api.search({q:'macor161'}).forRepositories())

router.get('/', async (req, res) => {
    try {
        res.json({  })
    } catch(e) {
        res.json({ error: e })
    }
})


router.get('/findRepos', (req, res) => {
    try {       
        findRepos(req.query.q, (err, results) => {
            if (err) 
                return res.json({ error: err })

            console.log(results)
            res.json(results.data.items)
        })
    } catch(e) {
        res.json({ error: e})
    }
})


function findRepos(query: string, mainCb) {
    redisCache.wrap(query, cb => {
        github.search.repos({ q: query, per_page: 10 })
        .then(results => cb(null, results))
        .catch(err => cb(err, null))
    }, { ttl: 36000 }, mainCb)
}




export default router