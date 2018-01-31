export default {
  "contractName": "ExpositoProject",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "creationBlock",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalStandardTokenSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newController",
          "type": "address"
        }
      ],
      "name": "changeController",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "projectId",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalDeveloperTokenSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_blockNumber",
          "type": "uint256"
        }
      ],
      "name": "balanceOfAt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_developerToken",
          "type": "address"
        }
      ],
      "name": "setDeveloperToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "standardTokenBalanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "parentToken",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "generateTokens",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "developerTokenHistory",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_blockNumber",
          "type": "uint256"
        }
      ],
      "name": "totalSupplyAt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "developerToken",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "transfersEnabled",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "parentSnapShotBlock",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_extraData",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "destroyTokens",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "developerTokenBalanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_snapshotBlock",
          "type": "uint256"
        },
        {
          "name": "_transfersEnabled",
          "type": "bool"
        }
      ],
      "name": "createCloneToken",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "claimTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenFactory",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_transfersEnabled",
          "type": "bool"
        }
      ],
      "name": "enableTransfers",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "controller",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_projectId",
          "type": "string"
        }
      ],
      "name": "setProjectId",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_tokenFactory",
          "type": "address"
        },
        {
          "name": "_parentToken",
          "type": "address"
        },
        {
          "name": "_parentSnapShotBlock",
          "type": "uint256"
        },
        {
          "name": "_projectId",
          "type": "string"
        },
        {
          "name": "_standardTokenSupply",
          "type": "uint256"
        },
        {
          "name": "_developerToken",
          "type": "address"
        },
        {
          "name": "_transfersEnabled",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_token",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_controller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "ClaimedTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_cloneToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_snapshotBlock",
          "type": "uint256"
        }
      ],
      "name": "NewCloneToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526040805190810160405280600581526020017f302e302e31000000000000000000000000000000000000000000000000000000815250600190805190602001906200005192919062000c4a565b5034156200005e57600080fd5b60405162003ce438038062003ce483398101604052808051906020019091908051906020019091908051906020019091908051820191906020018051906020019091908051906020019091908051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600b60016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600290805190602001906200018f92919062000c4a565b508460068190555080600b60006101000a81548160ff0219169083151502179055504360078190555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600083111562000225576200022333846200023264010000000002620017ed176401000000009004565b505b5050505050505062000d90565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156200029357600080fd5b620002b1620003d76401000000000262001165176401000000009004565b91508184830110151515620002c557600080fd5b620002e485620003fd6401000000000262001798176401000000009004565b90508084820110151515620002f857600080fd5b6200031b600a858401620004266401000000000262002c3f176401000000009004565b6200037b600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020858301620004266401000000000262002c3f176401000000009004565b8473ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a360019250505092915050565b6000620003f843620005a56401000000000262001976176401000000009004565b905090565b60006200041f8243620007626401000000000262001361176401000000009004565b9050919050565b6000806000848054905014806200048e5750438460018680549050038154811015156200044f57fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16105b15620005405783848054809190600101620004aa919062000cd1565b815481101515620004b757fe5b90600052602060002090019150438260000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550828260000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055506200059f565b8360018580549050038154811015156200055657fe5b90600052602060002090019050828160000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b50505050565b600080600a80549050148062000607575081600a6000815481101515620005c857fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16115b1562000739576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156200072f57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663981b24d0620006b08460065462000a0b6401000000000262002a12176401000000009004565b6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15156200070b57600080fd5b6102c65a03f115156200071d57600080fd5b5050506040518051905090506200075d565b600090506200075d565b6200075a600a8362000a266401000000000262002a2b176401000000009004565b90505b919050565b600080600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905014806200083e575081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815481101515620007ff57fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16115b15620009a4576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156200099a57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ee2cd7e84620008e88560065462000a0b6401000000000262002a12176401000000009004565b6000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156200097657600080fd5b6102c65a03f115156200098857600080fd5b50505060405180519050905062000a05565b6000905062000a05565b62000a02600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208362000a266401000000000262002a2b176401000000009004565b90505b92915050565b600081831062000a1c578162000a1e565b825b905092915050565b60008060008060008680549050141562000a44576000935062000c41565b85600187805490500381548110151562000a5a57fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168510151562000afb5785600187805490500381548110151562000ab657fe5b906000526020600020900160000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16935062000c41565b85600081548110151562000b0b57fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1685101562000b5a576000935062000c41565b60009250600186805490500391505b8282111562000bf257600260018484010181151562000b8457fe5b04905084868281548110151562000b9757fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1611151562000be55780925062000bec565b6001810391505b62000b69565b858381548110151562000c0157fe5b906000526020600020900160000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1693505b50505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000c8d57805160ff191683800117855562000cbe565b8280016001018555821562000cbe579182015b8281111562000cbd57825182559160200191906001019062000ca0565b5b50905062000ccd919062000d00565b5090565b81548183558181151162000cfb5781836000526020600020918201910162000cfa919062000d28565b5b505050565b62000d2591905b8082111562000d2157600081600090555060010162000d07565b5090565b90565b62000d8d91905b8082111562000d8957600080820160006101000a8154906fffffffffffffffffffffffffffffffff02191690556000820160106101000a8154906fffffffffffffffffffffffffffffffff02191690555060010162000d2f565b5090565b90565b612f448062000da06000396000f30060606040526004361061018b576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b3146102ad578063176345141461030757806318160ddd1461033057806323b872dd146103595780632e8fc2c4146103d25780633cebb823146103fb5780633fafa12714610434578063435c39b5146104c25780634ee2cd7e146104eb57806354fd4d5014610541578063558bb0bc146105cf5780635d5e62861461060857806370a082311461065557806380a54001146106a2578063827f32c0146106f75780639231f2e314610751578063981b24d0146107b4578063a9059cbb146107eb578063af42f8da14610845578063bef97c871461089a578063c5bcc4f1146108c7578063cae9ca51146108f0578063d3ce77fe1461098d578063d92fce60146109e7578063dc9cff7414610a34578063dd62ed3e14610aa2578063df8de3e714610b0e578063e77772fe14610b47578063f41e60c514610b9c578063f77c479114610bc1578063f856ba5714610c16575b6101b56000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610c73565b15156101c057600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f48c305434336000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506020604051808303818588803b151561028457600080fd5b6125ee5a03f1151561029557600080fd5b505050506040518051905015156102ab57600080fd5b005b34156102b857600080fd5b6102ed600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610caf565b604051808215151515815260200191505060405180910390f35b341561031257600080fd5b61031a610fa8565b6040518082815260200191505060405180910390f35b341561033b57600080fd5b610343610fae565b6040518082815260200191505060405180910390f35b341561036457600080fd5b6103b8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610fc6565b604051808215151515815260200191505060405180910390f35b34156103dd57600080fd5b6103e5611165565b6040518082815260200191505060405180910390f35b341561040657600080fd5b610432600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611175565b005b341561043f57600080fd5b610447611213565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048757808201518184015260208101905061046c565b50505050905090810190601f1680156104b45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104cd57600080fd5b6104d56112b1565b6040518082815260200191505060405180910390f35b34156104f657600080fd5b61052b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611361565b6040518082815260200191505060405180910390f35b341561054c57600080fd5b6105546115d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610594578082015181840152602081019050610579565b50505050905090810190601f1680156105c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105da57600080fd5b610606600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611674565b005b341561061357600080fd5b61063f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611798565b6040518082815260200191505060405180910390f35b341561066057600080fd5b61068c600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117ab565b6040518082815260200191505060405180910390f35b34156106ad57600080fd5b6106b56117c7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561070257600080fd5b610737600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506117ed565b604051808215151515815260200191505060405180910390f35b341561075c57600080fd5b6107726004808035906020019091905050611937565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107bf57600080fd5b6107d56004808035906020019091905050611976565b6040518082815260200191505060405180910390f35b34156107f657600080fd5b61082b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611aff565b604051808215151515815260200191505060405180910390f35b341561085057600080fd5b610858611b31565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156108a557600080fd5b6108ad611b57565b604051808215151515815260200191505060405180910390f35b34156108d257600080fd5b6108da611b6a565b6040518082815260200191505060405180910390f35b34156108fb57600080fd5b610973600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611b70565b604051808215151515815260200191505060405180910390f35b341561099857600080fd5b6109cd600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611ce9565b604051808215151515815260200191505060405180910390f35b34156109f257600080fd5b610a1e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611e2f565b6040518082815260200191505060405180910390f35b3415610a3f57600080fd5b610a6060048080359060200190919080351515906020019091905050611f18565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610aad57600080fd5b610af8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506121af565b6040518082815260200191505060405180910390f35b3415610b1957600080fd5b610b45600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612236565b005b3415610b5257600080fd5b610b5a612567565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610ba757600080fd5b610bbf6004808035151590602001909190505061258d565b005b3415610bcc57600080fd5b610bd4612605565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610c2157600080fd5b610c71600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061262a565b005b60008060008373ffffffffffffffffffffffffffffffffffffffff161415610c9e5760009150610ca9565b823b90506000811191505b50919050565b6000600b60009054906101000a900460ff161515610ccc57600080fd5b6000821480610d5757506000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b1515610d6257600080fd5b610d8c6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610c73565b15610eb8576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663da682aeb3385856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1515610e9157600080fd5b6102c65a03f11515610ea257600080fd5b505050604051805190501515610eb757600080fd5b5b81600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60075481565b6000610fb86112b1565b610fc0611165565b01905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561114f57600b60009054906101000a900460ff16151561103957600080fd5b81600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156110c457600080fd5b81600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b61115a84848461269f565b600190509392505050565b600061117043611976565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111d057600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112a95780601f1061127e576101008083540402835291602001916112a9565b820191906000526020600020905b81548152906001019060200180831161128c57829003601f168201915b505050505081565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561134157600080fd5b6102c65a03f1151561135257600080fd5b50505060405180519050905090565b600080600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050148061143b575081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154811015156113fc57fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16115b15611585576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561157c57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ee2cd7e846114cd85600654612a12565b6000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561155a57600080fd5b6102c65a03f1151561156b57600080fd5b5050506040518051905090506115d0565b600090506115d0565b6115cd600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083612a2b565b90505b92915050565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561166c5780601f106116415761010080835404028352916020019161166c565b820191906000526020600020905b81548152906001019060200180831161164f57829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156116cf57600080fd5b600480548060010182816116e39190612db6565b91600052602060002090016000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006117a48243611361565b9050919050565b60006117b682611e2f565b6117bf83611798565b019050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561184d57600080fd5b611855611165565b9150818483011015151561186857600080fd5b61187185611798565b9050808482011015151561188457600080fd5b611891600a858401612c3f565b6118db600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020858301612c3f565b8473ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a360019250505092915050565b60048181548110151561194657fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600a8054905014806119d6575081600a600081548110151561199757fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16115b15611aec576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611ae357600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663981b24d0611a6784600654612a12565b6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515611ac157600080fd5b6102c65a03f11515611ad257600080fd5b505050604051805190509050611afa565b60009050611afa565b611af7600a83612a2b565b90505b919050565b6000600b60009054906101000a900460ff161515611b1c57600080fd5b611b2733848461269f565b6001905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900460ff1681565b60065481565b6000611b7c8484610caf565b1515611b8757600080fd5b8373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611c7c578082015181840152602081019050611c61565b50505050905090810190601f168015611ca95780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1515611cca57600080fd5b6102c65a03f11515611cdb57600080fd5b505050600190509392505050565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611d4957600080fd5b611d51611165565b9150838210151515611d6257600080fd5b611d6b85611798565b9050838110151515611d7c57600080fd5b611d89600a858403612c3f565b611dd3600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020858303612c3f565b60008573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a360019250505092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515611ef657600080fd5b6102c65a03f11515611f0757600080fd5b505050604051805190509050919050565b6000806000841415611f28574393505b600b60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bda2419730868660026000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001831515151581526020018060200182810382528381815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561206a5780601f1061203f5761010080835404028352916020019161206a565b820191906000526020600020905b81548152906001019060200180831161204d57829003601f168201915b505095505050505050602060405180830381600087803b151561208c57600080fd5b6102c65a03f1151561209d57600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff16633cebb823336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b151561214357600080fd5b6102c65a03f1151561215457600080fd5b5050508073ffffffffffffffffffffffffffffffffffffffff167f086c875b377f900b07ce03575813022f05dd10ed7640b5282cf6d3c3fc352ade856040518082815260200191505060405180910390a28091505092915050565b6000600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561229457600080fd5b60008373ffffffffffffffffffffffffffffffffffffffff161415612330576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561232b57600080fd5b612562565b8291508173ffffffffffffffffffffffffffffffffffffffff166370a08231306000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15156123d657600080fd5b6102c65a03f115156123e757600080fd5b5050506040518051905090508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156124bf57600080fd5b6102c65a03f115156124d057600080fd5b50505060405180519050506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167ff931edb47c50b4b4104c187b5814a9aef5f709e17e2ecf9617e860cacade929c836040518082815260200191505060405180910390a35b505050565b600b60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156125e857600080fd5b80600b60006101000a81548160ff02191690831515021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561268557600080fd5b806002908051906020019061269b929190612de2565b5050565b6000806000831415612715578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3612a0b565b4360065410151561272557600080fd5b60008473ffffffffffffffffffffffffffffffffffffffff161415801561277857503073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614155b151561278357600080fd5b61278d8543611361565b915082821015151561279e57600080fd5b6127c86000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610c73565b156128f4576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634a3931498686866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15156128cd57600080fd5b6102c65a03f115156128de57600080fd5b5050506040518051905015156128f357600080fd5b5b61293e600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020848403612c3f565b6129488443611361565b9050808382011015151561295b57600080fd5b6129a5600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020848301612c3f565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a35b5050505050565b6000818310612a215781612a23565b825b905092915050565b600080600080600086805490501415612a475760009350612c36565b856001878054905003815481101515612a5c57fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1685101515612afa57856001878054905003815481101515612ab657fe5b906000526020600020900160000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff169350612c36565b856000815481101515612b0957fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16851015612b565760009350612c36565b60009250600186805490500391505b82821115612be8576002600184840101811515612b7e57fe5b049050848682815481101515612b9057fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16111515612bdc57809250612be3565b6001810391505b612b65565b8583815481101515612bf657fe5b906000526020600020900160000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1693505b50505092915050565b600080600084805490501480612ca5575043846001868054905003815481101515612c6657fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16105b15612d525783848054809190600101612cbe9190612e62565b815481101515612cca57fe5b90600052602060002090019150438260000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550828260000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550612db0565b836001858054905003815481101515612d6757fe5b90600052602060002090019050828160000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b50505050565b815481835581811511612ddd57818360005260206000209182019101612ddc9190612e8e565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612e2357805160ff1916838001178555612e51565b82800160010185558215612e51579182015b82811115612e50578251825591602001919060010190612e35565b5b509050612e5e9190612e8e565b5090565b815481835581811511612e8957818360005260206000209182019101612e889190612eb3565b5b505050565b612eb091905b80821115612eac576000816000905550600101612e94565b5090565b90565b612f1591905b80821115612f1157600080820160006101000a8154906fffffffffffffffffffffffffffffffff02191690556000820160106101000a8154906fffffffffffffffffffffffffffffffff021916905550600101612eb9565b5090565b905600a165627a7a7230582071c94cb6446bbcb8c5d61a255875c2977e8f78aa5be11dcc32dba18ae8a0373a0029",
  "deployedBytecode": "0x60606040526004361061018b576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b3146102ad578063176345141461030757806318160ddd1461033057806323b872dd146103595780632e8fc2c4146103d25780633cebb823146103fb5780633fafa12714610434578063435c39b5146104c25780634ee2cd7e146104eb57806354fd4d5014610541578063558bb0bc146105cf5780635d5e62861461060857806370a082311461065557806380a54001146106a2578063827f32c0146106f75780639231f2e314610751578063981b24d0146107b4578063a9059cbb146107eb578063af42f8da14610845578063bef97c871461089a578063c5bcc4f1146108c7578063cae9ca51146108f0578063d3ce77fe1461098d578063d92fce60146109e7578063dc9cff7414610a34578063dd62ed3e14610aa2578063df8de3e714610b0e578063e77772fe14610b47578063f41e60c514610b9c578063f77c479114610bc1578063f856ba5714610c16575b6101b56000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610c73565b15156101c057600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f48c305434336000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506020604051808303818588803b151561028457600080fd5b6125ee5a03f1151561029557600080fd5b505050506040518051905015156102ab57600080fd5b005b34156102b857600080fd5b6102ed600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610caf565b604051808215151515815260200191505060405180910390f35b341561031257600080fd5b61031a610fa8565b6040518082815260200191505060405180910390f35b341561033b57600080fd5b610343610fae565b6040518082815260200191505060405180910390f35b341561036457600080fd5b6103b8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610fc6565b604051808215151515815260200191505060405180910390f35b34156103dd57600080fd5b6103e5611165565b6040518082815260200191505060405180910390f35b341561040657600080fd5b610432600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611175565b005b341561043f57600080fd5b610447611213565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048757808201518184015260208101905061046c565b50505050905090810190601f1680156104b45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104cd57600080fd5b6104d56112b1565b6040518082815260200191505060405180910390f35b34156104f657600080fd5b61052b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611361565b6040518082815260200191505060405180910390f35b341561054c57600080fd5b6105546115d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610594578082015181840152602081019050610579565b50505050905090810190601f1680156105c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105da57600080fd5b610606600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611674565b005b341561061357600080fd5b61063f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611798565b6040518082815260200191505060405180910390f35b341561066057600080fd5b61068c600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117ab565b6040518082815260200191505060405180910390f35b34156106ad57600080fd5b6106b56117c7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561070257600080fd5b610737600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506117ed565b604051808215151515815260200191505060405180910390f35b341561075c57600080fd5b6107726004808035906020019091905050611937565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107bf57600080fd5b6107d56004808035906020019091905050611976565b6040518082815260200191505060405180910390f35b34156107f657600080fd5b61082b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611aff565b604051808215151515815260200191505060405180910390f35b341561085057600080fd5b610858611b31565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156108a557600080fd5b6108ad611b57565b604051808215151515815260200191505060405180910390f35b34156108d257600080fd5b6108da611b6a565b6040518082815260200191505060405180910390f35b34156108fb57600080fd5b610973600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611b70565b604051808215151515815260200191505060405180910390f35b341561099857600080fd5b6109cd600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611ce9565b604051808215151515815260200191505060405180910390f35b34156109f257600080fd5b610a1e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611e2f565b6040518082815260200191505060405180910390f35b3415610a3f57600080fd5b610a6060048080359060200190919080351515906020019091905050611f18565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610aad57600080fd5b610af8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506121af565b6040518082815260200191505060405180910390f35b3415610b1957600080fd5b610b45600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050612236565b005b3415610b5257600080fd5b610b5a612567565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610ba757600080fd5b610bbf6004808035151590602001909190505061258d565b005b3415610bcc57600080fd5b610bd4612605565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610c2157600080fd5b610c71600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061262a565b005b60008060008373ffffffffffffffffffffffffffffffffffffffff161415610c9e5760009150610ca9565b823b90506000811191505b50919050565b6000600b60009054906101000a900460ff161515610ccc57600080fd5b6000821480610d5757506000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b1515610d6257600080fd5b610d8c6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610c73565b15610eb8576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663da682aeb3385856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1515610e9157600080fd5b6102c65a03f11515610ea257600080fd5b505050604051805190501515610eb757600080fd5b5b81600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60075481565b6000610fb86112b1565b610fc0611165565b01905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561114f57600b60009054906101000a900460ff16151561103957600080fd5b81600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156110c457600080fd5b81600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b61115a84848461269f565b600190509392505050565b600061117043611976565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111d057600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112a95780601f1061127e576101008083540402835291602001916112a9565b820191906000526020600020905b81548152906001019060200180831161128c57829003601f168201915b505050505081565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561134157600080fd5b6102c65a03f1151561135257600080fd5b50505060405180519050905090565b600080600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050148061143b575081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154811015156113fc57fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16115b15611585576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561157c57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ee2cd7e846114cd85600654612a12565b6000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561155a57600080fd5b6102c65a03f1151561156b57600080fd5b5050506040518051905090506115d0565b600090506115d0565b6115cd600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083612a2b565b90505b92915050565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561166c5780601f106116415761010080835404028352916020019161166c565b820191906000526020600020905b81548152906001019060200180831161164f57829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156116cf57600080fd5b600480548060010182816116e39190612db6565b91600052602060002090016000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006117a48243611361565b9050919050565b60006117b682611e2f565b6117bf83611798565b019050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561184d57600080fd5b611855611165565b9150818483011015151561186857600080fd5b61187185611798565b9050808482011015151561188457600080fd5b611891600a858401612c3f565b6118db600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020858301612c3f565b8473ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a360019250505092915050565b60048181548110151561194657fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600a8054905014806119d6575081600a600081548110151561199757fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16115b15611aec576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611ae357600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663981b24d0611a6784600654612a12565b6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515611ac157600080fd5b6102c65a03f11515611ad257600080fd5b505050604051805190509050611afa565b60009050611afa565b611af7600a83612a2b565b90505b919050565b6000600b60009054906101000a900460ff161515611b1c57600080fd5b611b2733848461269f565b6001905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900460ff1681565b60065481565b6000611b7c8484610caf565b1515611b8757600080fd5b8373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611c7c578082015181840152602081019050611c61565b50505050905090810190601f168015611ca95780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1515611cca57600080fd5b6102c65a03f11515611cdb57600080fd5b505050600190509392505050565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611d4957600080fd5b611d51611165565b9150838210151515611d6257600080fd5b611d6b85611798565b9050838110151515611d7c57600080fd5b611d89600a858403612c3f565b611dd3600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020858303612c3f565b60008573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a360019250505092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515611ef657600080fd5b6102c65a03f11515611f0757600080fd5b505050604051805190509050919050565b6000806000841415611f28574393505b600b60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bda2419730868660026000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001831515151581526020018060200182810382528381815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561206a5780601f1061203f5761010080835404028352916020019161206a565b820191906000526020600020905b81548152906001019060200180831161204d57829003601f168201915b505095505050505050602060405180830381600087803b151561208c57600080fd5b6102c65a03f1151561209d57600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff16633cebb823336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b151561214357600080fd5b6102c65a03f1151561215457600080fd5b5050508073ffffffffffffffffffffffffffffffffffffffff167f086c875b377f900b07ce03575813022f05dd10ed7640b5282cf6d3c3fc352ade856040518082815260200191505060405180910390a28091505092915050565b6000600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561229457600080fd5b60008373ffffffffffffffffffffffffffffffffffffffff161415612330576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561232b57600080fd5b612562565b8291508173ffffffffffffffffffffffffffffffffffffffff166370a08231306000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15156123d657600080fd5b6102c65a03f115156123e757600080fd5b5050506040518051905090508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156124bf57600080fd5b6102c65a03f115156124d057600080fd5b50505060405180519050506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167ff931edb47c50b4b4104c187b5814a9aef5f709e17e2ecf9617e860cacade929c836040518082815260200191505060405180910390a35b505050565b600b60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156125e857600080fd5b80600b60006101000a81548160ff02191690831515021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561268557600080fd5b806002908051906020019061269b929190612de2565b5050565b6000806000831415612715578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3612a0b565b4360065410151561272557600080fd5b60008473ffffffffffffffffffffffffffffffffffffffff161415801561277857503073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614155b151561278357600080fd5b61278d8543611361565b915082821015151561279e57600080fd5b6127c86000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610c73565b156128f4576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634a3931498686866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15156128cd57600080fd5b6102c65a03f115156128de57600080fd5b5050506040518051905015156128f357600080fd5b5b61293e600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020848403612c3f565b6129488443611361565b9050808382011015151561295b57600080fd5b6129a5600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020848301612c3f565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a35b5050505050565b6000818310612a215781612a23565b825b905092915050565b600080600080600086805490501415612a475760009350612c36565b856001878054905003815481101515612a5c57fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1685101515612afa57856001878054905003815481101515612ab657fe5b906000526020600020900160000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff169350612c36565b856000815481101515612b0957fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16851015612b565760009350612c36565b60009250600186805490500391505b82821115612be8576002600184840101811515612b7e57fe5b049050848682815481101515612b9057fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16111515612bdc57809250612be3565b6001810391505b612b65565b8583815481101515612bf657fe5b906000526020600020900160000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1693505b50505092915050565b600080600084805490501480612ca5575043846001868054905003815481101515612c6657fe5b906000526020600020900160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16105b15612d525783848054809190600101612cbe9190612e62565b815481101515612cca57fe5b90600052602060002090019150438260000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550828260000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550612db0565b836001858054905003815481101515612d6757fe5b90600052602060002090019050828160000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b50505050565b815481835581811511612ddd57818360005260206000209182019101612ddc9190612e8e565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612e2357805160ff1916838001178555612e51565b82800160010185558215612e51579182015b82811115612e50578251825591602001919060010190612e35565b5b509050612e5e9190612e8e565b5090565b815481835581811511612e8957818360005260206000209182019101612e889190612eb3565b5b505050565b612eb091905b80821115612eac576000816000905550600101612e94565b5090565b90565b612f1591905b80821115612f1157600080820160006101000a8154906fffffffffffffffffffffffffffffffff02191690556000820160106101000a8154906fffffffffffffffffffffffffffffffff021916905550600101612eb9565b5090565b905600a165627a7a7230582071c94cb6446bbcb8c5d61a255875c2977e8f78aa5be11dcc32dba18ae8a0373a0029",
  "sourceMap": "816:20816:3:-;;;914:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3520:737;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;318:10:0;305;;:23;;;;;;;;;;;;;;;;;;3829:13:3;3791:12;;:52;;;;;;;;;;;;;;;;;;3910:12;3880:11;;:43;;;;;;;;;;;;;;;;;;3945:10;3933:9;:22;;;;;;;;;;;;:::i;:::-;;3987:20;3965:19;:42;;;;4036:17;4017:16;;:36;;;;;;;;;;;;;;;;;;4079:12;4063:13;:28;;;;4133:15;4101:14;;:48;;;;;;;;;;;;;;;;;;4187:1;4164:20;:24;4160:90;;;4202:48;4217:10;4229:20;4202:14;;;;;:48;;;:::i;:::-;;4160:90;3520:737;;;;;;;816:20816;;16011:602;16101:4;16117:19;16258:22;219:10:0;;;;;;;;;;;205:24;;:10;:24;;;197:33;;;;;;;;16139:26:3;:24;;;;;:26;;;:::i;:::-;16117:48;;16211:14;16200:7;16183:14;:24;:42;;16175:51;;;;;;;;16283:30;16306:6;16283:22;;;;;:30;;;:::i;:::-;16258:55;;16362:17;16351:7;16331:17;:27;:48;;16323:57;;;;;;;;16412:62;16429:18;16466:7;16449:14;:24;16412:16;;;;;:62;;;:::i;:::-;16484:63;16501:8;:16;16510:6;16501:16;;;;;;;;;;;;;;;16539:7;16519:17;:27;16484:16;;;;;:63;;;:::i;:::-;16569:6;16557:28;;16566:1;16557:28;16577:7;16557:28;;;;;;;;;;;;;;;;;;16602:4;16595:11;;16011:602;;;;;;:::o;11762:118::-;11823:4;11846:27;11860:12;11846:13;;;;;:27;;;:::i;:::-;11839:34;;11762:118;:::o;8332:147::-;8405:15;8439:33;8451:6;8459:12;8439:11;;;;;:33;;;:::i;:::-;8432:40;;8332:147;;;:::o;19007:587::-;19227:32;19452;19132:1;19110:11;:18;;;;:23;19109:99;;;;19195:12;19147:11;19180:1;19159:11;:18;;;;:22;19147:35;;;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;:60;;;19109:99;19105:483;;;19262:11;19275;:20;;;;;;;;;;;:::i;:::-;19262:35;;;;;;;;;;;;;;;;;;19227:70;;19348:12;19314:13;:23;;;:47;;;;;;;;;;;;;;;;;;19408:6;19378:13;:19;;;:37;;;;;;;;;;;;;;;;;;19105:483;;;19487:11;19518:1;19499:11;:18;;;;:20;19487:33;;;;;;;;;;;;;;;;;;19452:68;;19567:6;19537:13;:19;;;:37;;;;;;;;;;;;;;;;;;19105:483;19007:587;;;;:::o;13700:910::-;13766:4;14168:1;14139:18;:25;;;;:30;14138:96;;;;14221:12;14187:18;14206:1;14187:21;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;:46;;;14138:96;14134:470;;;14278:1;14262:11;;;;;;;;;;;14254:25;;;;14250:183;;;14306:11;;;;;;;;;;;:25;;;14332:38;14336:12;14350:19;;14332:3;;;;;:38;;;:::i;:::-;14306:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14299:72;;;;14250:183;14417:1;14410:8;;;;14134:470;14549:44;14560:18;14580:12;14549:10;;;;;:44;;;:::i;:::-;14542:51;;13700:910;;;;:::o;12536:938::-;12625:4;13001:1;12974:8;:16;12983:6;12974:16;;;;;;;;;;;;;;;:23;;;;:28;12973:92;;;;13052:12;13020:8;:16;13029:6;13020:16;;;;;;;;;;;;;;;13037:1;13020:19;;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;:44;;;12973:92;12969:499;;;13109:1;13093:11;;;;;;;;;;;13085:25;;;;13081:222;;;13137:11;;;;;;;;;;;:23;;;13161:6;13169:38;13173:12;13187:19;;13169:3;;;;;:38;;;:::i;:::-;13137:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13130:78;;;;13081:222;13287:1;13280:8;;;;12969:499;13415:42;13426:8;:16;13435:6;13426:16;;;;;;;;;;;;;;;13444:12;13415:10;;;;;:42;;;:::i;:::-;13408:49;;12536:938;;;;;:::o;20094:95::-;20146:4;20173:1;20169;:5;:13;;20181:1;20169:13;;;20177:1;20169:13;20162:20;;20094:95;;;;:::o;17969:798::-;18068:4;18437:8;18459;18534;18111:1;18089:11;:18;;;;:23;18085:50;;;18134:1;18127:8;;;;18085:50;18201:11;18232:1;18213:11;:18;;;;:20;18201:33;;;;;;;;;;;;;;;;;;:43;;;;;;;;;;;;18191:53;;:6;:53;;18187:117;;;18265:11;18296:1;18277:11;:18;;;;:20;18265:33;;;;;;;;;;;;;;;;;;:39;;;;;;;;;;;;18258:46;;;;;;18187:117;18328:11;18340:1;18328:14;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;18319:33;;:6;:33;18315:60;;;18374:1;18367:8;;;;18315:60;18448:1;18437:12;;18491:1;18470:11;:18;;;;:22;18459:33;;18502:220;18515:3;18509;:9;18502:220;;;18563:1;18558;18552:3;18546;:9;:13;18545:19;;;;;;;;18534:30;;18612:6;18582:11;18594:3;18582:16;;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;:36;;;;18578:134;;;18644:3;18638:9;;18578:134;;;18696:1;18692:3;:5;18686:11;;18578:134;18502:220;;;18738:11;18750:3;18738:16;;;;;;;;;;;;;;;;;;:22;;;;;;;;;;;;18731:29;;;;17969:798;;;;;;;;:::o;816:20816::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "816:20816:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20493:22;20504:10;;;;;;;;;;;20493;:22::i;:::-;20485:31;;;;;;;;20550:10;;;;;;;;;;;20534:40;;;20581:9;20592:10;20534:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20526:78;;;;;;;;816:20816;9511:829;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2085:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12114:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5550:706;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11762:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;456:116:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;975:23:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11942:120:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12536:938;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;914:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4556:191:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;8332:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8932:165;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1757:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16011:602;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1137:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13700:910;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5005:187;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1059:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2685:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1967:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11359:342;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16859:526;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8630:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15123:605;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10666:151;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20885:373;;;;;;;;;;;;;;;;;;;;;;;;;;;;2775:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17563:124;;;;;;;;;;;;;;;;;;;;;;;;;;;;242:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4304:102:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19781:238;19842:4;19858:9;19890:1;19881:5;:10;;;19877:41;;;19913:5;19906:12;;;;19877:41;19972:5;19960:11;19952:26;;20011:1;20004:4;:8;19997:15;;19781:238;;;;;:::o;9511:829::-;9579:12;9611:16;;;;;;;;;;;9603:25;;;;;;;;9962:1;9951:7;:12;9950:54;;;;10002:1;9969:7;:19;9977:10;9969:19;;;;;;;;;;;;;;;:29;9989:8;9969:29;;;;;;;;;;;;;;;;:34;9950:54;9942:63;;;;;;;;10088:22;10099:10;;;;;;;;;;;10088;:22::i;:::-;10084:130;;;10150:10;;;;;;;;;;;10134:37;;;10172:10;10184:8;10194:7;10134:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10126:77;;;;;;;;10084:130;10256:7;10224;:19;10232:10;10224:19;;;;;;;;;;;;;;;:29;10244:8;10224:29;;;;;;;;;;;;;;;:39;;;;10294:8;10273:39;;10282:10;10273:39;;;10304:7;10273:39;;;;;;;;;;;;;;;;;;10329:4;10322:11;;9511:829;;;;:::o;2085:25::-;;;;:::o;12114:134::-;12162:4;12214:27;:25;:27::i;:::-;12185:26;:24;:26::i;:::-;:56;12178:63;;12114:134;:::o;5550:706::-;5633:12;5952:10;;;;;;;;;;;5938:24;;:10;:24;;;;5934:254;;;5986:16;;;;;;;;;;;5978:25;;;;;;;;6118:7;6088;:14;6096:5;6088:14;;;;;;;;;;;;;;;:26;6103:10;6088:26;;;;;;;;;;;;;;;;:37;;6080:46;;;;;;;;6170:7;6140;:14;6148:5;6140:14;;;;;;;;;;;;;;;:26;6155:10;6140:26;;;;;;;;;;;;;;;;:37;;;;;;;;;;;5934:254;6197:31;6208:5;6215:3;6220:7;6197:10;:31::i;:::-;6245:4;6238:11;;5550:706;;;;;:::o;11762:118::-;11823:4;11846:27;11860:12;11846:13;:27::i;:::-;11839:34;;11762:118;:::o;456:116:0:-;219:10;;;;;;;;;;;205:24;;:10;:24;;;197:33;;;;;;;;551:14;538:10;;:27;;;;;;;;;;;;;;;;;;456:116;:::o;975:23:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;11942:120::-;12004:4;12027:14;;;;;;;;;;;:26;;;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12020:35;;11942:120;:::o;12536:938::-;12625:4;13001:1;12974:8;:16;12983:6;12974:16;;;;;;;;;;;;;;;:23;;;;:28;12973:92;;;;13052:12;13020:8;:16;13029:6;13020:16;;;;;;;;;;;;;;;13037:1;13020:19;;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;:44;;;12973:92;12969:499;;;13109:1;13093:11;;;;;;;;;;;13085:25;;;;13081:222;;;13137:11;;;;;;;;;;;:23;;;13161:6;13169:38;13173:12;13187:19;;13169:3;:38::i;:::-;13137:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13130:78;;;;13081:222;13287:1;13280:8;;;;12969:499;13415:42;13426:8;:16;13435:6;13426:16;;;;;;;;;;;;;;;13444:12;13415:10;:42::i;:::-;13408:49;;12536:938;;;;;:::o;914:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4556:191::-;219:10:0;;;;;;;;;;;205:24;;:10;:24;;;197:33;;;;;;;;4640:21:3;:42;;;;;;;;;;;:::i;:::-;;;;;;;;;;4667:14;;;;;;;;;;;4640:42;;;;;;;;;;;;;;;;;;;;;;;4724:15;4692:14;;:48;;;;;;;;;;;;;;;;;;4556:191;:::o;8332:147::-;8405:15;8439:33;8451:6;8459:12;8439:11;:33::i;:::-;8432:40;;8332:147;;;:::o;8932:165::-;8992:15;9059:31;9083:6;9059:23;:31::i;:::-;9026:30;9049:6;9026:22;:30::i;:::-;:64;9019:71;;8932:165;;;:::o;1757:34::-;;;;;;;;;;;;;:::o;16011:602::-;16101:4;16117:19;16258:22;219:10:0;;;;;;;;;;;205:24;;:10;:24;;;197:33;;;;;;;;16139:26:3;:24;:26::i;:::-;16117:48;;16211:14;16200:7;16183:14;:24;:42;;16175:51;;;;;;;;16283:30;16306:6;16283:22;:30::i;:::-;16258:55;;16362:17;16351:7;16331:17;:27;:48;;16323:57;;;;;;;;16412:62;16429:18;16466:7;16449:14;:24;16412:16;:62::i;:::-;16484:63;16501:8;:16;16510:6;16501:16;;;;;;;;;;;;;;;16539:7;16519:17;:27;16484:16;:63::i;:::-;16569:6;16557:28;;16566:1;16557:28;16577:7;16557:28;;;;;;;;;;;;;;;;;;16602:4;16595:11;;16011:602;;;;;;:::o;1137:45::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;13700:910::-;13766:4;14168:1;14139:18;:25;;;;:30;14138:96;;;;14221:12;14187:18;14206:1;14187:21;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;:46;;;14138:96;14134:470;;;14278:1;14262:11;;;;;;;;;;;14254:25;;;;14250:183;;;14306:11;;;;;;;;;;;:25;;;14332:38;14336:12;14350:19;;14332:3;:38::i;:::-;14306:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14299:72;;;;14250:183;14417:1;14410:8;;;;14134:470;14549:44;14560:18;14580:12;14549:10;:44::i;:::-;14542:51;;13700:910;;;;:::o;5005:187::-;5069:12;5101:16;;;;;;;;;;;5093:25;;;;;;;;5128:36;5139:10;5151:3;5156:7;5128:10;:36::i;:::-;5181:4;5174:11;;5005:187;;;;:::o;1059:36::-;;;;;;;;;;;;;:::o;2685:28::-;;;;;;;;;;;;;:::o;1967:31::-;;;;:::o;11359:342::-;11457:12;11489:26;11497:8;11507:7;11489;:26::i;:::-;11481:35;;;;;;;;11550:8;11527:48;;;11589:10;11613:7;11634:4;11652:10;11527:145;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11690:4:3;11683:11;;11359:342;;;;;:::o;16859:526::-;16948:4;16964:19;17066:24;219:10:0;;;;;;;;;;;205:24;;:10;:24;;;197:33;;;;;;;;16986:26:3;:24;:26::i;:::-;16964:48;;17048:7;17030:14;:25;;17022:34;;;;;;;;17093:30;17116:6;17093:22;:30::i;:::-;17066:57;;17164:7;17141:19;:30;;17133:39;;;;;;;;17182:62;17199:18;17236:7;17219:14;:24;17182:16;:62::i;:::-;17254:65;17271:8;:16;17280:6;17271:16;;;;;;;;;;;;;;;17311:7;17289:19;:29;17254:16;:65::i;:::-;17346:1;17338:6;17329:28;;;17349:7;17329:28;;;;;;;;;;;;;;;;;;17374:4;17367:11;;16859:526;;;;;;:::o;8630:147::-;8704:15;8738:14;;;;;;;;;;;:24;;;8763:6;8738:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8731:39;;8630:147;;;:::o;15123:605::-;15235:7;15333:26;15277:1;15259:14;:19;15255:67;;;15310:12;15293:29;;15255:67;15362:12;;;;;;;;;;;:29;;;15405:4;15423:14;15451:17;15482:9;15362:143;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15333:172;;15516:10;:27;;;15544:10;15516:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15657:10;15635:50;;;15670:14;15635:50;;;;;;;;;;;;;;;;;;15710:10;15695:26;;15123:605;;;;;:::o;10666:151::-;10749:17;10785:7;:15;10793:6;10785:15;;;;;;;;;;;;;;;:25;10801:8;10785:25;;;;;;;;;;;;;;;;10778:32;;10666:151;;;;:::o;20885:373::-;21061:21;21118:12;219:10:0;;;;;;;;;;;205:24;;:10;:24;;;197:33;;;;;;;;20968:3:3;20958:6;:13;;;20954:97;;;20987:10;;;;;;;;;;;:19;;:33;21007:4;:12;;;20987:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21034:7;;20954:97;21101:6;21061:47;;21133:5;:15;;;21149:4;21133:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21118:36;;21164:5;:14;;;21179:10;;;;;;;;;;;21191:7;21164:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21231:10;;;;;;;;;;;21209:42;;21223:6;21209:42;;;21243:7;21209:42;;;;;;;;;;;;;;;;;;232:1:0;20885:373:3;;;:::o;2775:42::-;;;;;;;;;;;;;:::o;17563:124::-;219:10:0;;;;;;;;;;;205:24;;:10;:24;;;197:33;;;;;;;;17663:17:3;17644:16;;:36;;;;;;;;;;;;;;;;;;17563:124;:::o;242:25:0:-;;;;;;;;;;;;;:::o;4304:102:3:-;219:10:0;;;;;;;;;;;205:24;;:10;:24;;;197:33;;;;;;;;4389:10:3;4377:9;:22;;;;;;;;;;;;:::i;:::-;;4304:102;:::o;6641:1539::-;7205:23;7835:21;6741:1;6730:7;:12;6726:158;;;6777:3;6761:29;;6770:5;6761:29;;;6782:7;6761:29;;;;;;;;;;;;;;;;;;6864:7;;6726:158;6927:12;6905:19;;:34;6897:43;;;;;;;;7042:1;7035:3;:8;;;;7034:36;;;;;7064:4;7049:20;;:3;:20;;;;7034:36;7026:45;;;;;;;;7231:32;7243:5;7250:12;7231:11;:32::i;:::-;7205:58;;7308:7;7285:19;:30;;7277:39;;;;;;;;7392:22;7403:10;;;;;;;;;;;7392;:22::i;:::-;7388:127;;;7457:10;;;;;;;;;;;7441:38;;;7480:5;7487:3;7492:7;7441:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7433:68;;;;;;;;7388:127;7642:64;7659:8;:15;7668:5;7659:15;;;;;;;;;;;;;;;7698:7;7676:19;:29;7642:16;:64::i;:::-;7859:30;7871:3;7876:12;7859:11;:30::i;:::-;7835:54;;7941:17;7930:7;7910:17;:27;:48;;7902:57;;;;;;;;7994:60;8011:8;:13;8020:3;8011:13;;;;;;;;;;;;;;;8046:7;8026:17;:27;7994:16;:60::i;:::-;8159:3;8143:29;;8152:5;8143:29;;;8164:7;8143:29;;;;;;;;;;;;;;;;;;6641:1539;;;;;;:::o;20094:95::-;20146:4;20173:1;20169;:5;:13;;20181:1;20169:13;;;20177:1;20169:13;20162:20;;20094:95;;;;:::o;17969:798::-;18068:4;18437:8;18459;18534;18111:1;18089:11;:18;;;;:23;18085:50;;;18134:1;18127:8;;;;18085:50;18201:11;18232:1;18213:11;:18;;;;:20;18201:33;;;;;;;;;;;;;;;;;;:43;;;;;;;;;;;;18191:53;;:6;:53;;18187:117;;;18265:11;18296:1;18277:11;:18;;;;:20;18265:33;;;;;;;;;;;;;;;;;;:39;;;;;;;;;;;;18258:46;;;;;;18187:117;18328:11;18340:1;18328:14;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;18319:33;;:6;:33;18315:60;;;18374:1;18367:8;;;;18315:60;18448:1;18437:12;;18491:1;18470:11;:18;;;;:22;18459:33;;18502:220;18515:3;18509;:9;18502:220;;;18563:1;18558;18552:3;18546;:9;:13;18545:19;;;;;;;;18534:30;;18612:6;18582:11;18594:3;18582:16;;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;:36;;;;18578:134;;;18644:3;18638:9;;18578:134;;;18696:1;18692:3;:5;18686:11;;18578:134;18502:220;;;18738:11;18750:3;18738:16;;;;;;;;;;;;;;;;;;:22;;;;;;;;;;;;18731:29;;;;17969:798;;;;;;;;:::o;19007:587::-;19227:32;19452;19132:1;19110:11;:18;;;;:23;19109:99;;;;19195:12;19147:11;19180:1;19159:11;:18;;;;:22;19147:35;;;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;:60;;;19109:99;19105:483;;;19262:11;19275;:20;;;;;;;;;;;:::i;:::-;19262:35;;;;;;;;;;;;;;;;;;19227:70;;19348:12;19314:13;:23;;;:47;;;;;;;;;;;;;;;;;;19408:6;19378:13;:19;;;:37;;;;;;;;;;;;;;;;;;19105:483;;;19487:11;19518:1;19499:11;:18;;;;:20;19487:33;;;;;;;;;;;;;;;;;;19452:68;;19567:6;19537:13;:19;;;:37;;;;;;;;;;;;;;;;;;19105:483;19007:587;;;;:::o;816:20816::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./Controlled.sol\";\nimport \"./TokenController.sol\";\nimport \"./DeveloperToken.sol\";\nimport \"./ExpositoProjectFactory.sol\";\nimport \"./EIP20Interface.sol\";\n\ncontract ApproveAndCallFallBack {\n    function receiveApproval(address from, uint256 _amount, address _token, bytes _data) public;   \n}\n\n/** \n *  Main contract based on MiniMeToken that represents an Exposito Project token distribution.  \n *  It contains standard ERC20 tokens, and \"coding shares\", which is the number of tokens allocated\n *  to developers for their code contributions, proportionnal to the number of lines of code each\n *  of them has written. Since code changes with time, the developer tokens are not transferable,\n *  but can be used for everything else like voting, management or to receive a dividend.\n */\ncontract ExpositoProject is Controlled, EIP20Interface {\n       \n\n    /** Contract version */\n    string public version = \"0.0.1\"; \n\n    /** Project ID */\n    string public projectId;\n\n    /** Developer token contract for coding shares */\n    DeveloperToken public developerToken;\n\n    /** Developer token history */\n    DeveloperToken[] public developerTokenHistory;\n\n\n    /** \n     * `Checkpoint` is the structure that attaches a block number to a\n     * given value, the block number attached is the one that last changed the value\n     */    \n    struct Checkpoint {\n\n        /** `fromBlock` is the block number that the value was generated from */\n        uint128 fromBlock;\n\n        /** `value` is the amount of tokens at a specific block number */\n        uint128 value;\n    }\n\n    /** \n     * `parentToken` is the Token address that was cloned to produce this token it will be 0x0 for \n     * a token that was not cloned\n     */\n    ExpositoProject public parentToken;\n\n    /** \n     *  `parentSnapShotBlock` is the block number from the Parent Token that was used to determine \n     *  the initial distribution of the Clone Token\n     */\n    uint public parentSnapShotBlock;\n\n    /** `creationBlock` is the block number that the Clone Token was created */\n    uint public creationBlock;\n\n    /**\n     * `balances` is the map that tracks the balance of each address, in this contract when the \n     * balance changes the block number that the change occurred is also included in the map \n     */\n    mapping (address => Checkpoint[]) balances;\n\n    /** `allowed` tracks any extra transfer rights as in all ERC20 tokens */\n    mapping (address => mapping (address => uint256)) allowed;\n\n    /** Tracks the history of the `totalSupply` of the token */\n    Checkpoint[] totalSupplyHistory;\n\n    /** Flag that determines if the token is transferable or not. */\n    bool public transfersEnabled;\n\n    /** The factory used to create new clone tokens */\n    ExpositoProjectFactory public tokenFactory;\n\n    /** \n     * @param _tokenFactory The address of the ExpositoProjectFactory contract that\n     * will create the Clone token contracts, the token factory needs to be deployed first\n     * @param _parentToken Address of the parent token, set to 0x0 if it is a new token\n     * @param _parentSnapShotBlock Block of the parent token that will determine the\n     * initial distribution of the clone token, set to 0 if it is a new token\n     * @param _projectId Exposito Project id\n     * @param _standardTokenSupply Amount of standard ERC20 tokens\n     * @param _developerToken DeveloperToken contract address\n     * @param _transfersEnabled If true, tokens will be able to be transferred\n     */\n    function ExpositoProject(\n        address _tokenFactory,\n        address _parentToken,\n        uint _parentSnapShotBlock,\n        string _projectId,\n        uint _standardTokenSupply,\n        address _developerToken,\n        bool _transfersEnabled\n    ) public {\n        tokenFactory = ExpositoProjectFactory(_tokenFactory);                           \n        parentToken = ExpositoProject(_parentToken);\n        projectId = _projectId;\n        parentSnapShotBlock = _parentSnapShotBlock;\n        transfersEnabled = _transfersEnabled;\n        creationBlock = block.number;\n        developerToken = DeveloperToken(_developerToken);\n\n        if (_standardTokenSupply > 0)\n            generateTokens(msg.sender, _standardTokenSupply);\n    }\n\n\n    /** Set a new id for the project */\n    function setProjectId(string _projectId) public onlyController {\n        projectId = _projectId;\n    }\n\n    /** \n     * Code changes with time. Therefore, the DeveloperToken is regenerated periodically\n     * to fit the code contributions.\n     */\n    function setDeveloperToken(address _developerToken) public onlyController {\n        developerTokenHistory.push(developerToken);\n        developerToken = DeveloperToken(_developerToken);\n    }\n\n\n    /** \n     *  @notice Send `_amount` tokens to `_to` from `msg.sender`\n     *  @param _to The address of the recipient\n     *  @param _amount The amount of tokens to be transferred\n     *  @return Whether the transfer was successful or not\n     */\n    function transfer(address _to, uint256 _amount) public returns (bool success) {\n        require(transfersEnabled);\n        doTransfer(msg.sender, _to, _amount);\n        return true;\n    }\n\n    /** \n     *  @notice Send `_amount` tokens to `_to` from `_from` on the condition it is approved by `_from`\n     *  @param _from The address holding the tokens being transferred\n     *  @param _to The address of the recipient\n     *  @param _amount The amount of tokens to be transferred\n     *  @return True if the transfer was successful\n     */\n    function transferFrom(address _from, address _to, uint256 _amount) public returns (bool success) {\n\n        // The controller of this contract can move tokens around at will,\n        //  this is important to recognize! Confirm that you trust the\n        //  controller of this contract, which in most situations should be\n        //  another open source smart contract or 0x0\n        if (msg.sender != controller) {\n            require(transfersEnabled);\n\n            // The standard ERC 20 transferFrom functionality\n            require(allowed[_from][msg.sender] >= _amount);\n            allowed[_from][msg.sender] -= _amount;\n        }\n        doTransfer(_from, _to, _amount);\n        return true;\n    }\n\n    /** \n     * This is the actual transfer function in the token contract, it can\n     *  only be called by other functions in this contract.\n     * @param _from The address holding the tokens being transferred\n     * @param _to The address of the recipient\n     * @param _amount The amount of tokens to be transferred\n     * @return True if the transfer was successful\n     */\n    function doTransfer(address _from, address _to, uint _amount) internal {\n\n           if (_amount == 0) {\n               Transfer(_from, _to, _amount);    // Follow the spec to louch the event when transfer 0\n               return;\n           }\n\n           require(parentSnapShotBlock < block.number);\n\n           // Do not allow transfer to 0x0 or the token contract itself\n           require((_to != 0) && (_to != address(this)));\n\n           // If the amount being transfered is more than the balance of the\n           //  account the transfer throws\n           var previousBalanceFrom = balanceOfAt(_from, block.number);\n\n           require(previousBalanceFrom >= _amount);\n\n           // Alerts the token controller of the transfer\n           if (isContract(controller)) {\n               require(TokenController(controller).onTransfer(_from, _to, _amount));\n           }\n\n           // First update the balance array with the new value for the address\n           //  sending the tokens\n           updateValueAtNow(balances[_from], previousBalanceFrom - _amount);\n\n           // Then update the balance array with the new value for the address\n           //  receiving the tokens\n           var previousBalanceTo = balanceOfAt(_to, block.number);\n           require(previousBalanceTo + _amount >= previousBalanceTo); // Check for overflow\n           updateValueAtNow(balances[_to], previousBalanceTo + _amount);\n\n           // An event to make the transfer easy to find on the blockchain\n           Transfer(_from, _to, _amount);\n\n    }\n\n\n    /**\n     *  @param _owner The address that's balance is being requested\n     *  @return The balance of `_owner` at the current block\n     */\n    function standardTokenBalanceOf(address _owner) public constant returns (uint256 balance) {\n        return balanceOfAt(_owner, block.number);\n    }\n\n    /**\n     *  @param _owner The address that's balance is being requested\n     *  @return The balance of `_owner` at the current block\n     */\n    function developerTokenBalanceOf(address _owner) public constant returns (uint256 balance) {\n        return developerToken.balanceOf(_owner);\n    }    \n\n    /**\n     *  @param _owner The address that's balance is being requested\n     *  @return The balance of `_owner` at the current block\n     */\n    function balanceOf(address _owner) public constant returns (uint256 balance) {\n        return standardTokenBalanceOf(_owner) + developerTokenBalanceOf(_owner);\n    }\n\n    /** \n     *  @notice `msg.sender` approves `_spender` to spend `_amount` tokens on\n     *  its behalf. This is a modified version of the ERC20 approve function\n     *  to be a little bit safer\n     *  @param _spender The address of the account able to transfer the tokens\n     *  @param _amount The amount of tokens to be approved for transfer\n     *  @return True if the approval was successful\n     */\n    function approve(address _spender, uint256 _amount) public returns (bool success) {\n        require(transfersEnabled);\n\n        // To change the approve amount you first have to reduce the addresses`\n        //  allowance to zero by calling `approve(_spender,0)` if it is not\n        //  already 0 to mitigate the race condition described here:\n        //  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n        require((_amount == 0) || (allowed[msg.sender][_spender] == 0));\n\n        // Alerts the token controller of the approve function call\n        if (isContract(controller)) {\n            require(TokenController(controller).onApprove(msg.sender, _spender, _amount));\n        }\n\n        allowed[msg.sender][_spender] = _amount;\n        Approval(msg.sender, _spender, _amount);\n        return true;\n    }\n\n    /**\n     *  @dev This function makes it easy to read the `allowed[]` map\n     *  @param _owner The address of the account that owns the token\n     *  @param _spender The address of the account able to transfer the tokens\n     *  @return Amount of remaining tokens of _owner that _spender is allowed to spend\n     */\n    function allowance(address _owner, address _spender\n    ) public constant returns (uint256 remaining) {\n        return allowed[_owner][_spender];\n    }\n\n    /**  \n     *   @notice `msg.sender` approves `_spender` to send `_amount` tokens on\n     *    its behalf, and then a function is triggered in the contract that is\n     *    being approved, `_spender`. This allows users to use their tokens to\n     *    interact with contracts in one function call instead of two\n     *   @param _spender The address of the contract able to transfer the tokens\n     *   @param _amount The amount of tokens to be approved for transfer\n     *   @return True if the function call was successful\n     */\n    function approveAndCall(address _spender, uint256 _amount, bytes _extraData\n    ) public returns (bool success) {\n        require(approve(_spender, _amount));\n\n        ApproveAndCallFallBack(_spender).receiveApproval(\n            msg.sender,\n            _amount,\n            this,\n            _extraData\n        );\n\n        return true;\n    }\n\n    /** Returns the total number of standard tokens */\n    function totalStandardTokenSupply() public constant returns (uint) {\n        return totalSupplyAt(block.number);\n    }\n\n    /** Returns the total number of developer tokens */\n    function totalDeveloperTokenSupply() public constant returns (uint) {\n        return developerToken.totalSupply();\n    }\n\n    /** Returns the total number of tokens */\n    function totalSupply() public constant returns (uint) {\n        return totalStandardTokenSupply() + totalDeveloperTokenSupply();\n    }\n\n\n    /** \n     * @dev Queries the balance of `_owner` at a specific `_blockNumber`\n     * @param _owner The address from which the balance will be retrieved\n     * @param _blockNumber The block number when the balance is queried\n     * @return The balance at `_blockNumber`\n     */\n    function balanceOfAt(address _owner, uint _blockNumber) public constant\n        returns (uint) {\n\n        // These next few lines are used when the balance of the token is\n        //  requested before a check point was ever created for this token, it\n        //  requires that the `parentToken.balanceOfAt` be queried at the\n        //  genesis block for that token as this contains initial balance of\n        //  this token\n        if ((balances[_owner].length == 0)\n            || (balances[_owner][0].fromBlock > _blockNumber)) {\n            if (address(parentToken) != 0) {\n                return parentToken.balanceOfAt(_owner, min(_blockNumber, parentSnapShotBlock));\n            } else {\n                // Has no parent\n                return 0;\n            }\n\n        // This will return the expected balance during normal situations\n        } else {\n            return getValueAt(balances[_owner], _blockNumber);\n        }\n    }\n\n    /**\n     * @notice Total amount of tokens at a specific `_blockNumber`.\n     * @param _blockNumber The block number when the totalSupply is queried\n     * @return The total amount of tokens at `_blockNumber`\n     */\n    function totalSupplyAt(uint _blockNumber) public constant returns(uint) {\n\n        // These next few lines are used when the totalSupply of the token is\n        //  requested before a check point was ever created for this token, it\n        //  requires that the `parentToken.totalSupplyAt` be queried at the\n        //  genesis block for this token as that contains totalSupply of this\n        //  token at this block number.\n        if ((totalSupplyHistory.length == 0)\n            || (totalSupplyHistory[0].fromBlock > _blockNumber)) {\n            if (address(parentToken) != 0) {\n                return parentToken.totalSupplyAt(min(_blockNumber, parentSnapShotBlock));\n            } else {\n                return 0;\n            }\n\n        // This will return the expected totalSupply during normal situations\n        } else {\n            return getValueAt(totalSupplyHistory, _blockNumber);\n        }\n    }\n\n\n    /**\n     *  @notice Creates a new clone token with the initial distribution being\n     *   this token at `_snapshotBlock`\n     *  @param _snapshotBlock Block when the distribution of the parent token is\n     *   copied to set the initial distribution of the new clone token;\n     *   if the block is zero than the actual block, the current block is used\n     *  @param _transfersEnabled True if transfers are allowed in the clone\n     *  @return The address of the new ExpositoProject Contract\n     */\n    function createCloneToken(\n        uint _snapshotBlock,\n        bool _transfersEnabled\n        ) public returns(address) {\n\n        if (_snapshotBlock == 0) \n            _snapshotBlock = block.number;\n\n        ExpositoProject cloneToken = tokenFactory.createCloneToken(\n            this,\n            _snapshotBlock,\n            _transfersEnabled,\n            projectId\n            );\n\n        cloneToken.changeController(msg.sender);\n\n        // An event to make the token easy to find on the blockchain\n        NewCloneToken(address(cloneToken), _snapshotBlock);\n        return address(cloneToken);\n    }\n\n\n    /** \n     *  @notice Generates `_amount` tokens that are assigned to `_owner`\n     *  @param _owner The address that will be assigned the new tokens\n     *  @param _amount The quantity of tokens generated\n     *  @return True if the tokens are generated correctly\n     */\n    function generateTokens(address _owner, uint _amount\n    ) public onlyController returns (bool) {\n        uint curTotalSupply = totalStandardTokenSupply();\n        require(curTotalSupply + _amount >= curTotalSupply); // Check for overflow\n        uint previousBalanceTo = standardTokenBalanceOf(_owner);\n        require(previousBalanceTo + _amount >= previousBalanceTo); // Check for overflow\n        updateValueAtNow(totalSupplyHistory, curTotalSupply + _amount);\n        updateValueAtNow(balances[_owner], previousBalanceTo + _amount);\n        Transfer(0, _owner, _amount);\n        return true;\n    }\n\n\n    /**\n     *  @notice Burns `_amount` tokens from `_owner`\n     *  @param _owner The address that will lose the tokens\n     *  @param _amount The quantity of tokens to burn\n     *  @return True if the tokens are burned correctly\n     */\n    function destroyTokens(address _owner, uint _amount\n    ) onlyController public returns (bool) {\n        uint curTotalSupply = totalStandardTokenSupply();\n        require(curTotalSupply >= _amount);\n        uint previousBalanceFrom = standardTokenBalanceOf(_owner);\n        require(previousBalanceFrom >= _amount);\n        updateValueAtNow(totalSupplyHistory, curTotalSupply - _amount);\n        updateValueAtNow(balances[_owner], previousBalanceFrom - _amount);\n        Transfer(_owner, 0, _amount);\n        return true;\n    }\n\n\n\n    /**\n     *  @notice Enables token holders to transfer their tokens freely if true\n     *  @param _transfersEnabled True if transfers are allowed in the clone\n     */\n    function enableTransfers(bool _transfersEnabled) public onlyController {\n        transfersEnabled = _transfersEnabled;\n    }\n\n\n    /**\n     *  @dev `getValueAt` retrieves the number of tokens at a given block number\n     *  @param checkpoints The history of values being queried\n     *  @param _block The block number to retrieve the value at\n     *  @return The number of tokens being queried\n     */\n    function getValueAt(Checkpoint[] storage checkpoints, uint _block\n    ) constant internal returns (uint) {\n\n        if (checkpoints.length == 0) \n            return 0;\n\n        // Shortcut for the actual value\n        if (_block >= checkpoints[checkpoints.length-1].fromBlock)\n            return checkpoints[checkpoints.length-1].value;\n\n        if (_block < checkpoints[0].fromBlock) \n            return 0;\n\n        // Binary search of the value in the array\n        uint min = 0;\n        uint max = checkpoints.length - 1;\n        while (max > min) {\n            uint mid = (max + min + 1) / 2;\n            if (checkpoints[mid].fromBlock <= _block) {\n                min = mid;\n            } else {\n                max = mid-1;\n            }\n        }\n        return checkpoints[min].value;\n    }\n\n    /**  \n     *   @dev `updateValueAtNow` used to update the `balances` map and the\n     *    `totalSupplyHistory`\n     *   @param checkpoints The history of data being updated\n     *   @param _value The new number of tokens\n     */\n    function updateValueAtNow(Checkpoint[] storage checkpoints, uint _value\n    ) internal  {\n        if ((checkpoints.length == 0)\n        || (checkpoints[checkpoints.length - 1].fromBlock < block.number)) {\n               Checkpoint storage newCheckPoint = checkpoints[ checkpoints.length++ ];\n               newCheckPoint.fromBlock = uint128(block.number);\n               newCheckPoint.value = uint128(_value);\n           } else {\n               Checkpoint storage oldCheckPoint = checkpoints[checkpoints.length-1];\n               oldCheckPoint.value = uint128(_value);\n           }\n    }\n\n    /**\n     *  @dev Internal function to determine if an address is a contract\n     *  @param _addr The address being queried\n     *  @return True if `_addr` is a contract\n     */\n    function isContract(address _addr) constant internal returns(bool) {\n        uint size;\n        if (_addr == 0) \n            return false;\n\n        assembly {\n            size := extcodesize(_addr)\n        }\n        return size > 0;\n    }\n\n    /** @dev Helper function to return a min betwen the two uints */\n    function min(uint a, uint b) pure internal returns (uint) {\n        return a < b ? a : b;\n    }\n\n    /**  \n     * @notice The fallback function: If the contract's controller has not been\n     *  set to 0, then the `proxyPayment` method is called which relays the\n     *  ether and creates tokens as described in the token controller contract\n     */\n    function () public payable {\n        require(isContract(controller));\n        require(TokenController(controller).proxyPayment.value(msg.value)(msg.sender));\n    }\n\n\n    /**\n     *  @notice This method can be used by the controller to extract mistakenly\n     *  sent tokens to this contract.\n     *  @param _token The address of the token contract that you want to recover\n     *  set to 0 in case you want to extract ether.\n     */\n    function claimTokens(address _token) public onlyController {\n        if (_token == 0x0) {\n            controller.transfer(this.balance);\n            return;\n        }\n\n        ExpositoProject token = ExpositoProject(_token);\n        uint balance = token.balanceOf(this);\n        token.transfer(controller, balance);\n        ClaimedTokens(_token, controller, balance);\n    }\n\n\n    event ClaimedTokens(address indexed _token, address indexed _controller, uint _amount);\n    event Transfer(address indexed _from, address indexed _to, uint256 _amount);\n    event NewCloneToken(address indexed _cloneToken, uint _snapshotBlock);\n    event Approval(\n        address indexed _owner,\n        address indexed _spender,\n        uint256 _amount\n        );\n\n}\n\n",
  "sourcePath": "/home/mathew/workspace/Exposito/api-server/contracts/ExpositoProject.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/home/mathew/workspace/Exposito/api-server/contracts/ExpositoProject.sol",
      "exportedSymbols": {
        "ApproveAndCallFallBack": [
          216
        ],
        "ExpositoProject": [
          1320
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 199,
        "name": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "attributes": {
          "SourceUnit": 37,
          "absolutePath": "/home/mathew/workspace/Exposito/api-server/contracts/Controlled.sol",
          "file": "./Controlled.sol",
          "scope": 1321,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 200,
        "name": "ImportDirective",
        "src": "26:26:3"
      },
      {
        "attributes": {
          "SourceUnit": 1400,
          "absolutePath": "/home/mathew/workspace/Exposito/api-server/contracts/TokenController.sol",
          "file": "./TokenController.sol",
          "scope": 1321,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 201,
        "name": "ImportDirective",
        "src": "53:31:3"
      },
      {
        "attributes": {
          "SourceUnit": 129,
          "absolutePath": "/home/mathew/workspace/Exposito/api-server/contracts/DeveloperToken.sol",
          "file": "./DeveloperToken.sol",
          "scope": 1321,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 202,
        "name": "ImportDirective",
        "src": "85:30:3"
      },
      {
        "attributes": {
          "SourceUnit": 1361,
          "absolutePath": "/home/mathew/workspace/Exposito/api-server/contracts/ExpositoProjectFactory.sol",
          "file": "./ExpositoProjectFactory.sol",
          "scope": 1321,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 203,
        "name": "ImportDirective",
        "src": "116:38:3"
      },
      {
        "attributes": {
          "SourceUnit": 198,
          "absolutePath": "/home/mathew/workspace/Exposito/api-server/contracts/EIP20Interface.sol",
          "file": "./EIP20Interface.sol",
          "scope": 1321,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 204,
        "name": "ImportDirective",
        "src": "155:30:3"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            216
          ],
          "name": "ApproveAndCallFallBack",
          "scope": 1321
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "receiveApproval",
              "payable": false,
              "scope": 216,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "from",
                      "scope": 215,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 205,
                        "name": "ElementaryTypeName",
                        "src": "250:7:3"
                      }
                    ],
                    "id": 206,
                    "name": "VariableDeclaration",
                    "src": "250:12:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 215,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 207,
                        "name": "ElementaryTypeName",
                        "src": "264:7:3"
                      }
                    ],
                    "id": 208,
                    "name": "VariableDeclaration",
                    "src": "264:15:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_token",
                      "scope": 215,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 209,
                        "name": "ElementaryTypeName",
                        "src": "281:7:3"
                      }
                    ],
                    "id": 210,
                    "name": "VariableDeclaration",
                    "src": "281:14:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 215,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 211,
                        "name": "ElementaryTypeName",
                        "src": "297:5:3"
                      }
                    ],
                    "id": 212,
                    "name": "VariableDeclaration",
                    "src": "297:11:3"
                  }
                ],
                "id": 213,
                "name": "ParameterList",
                "src": "249:60:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 214,
                "name": "ParameterList",
                "src": "316:0:3"
              }
            ],
            "id": 215,
            "name": "FunctionDefinition",
            "src": "225:92:3"
          }
        ],
        "id": 216,
        "name": "ContractDefinition",
        "src": "187:135:3"
      },
      {
        "attributes": {
          "contractDependencies": [
            36,
            197
          ],
          "contractKind": "contract",
          "documentation": " Main contract based on MiniMeToken that represents an Exposito Project token distribution.  \n It contains standard ERC20 tokens, and \"coding shares\", which is the number of tokens allocated\n to developers for their code contributions, proportionnal to the number of lines of code each\n of them has written. Since code changes with time, the developer tokens are not transferable,\n but can be used for everything else like voting, management or to receive a dividend.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1320,
            197,
            36
          ],
          "name": "ExpositoProject",
          "scope": 1321
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Controlled",
                  "referencedDeclaration": 36,
                  "type": "contract Controlled"
                },
                "id": 217,
                "name": "UserDefinedTypeName",
                "src": "844:10:3"
              }
            ],
            "id": 218,
            "name": "InheritanceSpecifier",
            "src": "844:10:3"
          },
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "EIP20Interface",
                  "referencedDeclaration": 197,
                  "type": "contract EIP20Interface"
                },
                "id": 219,
                "name": "UserDefinedTypeName",
                "src": "856:14:3"
              }
            ],
            "id": 220,
            "name": "InheritanceSpecifier",
            "src": "856:14:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "version",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 221,
                "name": "ElementaryTypeName",
                "src": "914:6:3"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "302e302e31",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"0.0.1\"",
                  "value": "0.0.1"
                },
                "id": 222,
                "name": "Literal",
                "src": "938:7:3"
              }
            ],
            "id": 223,
            "name": "VariableDeclaration",
            "src": "914:31:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "projectId",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 224,
                "name": "ElementaryTypeName",
                "src": "975:6:3"
              }
            ],
            "id": 225,
            "name": "VariableDeclaration",
            "src": "975:23:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "developerToken",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DeveloperToken",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DeveloperToken",
                  "referencedDeclaration": 128,
                  "type": "contract DeveloperToken"
                },
                "id": 226,
                "name": "UserDefinedTypeName",
                "src": "1059:14:3"
              }
            ],
            "id": 227,
            "name": "VariableDeclaration",
            "src": "1059:36:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "developerTokenHistory",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DeveloperToken[] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "contract DeveloperToken[] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "DeveloperToken",
                      "referencedDeclaration": 128,
                      "type": "contract DeveloperToken"
                    },
                    "id": 228,
                    "name": "UserDefinedTypeName",
                    "src": "1137:14:3"
                  }
                ],
                "id": 229,
                "name": "ArrayTypeName",
                "src": "1137:16:3"
              }
            ],
            "id": 230,
            "name": "VariableDeclaration",
            "src": "1137:45:3"
          },
          {
            "attributes": {
              "canonicalName": "ExpositoProject.Checkpoint",
              "name": "Checkpoint",
              "scope": 1320,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "fromBlock",
                  "scope": 235,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint128",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint128",
                      "type": "uint128"
                    },
                    "id": 231,
                    "name": "ElementaryTypeName",
                    "src": "1477:7:3"
                  }
                ],
                "id": 232,
                "name": "VariableDeclaration",
                "src": "1477:17:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "value",
                  "scope": 235,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint128",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint128",
                      "type": "uint128"
                    },
                    "id": 233,
                    "name": "ElementaryTypeName",
                    "src": "1579:7:3"
                  }
                ],
                "id": 234,
                "name": "VariableDeclaration",
                "src": "1579:13:3"
              }
            ],
            "id": 235,
            "name": "StructDefinition",
            "src": "1367:232:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "parentToken",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract ExpositoProject",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ExpositoProject",
                  "referencedDeclaration": 1320,
                  "type": "contract ExpositoProject"
                },
                "id": 236,
                "name": "UserDefinedTypeName",
                "src": "1757:15:3"
              }
            ],
            "id": 237,
            "name": "VariableDeclaration",
            "src": "1757:34:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "parentSnapShotBlock",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 238,
                "name": "ElementaryTypeName",
                "src": "1967:4:3"
              }
            ],
            "id": 239,
            "name": "VariableDeclaration",
            "src": "1967:31:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "creationBlock",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 240,
                "name": "ElementaryTypeName",
                "src": "2085:4:3"
              }
            ],
            "id": 241,
            "name": "VariableDeclaration",
            "src": "2085:25:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 242,
                    "name": "ElementaryTypeName",
                    "src": "2333:7:3"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Checkpoint",
                          "referencedDeclaration": 235,
                          "type": "struct ExpositoProject.Checkpoint storage pointer"
                        },
                        "id": 243,
                        "name": "UserDefinedTypeName",
                        "src": "2344:10:3"
                      }
                    ],
                    "id": 244,
                    "name": "ArrayTypeName",
                    "src": "2344:12:3"
                  }
                ],
                "id": 245,
                "name": "Mapping",
                "src": "2324:33:3"
              }
            ],
            "id": 246,
            "name": "VariableDeclaration",
            "src": "2324:42:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "allowed",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => uint256))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => uint256))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 247,
                    "name": "ElementaryTypeName",
                    "src": "2459:7:3"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 248,
                        "name": "ElementaryTypeName",
                        "src": "2479:7:3"
                      },
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 249,
                        "name": "ElementaryTypeName",
                        "src": "2490:7:3"
                      }
                    ],
                    "id": 250,
                    "name": "Mapping",
                    "src": "2470:28:3"
                  }
                ],
                "id": 251,
                "name": "Mapping",
                "src": "2450:49:3"
              }
            ],
            "id": 252,
            "name": "VariableDeclaration",
            "src": "2450:57:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "totalSupplyHistory",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Checkpoint",
                      "referencedDeclaration": 235,
                      "type": "struct ExpositoProject.Checkpoint storage pointer"
                    },
                    "id": 253,
                    "name": "UserDefinedTypeName",
                    "src": "2578:10:3"
                  }
                ],
                "id": 254,
                "name": "ArrayTypeName",
                "src": "2578:12:3"
              }
            ],
            "id": 255,
            "name": "VariableDeclaration",
            "src": "2578:31:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "transfersEnabled",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bool",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bool",
                  "type": "bool"
                },
                "id": 256,
                "name": "ElementaryTypeName",
                "src": "2685:4:3"
              }
            ],
            "id": 257,
            "name": "VariableDeclaration",
            "src": "2685:28:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenFactory",
              "scope": 1320,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract ExpositoProjectFactory",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ExpositoProjectFactory",
                  "referencedDeclaration": 1360,
                  "type": "contract ExpositoProjectFactory"
                },
                "id": 258,
                "name": "UserDefinedTypeName",
                "src": "2775:22:3"
              }
            ],
            "id": 259,
            "name": "VariableDeclaration",
            "src": "2775:42:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "ExpositoProject",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenFactory",
                      "scope": 322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 260,
                        "name": "ElementaryTypeName",
                        "src": "3554:7:3"
                      }
                    ],
                    "id": 261,
                    "name": "VariableDeclaration",
                    "src": "3554:21:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_parentToken",
                      "scope": 322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 262,
                        "name": "ElementaryTypeName",
                        "src": "3585:7:3"
                      }
                    ],
                    "id": 263,
                    "name": "VariableDeclaration",
                    "src": "3585:20:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_parentSnapShotBlock",
                      "scope": 322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 264,
                        "name": "ElementaryTypeName",
                        "src": "3615:4:3"
                      }
                    ],
                    "id": 265,
                    "name": "VariableDeclaration",
                    "src": "3615:25:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_projectId",
                      "scope": 322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 266,
                        "name": "ElementaryTypeName",
                        "src": "3650:6:3"
                      }
                    ],
                    "id": 267,
                    "name": "VariableDeclaration",
                    "src": "3650:17:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_standardTokenSupply",
                      "scope": 322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 268,
                        "name": "ElementaryTypeName",
                        "src": "3677:4:3"
                      }
                    ],
                    "id": 269,
                    "name": "VariableDeclaration",
                    "src": "3677:25:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_developerToken",
                      "scope": 322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 270,
                        "name": "ElementaryTypeName",
                        "src": "3712:7:3"
                      }
                    ],
                    "id": 271,
                    "name": "VariableDeclaration",
                    "src": "3712:23:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_transfersEnabled",
                      "scope": 322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 272,
                        "name": "ElementaryTypeName",
                        "src": "3745:4:3"
                      }
                    ],
                    "id": 273,
                    "name": "VariableDeclaration",
                    "src": "3745:22:3"
                  }
                ],
                "id": 274,
                "name": "ParameterList",
                "src": "3544:229:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 275,
                "name": "ParameterList",
                "src": "3781:0:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract ExpositoProjectFactory"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 259,
                              "type": "contract ExpositoProjectFactory",
                              "value": "tokenFactory"
                            },
                            "id": 276,
                            "name": "Identifier",
                            "src": "3791:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract ExpositoProjectFactory",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1360,
                                  "type": "type(contract ExpositoProjectFactory)",
                                  "value": "ExpositoProjectFactory"
                                },
                                "id": 277,
                                "name": "Identifier",
                                "src": "3806:22:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 261,
                                  "type": "address",
                                  "value": "_tokenFactory"
                                },
                                "id": 278,
                                "name": "Identifier",
                                "src": "3829:13:3"
                              }
                            ],
                            "id": 279,
                            "name": "FunctionCall",
                            "src": "3806:37:3"
                          }
                        ],
                        "id": 280,
                        "name": "Assignment",
                        "src": "3791:52:3"
                      }
                    ],
                    "id": 281,
                    "name": "ExpressionStatement",
                    "src": "3791:52:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract ExpositoProject"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 237,
                              "type": "contract ExpositoProject",
                              "value": "parentToken"
                            },
                            "id": 282,
                            "name": "Identifier",
                            "src": "3880:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract ExpositoProject",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1320,
                                  "type": "type(contract ExpositoProject)",
                                  "value": "ExpositoProject"
                                },
                                "id": 283,
                                "name": "Identifier",
                                "src": "3894:15:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 263,
                                  "type": "address",
                                  "value": "_parentToken"
                                },
                                "id": 284,
                                "name": "Identifier",
                                "src": "3910:12:3"
                              }
                            ],
                            "id": 285,
                            "name": "FunctionCall",
                            "src": "3894:29:3"
                          }
                        ],
                        "id": 286,
                        "name": "Assignment",
                        "src": "3880:43:3"
                      }
                    ],
                    "id": 287,
                    "name": "ExpressionStatement",
                    "src": "3880:43:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 225,
                              "type": "string storage ref",
                              "value": "projectId"
                            },
                            "id": 288,
                            "name": "Identifier",
                            "src": "3933:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 267,
                              "type": "string memory",
                              "value": "_projectId"
                            },
                            "id": 289,
                            "name": "Identifier",
                            "src": "3945:10:3"
                          }
                        ],
                        "id": 290,
                        "name": "Assignment",
                        "src": "3933:22:3"
                      }
                    ],
                    "id": 291,
                    "name": "ExpressionStatement",
                    "src": "3933:22:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 239,
                              "type": "uint256",
                              "value": "parentSnapShotBlock"
                            },
                            "id": 292,
                            "name": "Identifier",
                            "src": "3965:19:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 265,
                              "type": "uint256",
                              "value": "_parentSnapShotBlock"
                            },
                            "id": 293,
                            "name": "Identifier",
                            "src": "3987:20:3"
                          }
                        ],
                        "id": 294,
                        "name": "Assignment",
                        "src": "3965:42:3"
                      }
                    ],
                    "id": 295,
                    "name": "ExpressionStatement",
                    "src": "3965:42:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 257,
                              "type": "bool",
                              "value": "transfersEnabled"
                            },
                            "id": 296,
                            "name": "Identifier",
                            "src": "4017:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 273,
                              "type": "bool",
                              "value": "_transfersEnabled"
                            },
                            "id": 297,
                            "name": "Identifier",
                            "src": "4036:17:3"
                          }
                        ],
                        "id": 298,
                        "name": "Assignment",
                        "src": "4017:36:3"
                      }
                    ],
                    "id": 299,
                    "name": "ExpressionStatement",
                    "src": "4017:36:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 241,
                              "type": "uint256",
                              "value": "creationBlock"
                            },
                            "id": 300,
                            "name": "Identifier",
                            "src": "4063:13:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "number",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1403,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 301,
                                "name": "Identifier",
                                "src": "4079:5:3"
                              }
                            ],
                            "id": 302,
                            "name": "MemberAccess",
                            "src": "4079:12:3"
                          }
                        ],
                        "id": 303,
                        "name": "Assignment",
                        "src": "4063:28:3"
                      }
                    ],
                    "id": 304,
                    "name": "ExpressionStatement",
                    "src": "4063:28:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract DeveloperToken"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 227,
                              "type": "contract DeveloperToken",
                              "value": "developerToken"
                            },
                            "id": 305,
                            "name": "Identifier",
                            "src": "4101:14:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract DeveloperToken",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 128,
                                  "type": "type(contract DeveloperToken)",
                                  "value": "DeveloperToken"
                                },
                                "id": 306,
                                "name": "Identifier",
                                "src": "4118:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 271,
                                  "type": "address",
                                  "value": "_developerToken"
                                },
                                "id": 307,
                                "name": "Identifier",
                                "src": "4133:15:3"
                              }
                            ],
                            "id": 308,
                            "name": "FunctionCall",
                            "src": "4118:31:3"
                          }
                        ],
                        "id": 309,
                        "name": "Assignment",
                        "src": "4101:48:3"
                      }
                    ],
                    "id": 310,
                    "name": "ExpressionStatement",
                    "src": "4101:48:3"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 269,
                              "type": "uint256",
                              "value": "_standardTokenSupply"
                            },
                            "id": 311,
                            "name": "Identifier",
                            "src": "4164:20:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 312,
                            "name": "Literal",
                            "src": "4187:1:3"
                          }
                        ],
                        "id": 313,
                        "name": "BinaryOperation",
                        "src": "4164:24:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 941,
                                  "type": "function (address,uint256) returns (bool)",
                                  "value": "generateTokens"
                                },
                                "id": 314,
                                "name": "Identifier",
                                "src": "4202:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1411,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 315,
                                    "name": "Identifier",
                                    "src": "4217:3:3"
                                  }
                                ],
                                "id": 316,
                                "name": "MemberAccess",
                                "src": "4217:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 269,
                                  "type": "uint256",
                                  "value": "_standardTokenSupply"
                                },
                                "id": 317,
                                "name": "Identifier",
                                "src": "4229:20:3"
                              }
                            ],
                            "id": 318,
                            "name": "FunctionCall",
                            "src": "4202:48:3"
                          }
                        ],
                        "id": 319,
                        "name": "ExpressionStatement",
                        "src": "4202:48:3"
                      }
                    ],
                    "id": 320,
                    "name": "IfStatement",
                    "src": "4160:90:3"
                  }
                ],
                "id": 321,
                "name": "Block",
                "src": "3781:476:3"
              }
            ],
            "id": 322,
            "name": "FunctionDefinition",
            "src": "3520:737:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setProjectId",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_projectId",
                      "scope": 334,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 323,
                        "name": "ElementaryTypeName",
                        "src": "4326:6:3"
                      }
                    ],
                    "id": 324,
                    "name": "VariableDeclaration",
                    "src": "4326:17:3"
                  }
                ],
                "id": 325,
                "name": "ParameterList",
                "src": "4325:19:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 328,
                "name": "ParameterList",
                "src": "4367:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 12,
                      "type": "modifier ()",
                      "value": "onlyController"
                    },
                    "id": 326,
                    "name": "Identifier",
                    "src": "4352:14:3"
                  }
                ],
                "id": 327,
                "name": "ModifierInvocation",
                "src": "4352:14:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 225,
                              "type": "string storage ref",
                              "value": "projectId"
                            },
                            "id": 329,
                            "name": "Identifier",
                            "src": "4377:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 324,
                              "type": "string memory",
                              "value": "_projectId"
                            },
                            "id": 330,
                            "name": "Identifier",
                            "src": "4389:10:3"
                          }
                        ],
                        "id": 331,
                        "name": "Assignment",
                        "src": "4377:22:3"
                      }
                    ],
                    "id": 332,
                    "name": "ExpressionStatement",
                    "src": "4377:22:3"
                  }
                ],
                "id": 333,
                "name": "Block",
                "src": "4367:39:3"
              }
            ],
            "id": 334,
            "name": "FunctionDefinition",
            "src": "4304:102:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setDeveloperToken",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_developerToken",
                      "scope": 354,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 335,
                        "name": "ElementaryTypeName",
                        "src": "4583:7:3"
                      }
                    ],
                    "id": 336,
                    "name": "VariableDeclaration",
                    "src": "4583:23:3"
                  }
                ],
                "id": 337,
                "name": "ParameterList",
                "src": "4582:25:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 340,
                "name": "ParameterList",
                "src": "4630:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 12,
                      "type": "modifier ()",
                      "value": "onlyController"
                    },
                    "id": 338,
                    "name": "Identifier",
                    "src": "4615:14:3"
                  }
                ],
                "id": 339,
                "name": "ModifierInvocation",
                "src": "4615:14:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_DeveloperToken_$128",
                                  "typeString": "contract DeveloperToken"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (contract DeveloperToken) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 230,
                                  "type": "contract DeveloperToken[] storage ref",
                                  "value": "developerTokenHistory"
                                },
                                "id": 341,
                                "name": "Identifier",
                                "src": "4640:21:3"
                              }
                            ],
                            "id": 343,
                            "name": "MemberAccess",
                            "src": "4640:26:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 227,
                              "type": "contract DeveloperToken",
                              "value": "developerToken"
                            },
                            "id": 344,
                            "name": "Identifier",
                            "src": "4667:14:3"
                          }
                        ],
                        "id": 345,
                        "name": "FunctionCall",
                        "src": "4640:42:3"
                      }
                    ],
                    "id": 346,
                    "name": "ExpressionStatement",
                    "src": "4640:42:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract DeveloperToken"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 227,
                              "type": "contract DeveloperToken",
                              "value": "developerToken"
                            },
                            "id": 347,
                            "name": "Identifier",
                            "src": "4692:14:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract DeveloperToken",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 128,
                                  "type": "type(contract DeveloperToken)",
                                  "value": "DeveloperToken"
                                },
                                "id": 348,
                                "name": "Identifier",
                                "src": "4709:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 336,
                                  "type": "address",
                                  "value": "_developerToken"
                                },
                                "id": 349,
                                "name": "Identifier",
                                "src": "4724:15:3"
                              }
                            ],
                            "id": 350,
                            "name": "FunctionCall",
                            "src": "4709:31:3"
                          }
                        ],
                        "id": 351,
                        "name": "Assignment",
                        "src": "4692:48:3"
                      }
                    ],
                    "id": 352,
                    "name": "ExpressionStatement",
                    "src": "4692:48:3"
                  }
                ],
                "id": 353,
                "name": "Block",
                "src": "4630:117:3"
              }
            ],
            "id": 354,
            "name": "FunctionDefinition",
            "src": "4556:191:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": 151,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 377,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 355,
                        "name": "ElementaryTypeName",
                        "src": "5023:7:3"
                      }
                    ],
                    "id": 356,
                    "name": "VariableDeclaration",
                    "src": "5023:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 377,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 357,
                        "name": "ElementaryTypeName",
                        "src": "5036:7:3"
                      }
                    ],
                    "id": 358,
                    "name": "VariableDeclaration",
                    "src": "5036:15:3"
                  }
                ],
                "id": 359,
                "name": "ParameterList",
                "src": "5022:30:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 377,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 360,
                        "name": "ElementaryTypeName",
                        "src": "5069:4:3"
                      }
                    ],
                    "id": 361,
                    "name": "VariableDeclaration",
                    "src": "5069:12:3"
                  }
                ],
                "id": 362,
                "name": "ParameterList",
                "src": "5068:14:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 363,
                            "name": "Identifier",
                            "src": "5093:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 257,
                              "type": "bool",
                              "value": "transfersEnabled"
                            },
                            "id": 364,
                            "name": "Identifier",
                            "src": "5101:16:3"
                          }
                        ],
                        "id": 365,
                        "name": "FunctionCall",
                        "src": "5093:25:3"
                      }
                    ],
                    "id": 366,
                    "name": "ExpressionStatement",
                    "src": "5093:25:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 538,
                              "type": "function (address,address,uint256)",
                              "value": "doTransfer"
                            },
                            "id": 367,
                            "name": "Identifier",
                            "src": "5128:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1411,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 368,
                                "name": "Identifier",
                                "src": "5139:3:3"
                              }
                            ],
                            "id": 369,
                            "name": "MemberAccess",
                            "src": "5139:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 356,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 370,
                            "name": "Identifier",
                            "src": "5151:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 358,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 371,
                            "name": "Identifier",
                            "src": "5156:7:3"
                          }
                        ],
                        "id": 372,
                        "name": "FunctionCall",
                        "src": "5128:36:3"
                      }
                    ],
                    "id": 373,
                    "name": "ExpressionStatement",
                    "src": "5128:36:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 362
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 374,
                        "name": "Literal",
                        "src": "5181:4:3"
                      }
                    ],
                    "id": 375,
                    "name": "Return",
                    "src": "5174:11:3"
                  }
                ],
                "id": 376,
                "name": "Block",
                "src": "5083:109:3"
              }
            ],
            "id": 377,
            "name": "FunctionDefinition",
            "src": "5005:187:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": 162,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 427,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 378,
                        "name": "ElementaryTypeName",
                        "src": "5572:7:3"
                      }
                    ],
                    "id": 379,
                    "name": "VariableDeclaration",
                    "src": "5572:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 427,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 380,
                        "name": "ElementaryTypeName",
                        "src": "5587:7:3"
                      }
                    ],
                    "id": 381,
                    "name": "VariableDeclaration",
                    "src": "5587:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 427,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 382,
                        "name": "ElementaryTypeName",
                        "src": "5600:7:3"
                      }
                    ],
                    "id": 383,
                    "name": "VariableDeclaration",
                    "src": "5600:15:3"
                  }
                ],
                "id": 384,
                "name": "ParameterList",
                "src": "5571:45:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 427,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 385,
                        "name": "ElementaryTypeName",
                        "src": "5633:4:3"
                      }
                    ],
                    "id": 386,
                    "name": "VariableDeclaration",
                    "src": "5633:12:3"
                  }
                ],
                "id": 387,
                "name": "ParameterList",
                "src": "5632:14:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1411,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 388,
                                "name": "Identifier",
                                "src": "5938:3:3"
                              }
                            ],
                            "id": 389,
                            "name": "MemberAccess",
                            "src": "5938:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14,
                              "type": "address",
                              "value": "controller"
                            },
                            "id": 390,
                            "name": "Identifier",
                            "src": "5952:10:3"
                          }
                        ],
                        "id": 391,
                        "name": "BinaryOperation",
                        "src": "5938:24:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1414,
                                      "type": "function (bool) pure",
                                      "value": "require"
                                    },
                                    "id": 392,
                                    "name": "Identifier",
                                    "src": "5978:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 257,
                                      "type": "bool",
                                      "value": "transfersEnabled"
                                    },
                                    "id": 393,
                                    "name": "Identifier",
                                    "src": "5986:16:3"
                                  }
                                ],
                                "id": 394,
                                "name": "FunctionCall",
                                "src": "5978:25:3"
                              }
                            ],
                            "id": 395,
                            "name": "ExpressionStatement",
                            "src": "5978:25:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1414,
                                      "type": "function (bool) pure",
                                      "value": "require"
                                    },
                                    "id": 396,
                                    "name": "Identifier",
                                    "src": "6080:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": ">=",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(address => uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 252,
                                                  "type": "mapping(address => mapping(address => uint256))",
                                                  "value": "allowed"
                                                },
                                                "id": 397,
                                                "name": "Identifier",
                                                "src": "6088:7:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 379,
                                                  "type": "address",
                                                  "value": "_from"
                                                },
                                                "id": 398,
                                                "name": "Identifier",
                                                "src": "6096:5:3"
                                              }
                                            ],
                                            "id": 399,
                                            "name": "IndexAccess",
                                            "src": "6088:14:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "sender",
                                              "referencedDeclaration": null,
                                              "type": "address"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1411,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 400,
                                                "name": "Identifier",
                                                "src": "6103:3:3"
                                              }
                                            ],
                                            "id": 401,
                                            "name": "MemberAccess",
                                            "src": "6103:10:3"
                                          }
                                        ],
                                        "id": 402,
                                        "name": "IndexAccess",
                                        "src": "6088:26:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 383,
                                          "type": "uint256",
                                          "value": "_amount"
                                        },
                                        "id": 403,
                                        "name": "Identifier",
                                        "src": "6118:7:3"
                                      }
                                    ],
                                    "id": 404,
                                    "name": "BinaryOperation",
                                    "src": "6088:37:3"
                                  }
                                ],
                                "id": 405,
                                "name": "FunctionCall",
                                "src": "6080:46:3"
                              }
                            ],
                            "id": 406,
                            "name": "ExpressionStatement",
                            "src": "6080:46:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "-=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 252,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 407,
                                            "name": "Identifier",
                                            "src": "6140:7:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 379,
                                              "type": "address",
                                              "value": "_from"
                                            },
                                            "id": 408,
                                            "name": "Identifier",
                                            "src": "6148:5:3"
                                          }
                                        ],
                                        "id": 411,
                                        "name": "IndexAccess",
                                        "src": "6140:14:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sender",
                                          "referencedDeclaration": null,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1411,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 409,
                                            "name": "Identifier",
                                            "src": "6155:3:3"
                                          }
                                        ],
                                        "id": 410,
                                        "name": "MemberAccess",
                                        "src": "6155:10:3"
                                      }
                                    ],
                                    "id": 412,
                                    "name": "IndexAccess",
                                    "src": "6140:26:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 383,
                                      "type": "uint256",
                                      "value": "_amount"
                                    },
                                    "id": 413,
                                    "name": "Identifier",
                                    "src": "6170:7:3"
                                  }
                                ],
                                "id": 414,
                                "name": "Assignment",
                                "src": "6140:37:3"
                              }
                            ],
                            "id": 415,
                            "name": "ExpressionStatement",
                            "src": "6140:37:3"
                          }
                        ],
                        "id": 416,
                        "name": "Block",
                        "src": "5964:224:3"
                      }
                    ],
                    "id": 417,
                    "name": "IfStatement",
                    "src": "5934:254:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 538,
                              "type": "function (address,address,uint256)",
                              "value": "doTransfer"
                            },
                            "id": 418,
                            "name": "Identifier",
                            "src": "6197:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 379,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 419,
                            "name": "Identifier",
                            "src": "6208:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 381,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 420,
                            "name": "Identifier",
                            "src": "6215:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 383,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 421,
                            "name": "Identifier",
                            "src": "6220:7:3"
                          }
                        ],
                        "id": 422,
                        "name": "FunctionCall",
                        "src": "6197:31:3"
                      }
                    ],
                    "id": 423,
                    "name": "ExpressionStatement",
                    "src": "6197:31:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 387
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 424,
                        "name": "Literal",
                        "src": "6245:4:3"
                      }
                    ],
                    "id": 425,
                    "name": "Return",
                    "src": "6238:11:3"
                  }
                ],
                "id": 426,
                "name": "Block",
                "src": "5647:609:3"
              }
            ],
            "id": 427,
            "name": "FunctionDefinition",
            "src": "5550:706:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "doTransfer",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 538,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 428,
                        "name": "ElementaryTypeName",
                        "src": "6661:7:3"
                      }
                    ],
                    "id": 429,
                    "name": "VariableDeclaration",
                    "src": "6661:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 538,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 430,
                        "name": "ElementaryTypeName",
                        "src": "6676:7:3"
                      }
                    ],
                    "id": 431,
                    "name": "VariableDeclaration",
                    "src": "6676:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 538,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 432,
                        "name": "ElementaryTypeName",
                        "src": "6689:4:3"
                      }
                    ],
                    "id": 433,
                    "name": "VariableDeclaration",
                    "src": "6689:12:3"
                  }
                ],
                "id": 434,
                "name": "ParameterList",
                "src": "6660:42:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 435,
                "name": "ParameterList",
                "src": "6712:0:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 433,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 436,
                            "name": "Identifier",
                            "src": "6730:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 437,
                            "name": "Literal",
                            "src": "6741:1:3"
                          }
                        ],
                        "id": 438,
                        "name": "BinaryOperation",
                        "src": "6730:12:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        1305
                                      ],
                                      "referencedDeclaration": 1305,
                                      "type": "function (address,address,uint256)",
                                      "value": "Transfer"
                                    },
                                    "id": 439,
                                    "name": "Identifier",
                                    "src": "6761:8:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 429,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 440,
                                    "name": "Identifier",
                                    "src": "6770:5:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 431,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 441,
                                    "name": "Identifier",
                                    "src": "6777:3:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 433,
                                      "type": "uint256",
                                      "value": "_amount"
                                    },
                                    "id": 442,
                                    "name": "Identifier",
                                    "src": "6782:7:3"
                                  }
                                ],
                                "id": 443,
                                "name": "FunctionCall",
                                "src": "6761:29:3"
                              }
                            ],
                            "id": 444,
                            "name": "ExpressionStatement",
                            "src": "6761:29:3"
                          },
                          {
                            "attributes": {
                              "expression": null,
                              "functionReturnParameters": 435
                            },
                            "id": 445,
                            "name": "Return",
                            "src": "6864:7:3"
                          }
                        ],
                        "id": 446,
                        "name": "Block",
                        "src": "6744:140:3"
                      }
                    ],
                    "id": 447,
                    "name": "IfStatement",
                    "src": "6726:158:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 448,
                            "name": "Identifier",
                            "src": "6897:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 239,
                                  "type": "uint256",
                                  "value": "parentSnapShotBlock"
                                },
                                "id": 449,
                                "name": "Identifier",
                                "src": "6905:19:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "number",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1403,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 450,
                                    "name": "Identifier",
                                    "src": "6927:5:3"
                                  }
                                ],
                                "id": 451,
                                "name": "MemberAccess",
                                "src": "6927:12:3"
                              }
                            ],
                            "id": 452,
                            "name": "BinaryOperation",
                            "src": "6905:34:3"
                          }
                        ],
                        "id": 453,
                        "name": "FunctionCall",
                        "src": "6897:43:3"
                      }
                    ],
                    "id": 454,
                    "name": "ExpressionStatement",
                    "src": "6897:43:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 455,
                            "name": "Identifier",
                            "src": "7026:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "&&",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "!=",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 431,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 456,
                                        "name": "Identifier",
                                        "src": "7035:3:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 457,
                                        "name": "Literal",
                                        "src": "7042:1:3"
                                      }
                                    ],
                                    "id": 458,
                                    "name": "BinaryOperation",
                                    "src": "7035:8:3"
                                  }
                                ],
                                "id": 459,
                                "name": "TupleExpression",
                                "src": "7034:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "!=",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 431,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 460,
                                        "name": "Identifier",
                                        "src": "7049:3:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "address",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_contract$_ExpositoProject_$1320",
                                                  "typeString": "contract ExpositoProject"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(address)",
                                              "value": "address"
                                            },
                                            "id": 461,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "7056:7:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1434,
                                              "type": "contract ExpositoProject",
                                              "value": "this"
                                            },
                                            "id": 462,
                                            "name": "Identifier",
                                            "src": "7064:4:3"
                                          }
                                        ],
                                        "id": 463,
                                        "name": "FunctionCall",
                                        "src": "7056:13:3"
                                      }
                                    ],
                                    "id": 464,
                                    "name": "BinaryOperation",
                                    "src": "7049:20:3"
                                  }
                                ],
                                "id": 465,
                                "name": "TupleExpression",
                                "src": "7048:22:3"
                              }
                            ],
                            "id": 466,
                            "name": "BinaryOperation",
                            "src": "7034:36:3"
                          }
                        ],
                        "id": 467,
                        "name": "FunctionCall",
                        "src": "7026:45:3"
                      }
                    ],
                    "id": 468,
                    "name": "ExpressionStatement",
                    "src": "7026:45:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        469
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "previousBalanceFrom",
                          "scope": 538,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "typeName": null,
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [],
                        "id": 469,
                        "name": "VariableDeclaration",
                        "src": "7205:23:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 784,
                              "type": "function (address,uint256) view returns (uint256)",
                              "value": "balanceOfAt"
                            },
                            "id": 470,
                            "name": "Identifier",
                            "src": "7231:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 429,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 471,
                            "name": "Identifier",
                            "src": "7243:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "number",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1403,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 472,
                                "name": "Identifier",
                                "src": "7250:5:3"
                              }
                            ],
                            "id": 473,
                            "name": "MemberAccess",
                            "src": "7250:12:3"
                          }
                        ],
                        "id": 474,
                        "name": "FunctionCall",
                        "src": "7231:32:3"
                      }
                    ],
                    "id": 475,
                    "name": "VariableDeclarationStatement",
                    "src": "7205:58:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 476,
                            "name": "Identifier",
                            "src": "7277:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 469,
                                  "type": "uint256",
                                  "value": "previousBalanceFrom"
                                },
                                "id": 477,
                                "name": "Identifier",
                                "src": "7285:19:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 433,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 478,
                                "name": "Identifier",
                                "src": "7308:7:3"
                              }
                            ],
                            "id": 479,
                            "name": "BinaryOperation",
                            "src": "7285:30:3"
                          }
                        ],
                        "id": 480,
                        "name": "FunctionCall",
                        "src": "7277:39:3"
                      }
                    ],
                    "id": 481,
                    "name": "ExpressionStatement",
                    "src": "7277:39:3"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1201,
                              "type": "function (address) view returns (bool)",
                              "value": "isContract"
                            },
                            "id": 482,
                            "name": "Identifier",
                            "src": "7392:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14,
                              "type": "address",
                              "value": "controller"
                            },
                            "id": 483,
                            "name": "Identifier",
                            "src": "7403:10:3"
                          }
                        ],
                        "id": 484,
                        "name": "FunctionCall",
                        "src": "7392:22:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1414,
                                      "type": "function (bool) pure",
                                      "value": "require"
                                    },
                                    "id": 485,
                                    "name": "Identifier",
                                    "src": "7433:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "bool",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "onTransfer",
                                          "referencedDeclaration": 1387,
                                          "type": "function (address,address,uint256) external returns (bool)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "contract TokenController",
                                              "type_conversion": true
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1399,
                                                  "type": "type(contract TokenController)",
                                                  "value": "TokenController"
                                                },
                                                "id": 486,
                                                "name": "Identifier",
                                                "src": "7441:15:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 14,
                                                  "type": "address",
                                                  "value": "controller"
                                                },
                                                "id": 487,
                                                "name": "Identifier",
                                                "src": "7457:10:3"
                                              }
                                            ],
                                            "id": 488,
                                            "name": "FunctionCall",
                                            "src": "7441:27:3"
                                          }
                                        ],
                                        "id": 489,
                                        "name": "MemberAccess",
                                        "src": "7441:38:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 429,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 490,
                                        "name": "Identifier",
                                        "src": "7480:5:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 431,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 491,
                                        "name": "Identifier",
                                        "src": "7487:3:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 433,
                                          "type": "uint256",
                                          "value": "_amount"
                                        },
                                        "id": 492,
                                        "name": "Identifier",
                                        "src": "7492:7:3"
                                      }
                                    ],
                                    "id": 493,
                                    "name": "FunctionCall",
                                    "src": "7441:59:3"
                                  }
                                ],
                                "id": 494,
                                "name": "FunctionCall",
                                "src": "7433:68:3"
                              }
                            ],
                            "id": 495,
                            "name": "ExpressionStatement",
                            "src": "7433:68:3"
                          }
                        ],
                        "id": 496,
                        "name": "Block",
                        "src": "7416:99:3"
                      }
                    ],
                    "id": 497,
                    "name": "IfStatement",
                    "src": "7388:127:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_struct$_Checkpoint_$235_storage_$dyn_storage",
                                  "typeString": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1179,
                              "type": "function (struct ExpositoProject.Checkpoint storage ref[] storage pointer,uint256)",
                              "value": "updateValueAtNow"
                            },
                            "id": 498,
                            "name": "Identifier",
                            "src": "7642:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 246,
                                  "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)",
                                  "value": "balances"
                                },
                                "id": 499,
                                "name": "Identifier",
                                "src": "7659:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 429,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 500,
                                "name": "Identifier",
                                "src": "7668:5:3"
                              }
                            ],
                            "id": 501,
                            "name": "IndexAccess",
                            "src": "7659:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "-",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 469,
                                  "type": "uint256",
                                  "value": "previousBalanceFrom"
                                },
                                "id": 502,
                                "name": "Identifier",
                                "src": "7676:19:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 433,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 503,
                                "name": "Identifier",
                                "src": "7698:7:3"
                              }
                            ],
                            "id": 504,
                            "name": "BinaryOperation",
                            "src": "7676:29:3"
                          }
                        ],
                        "id": 505,
                        "name": "FunctionCall",
                        "src": "7642:64:3"
                      }
                    ],
                    "id": 506,
                    "name": "ExpressionStatement",
                    "src": "7642:64:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        507
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "previousBalanceTo",
                          "scope": 538,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "typeName": null,
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [],
                        "id": 507,
                        "name": "VariableDeclaration",
                        "src": "7835:21:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 784,
                              "type": "function (address,uint256) view returns (uint256)",
                              "value": "balanceOfAt"
                            },
                            "id": 508,
                            "name": "Identifier",
                            "src": "7859:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 431,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 509,
                            "name": "Identifier",
                            "src": "7871:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "number",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1403,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 510,
                                "name": "Identifier",
                                "src": "7876:5:3"
                              }
                            ],
                            "id": 511,
                            "name": "MemberAccess",
                            "src": "7876:12:3"
                          }
                        ],
                        "id": 512,
                        "name": "FunctionCall",
                        "src": "7859:30:3"
                      }
                    ],
                    "id": 513,
                    "name": "VariableDeclarationStatement",
                    "src": "7835:54:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 514,
                            "name": "Identifier",
                            "src": "7902:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 507,
                                      "type": "uint256",
                                      "value": "previousBalanceTo"
                                    },
                                    "id": 515,
                                    "name": "Identifier",
                                    "src": "7910:17:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 433,
                                      "type": "uint256",
                                      "value": "_amount"
                                    },
                                    "id": 516,
                                    "name": "Identifier",
                                    "src": "7930:7:3"
                                  }
                                ],
                                "id": 517,
                                "name": "BinaryOperation",
                                "src": "7910:27:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 507,
                                  "type": "uint256",
                                  "value": "previousBalanceTo"
                                },
                                "id": 518,
                                "name": "Identifier",
                                "src": "7941:17:3"
                              }
                            ],
                            "id": 519,
                            "name": "BinaryOperation",
                            "src": "7910:48:3"
                          }
                        ],
                        "id": 520,
                        "name": "FunctionCall",
                        "src": "7902:57:3"
                      }
                    ],
                    "id": 521,
                    "name": "ExpressionStatement",
                    "src": "7902:57:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_struct$_Checkpoint_$235_storage_$dyn_storage",
                                  "typeString": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1179,
                              "type": "function (struct ExpositoProject.Checkpoint storage ref[] storage pointer,uint256)",
                              "value": "updateValueAtNow"
                            },
                            "id": 522,
                            "name": "Identifier",
                            "src": "7994:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 246,
                                  "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)",
                                  "value": "balances"
                                },
                                "id": 523,
                                "name": "Identifier",
                                "src": "8011:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 431,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 524,
                                "name": "Identifier",
                                "src": "8020:3:3"
                              }
                            ],
                            "id": 525,
                            "name": "IndexAccess",
                            "src": "8011:13:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "+",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 507,
                                  "type": "uint256",
                                  "value": "previousBalanceTo"
                                },
                                "id": 526,
                                "name": "Identifier",
                                "src": "8026:17:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 433,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 527,
                                "name": "Identifier",
                                "src": "8046:7:3"
                              }
                            ],
                            "id": 528,
                            "name": "BinaryOperation",
                            "src": "8026:27:3"
                          }
                        ],
                        "id": 529,
                        "name": "FunctionCall",
                        "src": "7994:60:3"
                      }
                    ],
                    "id": 530,
                    "name": "ExpressionStatement",
                    "src": "7994:60:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                1305
                              ],
                              "referencedDeclaration": 1305,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 531,
                            "name": "Identifier",
                            "src": "8143:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 429,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 532,
                            "name": "Identifier",
                            "src": "8152:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 431,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 533,
                            "name": "Identifier",
                            "src": "8159:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 433,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 534,
                            "name": "Identifier",
                            "src": "8164:7:3"
                          }
                        ],
                        "id": 535,
                        "name": "FunctionCall",
                        "src": "8143:29:3"
                      }
                    ],
                    "id": 536,
                    "name": "ExpressionStatement",
                    "src": "8143:29:3"
                  }
                ],
                "id": 537,
                "name": "Block",
                "src": "6712:1468:3"
              }
            ],
            "id": 538,
            "name": "FunctionDefinition",
            "src": "6641:1539:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "standardTokenBalanceOf",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 552,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 539,
                        "name": "ElementaryTypeName",
                        "src": "8364:7:3"
                      }
                    ],
                    "id": 540,
                    "name": "VariableDeclaration",
                    "src": "8364:14:3"
                  }
                ],
                "id": 541,
                "name": "ParameterList",
                "src": "8363:16:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 552,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 542,
                        "name": "ElementaryTypeName",
                        "src": "8405:7:3"
                      }
                    ],
                    "id": 543,
                    "name": "VariableDeclaration",
                    "src": "8405:15:3"
                  }
                ],
                "id": 544,
                "name": "ParameterList",
                "src": "8404:17:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 544
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 784,
                              "type": "function (address,uint256) view returns (uint256)",
                              "value": "balanceOfAt"
                            },
                            "id": 545,
                            "name": "Identifier",
                            "src": "8439:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 540,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 546,
                            "name": "Identifier",
                            "src": "8451:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "number",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1403,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 547,
                                "name": "Identifier",
                                "src": "8459:5:3"
                              }
                            ],
                            "id": 548,
                            "name": "MemberAccess",
                            "src": "8459:12:3"
                          }
                        ],
                        "id": 549,
                        "name": "FunctionCall",
                        "src": "8439:33:3"
                      }
                    ],
                    "id": 550,
                    "name": "Return",
                    "src": "8432:40:3"
                  }
                ],
                "id": 551,
                "name": "Block",
                "src": "8422:57:3"
              }
            ],
            "id": 552,
            "name": "FunctionDefinition",
            "src": "8332:147:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "developerTokenBalanceOf",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 565,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 553,
                        "name": "ElementaryTypeName",
                        "src": "8663:7:3"
                      }
                    ],
                    "id": 554,
                    "name": "VariableDeclaration",
                    "src": "8663:14:3"
                  }
                ],
                "id": 555,
                "name": "ParameterList",
                "src": "8662:16:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 565,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 556,
                        "name": "ElementaryTypeName",
                        "src": "8704:7:3"
                      }
                    ],
                    "id": 557,
                    "name": "VariableDeclaration",
                    "src": "8704:15:3"
                  }
                ],
                "id": 558,
                "name": "ParameterList",
                "src": "8703:17:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 558
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "balanceOf",
                              "referencedDeclaration": 127,
                              "type": "function (address) view external returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 227,
                                  "type": "contract DeveloperToken",
                                  "value": "developerToken"
                                },
                                "id": 559,
                                "name": "Identifier",
                                "src": "8738:14:3"
                              }
                            ],
                            "id": 560,
                            "name": "MemberAccess",
                            "src": "8738:24:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 554,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 561,
                            "name": "Identifier",
                            "src": "8763:6:3"
                          }
                        ],
                        "id": 562,
                        "name": "FunctionCall",
                        "src": "8738:32:3"
                      }
                    ],
                    "id": 563,
                    "name": "Return",
                    "src": "8731:39:3"
                  }
                ],
                "id": 564,
                "name": "Block",
                "src": "8721:56:3"
              }
            ],
            "id": 565,
            "name": "FunctionDefinition",
            "src": "8630:147:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": 142,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 581,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 566,
                        "name": "ElementaryTypeName",
                        "src": "8951:7:3"
                      }
                    ],
                    "id": 567,
                    "name": "VariableDeclaration",
                    "src": "8951:14:3"
                  }
                ],
                "id": 568,
                "name": "ParameterList",
                "src": "8950:16:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 581,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 569,
                        "name": "ElementaryTypeName",
                        "src": "8992:7:3"
                      }
                    ],
                    "id": 570,
                    "name": "VariableDeclaration",
                    "src": "8992:15:3"
                  }
                ],
                "id": 571,
                "name": "ParameterList",
                "src": "8991:17:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 571
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 552,
                                  "type": "function (address) view returns (uint256)",
                                  "value": "standardTokenBalanceOf"
                                },
                                "id": 572,
                                "name": "Identifier",
                                "src": "9026:22:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 567,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 573,
                                "name": "Identifier",
                                "src": "9049:6:3"
                              }
                            ],
                            "id": 574,
                            "name": "FunctionCall",
                            "src": "9026:30:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 565,
                                  "type": "function (address) view returns (uint256)",
                                  "value": "developerTokenBalanceOf"
                                },
                                "id": 575,
                                "name": "Identifier",
                                "src": "9059:23:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 567,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 576,
                                "name": "Identifier",
                                "src": "9083:6:3"
                              }
                            ],
                            "id": 577,
                            "name": "FunctionCall",
                            "src": "9059:31:3"
                          }
                        ],
                        "id": 578,
                        "name": "BinaryOperation",
                        "src": "9026:64:3"
                      }
                    ],
                    "id": 579,
                    "name": "Return",
                    "src": "9019:71:3"
                  }
                ],
                "id": 580,
                "name": "Block",
                "src": "9009:88:3"
              }
            ],
            "id": 581,
            "name": "FunctionDefinition",
            "src": "8932:165:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": 171,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 647,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 582,
                        "name": "ElementaryTypeName",
                        "src": "9528:7:3"
                      }
                    ],
                    "id": 583,
                    "name": "VariableDeclaration",
                    "src": "9528:16:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 647,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 584,
                        "name": "ElementaryTypeName",
                        "src": "9546:7:3"
                      }
                    ],
                    "id": 585,
                    "name": "VariableDeclaration",
                    "src": "9546:15:3"
                  }
                ],
                "id": 586,
                "name": "ParameterList",
                "src": "9527:35:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 647,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 587,
                        "name": "ElementaryTypeName",
                        "src": "9579:4:3"
                      }
                    ],
                    "id": 588,
                    "name": "VariableDeclaration",
                    "src": "9579:12:3"
                  }
                ],
                "id": 589,
                "name": "ParameterList",
                "src": "9578:14:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 590,
                            "name": "Identifier",
                            "src": "9603:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 257,
                              "type": "bool",
                              "value": "transfersEnabled"
                            },
                            "id": 591,
                            "name": "Identifier",
                            "src": "9611:16:3"
                          }
                        ],
                        "id": 592,
                        "name": "FunctionCall",
                        "src": "9603:25:3"
                      }
                    ],
                    "id": 593,
                    "name": "ExpressionStatement",
                    "src": "9603:25:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 594,
                            "name": "Identifier",
                            "src": "9942:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "||",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 585,
                                          "type": "uint256",
                                          "value": "_amount"
                                        },
                                        "id": 595,
                                        "name": "Identifier",
                                        "src": "9951:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 596,
                                        "name": "Literal",
                                        "src": "9962:1:3"
                                      }
                                    ],
                                    "id": 597,
                                    "name": "BinaryOperation",
                                    "src": "9951:12:3"
                                  }
                                ],
                                "id": 598,
                                "name": "TupleExpression",
                                "src": "9950:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(address => uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 252,
                                                  "type": "mapping(address => mapping(address => uint256))",
                                                  "value": "allowed"
                                                },
                                                "id": 599,
                                                "name": "Identifier",
                                                "src": "9969:7:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "sender",
                                                  "referencedDeclaration": null,
                                                  "type": "address"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1411,
                                                      "type": "msg",
                                                      "value": "msg"
                                                    },
                                                    "id": 600,
                                                    "name": "Identifier",
                                                    "src": "9977:3:3"
                                                  }
                                                ],
                                                "id": 601,
                                                "name": "MemberAccess",
                                                "src": "9977:10:3"
                                              }
                                            ],
                                            "id": 602,
                                            "name": "IndexAccess",
                                            "src": "9969:19:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 583,
                                              "type": "address",
                                              "value": "_spender"
                                            },
                                            "id": 603,
                                            "name": "Identifier",
                                            "src": "9989:8:3"
                                          }
                                        ],
                                        "id": 604,
                                        "name": "IndexAccess",
                                        "src": "9969:29:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 605,
                                        "name": "Literal",
                                        "src": "10002:1:3"
                                      }
                                    ],
                                    "id": 606,
                                    "name": "BinaryOperation",
                                    "src": "9969:34:3"
                                  }
                                ],
                                "id": 607,
                                "name": "TupleExpression",
                                "src": "9968:36:3"
                              }
                            ],
                            "id": 608,
                            "name": "BinaryOperation",
                            "src": "9950:54:3"
                          }
                        ],
                        "id": 609,
                        "name": "FunctionCall",
                        "src": "9942:63:3"
                      }
                    ],
                    "id": 610,
                    "name": "ExpressionStatement",
                    "src": "9942:63:3"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1201,
                              "type": "function (address) view returns (bool)",
                              "value": "isContract"
                            },
                            "id": 611,
                            "name": "Identifier",
                            "src": "10088:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14,
                              "type": "address",
                              "value": "controller"
                            },
                            "id": 612,
                            "name": "Identifier",
                            "src": "10099:10:3"
                          }
                        ],
                        "id": 613,
                        "name": "FunctionCall",
                        "src": "10088:22:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1414,
                                      "type": "function (bool) pure",
                                      "value": "require"
                                    },
                                    "id": 614,
                                    "name": "Identifier",
                                    "src": "10126:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "bool",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "onApprove",
                                          "referencedDeclaration": 1398,
                                          "type": "function (address,address,uint256) external returns (bool)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "contract TokenController",
                                              "type_conversion": true
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1399,
                                                  "type": "type(contract TokenController)",
                                                  "value": "TokenController"
                                                },
                                                "id": 615,
                                                "name": "Identifier",
                                                "src": "10134:15:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 14,
                                                  "type": "address",
                                                  "value": "controller"
                                                },
                                                "id": 616,
                                                "name": "Identifier",
                                                "src": "10150:10:3"
                                              }
                                            ],
                                            "id": 617,
                                            "name": "FunctionCall",
                                            "src": "10134:27:3"
                                          }
                                        ],
                                        "id": 618,
                                        "name": "MemberAccess",
                                        "src": "10134:37:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sender",
                                          "referencedDeclaration": null,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1411,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 619,
                                            "name": "Identifier",
                                            "src": "10172:3:3"
                                          }
                                        ],
                                        "id": 620,
                                        "name": "MemberAccess",
                                        "src": "10172:10:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 583,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 621,
                                        "name": "Identifier",
                                        "src": "10184:8:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 585,
                                          "type": "uint256",
                                          "value": "_amount"
                                        },
                                        "id": 622,
                                        "name": "Identifier",
                                        "src": "10194:7:3"
                                      }
                                    ],
                                    "id": 623,
                                    "name": "FunctionCall",
                                    "src": "10134:68:3"
                                  }
                                ],
                                "id": 624,
                                "name": "FunctionCall",
                                "src": "10126:77:3"
                              }
                            ],
                            "id": 625,
                            "name": "ExpressionStatement",
                            "src": "10126:77:3"
                          }
                        ],
                        "id": 626,
                        "name": "Block",
                        "src": "10112:102:3"
                      }
                    ],
                    "id": 627,
                    "name": "IfStatement",
                    "src": "10084:130:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 252,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 628,
                                    "name": "Identifier",
                                    "src": "10224:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1411,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 629,
                                        "name": "Identifier",
                                        "src": "10232:3:3"
                                      }
                                    ],
                                    "id": 630,
                                    "name": "MemberAccess",
                                    "src": "10232:10:3"
                                  }
                                ],
                                "id": 632,
                                "name": "IndexAccess",
                                "src": "10224:19:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 583,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 631,
                                "name": "Identifier",
                                "src": "10244:8:3"
                              }
                            ],
                            "id": 633,
                            "name": "IndexAccess",
                            "src": "10224:29:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 585,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 634,
                            "name": "Identifier",
                            "src": "10256:7:3"
                          }
                        ],
                        "id": 635,
                        "name": "Assignment",
                        "src": "10224:39:3"
                      }
                    ],
                    "id": 636,
                    "name": "ExpressionStatement",
                    "src": "10224:39:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                1319
                              ],
                              "referencedDeclaration": 1319,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 637,
                            "name": "Identifier",
                            "src": "10273:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1411,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 638,
                                "name": "Identifier",
                                "src": "10282:3:3"
                              }
                            ],
                            "id": 639,
                            "name": "MemberAccess",
                            "src": "10282:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 583,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 640,
                            "name": "Identifier",
                            "src": "10294:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 585,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 641,
                            "name": "Identifier",
                            "src": "10304:7:3"
                          }
                        ],
                        "id": 642,
                        "name": "FunctionCall",
                        "src": "10273:39:3"
                      }
                    ],
                    "id": 643,
                    "name": "ExpressionStatement",
                    "src": "10273:39:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 589
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 644,
                        "name": "Literal",
                        "src": "10329:4:3"
                      }
                    ],
                    "id": 645,
                    "name": "Return",
                    "src": "10322:11:3"
                  }
                ],
                "id": 646,
                "name": "Block",
                "src": "9593:747:3"
              }
            ],
            "id": 647,
            "name": "FunctionDefinition",
            "src": "9511:829:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": 180,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 663,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 648,
                        "name": "ElementaryTypeName",
                        "src": "10685:7:3"
                      }
                    ],
                    "id": 649,
                    "name": "VariableDeclaration",
                    "src": "10685:14:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 663,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 650,
                        "name": "ElementaryTypeName",
                        "src": "10701:7:3"
                      }
                    ],
                    "id": 651,
                    "name": "VariableDeclaration",
                    "src": "10701:16:3"
                  }
                ],
                "id": 652,
                "name": "ParameterList",
                "src": "10684:39:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "remaining",
                      "scope": 663,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 653,
                        "name": "ElementaryTypeName",
                        "src": "10749:7:3"
                      }
                    ],
                    "id": 654,
                    "name": "VariableDeclaration",
                    "src": "10749:17:3"
                  }
                ],
                "id": 655,
                "name": "ParameterList",
                "src": "10748:19:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 655
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 252,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 656,
                                "name": "Identifier",
                                "src": "10785:7:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 649,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 657,
                                "name": "Identifier",
                                "src": "10793:6:3"
                              }
                            ],
                            "id": 658,
                            "name": "IndexAccess",
                            "src": "10785:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 651,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 659,
                            "name": "Identifier",
                            "src": "10801:8:3"
                          }
                        ],
                        "id": 660,
                        "name": "IndexAccess",
                        "src": "10785:25:3"
                      }
                    ],
                    "id": 661,
                    "name": "Return",
                    "src": "10778:32:3"
                  }
                ],
                "id": 662,
                "name": "Block",
                "src": "10768:49:3"
              }
            ],
            "id": 663,
            "name": "FunctionDefinition",
            "src": "10666:151:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approveAndCall",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 695,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 664,
                        "name": "ElementaryTypeName",
                        "src": "11383:7:3"
                      }
                    ],
                    "id": 665,
                    "name": "VariableDeclaration",
                    "src": "11383:16:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 695,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 666,
                        "name": "ElementaryTypeName",
                        "src": "11401:7:3"
                      }
                    ],
                    "id": 667,
                    "name": "VariableDeclaration",
                    "src": "11401:15:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_extraData",
                      "scope": 695,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 668,
                        "name": "ElementaryTypeName",
                        "src": "11418:5:3"
                      }
                    ],
                    "id": 669,
                    "name": "VariableDeclaration",
                    "src": "11418:16:3"
                  }
                ],
                "id": 670,
                "name": "ParameterList",
                "src": "11382:58:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 695,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 671,
                        "name": "ElementaryTypeName",
                        "src": "11457:4:3"
                      }
                    ],
                    "id": 672,
                    "name": "VariableDeclaration",
                    "src": "11457:12:3"
                  }
                ],
                "id": 673,
                "name": "ParameterList",
                "src": "11456:14:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 674,
                            "name": "Identifier",
                            "src": "11481:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    647
                                  ],
                                  "referencedDeclaration": 647,
                                  "type": "function (address,uint256) returns (bool)",
                                  "value": "approve"
                                },
                                "id": 675,
                                "name": "Identifier",
                                "src": "11489:7:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 665,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 676,
                                "name": "Identifier",
                                "src": "11497:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 667,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 677,
                                "name": "Identifier",
                                "src": "11507:7:3"
                              }
                            ],
                            "id": 678,
                            "name": "FunctionCall",
                            "src": "11489:26:3"
                          }
                        ],
                        "id": 679,
                        "name": "FunctionCall",
                        "src": "11481:35:3"
                      }
                    ],
                    "id": 680,
                    "name": "ExpressionStatement",
                    "src": "11481:35:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_contract$_ExpositoProject_$1320",
                                  "typeString": "contract ExpositoProject"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "receiveApproval",
                              "referencedDeclaration": 215,
                              "type": "function (address,uint256,address,bytes memory) external"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "contract ApproveAndCallFallBack",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 216,
                                      "type": "type(contract ApproveAndCallFallBack)",
                                      "value": "ApproveAndCallFallBack"
                                    },
                                    "id": 681,
                                    "name": "Identifier",
                                    "src": "11527:22:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 665,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 682,
                                    "name": "Identifier",
                                    "src": "11550:8:3"
                                  }
                                ],
                                "id": 683,
                                "name": "FunctionCall",
                                "src": "11527:32:3"
                              }
                            ],
                            "id": 684,
                            "name": "MemberAccess",
                            "src": "11527:48:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1411,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 685,
                                "name": "Identifier",
                                "src": "11589:3:3"
                              }
                            ],
                            "id": 686,
                            "name": "MemberAccess",
                            "src": "11589:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 667,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 687,
                            "name": "Identifier",
                            "src": "11613:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1434,
                              "type": "contract ExpositoProject",
                              "value": "this"
                            },
                            "id": 688,
                            "name": "Identifier",
                            "src": "11634:4:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 669,
                              "type": "bytes memory",
                              "value": "_extraData"
                            },
                            "id": 689,
                            "name": "Identifier",
                            "src": "11652:10:3"
                          }
                        ],
                        "id": 690,
                        "name": "FunctionCall",
                        "src": "11527:145:3"
                      }
                    ],
                    "id": 691,
                    "name": "ExpressionStatement",
                    "src": "11527:145:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 673
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 692,
                        "name": "Literal",
                        "src": "11690:4:3"
                      }
                    ],
                    "id": 693,
                    "name": "Return",
                    "src": "11683:11:3"
                  }
                ],
                "id": 694,
                "name": "Block",
                "src": "11471:230:3"
              }
            ],
            "id": 695,
            "name": "FunctionDefinition",
            "src": "11359:342:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalStandardTokenSupply",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 696,
                "name": "ParameterList",
                "src": "11795:2:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 706,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 697,
                        "name": "ElementaryTypeName",
                        "src": "11823:4:3"
                      }
                    ],
                    "id": 698,
                    "name": "VariableDeclaration",
                    "src": "11823:4:3"
                  }
                ],
                "id": 699,
                "name": "ParameterList",
                "src": "11822:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 699
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 831,
                              "type": "function (uint256) view returns (uint256)",
                              "value": "totalSupplyAt"
                            },
                            "id": 700,
                            "name": "Identifier",
                            "src": "11846:13:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "number",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1403,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 701,
                                "name": "Identifier",
                                "src": "11860:5:3"
                              }
                            ],
                            "id": 702,
                            "name": "MemberAccess",
                            "src": "11860:12:3"
                          }
                        ],
                        "id": 703,
                        "name": "FunctionCall",
                        "src": "11846:27:3"
                      }
                    ],
                    "id": 704,
                    "name": "Return",
                    "src": "11839:34:3"
                  }
                ],
                "id": 705,
                "name": "Block",
                "src": "11829:51:3"
              }
            ],
            "id": 706,
            "name": "FunctionDefinition",
            "src": "11762:118:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalDeveloperTokenSupply",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 707,
                "name": "ParameterList",
                "src": "11976:2:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 716,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 708,
                        "name": "ElementaryTypeName",
                        "src": "12004:4:3"
                      }
                    ],
                    "id": 709,
                    "name": "VariableDeclaration",
                    "src": "12004:4:3"
                  }
                ],
                "id": 710,
                "name": "ParameterList",
                "src": "12003:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 710
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "totalSupply",
                              "referencedDeclaration": 45,
                              "type": "function () view external returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 227,
                                  "type": "contract DeveloperToken",
                                  "value": "developerToken"
                                },
                                "id": 711,
                                "name": "Identifier",
                                "src": "12027:14:3"
                              }
                            ],
                            "id": 712,
                            "name": "MemberAccess",
                            "src": "12027:26:3"
                          }
                        ],
                        "id": 713,
                        "name": "FunctionCall",
                        "src": "12027:28:3"
                      }
                    ],
                    "id": 714,
                    "name": "Return",
                    "src": "12020:35:3"
                  }
                ],
                "id": 715,
                "name": "Block",
                "src": "12010:52:3"
              }
            ],
            "id": 716,
            "name": "FunctionDefinition",
            "src": "11942:120:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": 135,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 717,
                "name": "ParameterList",
                "src": "12134:2:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 728,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 718,
                        "name": "ElementaryTypeName",
                        "src": "12162:4:3"
                      }
                    ],
                    "id": 719,
                    "name": "VariableDeclaration",
                    "src": "12162:4:3"
                  }
                ],
                "id": 720,
                "name": "ParameterList",
                "src": "12161:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 720
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 706,
                                  "type": "function () view returns (uint256)",
                                  "value": "totalStandardTokenSupply"
                                },
                                "id": 721,
                                "name": "Identifier",
                                "src": "12185:24:3"
                              }
                            ],
                            "id": 722,
                            "name": "FunctionCall",
                            "src": "12185:26:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 716,
                                  "type": "function () view returns (uint256)",
                                  "value": "totalDeveloperTokenSupply"
                                },
                                "id": 723,
                                "name": "Identifier",
                                "src": "12214:25:3"
                              }
                            ],
                            "id": 724,
                            "name": "FunctionCall",
                            "src": "12214:27:3"
                          }
                        ],
                        "id": 725,
                        "name": "BinaryOperation",
                        "src": "12185:56:3"
                      }
                    ],
                    "id": 726,
                    "name": "Return",
                    "src": "12178:63:3"
                  }
                ],
                "id": 727,
                "name": "Block",
                "src": "12168:80:3"
              }
            ],
            "id": 728,
            "name": "FunctionDefinition",
            "src": "12114:134:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOfAt",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 784,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 729,
                        "name": "ElementaryTypeName",
                        "src": "12557:7:3"
                      }
                    ],
                    "id": 730,
                    "name": "VariableDeclaration",
                    "src": "12557:14:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_blockNumber",
                      "scope": 784,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 731,
                        "name": "ElementaryTypeName",
                        "src": "12573:4:3"
                      }
                    ],
                    "id": 732,
                    "name": "VariableDeclaration",
                    "src": "12573:17:3"
                  }
                ],
                "id": 733,
                "name": "ParameterList",
                "src": "12556:35:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 784,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 734,
                        "name": "ElementaryTypeName",
                        "src": "12625:4:3"
                      }
                    ],
                    "id": 735,
                    "name": "VariableDeclaration",
                    "src": "12625:4:3"
                  }
                ],
                "id": 736,
                "name": "ParameterList",
                "src": "12624:6:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 246,
                                              "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)",
                                              "value": "balances"
                                            },
                                            "id": 737,
                                            "name": "Identifier",
                                            "src": "12974:8:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 730,
                                              "type": "address",
                                              "value": "_owner"
                                            },
                                            "id": 738,
                                            "name": "Identifier",
                                            "src": "12983:6:3"
                                          }
                                        ],
                                        "id": 739,
                                        "name": "IndexAccess",
                                        "src": "12974:16:3"
                                      }
                                    ],
                                    "id": 740,
                                    "name": "MemberAccess",
                                    "src": "12974:23:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 741,
                                    "name": "Literal",
                                    "src": "13001:1:3"
                                  }
                                ],
                                "id": 742,
                                "name": "BinaryOperation",
                                "src": "12974:28:3"
                              }
                            ],
                            "id": 743,
                            "name": "TupleExpression",
                            "src": "12973:30:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": ">",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "fromBlock",
                                      "referencedDeclaration": 232,
                                      "type": "uint128"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ExpositoProject.Checkpoint storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 246,
                                                  "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)",
                                                  "value": "balances"
                                                },
                                                "id": 744,
                                                "name": "Identifier",
                                                "src": "13020:8:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 730,
                                                  "type": "address",
                                                  "value": "_owner"
                                                },
                                                "id": 745,
                                                "name": "Identifier",
                                                "src": "13029:6:3"
                                              }
                                            ],
                                            "id": 746,
                                            "name": "IndexAccess",
                                            "src": "13020:16:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "30",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 0",
                                              "value": "0"
                                            },
                                            "id": 747,
                                            "name": "Literal",
                                            "src": "13037:1:3"
                                          }
                                        ],
                                        "id": 748,
                                        "name": "IndexAccess",
                                        "src": "13020:19:3"
                                      }
                                    ],
                                    "id": 749,
                                    "name": "MemberAccess",
                                    "src": "13020:29:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 732,
                                      "type": "uint256",
                                      "value": "_blockNumber"
                                    },
                                    "id": 750,
                                    "name": "Identifier",
                                    "src": "13052:12:3"
                                  }
                                ],
                                "id": 751,
                                "name": "BinaryOperation",
                                "src": "13020:44:3"
                              }
                            ],
                            "id": 752,
                            "name": "TupleExpression",
                            "src": "13019:46:3"
                          }
                        ],
                        "id": 753,
                        "name": "BinaryOperation",
                        "src": "12973:92:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_ExpositoProject_$1320",
                                              "typeString": "contract ExpositoProject"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 754,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "13085:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 237,
                                          "type": "contract ExpositoProject",
                                          "value": "parentToken"
                                        },
                                        "id": 755,
                                        "name": "Identifier",
                                        "src": "13093:11:3"
                                      }
                                    ],
                                    "id": 756,
                                    "name": "FunctionCall",
                                    "src": "13085:20:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 757,
                                    "name": "Literal",
                                    "src": "13109:1:3"
                                  }
                                ],
                                "id": 758,
                                "name": "BinaryOperation",
                                "src": "13085:25:3"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 736
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "uint256",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                },
                                                {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "balanceOfAt",
                                              "referencedDeclaration": 784,
                                              "type": "function (address,uint256) view external returns (uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 237,
                                                  "type": "contract ExpositoProject",
                                                  "value": "parentToken"
                                                },
                                                "id": 759,
                                                "name": "Identifier",
                                                "src": "13137:11:3"
                                              }
                                            ],
                                            "id": 760,
                                            "name": "MemberAccess",
                                            "src": "13137:23:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 730,
                                              "type": "address",
                                              "value": "_owner"
                                            },
                                            "id": 761,
                                            "name": "Identifier",
                                            "src": "13161:6:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "uint256",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    },
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1218,
                                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                                  "value": "min"
                                                },
                                                "id": 762,
                                                "name": "Identifier",
                                                "src": "13169:3:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 732,
                                                  "type": "uint256",
                                                  "value": "_blockNumber"
                                                },
                                                "id": 763,
                                                "name": "Identifier",
                                                "src": "13173:12:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 239,
                                                  "type": "uint256",
                                                  "value": "parentSnapShotBlock"
                                                },
                                                "id": 764,
                                                "name": "Identifier",
                                                "src": "13187:19:3"
                                              }
                                            ],
                                            "id": 765,
                                            "name": "FunctionCall",
                                            "src": "13169:38:3"
                                          }
                                        ],
                                        "id": 766,
                                        "name": "FunctionCall",
                                        "src": "13137:71:3"
                                      }
                                    ],
                                    "id": 767,
                                    "name": "Return",
                                    "src": "13130:78:3"
                                  }
                                ],
                                "id": 768,
                                "name": "Block",
                                "src": "13112:111:3"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 736
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 769,
                                        "name": "Literal",
                                        "src": "13287:1:3"
                                      }
                                    ],
                                    "id": 770,
                                    "name": "Return",
                                    "src": "13280:8:3"
                                  }
                                ],
                                "id": 771,
                                "name": "Block",
                                "src": "13229:74:3"
                              }
                            ],
                            "id": 772,
                            "name": "IfStatement",
                            "src": "13081:222:3"
                          }
                        ],
                        "id": 773,
                        "name": "Block",
                        "src": "13067:321:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 736
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_array$_t_struct$_Checkpoint_$235_storage_$dyn_storage",
                                          "typeString": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1108,
                                      "type": "function (struct ExpositoProject.Checkpoint storage ref[] storage pointer,uint256) view returns (uint256)",
                                      "value": "getValueAt"
                                    },
                                    "id": 774,
                                    "name": "Identifier",
                                    "src": "13415:10:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 246,
                                          "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)",
                                          "value": "balances"
                                        },
                                        "id": 775,
                                        "name": "Identifier",
                                        "src": "13426:8:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 730,
                                          "type": "address",
                                          "value": "_owner"
                                        },
                                        "id": 776,
                                        "name": "Identifier",
                                        "src": "13435:6:3"
                                      }
                                    ],
                                    "id": 777,
                                    "name": "IndexAccess",
                                    "src": "13426:16:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 732,
                                      "type": "uint256",
                                      "value": "_blockNumber"
                                    },
                                    "id": 778,
                                    "name": "Identifier",
                                    "src": "13444:12:3"
                                  }
                                ],
                                "id": 779,
                                "name": "FunctionCall",
                                "src": "13415:42:3"
                              }
                            ],
                            "id": 780,
                            "name": "Return",
                            "src": "13408:49:3"
                          }
                        ],
                        "id": 781,
                        "name": "Block",
                        "src": "13394:74:3"
                      }
                    ],
                    "id": 782,
                    "name": "IfStatement",
                    "src": "12969:499:3"
                  }
                ],
                "id": 783,
                "name": "Block",
                "src": "12631:843:3"
              }
            ],
            "id": 784,
            "name": "FunctionDefinition",
            "src": "12536:938:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupplyAt",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_blockNumber",
                      "scope": 831,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 785,
                        "name": "ElementaryTypeName",
                        "src": "13723:4:3"
                      }
                    ],
                    "id": 786,
                    "name": "VariableDeclaration",
                    "src": "13723:17:3"
                  }
                ],
                "id": 787,
                "name": "ParameterList",
                "src": "13722:19:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 831,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 788,
                        "name": "ElementaryTypeName",
                        "src": "13766:4:3"
                      }
                    ],
                    "id": 789,
                    "name": "VariableDeclaration",
                    "src": "13766:4:3"
                  }
                ],
                "id": 790,
                "name": "ParameterList",
                "src": "13765:6:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 255,
                                          "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref",
                                          "value": "totalSupplyHistory"
                                        },
                                        "id": 791,
                                        "name": "Identifier",
                                        "src": "14139:18:3"
                                      }
                                    ],
                                    "id": 792,
                                    "name": "MemberAccess",
                                    "src": "14139:25:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 793,
                                    "name": "Literal",
                                    "src": "14168:1:3"
                                  }
                                ],
                                "id": 794,
                                "name": "BinaryOperation",
                                "src": "14139:30:3"
                              }
                            ],
                            "id": 795,
                            "name": "TupleExpression",
                            "src": "14138:32:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": ">",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "fromBlock",
                                      "referencedDeclaration": 232,
                                      "type": "uint128"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ExpositoProject.Checkpoint storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 255,
                                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref",
                                              "value": "totalSupplyHistory"
                                            },
                                            "id": 796,
                                            "name": "Identifier",
                                            "src": "14187:18:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "30",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 0",
                                              "value": "0"
                                            },
                                            "id": 797,
                                            "name": "Literal",
                                            "src": "14206:1:3"
                                          }
                                        ],
                                        "id": 798,
                                        "name": "IndexAccess",
                                        "src": "14187:21:3"
                                      }
                                    ],
                                    "id": 799,
                                    "name": "MemberAccess",
                                    "src": "14187:31:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 786,
                                      "type": "uint256",
                                      "value": "_blockNumber"
                                    },
                                    "id": 800,
                                    "name": "Identifier",
                                    "src": "14221:12:3"
                                  }
                                ],
                                "id": 801,
                                "name": "BinaryOperation",
                                "src": "14187:46:3"
                              }
                            ],
                            "id": 802,
                            "name": "TupleExpression",
                            "src": "14186:48:3"
                          }
                        ],
                        "id": 803,
                        "name": "BinaryOperation",
                        "src": "14138:96:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_ExpositoProject_$1320",
                                              "typeString": "contract ExpositoProject"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 804,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "14254:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 237,
                                          "type": "contract ExpositoProject",
                                          "value": "parentToken"
                                        },
                                        "id": 805,
                                        "name": "Identifier",
                                        "src": "14262:11:3"
                                      }
                                    ],
                                    "id": 806,
                                    "name": "FunctionCall",
                                    "src": "14254:20:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 807,
                                    "name": "Literal",
                                    "src": "14278:1:3"
                                  }
                                ],
                                "id": 808,
                                "name": "BinaryOperation",
                                "src": "14254:25:3"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 790
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "uint256",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "totalSupplyAt",
                                              "referencedDeclaration": 831,
                                              "type": "function (uint256) view external returns (uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 237,
                                                  "type": "contract ExpositoProject",
                                                  "value": "parentToken"
                                                },
                                                "id": 809,
                                                "name": "Identifier",
                                                "src": "14306:11:3"
                                              }
                                            ],
                                            "id": 810,
                                            "name": "MemberAccess",
                                            "src": "14306:25:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "uint256",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    },
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1218,
                                                  "type": "function (uint256,uint256) pure returns (uint256)",
                                                  "value": "min"
                                                },
                                                "id": 811,
                                                "name": "Identifier",
                                                "src": "14332:3:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 786,
                                                  "type": "uint256",
                                                  "value": "_blockNumber"
                                                },
                                                "id": 812,
                                                "name": "Identifier",
                                                "src": "14336:12:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 239,
                                                  "type": "uint256",
                                                  "value": "parentSnapShotBlock"
                                                },
                                                "id": 813,
                                                "name": "Identifier",
                                                "src": "14350:19:3"
                                              }
                                            ],
                                            "id": 814,
                                            "name": "FunctionCall",
                                            "src": "14332:38:3"
                                          }
                                        ],
                                        "id": 815,
                                        "name": "FunctionCall",
                                        "src": "14306:65:3"
                                      }
                                    ],
                                    "id": 816,
                                    "name": "Return",
                                    "src": "14299:72:3"
                                  }
                                ],
                                "id": 817,
                                "name": "Block",
                                "src": "14281:105:3"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 790
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 818,
                                        "name": "Literal",
                                        "src": "14417:1:3"
                                      }
                                    ],
                                    "id": 819,
                                    "name": "Return",
                                    "src": "14410:8:3"
                                  }
                                ],
                                "id": 820,
                                "name": "Block",
                                "src": "14392:41:3"
                              }
                            ],
                            "id": 821,
                            "name": "IfStatement",
                            "src": "14250:183:3"
                          }
                        ],
                        "id": 822,
                        "name": "Block",
                        "src": "14236:286:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 790
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_array$_t_struct$_Checkpoint_$235_storage_$dyn_storage",
                                          "typeString": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1108,
                                      "type": "function (struct ExpositoProject.Checkpoint storage ref[] storage pointer,uint256) view returns (uint256)",
                                      "value": "getValueAt"
                                    },
                                    "id": 823,
                                    "name": "Identifier",
                                    "src": "14549:10:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 255,
                                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref",
                                      "value": "totalSupplyHistory"
                                    },
                                    "id": 824,
                                    "name": "Identifier",
                                    "src": "14560:18:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 786,
                                      "type": "uint256",
                                      "value": "_blockNumber"
                                    },
                                    "id": 825,
                                    "name": "Identifier",
                                    "src": "14580:12:3"
                                  }
                                ],
                                "id": 826,
                                "name": "FunctionCall",
                                "src": "14549:44:3"
                              }
                            ],
                            "id": 827,
                            "name": "Return",
                            "src": "14542:51:3"
                          }
                        ],
                        "id": 828,
                        "name": "Block",
                        "src": "14528:76:3"
                      }
                    ],
                    "id": 829,
                    "name": "IfStatement",
                    "src": "14134:470:3"
                  }
                ],
                "id": 830,
                "name": "Block",
                "src": "13772:838:3"
              }
            ],
            "id": 831,
            "name": "FunctionDefinition",
            "src": "13700:910:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "createCloneToken",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_snapshotBlock",
                      "scope": 878,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 832,
                        "name": "ElementaryTypeName",
                        "src": "15158:4:3"
                      }
                    ],
                    "id": 833,
                    "name": "VariableDeclaration",
                    "src": "15158:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_transfersEnabled",
                      "scope": 878,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 834,
                        "name": "ElementaryTypeName",
                        "src": "15187:4:3"
                      }
                    ],
                    "id": 835,
                    "name": "VariableDeclaration",
                    "src": "15187:22:3"
                  }
                ],
                "id": 836,
                "name": "ParameterList",
                "src": "15148:71:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 878,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 837,
                        "name": "ElementaryTypeName",
                        "src": "15235:7:3"
                      }
                    ],
                    "id": 838,
                    "name": "VariableDeclaration",
                    "src": "15235:7:3"
                  }
                ],
                "id": 839,
                "name": "ParameterList",
                "src": "15234:9:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 833,
                              "type": "uint256",
                              "value": "_snapshotBlock"
                            },
                            "id": 840,
                            "name": "Identifier",
                            "src": "15259:14:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 841,
                            "name": "Literal",
                            "src": "15277:1:3"
                          }
                        ],
                        "id": 842,
                        "name": "BinaryOperation",
                        "src": "15259:19:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 833,
                                  "type": "uint256",
                                  "value": "_snapshotBlock"
                                },
                                "id": 843,
                                "name": "Identifier",
                                "src": "15293:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "number",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1403,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 844,
                                    "name": "Identifier",
                                    "src": "15310:5:3"
                                  }
                                ],
                                "id": 845,
                                "name": "MemberAccess",
                                "src": "15310:12:3"
                              }
                            ],
                            "id": 846,
                            "name": "Assignment",
                            "src": "15293:29:3"
                          }
                        ],
                        "id": 847,
                        "name": "ExpressionStatement",
                        "src": "15293:29:3"
                      }
                    ],
                    "id": 848,
                    "name": "IfStatement",
                    "src": "15255:67:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        850
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "cloneToken",
                          "scope": 878,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract ExpositoProject",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "ExpositoProject",
                              "referencedDeclaration": 1320,
                              "type": "contract ExpositoProject"
                            },
                            "id": 849,
                            "name": "UserDefinedTypeName",
                            "src": "15333:15:3"
                          }
                        ],
                        "id": 850,
                        "name": "VariableDeclaration",
                        "src": "15333:26:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "contract ExpositoProject",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ExpositoProject_$1320",
                                  "typeString": "contract ExpositoProject"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "createCloneToken",
                              "referencedDeclaration": 1359,
                              "type": "function (address,uint256,bool,string memory) external returns (contract ExpositoProject)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 259,
                                  "type": "contract ExpositoProjectFactory",
                                  "value": "tokenFactory"
                                },
                                "id": 851,
                                "name": "Identifier",
                                "src": "15362:12:3"
                              }
                            ],
                            "id": 852,
                            "name": "MemberAccess",
                            "src": "15362:29:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1434,
                              "type": "contract ExpositoProject",
                              "value": "this"
                            },
                            "id": 853,
                            "name": "Identifier",
                            "src": "15405:4:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 833,
                              "type": "uint256",
                              "value": "_snapshotBlock"
                            },
                            "id": 854,
                            "name": "Identifier",
                            "src": "15423:14:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 835,
                              "type": "bool",
                              "value": "_transfersEnabled"
                            },
                            "id": 855,
                            "name": "Identifier",
                            "src": "15451:17:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 225,
                              "type": "string storage ref",
                              "value": "projectId"
                            },
                            "id": 856,
                            "name": "Identifier",
                            "src": "15482:9:3"
                          }
                        ],
                        "id": 857,
                        "name": "FunctionCall",
                        "src": "15362:143:3"
                      }
                    ],
                    "id": 858,
                    "name": "VariableDeclarationStatement",
                    "src": "15333:172:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "changeController",
                              "referencedDeclaration": 35,
                              "type": "function (address) external"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 850,
                                  "type": "contract ExpositoProject",
                                  "value": "cloneToken"
                                },
                                "id": 859,
                                "name": "Identifier",
                                "src": "15516:10:3"
                              }
                            ],
                            "id": 861,
                            "name": "MemberAccess",
                            "src": "15516:27:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1411,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 862,
                                "name": "Identifier",
                                "src": "15544:3:3"
                              }
                            ],
                            "id": 863,
                            "name": "MemberAccess",
                            "src": "15544:10:3"
                          }
                        ],
                        "id": 864,
                        "name": "FunctionCall",
                        "src": "15516:39:3"
                      }
                    ],
                    "id": 865,
                    "name": "ExpressionStatement",
                    "src": "15516:39:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1311,
                              "type": "function (address,uint256)",
                              "value": "NewCloneToken"
                            },
                            "id": 866,
                            "name": "Identifier",
                            "src": "15635:13:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ExpositoProject_$1320",
                                      "typeString": "contract ExpositoProject"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 867,
                                "name": "ElementaryTypeNameExpression",
                                "src": "15649:7:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 850,
                                  "type": "contract ExpositoProject",
                                  "value": "cloneToken"
                                },
                                "id": 868,
                                "name": "Identifier",
                                "src": "15657:10:3"
                              }
                            ],
                            "id": 869,
                            "name": "FunctionCall",
                            "src": "15649:19:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 833,
                              "type": "uint256",
                              "value": "_snapshotBlock"
                            },
                            "id": 870,
                            "name": "Identifier",
                            "src": "15670:14:3"
                          }
                        ],
                        "id": 871,
                        "name": "FunctionCall",
                        "src": "15635:50:3"
                      }
                    ],
                    "id": 872,
                    "name": "ExpressionStatement",
                    "src": "15635:50:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 839
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ExpositoProject_$1320",
                                  "typeString": "contract ExpositoProject"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(address)",
                              "value": "address"
                            },
                            "id": 873,
                            "name": "ElementaryTypeNameExpression",
                            "src": "15702:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 850,
                              "type": "contract ExpositoProject",
                              "value": "cloneToken"
                            },
                            "id": 874,
                            "name": "Identifier",
                            "src": "15710:10:3"
                          }
                        ],
                        "id": 875,
                        "name": "FunctionCall",
                        "src": "15702:19:3"
                      }
                    ],
                    "id": 876,
                    "name": "Return",
                    "src": "15695:26:3"
                  }
                ],
                "id": 877,
                "name": "Block",
                "src": "15244:484:3"
              }
            ],
            "id": 878,
            "name": "FunctionDefinition",
            "src": "15123:605:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "generateTokens",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 941,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 879,
                        "name": "ElementaryTypeName",
                        "src": "16035:7:3"
                      }
                    ],
                    "id": 880,
                    "name": "VariableDeclaration",
                    "src": "16035:14:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 941,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 881,
                        "name": "ElementaryTypeName",
                        "src": "16051:4:3"
                      }
                    ],
                    "id": 882,
                    "name": "VariableDeclaration",
                    "src": "16051:12:3"
                  }
                ],
                "id": 883,
                "name": "ParameterList",
                "src": "16034:35:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 941,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 886,
                        "name": "ElementaryTypeName",
                        "src": "16101:4:3"
                      }
                    ],
                    "id": 887,
                    "name": "VariableDeclaration",
                    "src": "16101:4:3"
                  }
                ],
                "id": 888,
                "name": "ParameterList",
                "src": "16100:6:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 12,
                      "type": "modifier ()",
                      "value": "onlyController"
                    },
                    "id": 884,
                    "name": "Identifier",
                    "src": "16077:14:3"
                  }
                ],
                "id": 885,
                "name": "ModifierInvocation",
                "src": "16077:14:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        890
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "curTotalSupply",
                          "scope": 941,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 889,
                            "name": "ElementaryTypeName",
                            "src": "16117:4:3"
                          }
                        ],
                        "id": 890,
                        "name": "VariableDeclaration",
                        "src": "16117:19:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 706,
                              "type": "function () view returns (uint256)",
                              "value": "totalStandardTokenSupply"
                            },
                            "id": 891,
                            "name": "Identifier",
                            "src": "16139:24:3"
                          }
                        ],
                        "id": 892,
                        "name": "FunctionCall",
                        "src": "16139:26:3"
                      }
                    ],
                    "id": 893,
                    "name": "VariableDeclarationStatement",
                    "src": "16117:48:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 894,
                            "name": "Identifier",
                            "src": "16175:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 890,
                                      "type": "uint256",
                                      "value": "curTotalSupply"
                                    },
                                    "id": 895,
                                    "name": "Identifier",
                                    "src": "16183:14:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 882,
                                      "type": "uint256",
                                      "value": "_amount"
                                    },
                                    "id": 896,
                                    "name": "Identifier",
                                    "src": "16200:7:3"
                                  }
                                ],
                                "id": 897,
                                "name": "BinaryOperation",
                                "src": "16183:24:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 890,
                                  "type": "uint256",
                                  "value": "curTotalSupply"
                                },
                                "id": 898,
                                "name": "Identifier",
                                "src": "16211:14:3"
                              }
                            ],
                            "id": 899,
                            "name": "BinaryOperation",
                            "src": "16183:42:3"
                          }
                        ],
                        "id": 900,
                        "name": "FunctionCall",
                        "src": "16175:51:3"
                      }
                    ],
                    "id": 901,
                    "name": "ExpressionStatement",
                    "src": "16175:51:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        903
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "previousBalanceTo",
                          "scope": 941,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 902,
                            "name": "ElementaryTypeName",
                            "src": "16258:4:3"
                          }
                        ],
                        "id": 903,
                        "name": "VariableDeclaration",
                        "src": "16258:22:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 552,
                              "type": "function (address) view returns (uint256)",
                              "value": "standardTokenBalanceOf"
                            },
                            "id": 904,
                            "name": "Identifier",
                            "src": "16283:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 880,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 905,
                            "name": "Identifier",
                            "src": "16306:6:3"
                          }
                        ],
                        "id": 906,
                        "name": "FunctionCall",
                        "src": "16283:30:3"
                      }
                    ],
                    "id": 907,
                    "name": "VariableDeclarationStatement",
                    "src": "16258:55:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 908,
                            "name": "Identifier",
                            "src": "16323:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 903,
                                      "type": "uint256",
                                      "value": "previousBalanceTo"
                                    },
                                    "id": 909,
                                    "name": "Identifier",
                                    "src": "16331:17:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 882,
                                      "type": "uint256",
                                      "value": "_amount"
                                    },
                                    "id": 910,
                                    "name": "Identifier",
                                    "src": "16351:7:3"
                                  }
                                ],
                                "id": 911,
                                "name": "BinaryOperation",
                                "src": "16331:27:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 903,
                                  "type": "uint256",
                                  "value": "previousBalanceTo"
                                },
                                "id": 912,
                                "name": "Identifier",
                                "src": "16362:17:3"
                              }
                            ],
                            "id": 913,
                            "name": "BinaryOperation",
                            "src": "16331:48:3"
                          }
                        ],
                        "id": 914,
                        "name": "FunctionCall",
                        "src": "16323:57:3"
                      }
                    ],
                    "id": 915,
                    "name": "ExpressionStatement",
                    "src": "16323:57:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_struct$_Checkpoint_$235_storage_$dyn_storage",
                                  "typeString": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1179,
                              "type": "function (struct ExpositoProject.Checkpoint storage ref[] storage pointer,uint256)",
                              "value": "updateValueAtNow"
                            },
                            "id": 916,
                            "name": "Identifier",
                            "src": "16412:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 255,
                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref",
                              "value": "totalSupplyHistory"
                            },
                            "id": 917,
                            "name": "Identifier",
                            "src": "16429:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "+",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 890,
                                  "type": "uint256",
                                  "value": "curTotalSupply"
                                },
                                "id": 918,
                                "name": "Identifier",
                                "src": "16449:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 882,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 919,
                                "name": "Identifier",
                                "src": "16466:7:3"
                              }
                            ],
                            "id": 920,
                            "name": "BinaryOperation",
                            "src": "16449:24:3"
                          }
                        ],
                        "id": 921,
                        "name": "FunctionCall",
                        "src": "16412:62:3"
                      }
                    ],
                    "id": 922,
                    "name": "ExpressionStatement",
                    "src": "16412:62:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_struct$_Checkpoint_$235_storage_$dyn_storage",
                                  "typeString": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1179,
                              "type": "function (struct ExpositoProject.Checkpoint storage ref[] storage pointer,uint256)",
                              "value": "updateValueAtNow"
                            },
                            "id": 923,
                            "name": "Identifier",
                            "src": "16484:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 246,
                                  "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)",
                                  "value": "balances"
                                },
                                "id": 924,
                                "name": "Identifier",
                                "src": "16501:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 880,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 925,
                                "name": "Identifier",
                                "src": "16510:6:3"
                              }
                            ],
                            "id": 926,
                            "name": "IndexAccess",
                            "src": "16501:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "+",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 903,
                                  "type": "uint256",
                                  "value": "previousBalanceTo"
                                },
                                "id": 927,
                                "name": "Identifier",
                                "src": "16519:17:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 882,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 928,
                                "name": "Identifier",
                                "src": "16539:7:3"
                              }
                            ],
                            "id": 929,
                            "name": "BinaryOperation",
                            "src": "16519:27:3"
                          }
                        ],
                        "id": 930,
                        "name": "FunctionCall",
                        "src": "16484:63:3"
                      }
                    ],
                    "id": 931,
                    "name": "ExpressionStatement",
                    "src": "16484:63:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                1305
                              ],
                              "referencedDeclaration": 1305,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 932,
                            "name": "Identifier",
                            "src": "16557:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 933,
                            "name": "Literal",
                            "src": "16566:1:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 880,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 934,
                            "name": "Identifier",
                            "src": "16569:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 882,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 935,
                            "name": "Identifier",
                            "src": "16577:7:3"
                          }
                        ],
                        "id": 936,
                        "name": "FunctionCall",
                        "src": "16557:28:3"
                      }
                    ],
                    "id": 937,
                    "name": "ExpressionStatement",
                    "src": "16557:28:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 888
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 938,
                        "name": "Literal",
                        "src": "16602:4:3"
                      }
                    ],
                    "id": 939,
                    "name": "Return",
                    "src": "16595:11:3"
                  }
                ],
                "id": 940,
                "name": "Block",
                "src": "16107:506:3"
              }
            ],
            "id": 941,
            "name": "FunctionDefinition",
            "src": "16011:602:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "destroyTokens",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 1000,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 942,
                        "name": "ElementaryTypeName",
                        "src": "16882:7:3"
                      }
                    ],
                    "id": 943,
                    "name": "VariableDeclaration",
                    "src": "16882:14:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 1000,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 944,
                        "name": "ElementaryTypeName",
                        "src": "16898:4:3"
                      }
                    ],
                    "id": 945,
                    "name": "VariableDeclaration",
                    "src": "16898:12:3"
                  }
                ],
                "id": 946,
                "name": "ParameterList",
                "src": "16881:35:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1000,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 949,
                        "name": "ElementaryTypeName",
                        "src": "16948:4:3"
                      }
                    ],
                    "id": 950,
                    "name": "VariableDeclaration",
                    "src": "16948:4:3"
                  }
                ],
                "id": 951,
                "name": "ParameterList",
                "src": "16947:6:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 12,
                      "type": "modifier ()",
                      "value": "onlyController"
                    },
                    "id": 947,
                    "name": "Identifier",
                    "src": "16917:14:3"
                  }
                ],
                "id": 948,
                "name": "ModifierInvocation",
                "src": "16917:14:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        953
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "curTotalSupply",
                          "scope": 1000,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 952,
                            "name": "ElementaryTypeName",
                            "src": "16964:4:3"
                          }
                        ],
                        "id": 953,
                        "name": "VariableDeclaration",
                        "src": "16964:19:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 706,
                              "type": "function () view returns (uint256)",
                              "value": "totalStandardTokenSupply"
                            },
                            "id": 954,
                            "name": "Identifier",
                            "src": "16986:24:3"
                          }
                        ],
                        "id": 955,
                        "name": "FunctionCall",
                        "src": "16986:26:3"
                      }
                    ],
                    "id": 956,
                    "name": "VariableDeclarationStatement",
                    "src": "16964:48:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 957,
                            "name": "Identifier",
                            "src": "17022:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 953,
                                  "type": "uint256",
                                  "value": "curTotalSupply"
                                },
                                "id": 958,
                                "name": "Identifier",
                                "src": "17030:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 945,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 959,
                                "name": "Identifier",
                                "src": "17048:7:3"
                              }
                            ],
                            "id": 960,
                            "name": "BinaryOperation",
                            "src": "17030:25:3"
                          }
                        ],
                        "id": 961,
                        "name": "FunctionCall",
                        "src": "17022:34:3"
                      }
                    ],
                    "id": 962,
                    "name": "ExpressionStatement",
                    "src": "17022:34:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        964
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "previousBalanceFrom",
                          "scope": 1000,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 963,
                            "name": "ElementaryTypeName",
                            "src": "17066:4:3"
                          }
                        ],
                        "id": 964,
                        "name": "VariableDeclaration",
                        "src": "17066:24:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 552,
                              "type": "function (address) view returns (uint256)",
                              "value": "standardTokenBalanceOf"
                            },
                            "id": 965,
                            "name": "Identifier",
                            "src": "17093:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 943,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 966,
                            "name": "Identifier",
                            "src": "17116:6:3"
                          }
                        ],
                        "id": 967,
                        "name": "FunctionCall",
                        "src": "17093:30:3"
                      }
                    ],
                    "id": 968,
                    "name": "VariableDeclarationStatement",
                    "src": "17066:57:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 969,
                            "name": "Identifier",
                            "src": "17133:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 964,
                                  "type": "uint256",
                                  "value": "previousBalanceFrom"
                                },
                                "id": 970,
                                "name": "Identifier",
                                "src": "17141:19:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 945,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 971,
                                "name": "Identifier",
                                "src": "17164:7:3"
                              }
                            ],
                            "id": 972,
                            "name": "BinaryOperation",
                            "src": "17141:30:3"
                          }
                        ],
                        "id": 973,
                        "name": "FunctionCall",
                        "src": "17133:39:3"
                      }
                    ],
                    "id": 974,
                    "name": "ExpressionStatement",
                    "src": "17133:39:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_struct$_Checkpoint_$235_storage_$dyn_storage",
                                  "typeString": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1179,
                              "type": "function (struct ExpositoProject.Checkpoint storage ref[] storage pointer,uint256)",
                              "value": "updateValueAtNow"
                            },
                            "id": 975,
                            "name": "Identifier",
                            "src": "17182:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 255,
                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref",
                              "value": "totalSupplyHistory"
                            },
                            "id": 976,
                            "name": "Identifier",
                            "src": "17199:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "-",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 953,
                                  "type": "uint256",
                                  "value": "curTotalSupply"
                                },
                                "id": 977,
                                "name": "Identifier",
                                "src": "17219:14:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 945,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 978,
                                "name": "Identifier",
                                "src": "17236:7:3"
                              }
                            ],
                            "id": 979,
                            "name": "BinaryOperation",
                            "src": "17219:24:3"
                          }
                        ],
                        "id": 980,
                        "name": "FunctionCall",
                        "src": "17182:62:3"
                      }
                    ],
                    "id": 981,
                    "name": "ExpressionStatement",
                    "src": "17182:62:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_struct$_Checkpoint_$235_storage_$dyn_storage",
                                  "typeString": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1179,
                              "type": "function (struct ExpositoProject.Checkpoint storage ref[] storage pointer,uint256)",
                              "value": "updateValueAtNow"
                            },
                            "id": 982,
                            "name": "Identifier",
                            "src": "17254:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 246,
                                  "type": "mapping(address => struct ExpositoProject.Checkpoint storage ref[] storage ref)",
                                  "value": "balances"
                                },
                                "id": 983,
                                "name": "Identifier",
                                "src": "17271:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 943,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 984,
                                "name": "Identifier",
                                "src": "17280:6:3"
                              }
                            ],
                            "id": 985,
                            "name": "IndexAccess",
                            "src": "17271:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "-",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 964,
                                  "type": "uint256",
                                  "value": "previousBalanceFrom"
                                },
                                "id": 986,
                                "name": "Identifier",
                                "src": "17289:19:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 945,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 987,
                                "name": "Identifier",
                                "src": "17311:7:3"
                              }
                            ],
                            "id": 988,
                            "name": "BinaryOperation",
                            "src": "17289:29:3"
                          }
                        ],
                        "id": 989,
                        "name": "FunctionCall",
                        "src": "17254:65:3"
                      }
                    ],
                    "id": 990,
                    "name": "ExpressionStatement",
                    "src": "17254:65:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                1305
                              ],
                              "referencedDeclaration": 1305,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 991,
                            "name": "Identifier",
                            "src": "17329:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 943,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 992,
                            "name": "Identifier",
                            "src": "17338:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 993,
                            "name": "Literal",
                            "src": "17346:1:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 945,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 994,
                            "name": "Identifier",
                            "src": "17349:7:3"
                          }
                        ],
                        "id": 995,
                        "name": "FunctionCall",
                        "src": "17329:28:3"
                      }
                    ],
                    "id": 996,
                    "name": "ExpressionStatement",
                    "src": "17329:28:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 951
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 997,
                        "name": "Literal",
                        "src": "17374:4:3"
                      }
                    ],
                    "id": 998,
                    "name": "Return",
                    "src": "17367:11:3"
                  }
                ],
                "id": 999,
                "name": "Block",
                "src": "16954:431:3"
              }
            ],
            "id": 1000,
            "name": "FunctionDefinition",
            "src": "16859:526:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "enableTransfers",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_transfersEnabled",
                      "scope": 1012,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 1001,
                        "name": "ElementaryTypeName",
                        "src": "17588:4:3"
                      }
                    ],
                    "id": 1002,
                    "name": "VariableDeclaration",
                    "src": "17588:22:3"
                  }
                ],
                "id": 1003,
                "name": "ParameterList",
                "src": "17587:24:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1006,
                "name": "ParameterList",
                "src": "17634:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 12,
                      "type": "modifier ()",
                      "value": "onlyController"
                    },
                    "id": 1004,
                    "name": "Identifier",
                    "src": "17619:14:3"
                  }
                ],
                "id": 1005,
                "name": "ModifierInvocation",
                "src": "17619:14:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 257,
                              "type": "bool",
                              "value": "transfersEnabled"
                            },
                            "id": 1007,
                            "name": "Identifier",
                            "src": "17644:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1002,
                              "type": "bool",
                              "value": "_transfersEnabled"
                            },
                            "id": 1008,
                            "name": "Identifier",
                            "src": "17663:17:3"
                          }
                        ],
                        "id": 1009,
                        "name": "Assignment",
                        "src": "17644:36:3"
                      }
                    ],
                    "id": 1010,
                    "name": "ExpressionStatement",
                    "src": "17644:36:3"
                  }
                ],
                "id": 1011,
                "name": "Block",
                "src": "17634:53:3"
              }
            ],
            "id": 1012,
            "name": "FunctionDefinition",
            "src": "17563:124:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueAt",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "checkpoints",
                      "scope": 1108,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Checkpoint",
                              "referencedDeclaration": 235,
                              "type": "struct ExpositoProject.Checkpoint storage pointer"
                            },
                            "id": 1013,
                            "name": "UserDefinedTypeName",
                            "src": "17989:10:3"
                          }
                        ],
                        "id": 1014,
                        "name": "ArrayTypeName",
                        "src": "17989:12:3"
                      }
                    ],
                    "id": 1015,
                    "name": "VariableDeclaration",
                    "src": "17989:32:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_block",
                      "scope": 1108,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1016,
                        "name": "ElementaryTypeName",
                        "src": "18023:4:3"
                      }
                    ],
                    "id": 1017,
                    "name": "VariableDeclaration",
                    "src": "18023:11:3"
                  }
                ],
                "id": 1018,
                "name": "ParameterList",
                "src": "17988:52:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1108,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1019,
                        "name": "ElementaryTypeName",
                        "src": "18068:4:3"
                      }
                    ],
                    "id": 1020,
                    "name": "VariableDeclaration",
                    "src": "18068:4:3"
                  }
                ],
                "id": 1021,
                "name": "ParameterList",
                "src": "18067:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1015,
                                  "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                  "value": "checkpoints"
                                },
                                "id": 1022,
                                "name": "Identifier",
                                "src": "18089:11:3"
                              }
                            ],
                            "id": 1023,
                            "name": "MemberAccess",
                            "src": "18089:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 1024,
                            "name": "Literal",
                            "src": "18111:1:3"
                          }
                        ],
                        "id": 1025,
                        "name": "BinaryOperation",
                        "src": "18089:23:3"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 1021
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 1026,
                            "name": "Literal",
                            "src": "18134:1:3"
                          }
                        ],
                        "id": 1027,
                        "name": "Return",
                        "src": "18127:8:3"
                      }
                    ],
                    "id": 1028,
                    "name": "IfStatement",
                    "src": "18085:50:3"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1017,
                              "type": "uint256",
                              "value": "_block"
                            },
                            "id": 1029,
                            "name": "Identifier",
                            "src": "18191:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "fromBlock",
                              "referencedDeclaration": 232,
                              "type": "uint128"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ExpositoProject.Checkpoint storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1015,
                                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                      "value": "checkpoints"
                                    },
                                    "id": 1030,
                                    "name": "Identifier",
                                    "src": "18201:11:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "-",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "length",
                                          "referencedDeclaration": null,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1015,
                                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                              "value": "checkpoints"
                                            },
                                            "id": 1031,
                                            "name": "Identifier",
                                            "src": "18213:11:3"
                                          }
                                        ],
                                        "id": 1032,
                                        "name": "MemberAccess",
                                        "src": "18213:18:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "31",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 1",
                                          "value": "1"
                                        },
                                        "id": 1033,
                                        "name": "Literal",
                                        "src": "18232:1:3"
                                      }
                                    ],
                                    "id": 1034,
                                    "name": "BinaryOperation",
                                    "src": "18213:20:3"
                                  }
                                ],
                                "id": 1035,
                                "name": "IndexAccess",
                                "src": "18201:33:3"
                              }
                            ],
                            "id": 1036,
                            "name": "MemberAccess",
                            "src": "18201:43:3"
                          }
                        ],
                        "id": 1037,
                        "name": "BinaryOperation",
                        "src": "18191:53:3"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 1021
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "value",
                              "referencedDeclaration": 234,
                              "type": "uint128"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ExpositoProject.Checkpoint storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1015,
                                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                      "value": "checkpoints"
                                    },
                                    "id": 1038,
                                    "name": "Identifier",
                                    "src": "18265:11:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "-",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "length",
                                          "referencedDeclaration": null,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1015,
                                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                              "value": "checkpoints"
                                            },
                                            "id": 1039,
                                            "name": "Identifier",
                                            "src": "18277:11:3"
                                          }
                                        ],
                                        "id": 1040,
                                        "name": "MemberAccess",
                                        "src": "18277:18:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "31",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 1",
                                          "value": "1"
                                        },
                                        "id": 1041,
                                        "name": "Literal",
                                        "src": "18296:1:3"
                                      }
                                    ],
                                    "id": 1042,
                                    "name": "BinaryOperation",
                                    "src": "18277:20:3"
                                  }
                                ],
                                "id": 1043,
                                "name": "IndexAccess",
                                "src": "18265:33:3"
                              }
                            ],
                            "id": 1044,
                            "name": "MemberAccess",
                            "src": "18265:39:3"
                          }
                        ],
                        "id": 1045,
                        "name": "Return",
                        "src": "18258:46:3"
                      }
                    ],
                    "id": 1046,
                    "name": "IfStatement",
                    "src": "18187:117:3"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1017,
                              "type": "uint256",
                              "value": "_block"
                            },
                            "id": 1047,
                            "name": "Identifier",
                            "src": "18319:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "fromBlock",
                              "referencedDeclaration": 232,
                              "type": "uint128"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ExpositoProject.Checkpoint storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1015,
                                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                      "value": "checkpoints"
                                    },
                                    "id": 1048,
                                    "name": "Identifier",
                                    "src": "18328:11:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 1049,
                                    "name": "Literal",
                                    "src": "18340:1:3"
                                  }
                                ],
                                "id": 1050,
                                "name": "IndexAccess",
                                "src": "18328:14:3"
                              }
                            ],
                            "id": 1051,
                            "name": "MemberAccess",
                            "src": "18328:24:3"
                          }
                        ],
                        "id": 1052,
                        "name": "BinaryOperation",
                        "src": "18319:33:3"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 1021
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 1053,
                            "name": "Literal",
                            "src": "18374:1:3"
                          }
                        ],
                        "id": 1054,
                        "name": "Return",
                        "src": "18367:8:3"
                      }
                    ],
                    "id": 1055,
                    "name": "IfStatement",
                    "src": "18315:60:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1057
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "min",
                          "scope": 1108,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 1056,
                            "name": "ElementaryTypeName",
                            "src": "18437:4:3"
                          }
                        ],
                        "id": 1057,
                        "name": "VariableDeclaration",
                        "src": "18437:8:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 1058,
                        "name": "Literal",
                        "src": "18448:1:3"
                      }
                    ],
                    "id": 1059,
                    "name": "VariableDeclarationStatement",
                    "src": "18437:12:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1061
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "max",
                          "scope": 1108,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 1060,
                            "name": "ElementaryTypeName",
                            "src": "18459:4:3"
                          }
                        ],
                        "id": 1061,
                        "name": "VariableDeclaration",
                        "src": "18459:8:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1015,
                                  "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                  "value": "checkpoints"
                                },
                                "id": 1062,
                                "name": "Identifier",
                                "src": "18470:11:3"
                              }
                            ],
                            "id": 1063,
                            "name": "MemberAccess",
                            "src": "18470:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 1064,
                            "name": "Literal",
                            "src": "18491:1:3"
                          }
                        ],
                        "id": 1065,
                        "name": "BinaryOperation",
                        "src": "18470:22:3"
                      }
                    ],
                    "id": 1066,
                    "name": "VariableDeclarationStatement",
                    "src": "18459:33:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1061,
                              "type": "uint256",
                              "value": "max"
                            },
                            "id": 1067,
                            "name": "Identifier",
                            "src": "18509:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1057,
                              "type": "uint256",
                              "value": "min"
                            },
                            "id": 1068,
                            "name": "Identifier",
                            "src": "18515:3:3"
                          }
                        ],
                        "id": 1069,
                        "name": "BinaryOperation",
                        "src": "18509:9:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                1071
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "mid",
                                  "scope": 1108,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "uint256",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint",
                                      "type": "uint256"
                                    },
                                    "id": 1070,
                                    "name": "ElementaryTypeName",
                                    "src": "18534:4:3"
                                  }
                                ],
                                "id": 1071,
                                "name": "VariableDeclaration",
                                "src": "18534:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "/",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "+",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "+",
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1061,
                                                  "type": "uint256",
                                                  "value": "max"
                                                },
                                                "id": 1072,
                                                "name": "Identifier",
                                                "src": "18546:3:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1057,
                                                  "type": "uint256",
                                                  "value": "min"
                                                },
                                                "id": 1073,
                                                "name": "Identifier",
                                                "src": "18552:3:3"
                                              }
                                            ],
                                            "id": 1074,
                                            "name": "BinaryOperation",
                                            "src": "18546:9:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "31",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 1",
                                              "value": "1"
                                            },
                                            "id": 1075,
                                            "name": "Literal",
                                            "src": "18558:1:3"
                                          }
                                        ],
                                        "id": 1076,
                                        "name": "BinaryOperation",
                                        "src": "18546:13:3"
                                      }
                                    ],
                                    "id": 1077,
                                    "name": "TupleExpression",
                                    "src": "18545:15:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "32",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 2",
                                      "value": "2"
                                    },
                                    "id": 1078,
                                    "name": "Literal",
                                    "src": "18563:1:3"
                                  }
                                ],
                                "id": 1079,
                                "name": "BinaryOperation",
                                "src": "18545:19:3"
                              }
                            ],
                            "id": 1080,
                            "name": "VariableDeclarationStatement",
                            "src": "18534:30:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "<=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "fromBlock",
                                      "referencedDeclaration": 232,
                                      "type": "uint128"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ExpositoProject.Checkpoint storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1015,
                                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                              "value": "checkpoints"
                                            },
                                            "id": 1081,
                                            "name": "Identifier",
                                            "src": "18582:11:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1071,
                                              "type": "uint256",
                                              "value": "mid"
                                            },
                                            "id": 1082,
                                            "name": "Identifier",
                                            "src": "18594:3:3"
                                          }
                                        ],
                                        "id": 1083,
                                        "name": "IndexAccess",
                                        "src": "18582:16:3"
                                      }
                                    ],
                                    "id": 1084,
                                    "name": "MemberAccess",
                                    "src": "18582:26:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1017,
                                      "type": "uint256",
                                      "value": "_block"
                                    },
                                    "id": 1085,
                                    "name": "Identifier",
                                    "src": "18612:6:3"
                                  }
                                ],
                                "id": 1086,
                                "name": "BinaryOperation",
                                "src": "18582:36:3"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "=",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1057,
                                              "type": "uint256",
                                              "value": "min"
                                            },
                                            "id": 1087,
                                            "name": "Identifier",
                                            "src": "18638:3:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1071,
                                              "type": "uint256",
                                              "value": "mid"
                                            },
                                            "id": 1088,
                                            "name": "Identifier",
                                            "src": "18644:3:3"
                                          }
                                        ],
                                        "id": 1089,
                                        "name": "Assignment",
                                        "src": "18638:9:3"
                                      }
                                    ],
                                    "id": 1090,
                                    "name": "ExpressionStatement",
                                    "src": "18638:9:3"
                                  }
                                ],
                                "id": 1091,
                                "name": "Block",
                                "src": "18620:42:3"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "=",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1061,
                                              "type": "uint256",
                                              "value": "max"
                                            },
                                            "id": 1092,
                                            "name": "Identifier",
                                            "src": "18686:3:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "-",
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1071,
                                                  "type": "uint256",
                                                  "value": "mid"
                                                },
                                                "id": 1093,
                                                "name": "Identifier",
                                                "src": "18692:3:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "hexvalue": "31",
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "subdenomination": null,
                                                  "token": "number",
                                                  "type": "int_const 1",
                                                  "value": "1"
                                                },
                                                "id": 1094,
                                                "name": "Literal",
                                                "src": "18696:1:3"
                                              }
                                            ],
                                            "id": 1095,
                                            "name": "BinaryOperation",
                                            "src": "18692:5:3"
                                          }
                                        ],
                                        "id": 1096,
                                        "name": "Assignment",
                                        "src": "18686:11:3"
                                      }
                                    ],
                                    "id": 1097,
                                    "name": "ExpressionStatement",
                                    "src": "18686:11:3"
                                  }
                                ],
                                "id": 1098,
                                "name": "Block",
                                "src": "18668:44:3"
                              }
                            ],
                            "id": 1099,
                            "name": "IfStatement",
                            "src": "18578:134:3"
                          }
                        ],
                        "id": 1100,
                        "name": "Block",
                        "src": "18520:202:3"
                      }
                    ],
                    "id": 1101,
                    "name": "WhileStatement",
                    "src": "18502:220:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1021
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "value",
                          "referencedDeclaration": 234,
                          "type": "uint128"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct ExpositoProject.Checkpoint storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1015,
                                  "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                  "value": "checkpoints"
                                },
                                "id": 1102,
                                "name": "Identifier",
                                "src": "18738:11:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1057,
                                  "type": "uint256",
                                  "value": "min"
                                },
                                "id": 1103,
                                "name": "Identifier",
                                "src": "18750:3:3"
                              }
                            ],
                            "id": 1104,
                            "name": "IndexAccess",
                            "src": "18738:16:3"
                          }
                        ],
                        "id": 1105,
                        "name": "MemberAccess",
                        "src": "18738:22:3"
                      }
                    ],
                    "id": 1106,
                    "name": "Return",
                    "src": "18731:29:3"
                  }
                ],
                "id": 1107,
                "name": "Block",
                "src": "18074:693:3"
              }
            ],
            "id": 1108,
            "name": "FunctionDefinition",
            "src": "17969:798:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "updateValueAtNow",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "checkpoints",
                      "scope": 1179,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Checkpoint",
                              "referencedDeclaration": 235,
                              "type": "struct ExpositoProject.Checkpoint storage pointer"
                            },
                            "id": 1109,
                            "name": "UserDefinedTypeName",
                            "src": "19033:10:3"
                          }
                        ],
                        "id": 1110,
                        "name": "ArrayTypeName",
                        "src": "19033:12:3"
                      }
                    ],
                    "id": 1111,
                    "name": "VariableDeclaration",
                    "src": "19033:32:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 1179,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1112,
                        "name": "ElementaryTypeName",
                        "src": "19067:4:3"
                      }
                    ],
                    "id": 1113,
                    "name": "VariableDeclaration",
                    "src": "19067:11:3"
                  }
                ],
                "id": 1114,
                "name": "ParameterList",
                "src": "19032:52:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1115,
                "name": "ParameterList",
                "src": "19095:0:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1111,
                                          "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                          "value": "checkpoints"
                                        },
                                        "id": 1116,
                                        "name": "Identifier",
                                        "src": "19110:11:3"
                                      }
                                    ],
                                    "id": 1117,
                                    "name": "MemberAccess",
                                    "src": "19110:18:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 1118,
                                    "name": "Literal",
                                    "src": "19132:1:3"
                                  }
                                ],
                                "id": 1119,
                                "name": "BinaryOperation",
                                "src": "19110:23:3"
                              }
                            ],
                            "id": 1120,
                            "name": "TupleExpression",
                            "src": "19109:25:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "<",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "fromBlock",
                                      "referencedDeclaration": 232,
                                      "type": "uint128"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ExpositoProject.Checkpoint storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1111,
                                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                              "value": "checkpoints"
                                            },
                                            "id": 1121,
                                            "name": "Identifier",
                                            "src": "19147:11:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "-",
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "length",
                                                  "referencedDeclaration": null,
                                                  "type": "uint256"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1111,
                                                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                                      "value": "checkpoints"
                                                    },
                                                    "id": 1122,
                                                    "name": "Identifier",
                                                    "src": "19159:11:3"
                                                  }
                                                ],
                                                "id": 1123,
                                                "name": "MemberAccess",
                                                "src": "19159:18:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "hexvalue": "31",
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "subdenomination": null,
                                                  "token": "number",
                                                  "type": "int_const 1",
                                                  "value": "1"
                                                },
                                                "id": 1124,
                                                "name": "Literal",
                                                "src": "19180:1:3"
                                              }
                                            ],
                                            "id": 1125,
                                            "name": "BinaryOperation",
                                            "src": "19159:22:3"
                                          }
                                        ],
                                        "id": 1126,
                                        "name": "IndexAccess",
                                        "src": "19147:35:3"
                                      }
                                    ],
                                    "id": 1127,
                                    "name": "MemberAccess",
                                    "src": "19147:45:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "number",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1403,
                                          "type": "block",
                                          "value": "block"
                                        },
                                        "id": 1128,
                                        "name": "Identifier",
                                        "src": "19195:5:3"
                                      }
                                    ],
                                    "id": 1129,
                                    "name": "MemberAccess",
                                    "src": "19195:12:3"
                                  }
                                ],
                                "id": 1130,
                                "name": "BinaryOperation",
                                "src": "19147:60:3"
                              }
                            ],
                            "id": 1131,
                            "name": "TupleExpression",
                            "src": "19146:62:3"
                          }
                        ],
                        "id": 1132,
                        "name": "BinaryOperation",
                        "src": "19109:99:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                1134
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "newCheckPoint",
                                  "scope": 1179,
                                  "stateVariable": false,
                                  "storageLocation": "storage",
                                  "type": "struct ExpositoProject.Checkpoint storage pointer",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "contractScope": null,
                                      "name": "Checkpoint",
                                      "referencedDeclaration": 235,
                                      "type": "struct ExpositoProject.Checkpoint storage pointer"
                                    },
                                    "id": 1133,
                                    "name": "UserDefinedTypeName",
                                    "src": "19227:10:3"
                                  }
                                ],
                                "id": 1134,
                                "name": "VariableDeclaration",
                                "src": "19227:32:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ExpositoProject.Checkpoint storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1111,
                                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                      "value": "checkpoints"
                                    },
                                    "id": 1135,
                                    "name": "Identifier",
                                    "src": "19262:11:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "++",
                                      "prefix": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "member_name": "length",
                                          "referencedDeclaration": null,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1111,
                                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                              "value": "checkpoints"
                                            },
                                            "id": 1136,
                                            "name": "Identifier",
                                            "src": "19275:11:3"
                                          }
                                        ],
                                        "id": 1137,
                                        "name": "MemberAccess",
                                        "src": "19275:18:3"
                                      }
                                    ],
                                    "id": 1138,
                                    "name": "UnaryOperation",
                                    "src": "19275:20:3"
                                  }
                                ],
                                "id": 1139,
                                "name": "IndexAccess",
                                "src": "19262:35:3"
                              }
                            ],
                            "id": 1140,
                            "name": "VariableDeclarationStatement",
                            "src": "19227:70:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint128"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "fromBlock",
                                      "referencedDeclaration": 232,
                                      "type": "uint128"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1134,
                                          "type": "struct ExpositoProject.Checkpoint storage pointer",
                                          "value": "newCheckPoint"
                                        },
                                        "id": 1141,
                                        "name": "Identifier",
                                        "src": "19314:13:3"
                                      }
                                    ],
                                    "id": 1143,
                                    "name": "MemberAccess",
                                    "src": "19314:23:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint128",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint128)",
                                          "value": "uint128"
                                        },
                                        "id": 1144,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "19340:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "number",
                                          "referencedDeclaration": null,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1403,
                                              "type": "block",
                                              "value": "block"
                                            },
                                            "id": 1145,
                                            "name": "Identifier",
                                            "src": "19348:5:3"
                                          }
                                        ],
                                        "id": 1146,
                                        "name": "MemberAccess",
                                        "src": "19348:12:3"
                                      }
                                    ],
                                    "id": 1147,
                                    "name": "FunctionCall",
                                    "src": "19340:21:3"
                                  }
                                ],
                                "id": 1148,
                                "name": "Assignment",
                                "src": "19314:47:3"
                              }
                            ],
                            "id": 1149,
                            "name": "ExpressionStatement",
                            "src": "19314:47:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint128"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "value",
                                      "referencedDeclaration": 234,
                                      "type": "uint128"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1134,
                                          "type": "struct ExpositoProject.Checkpoint storage pointer",
                                          "value": "newCheckPoint"
                                        },
                                        "id": 1150,
                                        "name": "Identifier",
                                        "src": "19378:13:3"
                                      }
                                    ],
                                    "id": 1152,
                                    "name": "MemberAccess",
                                    "src": "19378:19:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint128",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint128)",
                                          "value": "uint128"
                                        },
                                        "id": 1153,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "19400:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1113,
                                          "type": "uint256",
                                          "value": "_value"
                                        },
                                        "id": 1154,
                                        "name": "Identifier",
                                        "src": "19408:6:3"
                                      }
                                    ],
                                    "id": 1155,
                                    "name": "FunctionCall",
                                    "src": "19400:15:3"
                                  }
                                ],
                                "id": 1156,
                                "name": "Assignment",
                                "src": "19378:37:3"
                              }
                            ],
                            "id": 1157,
                            "name": "ExpressionStatement",
                            "src": "19378:37:3"
                          }
                        ],
                        "id": 1158,
                        "name": "Block",
                        "src": "19210:219:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                1160
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "oldCheckPoint",
                                  "scope": 1179,
                                  "stateVariable": false,
                                  "storageLocation": "storage",
                                  "type": "struct ExpositoProject.Checkpoint storage pointer",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "contractScope": null,
                                      "name": "Checkpoint",
                                      "referencedDeclaration": 235,
                                      "type": "struct ExpositoProject.Checkpoint storage pointer"
                                    },
                                    "id": 1159,
                                    "name": "UserDefinedTypeName",
                                    "src": "19452:10:3"
                                  }
                                ],
                                "id": 1160,
                                "name": "VariableDeclaration",
                                "src": "19452:32:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct ExpositoProject.Checkpoint storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1111,
                                      "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                      "value": "checkpoints"
                                    },
                                    "id": 1161,
                                    "name": "Identifier",
                                    "src": "19487:11:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "-",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "length",
                                          "referencedDeclaration": null,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1111,
                                              "type": "struct ExpositoProject.Checkpoint storage ref[] storage pointer",
                                              "value": "checkpoints"
                                            },
                                            "id": 1162,
                                            "name": "Identifier",
                                            "src": "19499:11:3"
                                          }
                                        ],
                                        "id": 1163,
                                        "name": "MemberAccess",
                                        "src": "19499:18:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "31",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 1",
                                          "value": "1"
                                        },
                                        "id": 1164,
                                        "name": "Literal",
                                        "src": "19518:1:3"
                                      }
                                    ],
                                    "id": 1165,
                                    "name": "BinaryOperation",
                                    "src": "19499:20:3"
                                  }
                                ],
                                "id": 1166,
                                "name": "IndexAccess",
                                "src": "19487:33:3"
                              }
                            ],
                            "id": 1167,
                            "name": "VariableDeclarationStatement",
                            "src": "19452:68:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint128"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "value",
                                      "referencedDeclaration": 234,
                                      "type": "uint128"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1160,
                                          "type": "struct ExpositoProject.Checkpoint storage pointer",
                                          "value": "oldCheckPoint"
                                        },
                                        "id": 1168,
                                        "name": "Identifier",
                                        "src": "19537:13:3"
                                      }
                                    ],
                                    "id": 1170,
                                    "name": "MemberAccess",
                                    "src": "19537:19:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint128",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint128)",
                                          "value": "uint128"
                                        },
                                        "id": 1171,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "19559:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1113,
                                          "type": "uint256",
                                          "value": "_value"
                                        },
                                        "id": 1172,
                                        "name": "Identifier",
                                        "src": "19567:6:3"
                                      }
                                    ],
                                    "id": 1173,
                                    "name": "FunctionCall",
                                    "src": "19559:15:3"
                                  }
                                ],
                                "id": 1174,
                                "name": "Assignment",
                                "src": "19537:37:3"
                              }
                            ],
                            "id": 1175,
                            "name": "ExpressionStatement",
                            "src": "19537:37:3"
                          }
                        ],
                        "id": 1176,
                        "name": "Block",
                        "src": "19435:153:3"
                      }
                    ],
                    "id": 1177,
                    "name": "IfStatement",
                    "src": "19105:483:3"
                  }
                ],
                "id": 1178,
                "name": "Block",
                "src": "19095:499:3"
              }
            ],
            "id": 1179,
            "name": "FunctionDefinition",
            "src": "19007:587:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isContract",
              "payable": false,
              "scope": 1320,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_addr",
                      "scope": 1201,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1180,
                        "name": "ElementaryTypeName",
                        "src": "19801:7:3"
                      }
                    ],
                    "id": 1181,
                    "name": "VariableDeclaration",
                    "src": "19801:13:3"
                  }
                ],
                "id": 1182,
                "name": "ParameterList",
                "src": "19800:15:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1201,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 1183,
                        "name": "ElementaryTypeName",
                        "src": "19842:4:3"
                      }
                    ],
                    "id": 1184,
                    "name": "VariableDeclaration",
                    "src": "19842:4:3"
                  }
                ],
                "id": 1185,
                "name": "ParameterList",
                "src": "19841:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "size",
                          "scope": 1201,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 1186,
                            "name": "ElementaryTypeName",
                            "src": "19858:4:3"
                          }
                        ],
                        "id": 1187,
                        "name": "VariableDeclaration",
                        "src": "19858:9:3"
                      }
                    ],
                    "id": 1188,
                    "name": "VariableDeclarationStatement",
                    "src": "19858:9:3"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1181,
                              "type": "address",
                              "value": "_addr"
                            },
                            "id": 1189,
                            "name": "Identifier",
                            "src": "19881:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 1190,
                            "name": "Literal",
                            "src": "19890:1:3"
                          }
                        ],
                        "id": 1191,
                        "name": "BinaryOperation",
                        "src": "19881:10:3"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 1185
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 1192,
                            "name": "Literal",
                            "src": "19913:5:3"
                          }
                        ],
                        "id": 1193,
                        "name": "Return",
                        "src": "19906:12:3"
                      }
                    ],
                    "id": 1194,
                    "name": "IfStatement",
                    "src": "19877:41:3"
                  },
                  {
                    "attributes": {
                      "externalReferences": [
                        {
                          "size": {
                            "declaration": 1187,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "19952:4:3",
                            "valueSize": 1
                          }
                        },
                        {
                          "_addr": {
                            "declaration": 1181,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "19972:5:3",
                            "valueSize": 1
                          }
                        }
                      ],
                      "operations": "{\n    size := extcodesize(_addr)\n}"
                    },
                    "children": [],
                    "id": 1195,
                    "name": "InlineAssembly",
                    "src": "19929:74:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1185
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1187,
                              "type": "uint256",
                              "value": "size"
                            },
                            "id": 1196,
                            "name": "Identifier",
                            "src": "20004:4:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 1197,
                            "name": "Literal",
                            "src": "20011:1:3"
                          }
                        ],
                        "id": 1198,
                        "name": "BinaryOperation",
                        "src": "20004:8:3"
                      }
                    ],
                    "id": 1199,
                    "name": "Return",
                    "src": "19997:15:3"
                  }
                ],
                "id": 1200,
                "name": "Block",
                "src": "19848:171:3"
              }
            ],
            "id": 1201,
            "name": "FunctionDefinition",
            "src": "19781:238:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "min",
              "payable": false,
              "scope": 1320,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 1218,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1202,
                        "name": "ElementaryTypeName",
                        "src": "20107:4:3"
                      }
                    ],
                    "id": 1203,
                    "name": "VariableDeclaration",
                    "src": "20107:6:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 1218,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1204,
                        "name": "ElementaryTypeName",
                        "src": "20115:4:3"
                      }
                    ],
                    "id": 1205,
                    "name": "VariableDeclaration",
                    "src": "20115:6:3"
                  }
                ],
                "id": 1206,
                "name": "ParameterList",
                "src": "20106:16:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1218,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1207,
                        "name": "ElementaryTypeName",
                        "src": "20146:4:3"
                      }
                    ],
                    "id": 1208,
                    "name": "VariableDeclaration",
                    "src": "20146:4:3"
                  }
                ],
                "id": 1209,
                "name": "ParameterList",
                "src": "20145:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1209
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1203,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 1210,
                                "name": "Identifier",
                                "src": "20169:1:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1205,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 1211,
                                "name": "Identifier",
                                "src": "20173:1:3"
                              }
                            ],
                            "id": 1212,
                            "name": "BinaryOperation",
                            "src": "20169:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1203,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 1213,
                            "name": "Identifier",
                            "src": "20177:1:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1205,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 1214,
                            "name": "Identifier",
                            "src": "20181:1:3"
                          }
                        ],
                        "id": 1215,
                        "name": "Conditional",
                        "src": "20169:13:3"
                      }
                    ],
                    "id": 1216,
                    "name": "Return",
                    "src": "20162:20:3"
                  }
                ],
                "id": 1217,
                "name": "Block",
                "src": "20152:37:3"
              }
            ],
            "id": 1218,
            "name": "FunctionDefinition",
            "src": "20094:95:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "",
              "payable": true,
              "scope": 1320,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1219,
                "name": "ParameterList",
                "src": "20457:2:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1220,
                "name": "ParameterList",
                "src": "20475:0:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1221,
                            "name": "Identifier",
                            "src": "20485:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1201,
                                  "type": "function (address) view returns (bool)",
                                  "value": "isContract"
                                },
                                "id": 1222,
                                "name": "Identifier",
                                "src": "20493:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14,
                                  "type": "address",
                                  "value": "controller"
                                },
                                "id": 1223,
                                "name": "Identifier",
                                "src": "20504:10:3"
                              }
                            ],
                            "id": 1224,
                            "name": "FunctionCall",
                            "src": "20493:22:3"
                          }
                        ],
                        "id": 1225,
                        "name": "FunctionCall",
                        "src": "20485:31:3"
                      }
                    ],
                    "id": 1226,
                    "name": "ExpressionStatement",
                    "src": "20485:31:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1414,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1227,
                            "name": "Identifier",
                            "src": "20526:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "function (address) payable external returns (bool)",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "value",
                                      "referencedDeclaration": null,
                                      "type": "function (uint256) returns (function (address) payable external returns (bool))"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "proxyPayment",
                                          "referencedDeclaration": 1376,
                                          "type": "function (address) payable external returns (bool)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "contract TokenController",
                                              "type_conversion": true
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1399,
                                                  "type": "type(contract TokenController)",
                                                  "value": "TokenController"
                                                },
                                                "id": 1228,
                                                "name": "Identifier",
                                                "src": "20534:15:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 14,
                                                  "type": "address",
                                                  "value": "controller"
                                                },
                                                "id": 1229,
                                                "name": "Identifier",
                                                "src": "20550:10:3"
                                              }
                                            ],
                                            "id": 1230,
                                            "name": "FunctionCall",
                                            "src": "20534:27:3"
                                          }
                                        ],
                                        "id": 1231,
                                        "name": "MemberAccess",
                                        "src": "20534:40:3"
                                      }
                                    ],
                                    "id": 1232,
                                    "name": "MemberAccess",
                                    "src": "20534:46:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "value",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1411,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 1233,
                                        "name": "Identifier",
                                        "src": "20581:3:3"
                                      }
                                    ],
                                    "id": 1234,
                                    "name": "MemberAccess",
                                    "src": "20581:9:3"
                                  }
                                ],
                                "id": 1235,
                                "name": "FunctionCall",
                                "src": "20534:57:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1411,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 1236,
                                    "name": "Identifier",
                                    "src": "20592:3:3"
                                  }
                                ],
                                "id": 1237,
                                "name": "MemberAccess",
                                "src": "20592:10:3"
                              }
                            ],
                            "id": 1238,
                            "name": "FunctionCall",
                            "src": "20534:69:3"
                          }
                        ],
                        "id": 1239,
                        "name": "FunctionCall",
                        "src": "20526:78:3"
                      }
                    ],
                    "id": 1240,
                    "name": "ExpressionStatement",
                    "src": "20526:78:3"
                  }
                ],
                "id": 1241,
                "name": "Block",
                "src": "20475:136:3"
              }
            ],
            "id": 1242,
            "name": "FunctionDefinition",
            "src": "20448:163:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "claimTokens",
              "payable": false,
              "scope": 1320,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_token",
                      "scope": 1289,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1243,
                        "name": "ElementaryTypeName",
                        "src": "20906:7:3"
                      }
                    ],
                    "id": 1244,
                    "name": "VariableDeclaration",
                    "src": "20906:14:3"
                  }
                ],
                "id": 1245,
                "name": "ParameterList",
                "src": "20905:16:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1248,
                "name": "ParameterList",
                "src": "20944:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 12,
                      "type": "modifier ()",
                      "value": "onlyController"
                    },
                    "id": 1246,
                    "name": "Identifier",
                    "src": "20929:14:3"
                  }
                ],
                "id": 1247,
                "name": "ModifierInvocation",
                "src": "20929:14:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1244,
                              "type": "address",
                              "value": "_token"
                            },
                            "id": 1249,
                            "name": "Identifier",
                            "src": "20958:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0x0"
                            },
                            "id": 1250,
                            "name": "Literal",
                            "src": "20968:3:3"
                          }
                        ],
                        "id": 1251,
                        "name": "BinaryOperation",
                        "src": "20958:13:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "transfer",
                                      "referencedDeclaration": null,
                                      "type": "function (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 14,
                                          "type": "address",
                                          "value": "controller"
                                        },
                                        "id": 1252,
                                        "name": "Identifier",
                                        "src": "20987:10:3"
                                      }
                                    ],
                                    "id": 1254,
                                    "name": "MemberAccess",
                                    "src": "20987:19:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "balance",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1434,
                                          "type": "contract ExpositoProject",
                                          "value": "this"
                                        },
                                        "id": 1255,
                                        "name": "Identifier",
                                        "src": "21007:4:3"
                                      }
                                    ],
                                    "id": 1256,
                                    "name": "MemberAccess",
                                    "src": "21007:12:3"
                                  }
                                ],
                                "id": 1257,
                                "name": "FunctionCall",
                                "src": "20987:33:3"
                              }
                            ],
                            "id": 1258,
                            "name": "ExpressionStatement",
                            "src": "20987:33:3"
                          },
                          {
                            "attributes": {
                              "expression": null,
                              "functionReturnParameters": 1248
                            },
                            "id": 1259,
                            "name": "Return",
                            "src": "21034:7:3"
                          }
                        ],
                        "id": 1260,
                        "name": "Block",
                        "src": "20973:78:3"
                      }
                    ],
                    "id": 1261,
                    "name": "IfStatement",
                    "src": "20954:97:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1263
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "token",
                          "scope": 1289,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract ExpositoProject",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "ExpositoProject",
                              "referencedDeclaration": 1320,
                              "type": "contract ExpositoProject"
                            },
                            "id": 1262,
                            "name": "UserDefinedTypeName",
                            "src": "21061:15:3"
                          }
                        ],
                        "id": 1263,
                        "name": "VariableDeclaration",
                        "src": "21061:21:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "contract ExpositoProject",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1320,
                              "type": "type(contract ExpositoProject)",
                              "value": "ExpositoProject"
                            },
                            "id": 1264,
                            "name": "Identifier",
                            "src": "21085:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1244,
                              "type": "address",
                              "value": "_token"
                            },
                            "id": 1265,
                            "name": "Identifier",
                            "src": "21101:6:3"
                          }
                        ],
                        "id": 1266,
                        "name": "FunctionCall",
                        "src": "21085:23:3"
                      }
                    ],
                    "id": 1267,
                    "name": "VariableDeclarationStatement",
                    "src": "21061:47:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1269
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "balance",
                          "scope": 1289,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 1268,
                            "name": "ElementaryTypeName",
                            "src": "21118:4:3"
                          }
                        ],
                        "id": 1269,
                        "name": "VariableDeclaration",
                        "src": "21118:12:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ExpositoProject_$1320",
                                  "typeString": "contract ExpositoProject"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "balanceOf",
                              "referencedDeclaration": 581,
                              "type": "function (address) view external returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1263,
                                  "type": "contract ExpositoProject",
                                  "value": "token"
                                },
                                "id": 1270,
                                "name": "Identifier",
                                "src": "21133:5:3"
                              }
                            ],
                            "id": 1271,
                            "name": "MemberAccess",
                            "src": "21133:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1434,
                              "type": "contract ExpositoProject",
                              "value": "this"
                            },
                            "id": 1272,
                            "name": "Identifier",
                            "src": "21149:4:3"
                          }
                        ],
                        "id": 1273,
                        "name": "FunctionCall",
                        "src": "21133:21:3"
                      }
                    ],
                    "id": 1274,
                    "name": "VariableDeclarationStatement",
                    "src": "21118:36:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transfer",
                              "referencedDeclaration": 377,
                              "type": "function (address,uint256) external returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1263,
                                  "type": "contract ExpositoProject",
                                  "value": "token"
                                },
                                "id": 1275,
                                "name": "Identifier",
                                "src": "21164:5:3"
                              }
                            ],
                            "id": 1277,
                            "name": "MemberAccess",
                            "src": "21164:14:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14,
                              "type": "address",
                              "value": "controller"
                            },
                            "id": 1278,
                            "name": "Identifier",
                            "src": "21179:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1269,
                              "type": "uint256",
                              "value": "balance"
                            },
                            "id": 1279,
                            "name": "Identifier",
                            "src": "21191:7:3"
                          }
                        ],
                        "id": 1280,
                        "name": "FunctionCall",
                        "src": "21164:35:3"
                      }
                    ],
                    "id": 1281,
                    "name": "ExpressionStatement",
                    "src": "21164:35:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1297,
                              "type": "function (address,address,uint256)",
                              "value": "ClaimedTokens"
                            },
                            "id": 1282,
                            "name": "Identifier",
                            "src": "21209:13:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1244,
                              "type": "address",
                              "value": "_token"
                            },
                            "id": 1283,
                            "name": "Identifier",
                            "src": "21223:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14,
                              "type": "address",
                              "value": "controller"
                            },
                            "id": 1284,
                            "name": "Identifier",
                            "src": "21231:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1269,
                              "type": "uint256",
                              "value": "balance"
                            },
                            "id": 1285,
                            "name": "Identifier",
                            "src": "21243:7:3"
                          }
                        ],
                        "id": 1286,
                        "name": "FunctionCall",
                        "src": "21209:42:3"
                      }
                    ],
                    "id": 1287,
                    "name": "ExpressionStatement",
                    "src": "21209:42:3"
                  }
                ],
                "id": 1288,
                "name": "Block",
                "src": "20944:314:3"
              }
            ],
            "id": 1289,
            "name": "FunctionDefinition",
            "src": "20885:373:3"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "ClaimedTokens"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_token",
                      "scope": 1297,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1290,
                        "name": "ElementaryTypeName",
                        "src": "21285:7:3"
                      }
                    ],
                    "id": 1291,
                    "name": "VariableDeclaration",
                    "src": "21285:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_controller",
                      "scope": 1297,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1292,
                        "name": "ElementaryTypeName",
                        "src": "21309:7:3"
                      }
                    ],
                    "id": 1293,
                    "name": "VariableDeclaration",
                    "src": "21309:27:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_amount",
                      "scope": 1297,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1294,
                        "name": "ElementaryTypeName",
                        "src": "21338:4:3"
                      }
                    ],
                    "id": 1295,
                    "name": "VariableDeclaration",
                    "src": "21338:12:3"
                  }
                ],
                "id": 1296,
                "name": "ParameterList",
                "src": "21284:67:3"
              }
            ],
            "id": 1297,
            "name": "EventDefinition",
            "src": "21265:87:3"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_from",
                      "scope": 1305,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1298,
                        "name": "ElementaryTypeName",
                        "src": "21372:7:3"
                      }
                    ],
                    "id": 1299,
                    "name": "VariableDeclaration",
                    "src": "21372:21:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 1305,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1300,
                        "name": "ElementaryTypeName",
                        "src": "21395:7:3"
                      }
                    ],
                    "id": 1301,
                    "name": "VariableDeclaration",
                    "src": "21395:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_amount",
                      "scope": 1305,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1302,
                        "name": "ElementaryTypeName",
                        "src": "21416:7:3"
                      }
                    ],
                    "id": 1303,
                    "name": "VariableDeclaration",
                    "src": "21416:15:3"
                  }
                ],
                "id": 1304,
                "name": "ParameterList",
                "src": "21371:61:3"
              }
            ],
            "id": 1305,
            "name": "EventDefinition",
            "src": "21357:76:3"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "NewCloneToken"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_cloneToken",
                      "scope": 1311,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1306,
                        "name": "ElementaryTypeName",
                        "src": "21458:7:3"
                      }
                    ],
                    "id": 1307,
                    "name": "VariableDeclaration",
                    "src": "21458:27:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_snapshotBlock",
                      "scope": 1311,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1308,
                        "name": "ElementaryTypeName",
                        "src": "21487:4:3"
                      }
                    ],
                    "id": 1309,
                    "name": "VariableDeclaration",
                    "src": "21487:19:3"
                  }
                ],
                "id": 1310,
                "name": "ParameterList",
                "src": "21457:50:3"
              }
            ],
            "id": 1311,
            "name": "EventDefinition",
            "src": "21438:70:3"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 1319,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1312,
                        "name": "ElementaryTypeName",
                        "src": "21537:7:3"
                      }
                    ],
                    "id": 1313,
                    "name": "VariableDeclaration",
                    "src": "21537:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_spender",
                      "scope": 1319,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1314,
                        "name": "ElementaryTypeName",
                        "src": "21569:7:3"
                      }
                    ],
                    "id": 1315,
                    "name": "VariableDeclaration",
                    "src": "21569:24:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_amount",
                      "scope": 1319,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1316,
                        "name": "ElementaryTypeName",
                        "src": "21603:7:3"
                      }
                    ],
                    "id": 1317,
                    "name": "VariableDeclaration",
                    "src": "21603:15:3"
                  }
                ],
                "id": 1318,
                "name": "ParameterList",
                "src": "21527:101:3"
              }
            ],
            "id": 1319,
            "name": "EventDefinition",
            "src": "21513:116:3"
          }
        ],
        "id": 1320,
        "name": "ContractDefinition",
        "src": "816:20816:3"
      }
    ],
    "id": 1321,
    "name": "SourceUnit",
    "src": "0:21634:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-31T02:17:06.701Z"
}