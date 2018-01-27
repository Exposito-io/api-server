import { HostingType } from 'models'

export class Config {
    serverPort = 3004
    database = 'mongodb://localhost:27017/exposito'
    cacheHost = 'localhost'
    cachePort = 6379
    cacheDb = 0
    googleClientWebId = ''
    googleClientAppId = ''
    bitcoinNetwork = 'testnet'
    coreWalletServiceHost = 'http://localhost:3232/bws/api'
    hosting = HostingType.GoogleCloud
    corsOrigin = 'http://localhost:3001'
    secretsPath = 'E:\\tmp\\test2\\Exposito\\secrets'
    queueServer = 'redis://127.0.0.1:6379'
    ethProviderUrl = 'http://localhost:8545'
}