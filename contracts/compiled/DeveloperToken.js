export default {
  "contractName": "DeveloperToken",
  "abi": [
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
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
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
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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
      "name": "creationTimestamp",
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
      "inputs": [
        {
          "name": "_supplyAmount",
          "type": "uint256"
        },
        {
          "name": "_balanceAddresses",
          "type": "address[]"
        },
        {
          "name": "_balanceAmounts",
          "type": "uint256[]"
        },
        {
          "name": "_decimalUnits",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x60606040526040805190810160405280600581526020017f302e302e310000000000000000000000000000000000000000000000000000008152506000908051906020019061004f929190610167565b50341561005b57600080fd5b60405161058b38038061058b833981016040528080519060200190919080518201919060200180518201919060200180519060200190919050506000825184511415156100a757600080fd5b426001819055508460028190555081600460006101000a81548160ff021916908360ff160217905550600090505b835181101561015d5782818151811015156100ec57fe5b9060200190602002015160036000868481518110151561010857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080806001019150506100d5565b505050505061020c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101a857805160ff19168380011785556101d6565b828001600101855582156101d6579182015b828111156101d55782518255916020019190600101906101ba565b5b5090506101e391906101e7565b5090565b61020991905b808211156102055760008160009055506001016101ed565b5090565b90565b6103708061021b6000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461007d57806327e235e3146100a6578063313ce567146100f357806354fd4d501461012257806370a08231146101b0578063b3311086146101fd575b600080fd5b341561008857600080fd5b610090610226565b6040518082815260200191505060405180910390f35b34156100b157600080fd5b6100dd600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061022c565b6040518082815260200191505060405180910390f35b34156100fe57600080fd5b610106610244565b604051808260ff1660ff16815260200191505060405180910390f35b341561012d57600080fd5b610135610257565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017557808201518184015260208101905061015a565b50505050905090810190601f1680156101a25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bb57600080fd5b6101e7600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102f5565b6040518082815260200191505060405180910390f35b341561020857600080fd5b61021061033e565b6040518082815260200191505060405180910390f35b60025481565b60036020528060005260406000206000915090505481565b600460009054906101000a900460ff1681565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b505050505081565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600154815600a165627a7a723058203e1f74b3b1482260376c9421adbb7340f9fc90f26ea384aee394c17693fafd9d0029",
  "deployedBytecode": "0x606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461007d57806327e235e3146100a6578063313ce567146100f357806354fd4d501461012257806370a08231146101b0578063b3311086146101fd575b600080fd5b341561008857600080fd5b610090610226565b6040518082815260200191505060405180910390f35b34156100b157600080fd5b6100dd600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061022c565b6040518082815260200191505060405180910390f35b34156100fe57600080fd5b610106610244565b604051808260ff1660ff16815260200191505060405180910390f35b341561012d57600080fd5b610135610257565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017557808201518184015260208101905061015a565b50505050905090810190601f1680156101a25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bb57600080fd5b6101e7600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102f5565b6040518082815260200191505060405180910390f35b341561020857600080fd5b61021061033e565b6040518082815260200191505060405180910390f35b60025481565b60036020528060005260406000206000915090505481565b600460009054906101000a900460ff1681565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b505050505081565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600154815600a165627a7a723058203e1f74b3b1482260376c9421adbb7340f9fc90f26ea384aee394c17693fafd9d0029",
  "sourceMap": "407:1345:1:-;;;474:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1128:502;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1501:6;1343:15;:22;1315:17;:24;:50;1307:59;;;;;;;;1397:3;1377:17;:23;;;;1424:13;1410:11;:27;;;;1463:13;1452:8;;:24;;;;;;;;;;;;;;;;;;1510:1;1501:10;;1496:128;1517:17;:24;1513:1;:28;1496:128;;;1595:15;1611:1;1595:18;;;;;;;;;;;;;;;;;;1562:8;:30;1571:17;1589:1;1571:20;;;;;;;;;;;;;;;;;;1562:30;;;;;;;;;;;;;;;:51;;;;1543:3;;;;;;;1496:128;;;1128:502;;;;;407:1345;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "407:1345:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;629:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;698:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;786:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;474:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1636:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;559:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;629:26;;;;:::o;698:44::-;;;;;;;;;;;;;;;;;:::o;786:21::-;;;;;;;;;;;;;:::o;474:31::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1636:113::-;1692:15;1726:8;:16;1735:6;1726:16;;;;;;;;;;;;;;;;1719:23;;1636:113;;;:::o;559:29::-;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\n\n/** \n *  Represents the coding shares associated to an ExpositoProject.\n *  Coding shares are distributed proportionally to each developer who contributed to the\n *  project. Since those contributions change over time, the tokens are redistributed\n *  periodically. Thus, they give all the rights of a standard token except they cannot be \n *  transfered by their owner.    \n */\ncontract DeveloperToken {        \n\n    /** Contract version */\n    string public version = \"0.0.1\"; \n\n    /** Timestamp of the contract creation */\n    uint public creationTimestamp;\n\n    /** Total number of tokens */\n    uint256 public totalSupply;\n\n    /** Balances of each address */\n    mapping (address => uint256) public balances;\n\n    /** How many decimals to show */\n    uint8 public decimals;                \n\n    uint256 constant private MAX_UINT256 = 2**256 - 1;\n\n    /**\n     * @param _supplyAmount Amount of tokens \n     * @param _balanceAddresses Addresses of owners\n     * @param _balanceAmounts Amount of tokens associated with each owner\n     * @param _decimalUnits How many decimals to show\n     */\n    function DeveloperToken(\n        uint256 _supplyAmount,\n        address[] _balanceAddresses,\n        uint256[] _balanceAmounts,\n        uint8 _decimalUnits\n    ) public {\n        require(_balanceAddresses.length == _balanceAmounts.length);\n\n        creationTimestamp = now;\n        totalSupply = _supplyAmount;     \n        decimals = _decimalUnits;         \n\n        for (uint i = 0; i < _balanceAddresses.length; i++) {\n            balances[_balanceAddresses[i]] = _balanceAmounts[i];\n        }\n    }\n\n    function balanceOf(address _owner) public view returns (uint256 balance) {\n        return balances[_owner];\n    }\n\n}\n",
  "sourcePath": "/home/mathew/workspace/Exposito/api-server/contracts/DeveloperToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/home/mathew/workspace/Exposito/api-server/contracts/DeveloperToken.sol",
      "exportedSymbols": {
        "DeveloperToken": [
          128
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
        "id": 38,
        "name": "PragmaDirective",
        "src": "0:24:1"
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
          "documentation": " Represents the coding shares associated to an ExpositoProject.\n Coding shares are distributed proportionally to each developer who contributed to the\n project. Since those contributions change over time, the tokens are redistributed\n periodically. Thus, they give all the rights of a standard token except they cannot be \n transfered by their owner.    ",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            128
          ],
          "name": "DeveloperToken",
          "scope": 129
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "version",
              "scope": 128,
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
                "id": 39,
                "name": "ElementaryTypeName",
                "src": "474:6:1"
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
                "id": 40,
                "name": "Literal",
                "src": "498:7:1"
              }
            ],
            "id": 41,
            "name": "VariableDeclaration",
            "src": "474:31:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "creationTimestamp",
              "scope": 128,
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
                "id": 42,
                "name": "ElementaryTypeName",
                "src": "559:4:1"
              }
            ],
            "id": 43,
            "name": "VariableDeclaration",
            "src": "559:29:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "totalSupply",
              "scope": 128,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 44,
                "name": "ElementaryTypeName",
                "src": "629:7:1"
              }
            ],
            "id": 45,
            "name": "VariableDeclaration",
            "src": "629:26:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 128,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
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
                    "id": 46,
                    "name": "ElementaryTypeName",
                    "src": "707:7:1"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 47,
                    "name": "ElementaryTypeName",
                    "src": "718:7:1"
                  }
                ],
                "id": 48,
                "name": "Mapping",
                "src": "698:28:1"
              }
            ],
            "id": 49,
            "name": "VariableDeclaration",
            "src": "698:44:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 128,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 50,
                "name": "ElementaryTypeName",
                "src": "786:5:1"
              }
            ],
            "id": 51,
            "name": "VariableDeclaration",
            "src": "786:21:1"
          },
          {
            "attributes": {
              "constant": true,
              "name": "MAX_UINT256",
              "scope": 128,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 52,
                "name": "ElementaryTypeName",
                "src": "830:7:1"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                    "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639935"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "-",
                  "type": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639935"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                        "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639936"
                      },
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "operator": "**",
                      "type": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639936"
                    },
                    "children": [
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
                        "id": 53,
                        "name": "Literal",
                        "src": "869:1:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "323536",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 256",
                          "value": "256"
                        },
                        "id": 54,
                        "name": "Literal",
                        "src": "872:3:1"
                      }
                    ],
                    "id": 55,
                    "name": "BinaryOperation",
                    "src": "869:6:1"
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
                    "id": 56,
                    "name": "Literal",
                    "src": "878:1:1"
                  }
                ],
                "id": 57,
                "name": "BinaryOperation",
                "src": "869:10:1"
              }
            ],
            "id": 58,
            "name": "VariableDeclaration",
            "src": "830:49:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "DeveloperToken",
              "payable": false,
              "scope": 128,
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
                      "name": "_supplyAmount",
                      "scope": 115,
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
                        "id": 59,
                        "name": "ElementaryTypeName",
                        "src": "1161:7:1"
                      }
                    ],
                    "id": 60,
                    "name": "VariableDeclaration",
                    "src": "1161:21:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balanceAddresses",
                      "scope": 115,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 61,
                            "name": "ElementaryTypeName",
                            "src": "1192:7:1"
                          }
                        ],
                        "id": 62,
                        "name": "ArrayTypeName",
                        "src": "1192:9:1"
                      }
                    ],
                    "id": 63,
                    "name": "VariableDeclaration",
                    "src": "1192:27:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balanceAmounts",
                      "scope": 115,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "uint256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 64,
                            "name": "ElementaryTypeName",
                            "src": "1229:7:1"
                          }
                        ],
                        "id": 65,
                        "name": "ArrayTypeName",
                        "src": "1229:9:1"
                      }
                    ],
                    "id": 66,
                    "name": "VariableDeclaration",
                    "src": "1229:25:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_decimalUnits",
                      "scope": 115,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 67,
                        "name": "ElementaryTypeName",
                        "src": "1264:5:1"
                      }
                    ],
                    "id": 68,
                    "name": "VariableDeclaration",
                    "src": "1264:19:1"
                  }
                ],
                "id": 69,
                "name": "ParameterList",
                "src": "1151:138:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 70,
                "name": "ParameterList",
                "src": "1297:0:1"
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
                            "id": 71,
                            "name": "Identifier",
                            "src": "1307:7:1"
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
                              "operator": "==",
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
                                      "referencedDeclaration": 63,
                                      "type": "address[] memory",
                                      "value": "_balanceAddresses"
                                    },
                                    "id": 72,
                                    "name": "Identifier",
                                    "src": "1315:17:1"
                                  }
                                ],
                                "id": 73,
                                "name": "MemberAccess",
                                "src": "1315:24:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
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
                                      "referencedDeclaration": 66,
                                      "type": "uint256[] memory",
                                      "value": "_balanceAmounts"
                                    },
                                    "id": 74,
                                    "name": "Identifier",
                                    "src": "1343:15:1"
                                  }
                                ],
                                "id": 75,
                                "name": "MemberAccess",
                                "src": "1343:22:1"
                              }
                            ],
                            "id": 76,
                            "name": "BinaryOperation",
                            "src": "1315:50:1"
                          }
                        ],
                        "id": 77,
                        "name": "FunctionCall",
                        "src": "1307:59:1"
                      }
                    ],
                    "id": 78,
                    "name": "ExpressionStatement",
                    "src": "1307:59:1"
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
                              "referencedDeclaration": 43,
                              "type": "uint256",
                              "value": "creationTimestamp"
                            },
                            "id": 79,
                            "name": "Identifier",
                            "src": "1377:17:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1413,
                              "type": "uint256",
                              "value": "now"
                            },
                            "id": 80,
                            "name": "Identifier",
                            "src": "1397:3:1"
                          }
                        ],
                        "id": 81,
                        "name": "Assignment",
                        "src": "1377:23:1"
                      }
                    ],
                    "id": 82,
                    "name": "ExpressionStatement",
                    "src": "1377:23:1"
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
                              "referencedDeclaration": 45,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 83,
                            "name": "Identifier",
                            "src": "1410:11:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 60,
                              "type": "uint256",
                              "value": "_supplyAmount"
                            },
                            "id": 84,
                            "name": "Identifier",
                            "src": "1424:13:1"
                          }
                        ],
                        "id": 85,
                        "name": "Assignment",
                        "src": "1410:27:1"
                      }
                    ],
                    "id": 86,
                    "name": "ExpressionStatement",
                    "src": "1410:27:1"
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
                          "type": "uint8"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 51,
                              "type": "uint8",
                              "value": "decimals"
                            },
                            "id": 87,
                            "name": "Identifier",
                            "src": "1452:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 68,
                              "type": "uint8",
                              "value": "_decimalUnits"
                            },
                            "id": 88,
                            "name": "Identifier",
                            "src": "1463:13:1"
                          }
                        ],
                        "id": 89,
                        "name": "Assignment",
                        "src": "1452:24:1"
                      }
                    ],
                    "id": 90,
                    "name": "ExpressionStatement",
                    "src": "1452:24:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            92
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 115,
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
                                "id": 91,
                                "name": "ElementaryTypeName",
                                "src": "1501:4:1"
                              }
                            ],
                            "id": 92,
                            "name": "VariableDeclaration",
                            "src": "1501:6:1"
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
                            "id": 93,
                            "name": "Literal",
                            "src": "1510:1:1"
                          }
                        ],
                        "id": 94,
                        "name": "VariableDeclarationStatement",
                        "src": "1501:10:1"
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
                              "referencedDeclaration": 92,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 95,
                            "name": "Identifier",
                            "src": "1513:1:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
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
                                  "referencedDeclaration": 63,
                                  "type": "address[] memory",
                                  "value": "_balanceAddresses"
                                },
                                "id": 96,
                                "name": "Identifier",
                                "src": "1517:17:1"
                              }
                            ],
                            "id": 97,
                            "name": "MemberAccess",
                            "src": "1517:24:1"
                          }
                        ],
                        "id": 98,
                        "name": "BinaryOperation",
                        "src": "1513:28:1"
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
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 92,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 99,
                                "name": "Identifier",
                                "src": "1543:1:1"
                              }
                            ],
                            "id": 100,
                            "name": "UnaryOperation",
                            "src": "1543:3:1"
                          }
                        ],
                        "id": 101,
                        "name": "ExpressionStatement",
                        "src": "1543:3:1"
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
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 49,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 102,
                                        "name": "Identifier",
                                        "src": "1562:8:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 63,
                                              "type": "address[] memory",
                                              "value": "_balanceAddresses"
                                            },
                                            "id": 103,
                                            "name": "Identifier",
                                            "src": "1571:17:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 92,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 104,
                                            "name": "Identifier",
                                            "src": "1589:1:1"
                                          }
                                        ],
                                        "id": 105,
                                        "name": "IndexAccess",
                                        "src": "1571:20:1"
                                      }
                                    ],
                                    "id": 106,
                                    "name": "IndexAccess",
                                    "src": "1562:30:1"
                                  },
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
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 66,
                                          "type": "uint256[] memory",
                                          "value": "_balanceAmounts"
                                        },
                                        "id": 107,
                                        "name": "Identifier",
                                        "src": "1595:15:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 92,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 108,
                                        "name": "Identifier",
                                        "src": "1611:1:1"
                                      }
                                    ],
                                    "id": 109,
                                    "name": "IndexAccess",
                                    "src": "1595:18:1"
                                  }
                                ],
                                "id": 110,
                                "name": "Assignment",
                                "src": "1562:51:1"
                              }
                            ],
                            "id": 111,
                            "name": "ExpressionStatement",
                            "src": "1562:51:1"
                          }
                        ],
                        "id": 112,
                        "name": "Block",
                        "src": "1548:76:1"
                      }
                    ],
                    "id": 113,
                    "name": "ForStatement",
                    "src": "1496:128:1"
                  }
                ],
                "id": 114,
                "name": "Block",
                "src": "1297:333:1"
              }
            ],
            "id": 115,
            "name": "FunctionDefinition",
            "src": "1128:502:1"
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
              "scope": 128,
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
                      "scope": 127,
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
                        "id": 116,
                        "name": "ElementaryTypeName",
                        "src": "1655:7:1"
                      }
                    ],
                    "id": 117,
                    "name": "VariableDeclaration",
                    "src": "1655:14:1"
                  }
                ],
                "id": 118,
                "name": "ParameterList",
                "src": "1654:16:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 127,
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
                        "id": 119,
                        "name": "ElementaryTypeName",
                        "src": "1692:7:1"
                      }
                    ],
                    "id": 120,
                    "name": "VariableDeclaration",
                    "src": "1692:15:1"
                  }
                ],
                "id": 121,
                "name": "ParameterList",
                "src": "1691:17:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 121
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 49,
                              "type": "mapping(address => uint256)",
                              "value": "balances"
                            },
                            "id": 122,
                            "name": "Identifier",
                            "src": "1726:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 117,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 123,
                            "name": "Identifier",
                            "src": "1735:6:1"
                          }
                        ],
                        "id": 124,
                        "name": "IndexAccess",
                        "src": "1726:16:1"
                      }
                    ],
                    "id": 125,
                    "name": "Return",
                    "src": "1719:23:1"
                  }
                ],
                "id": 126,
                "name": "Block",
                "src": "1709:40:1"
              }
            ],
            "id": 127,
            "name": "FunctionDefinition",
            "src": "1636:113:1"
          }
        ],
        "id": 128,
        "name": "ContractDefinition",
        "src": "407:1345:1"
      }
    ],
    "id": 129,
    "name": "SourceUnit",
    "src": "0:1753:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-31T02:17:06.686Z"
}