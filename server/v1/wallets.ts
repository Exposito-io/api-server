import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import * as config from 'config'
import { WalletProvider } from '../providers/wallet-provider'

const walletProvider = new WalletProvider()
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let wallets = await walletProvider.fetchWalletsForClients([])
        res.json({ 
            wallets: wallets.map(wallet => { 
                return {
                    id: wallet.getId(), 
                    name: wallet.getName(), 
                    labels: wallet.getLabels() 
                }
            })
        })
    } catch(e) {
        res.json({ error: e})
    }
})

router.get('/:id', async (req, res) => {
    try {
        let wallet = await walletProvider.fetchById(req.params.id)

        res.json(wallet.toFrontendJSON())

    } catch(e) {
        res.json({ error: e})
    }
})

router.get('/addresses', async (req, res) => {
    try {
        
    } catch(e) {
        res.json({ error: e})
    }
})

router.post('/', async (req, res) => {
    try {
        if (!validateWalletName(req.body.name))
            res.json({ error: 'Invalid wallet name'})

        let walletName = req.body.name

        let client = await CoreClient.getClient()

        client.seedFromRandomWithMnemonic({
            network: config.get("bitcoinNetwork"),
            passphrase: undefined,
            language: 'en',
        })

        client.createWallet(walletName, 'copayer1', 1, 1, {
            network: config.get("bitcoinNetwork")
        }, function(err, secret) {
            if (err) 
                console.log('Error : ', err)
            
            console.log(' * ' + _.capitalize(<string>config.get('bitcoinNetwork')) + ' Wallet Created.')
            CoreClient.saveClient({ host: config.get('coreWalletServiceHost'), file: 'C:\\weblog\\.wallet.dat' }, client, function() {
                if (secret) 
                    console.log('   - Secret to share:\n\t' + secret)
                res.json({ success: 1 })
            })
        })        
        
    } catch(e) {
        res.json({ error: e })
    }
})


function validateWalletName(name: string) {
    return true
}


export default router