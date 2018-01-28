import * as Web3 from 'web3'
import * as Tx from 'ethereumjs-tx'

import config from '../../config'

export class CreateContractParams {
    contract: any
    constructorParams: any[]
}

/**
 * Creates and deploys an Ethereum contract 
 * @param params 
 */
export async function createContract(params: CreateContractParams): Promise<any> {

    return new Promise((res, rej) => {
        try {
            let web3 = new Web3(new Web3.providers.HttpProvider(config.ethProviderUrl))
        
            web3 = extendWeb3(web3)
        
            let Contract = web3.eth.contract(params.contract.abi) 
        
            let contractData = Contract.new.getData(...(params.constructorParams), {
                data: params.contract.bytecode
            })
            
            const gasPrice = web3.eth.gasPrice
            //const gasPriceHex = web3.toHex(4000000000)
            const gasPriceHex = web3.toHex(gasPrice)
            const gasLimitHex = web3.toHex(4400000)
            var nonce = web3.eth.getTransactionCount(config.ethAccountAddress)
            
            var tra = {
                gasPrice: gasPriceHex,
                gasLimit: gasLimitHex,
                //data: contract.bytecode,
                data: contractData,
                from: config.ethAccountAddress,
                nonce: web3.toHex(nonce)
            }
            
            let tx = new Tx(tra) as any
            tx.sign(new Buffer(config.ethPrivateKey, 'hex'))
            
            let stx = tx.serialize()

            web3.eth.sendRawTransaction('0x' + stx.toString('hex'), (err, hash) => {
                if (err) { 
                    console.log(err)
                    rej(err)
                    return
                }
                
                console.log('contract creation tx: ' + hash)
        
                web3.eth.getTransactionReceiptMined(hash)
                .then(receipt => {
                    // TODO: Log receipt
                    console.log('receipt: ', receipt)
                    res(receipt)
                })   
                .catch(e => {
                    console.log('error getting receipt ', e)
                    rej(e)
                })
        
                
            })  
        } catch(e) {
            console.log('Error creating contract ', e)
        }        

    })
}




function extendWeb3(web3) {

    web3.eth.getTransactionReceiptMined = function (txnHash, interval) {
        var transactionReceiptAsync;
        interval = interval ? interval : 500;
        transactionReceiptAsync = function(txnHash, resolve, reject) {
            try {
                var receipt = web3.eth.getTransactionReceipt(txnHash);
                if (receipt == null) {
                    setTimeout(function () {
                        transactionReceiptAsync(txnHash, resolve, reject);
                    }, interval);
                } else {
                    resolve(receipt);
                }
            } catch(e) {
                reject(e);
            }
        };
    
        if (Array.isArray(txnHash)) {
            var promises = [];
            txnHash.forEach(function (oneTxHash) {
                promises.push(web3.eth.getTransactionReceiptMined(oneTxHash, interval));
            });
            return Promise.all(promises);
        } else {
            return new Promise(function (resolve, reject) {
                    transactionReceiptAsync(txnHash, resolve, reject);
                });
        }
    }

    return web3
}


