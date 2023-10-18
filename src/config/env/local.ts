
export default {
  rpcUrl: "https://eth-goerli.g.alchemy.com/v2/aXCPHCYy28ef5-dwglTqPWsdLW-aJIuu",
  vestingContractAddressRINKEBY: "0x980Ef054b56f80c69AA845b04B33a14cc7a40B46",
  vestingContractABI: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "streamId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "senderBalance",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "recipientBalance",
          "type": "uint256"
        }
      ],
      "name": "CancelStream",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "streamId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deposit",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "stopTime",
          "type": "uint256"
        }
      ],
      "name": "CreateStream",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "streamId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "WithdrawFromStream",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "streamId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "streamId",
          "type": "uint256"
        }
      ],
      "name": "cancelStream",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deposit",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopTime",
          "type": "uint256"
        }
      ],
      "name": "createStream",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "streamId",
          "type": "uint256"
        }
      ],
      "name": "deltaOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "delta",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "streamId",
          "type": "uint256"
        }
      ],
      "name": "getStream",
      "outputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deposit",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "remainingBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "ratePerSecond",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextStreamId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "streamId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawFromStream",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  testNFTContractAddressRINKEBY: "0x687FB9309Bd0E69d5351B4c4D14D81D1F100Cf53",
  testNFTContractABI: [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getAllHistoriesOwner",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        }
      ],
      "name": "getHistoriesOwnedTimeStamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "startOwneredTimeStamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endOwneredTimeStamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numberOfTokens",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "baseURI",
          "type": "string"
        }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenTransferredTimeStampByTokenID",
      "outputs": [
        {
          "internalType": "address",
          "name": "ownerAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "transferredTimeStamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "totalTransferredCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "transferredHistoriesExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  coinToolContractAddress: "0x2dc57167aeA975c86Bc4818e34C1b745e876A301",
  coinToolContractAbi: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousCaller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newCaller",
          "type": "address"
        }
      ],
      "name": "CallerTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "toolIndex",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "payAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ToolUsed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "caller",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "disableMonthVip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "doWork",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "enableMonthVip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "expireTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "from",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "to",
          "type": "uint256"
        }
      ],
      "name": "getRecords",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getRecordsLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isCaller",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "monthSeconds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "monthVipRebateRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nomarlRebateRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "records",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceCaller",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tools",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "monthVipReward",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "enable",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "newCaller",
          "type": "address"
        }
      ],
      "name": "transferCaller",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "vips",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "type_",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "registerTime",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "enable",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nomarlRebateRate_",
          "type": "uint256"
        }
      ],
      "name": "changeNomarlRebateRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "monthVipRebateRate_",
          "type": "uint256"
        }
      ],
      "name": "changeMonthVipRebateRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "removeVip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "isVipValid",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "toolIndex",
          "type": "uint8"
        }
      ],
      "name": "getRequiredFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "toolIndex",
          "type": "uint8"
        },
        {
          "internalType": "address payable",
          "name": "invitor",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "toolEntry",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "monthVipReward",
          "type": "uint256"
        }
      ],
      "name": "addTool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "toolIndex",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "enable",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "monthVipReward",
          "type": "uint256"
        }
      ],
      "name": "changeTool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getToolsLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "from",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "to",
          "type": "uint256"
        }
      ],
      "name": "getTools",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "reward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "monthVipReward",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "enable",
              "type": "bool"
            }
          ],
          "internalType": "struct CoinTools.Tool[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  summonDaoContractAddressGOERLI: "0xceeb2b45a74a4d9f8348f09c33f70cedeb0b7878",
  stewardMangementContractAddressGOERLI: "0x2095ffd55D14D7F0937948f91457bf8A0f30E4e0",
  flexFundingContractAddressGOERLI: "0x083c77d27Bf3e4e1A4b1c1B32B7d7BaEDD7c6225",
  flexPolingVotingContractADDRESSGOERLI: "0x543cD1dAEA2CE48E90aA1De170D482fCBC172eDd",
  flexFundingPoolAdaptContractAddressGOERLI: "0x1A8037d72a9E4B4dc4e0bF2Fe6bD4f6013d298f1",
  Flex_Voting_Adapter_Contract_Address_GOERLI: "0xE1D5C9aDE12ea31Cd2C09f1D55213F6c5AF364fD",
  DAO_ADDRESS_GOERLI: '',
  Flex_Vesting_GOERLI: '0x5eA8274048fbbCd27bDf1DfF4841Af611f430e1b',
  Flex_TEST_USDT_Address_GOERLI: "0x44844Cf72EeaB45D305DBD4C08054E3A027c396C",
  Flex_TEST_RETURN_TOKEN_Address_GOERLI: "0xE3aC90d9aC6ed9074de8CaabF234E5E0a1c308Bc",
  DaoFac_ADDRESS_GOERLI: "0x70050Ae33Ab726bd3Ad89c49532e127ba14E67de",
  FLEX_ManagingContract_GOERLI: "0x352B3E3426D4A6662655BBFab6CE84F36cC0e9bd",
  FlexAllocationAdapterContract_GOERLI: "0x0276Bd6C4D6bd20ee9D4210D1Cc0076B628b15B1",
  FlexERC721_GOERLI: "0xcd59d08df3eF6687F2a2072FFeA3A786b2189226",
  FLex_BEN_TO_BOX_GOERLI: "0x7226a840199E0AC999a1552600B8bAe4cB6160B7",
  FlexFundingPoolFactory_ADDRESS_GOERLI: "0x628fc1512F3a761F77ff6f88904bd5177CaC524b",

  summonDaoContractAddressXDAI: "0xe3771a9b4fa019f37ac1E098339B0151F047D983",
  stewardMangementContractAddressXDAI: "0xa2C4bF6934e2bCc9913253Ff6749365cD35e6816",
  flexFundingContractAddressXDAI: "0x4979a4748EF5ac5d78BE730B06e1eCd9a3617db2",
  flexPolingVotingContractADDRESSXDAI: "0x819d88Bf08d54A06962FD1E153F4B05baBCeBC5f",
  flexFundingPoolAdaptContractAddressXDAI: "0xa1A4e79431717dFef26F91D518BAD33F60c46C39",
  Flex_Voting_Adapter_Contract_Address_XDAI: "0xe8228E826f5f59Baef67bB42f2996ad1B7E16EA2",
  Flex_Vesting_XDAI: '0x75365D2eCCc87939411A7a45c54A2fA70234565F',
  Flex_TEST_USDT_Address_XDAI: "0xb894560E51dB39c906238b13E84b1822C1e0D604",
  Flex_TEST_RETURN_TOKEN_Address_XDAI: "0xdA844FFE2E922c9B3E6076c308411f748A29a6d1",
  FLEX_ManagingContract_XDAI: "0x352B3E3426D4A6662655BBFab6CE84F36cC0e9bd",
  FlexAllocationAdapterContract_XDAI: "0x8D0d0f3FDC281Ab1172406015F7306E15f1930e2",
  FlexERC721_XDAI: "0xcd59d08df3eF6687F2a2072FFeA3A786b2189226",
  FlexFundingPoolFactory_ADDRESS_XDAI: "0xA4c563d99aE97A56E54104d1de161FB7f8AB278a",
  FLex_BEN_TO_BOX_XDAI: "0x8c3827Fd47320940ed234f45C53344c970AEB4F1",
  Flex_Vesting_ERC721_XDAI: "0x8c0D2Da9881C0253e282bAd77a362Ef61a37f089",
  Flex_Steward_Allocation_Adapter_Contract_Address_XDAI: "0xbF15Ce7b531B8CD6881644334E708c7b18a447D9",
  flex_Funding_Return_Token_Adapter_Contract_XDAI: "0x8dE1e6Ddec9Bf5f04CBdAb7225821a0A84280e09",
  flex_Free_In_Escrow_Fund_Adapter_Contract_XDAI: "0x90d04E839A15015e4db72BACBe787902383B74ae",
  flex_Funding_Helper_Adapter_Contract_XDAI: "0xDFbDb30CcE5ACff605949bd1CBcCE389309264E5",
  summonDaoABI: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoFactoryAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "FlexDaoCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
            }
          ],
          "internalType": "struct SummonDao.Call[9]",
          "name": "calls",
          "type": "tuple[9]"
        }
      ],
      "name": "multiCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address[]",
              "name": "daoFactoriesAddress",
              "type": "address[]"
            },
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "flags",
                  "type": "uint128"
                }
              ],
              "internalType": "struct DaoFactory.Adapter[]",
              "name": "enalbeAdapters",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "flags",
                  "type": "uint128"
                }
              ],
              "internalType": "struct DaoFactory.Adapter[]",
              "name": "adapters1",
              "type": "tuple[]"
            },
            {
              "internalType": "bool",
              "name": "fundingPollEnable",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "maxParticipantsAmount",
                  "type": "uint256"
                }
              ],
              "internalType": "struct SummonDao.flexDaoParticipantCapInfo",
              "name": "_flexDaoParticipantCapInfo",
              "type": "tuple"
            },
            {
              "internalType": "bool",
              "name": "flexDaoParticipantMembetshipEnable",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint8",
                  "name": "varifyType",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "minHolding",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "address[]",
                  "name": "whiteList",
                  "type": "address[]"
                }
              ],
              "internalType": "struct SummonDao.flexDaoPaticipantMembershipInfo",
              "name": "_flexDaoPaticipantMembershipInfos",
              "type": "tuple"
            },
            {
              "internalType": "bool",
              "name": "flexDaoPriorityDepositEnalbe",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "uint8",
                  "name": "varifyType",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "minHolding",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "address[]",
                  "name": "whiteList",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256",
                  "name": "priorityPeriod",
                  "type": "uint256"
                }
              ],
              "internalType": "struct SummonDao.flexDaoPriorityMembershipInfo",
              "name": "_flexDaoPriorityMembershipInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "varifyType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minHolding",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "address[]",
                  "name": "whiteList",
                  "type": "address[]"
                }
              ],
              "internalType": "struct SummonDao.flexDaoStewardMembershipInfo",
              "name": "_flexDaoStewardMembershipInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "eligibilityType",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenID",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "votingPeriod",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "votingPower",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "superMajority",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "quorum",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "supportType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "quorumType",
                  "type": "uint256"
                }
              ],
              "internalType": "struct SummonDao.flexDaoVotingInfo",
              "name": "_flexDaoVotingInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint8",
                  "name": "varifyType",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "minHolding",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "address[]",
                  "name": "whiteList",
                  "type": "address[]"
                }
              ],
              "internalType": "struct SummonDao.flexDaoPollsterMembershipInfo",
              "name": "_flexDaoPollsterMembershipInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "votingPeriod",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "votingPower",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "superMajority",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "quorum",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "eligibilityType",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenID",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "supportType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "quorumType",
                  "type": "uint256"
                }
              ],
              "internalType": "struct SummonDao.flexDaoPollingInfo",
              "name": "_flexDaoPollingInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "proposerMembershipEnable",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "varifyType",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "minHolding",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "address[]",
                  "name": "whiteList",
                  "type": "address[]"
                }
              ],
              "internalType": "struct SummonDao.flexDaoProposerMembershipInfo",
              "name": "_flexDaoProposerMembershipInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "creator",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "flexDaoManagementfee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "returnTokenManagementFee",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "managementFeeAddress",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "flexDaoGenesisStewards",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "allocations",
                  "type": "uint256[]"
                }
              ],
              "internalType": "struct SummonDao.flexDaoInfo",
              "name": "_flexDaoInfo",
              "type": "tuple"
            }
          ],
          "internalType": "struct SummonDao.FlexDaoParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "summonFlexDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "daoFacAddr",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "daoName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "summonFlexDao1",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "flexDaoPriorityDepositEnalbe",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "flexDaoPriorityMembershipVarifyType",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "flexDaoPriorityMembershipPriorityPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "flexDaoPriorityMembershipMinHolding",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "flexDaoPriorityMembershipTokenId",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "flexDaoPriorityMembershipWhiteList",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "flexDaoPriorityMembershipTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        }
      ],
      "name": "summonFlexDao10",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "flexFundingPoolFacAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "summonFlexDao2",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "daoFacAddr",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint128",
              "name": "flags",
              "type": "uint128"
            }
          ],
          "internalType": "struct DaoFactory.Adapter[]",
          "name": "enalbeAdapters",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        }
      ],
      "name": "summonFlexDao3",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "daoFacAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "flexFundingPoolFacAddr",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint128",
              "name": "flags",
              "type": "uint128"
            }
          ],
          "internalType": "struct DaoFactory.Adapter[]",
          "name": "adapters1",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        }
      ],
      "name": "summonFlexDao4",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "flexDaoManagementfee",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "managementFeeAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "flexDaoReturnTokenManagementFee",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "votingPower",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256[6]",
          "name": "_uint256VoteArgs",
          "type": "uint256[6]"
        }
      ],
      "name": "summonFlexDao5",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "flexDaoGenesisStewards",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "allocations",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "eligibilityType",
          "type": "uint256"
        }
      ],
      "name": "summonFlexDao6",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool[2]",
          "name": "booleanParams",
          "type": "bool[2]"
        },
        {
          "internalType": "uint256[10]",
          "name": "uint256Params",
          "type": "uint256[10]"
        },
        {
          "internalType": "address",
          "name": "flexDaoPollsterMembershipTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "flexDaoPollsterMembershipWhiteList",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "flexDaoPollingtokenAddress",
          "type": "address"
        }
      ],
      "name": "summonFlexDao7",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "flexDaoStewardMembershipEnable",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "flexDaoProposerMembershipEnable",
          "type": "bool"
        },
        {
          "internalType": "uint256[6]",
          "name": "uint256Params",
          "type": "uint256[6]"
        },
        {
          "internalType": "address",
          "name": "flexDaoStewardMembershipTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "flexDaoStewardMembershipWhitelist",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "flexDaoProposerMembershipTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "flexDaoProposerMembershipWhiteList",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        }
      ],
      "name": "summonFlexDao8",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "flexDaoParticipantMembetshipEnable",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "flexDaoPaticipantMembershipName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "flexDaoPaticipantMembershipVarifyType",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "flexDaoPaticipantMembershipMinHolding",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "flexDaoPaticipantMembershipTokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "flexDaoPaticipantMembershipTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "flexDaoPaticipantMembershipWhiteList",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        }
      ],
      "name": "summonFlexDao9",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  stewardManagementABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "creationTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "stopVoteTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum StewardManagementContract.ProposalType",
          "name": "pType",
          "type": "uint8"
        }
      ],
      "name": "ProposalCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "enum StewardManagementContract.ProposalState",
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "allVotingWeight",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nbYes",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nbNo",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteResult",
          "type": "uint256"
        }
      ],
      "name": "ProposalProcessed",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getAllSteward",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getStewardAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getStewardWhitelist",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isActiveMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isStewardWhiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "processProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "proposals",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allocation",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "creationTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopVoteTime",
          "type": "uint256"
        },
        {
          "internalType": "enum StewardManagementContract.ProposalState",
          "name": "state",
          "type": "uint8"
        },
        {
          "internalType": "enum StewardManagementContract.ProposalType",
          "name": "pType",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "quit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "registerStewardWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "applicant",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allocation",
          "type": "uint256"
        }
      ],
      "name": "submitSteWardInProposal",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "applicant",
          "type": "address"
        }
      ],
      "name": "submitSteWardOutProposal",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  flexFundingContractABI: [
    {
      "inputs": [],
      "name": "FundRaiseEndTimeNotUP",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidBackerIdentificationParams",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidBackerPriorityDepositParams",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFundingInfoParams",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidReturnFundParams",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTokenRewardAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidVestingParams",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotInExecuteState",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        }
      ],
      "name": "ProposalCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "enum IFlexFunding.ProposalStatus",
          "name": "state",
          "type": "uint8"
        }
      ],
      "name": "ProposalExecuted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "Proposals",
      "outputs": [
        {
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "minFundingAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxFundingAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "finalRaisedAmount",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "escrow",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "returnTokenAddr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "returnTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minReturnAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxReturnAmount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "approverAddr",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipientAddr",
              "type": "address"
            }
          ],
          "internalType": "struct IFlexFunding.ProposalFundingInfo",
          "name": "fundingInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "vestingStartTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingCliffEndTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingEndTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingInterval",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingCliffLockAmount",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "nftEnable",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "erc721",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "vestName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "vestDescription",
              "type": "string"
            }
          ],
          "internalType": "struct IFlexFunding.VestInfo",
          "name": "vestInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "enum IFlexFunding.FundRaiseType",
              "name": "fundRaiseType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "fundRaiseStartTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fundRaiseEndTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minDepositAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxDepositAmount",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "backerIdentification",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "enum IFlexFunding.BackerIdentificationType",
                  "name": "bType",
                  "type": "uint8"
                },
                {
                  "internalType": "uint32",
                  "name": "bChainId",
                  "type": "uint32"
                },
                {
                  "internalType": "address",
                  "name": "bTokanAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bTokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "bMinHoldingAmount",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IFlexFunding.BackerIdentificationInfo",
              "name": "bakckerIdentificationInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                },
                {
                  "internalType": "enum IFlexFunding.PriorityDepositType",
                  "name": "pType",
                  "type": "uint8"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IFlexFunding.PriorityDepositInfo",
              "name": "priorityDepositInfo",
              "type": "tuple"
            }
          ],
          "internalType": "struct IFlexFunding.FundRaiseInfo",
          "name": "fundRaiseInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tokenRewardAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cashRewardAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IFlexFunding.ProposerRewardInfo",
          "name": "proposerRewardInfo",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "startVoteTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopVoteTime",
          "type": "uint256"
        },
        {
          "internalType": "enum IFlexFunding.ProposalStatus",
          "name": "state",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "RETRUN_TOKEN_AMOUNT_PRECISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getProposerWhitelist",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isActiveMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPriorityDepositer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isProposerWhiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "processProposal",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "protocolAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "protocolFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "registerProposerWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "retrunTokenToApprover",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_protocolAddress",
          "type": "address"
        }
      ],
      "name": "setProtocolAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_protocolFee",
          "type": "uint256"
        }
      ],
      "name": "setProtocolFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "minFundingAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxFundingAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "escrow",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "returnTokenAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "returnTokenAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minReturnAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxReturnAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "approverAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "recipientAddr",
                  "type": "address"
                }
              ],
              "internalType": "struct IFlexFunding.FundingInfo",
              "name": "fundingInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "vestingStartTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingCliffEndTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingEndTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingInterval",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingCliffLockAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "nftEnable",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "erc721",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "vestName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "vestDescription",
                  "type": "string"
                }
              ],
              "internalType": "struct IFlexFunding.VestInfo",
              "name": "vestInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "enum IFlexFunding.FundRaiseType",
                  "name": "fundRaiseType",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "fundRaiseStartTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "fundRaiseEndTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minDepositAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxDepositAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "backerIdentification",
                  "type": "bool"
                },
                {
                  "components": [
                    {
                      "internalType": "enum IFlexFunding.BackerIdentificationType",
                      "name": "bType",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint32",
                      "name": "bChainId",
                      "type": "uint32"
                    },
                    {
                      "internalType": "address",
                      "name": "bTokanAddr",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "bTokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "bMinHoldingAmount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IFlexFunding.BackerIdentificationInfo",
                  "name": "bakckerIdentificationInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "bool",
                      "name": "enable",
                      "type": "bool"
                    },
                    {
                      "internalType": "enum IFlexFunding.PriorityDepositType",
                      "name": "pType",
                      "type": "uint8"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IFlexFunding.PriorityDepositInfo",
                  "name": "priorityDepositInfo",
                  "type": "tuple"
                }
              ],
              "internalType": "struct IFlexFunding.FundRaiseInfo",
              "name": "fundRaiseInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "tokenRewardAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "cashRewardAmount",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IFlexFunding.ProposerRewardInfo",
              "name": "proposerRewardInfo",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "priorityDepositWhitelist",
              "type": "address[]"
            }
          ],
          "internalType": "struct IFlexFunding.ProposalParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "submitProposal",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  flexPollingVotingContractABI: [
    {
      "inputs": [],
      "name": "ADAPTER_NAME",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAdapterName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "getSenderAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isActiveMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPollsterWhiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "registerPollsterWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "startNewVotingForProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "voteValue",
          "type": "uint256"
        }
      ],
      "name": "submitVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "voteResult",
      "outputs": [
        {
          "internalType": "enum IFlexVoting.VotingState",
          "name": "state",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "votes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "nbYes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nbNo",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startingTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  flexFundingPoolAdaptContractABI: [
    {
      "inputs": [],
      "name": "ExceedMaxDepositAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExceedMaxFundingAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FundingProposalNotFinalize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "LessMinDepositAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MaxParticipantReach",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotInFundRaise",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "WithDraw",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint160",
          "name": "",
          "type": "uint160"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "varifyType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "minHolding",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "createParticipantMembership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "escorwExtraFreeInFund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "freeINPriorityDeposits",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "getParticipanWhitelist",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "getParticipantMembershipInfo",
      "outputs": [
        {
          "internalType": "bool",
          "name": "created",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "varifyType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "minHolding",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getPriorityDepositWhitelist",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "getTotalFundByProposalId",
      "outputs": [
        {
          "internalType": "uint160",
          "name": "",
          "type": "uint160"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timeStamp",
          "type": "uint256"
        }
      ],
      "name": "ifInRedemptionPeriod",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isActiveMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isParticipantWhiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPriorityDepositWhitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "participantMemberShips",
      "outputs": [
        {
          "internalType": "bool",
          "name": "created",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "varifyType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "minHolding",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "registerParticipantWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "registerPriorityDepositWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint160",
          "name": "amount",
          "type": "uint160"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  DAO_REGISTRY_ABI: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "adapterId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "adapterAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "flags",
          "type": "uint256"
        }
      ],
      "name": "AdapterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "adapterId",
          "type": "bytes32"
        }
      ],
      "name": "AdapterRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "name": "AddressConfigurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "ConfigurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "extensionId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "extensionAddress",
          "type": "address"
        }
      ],
      "name": "ExtensionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "extensionId",
          "type": "bytes32"
        }
      ],
      "name": "ExtensionRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "flags",
          "type": "uint256"
        }
      ],
      "name": "ProcessedProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "flags",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "votingAdapter",
          "type": "address"
        }
      ],
      "name": "SponsoredProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "flags",
          "type": "uint256"
        }
      ],
      "name": "SubmittedProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "memberAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newDelegateKey",
          "type": "address"
        }
      ],
      "name": "UpdateDelegateKey",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "adapters",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "extensionId",
          "type": "bytes32"
        },
        {
          "internalType": "contract IExtension",
          "name": "extension",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "addExtension",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "addressConfiguration",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "daoCreator",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "daoFactory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "extensions",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "finalizeDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "adapterId",
          "type": "bytes32"
        }
      ],
      "name": "getAdapterAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        }
      ],
      "name": "getAddressConfiguration",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "checkAddr",
          "type": "address"
        }
      ],
      "name": "getAddressIfDelegated",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllSteward",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        }
      ],
      "name": "getConfiguration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "memberAddr",
          "type": "address"
        }
      ],
      "name": "getCurrentDelegateKey",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentFundingProposalId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentGovenorInProposalId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentGovenorOutProposalId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentNewFundProposalId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "extensionId",
          "type": "bytes32"
        }
      ],
      "name": "getExtensionAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getMemberAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "memberAddress",
          "type": "address"
        },
        {
          "internalType": "enum DaoRegistry.MemberFlag",
          "name": "flag",
          "type": "uint8"
        }
      ],
      "name": "getMemberFlag",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getNbMembers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "memberAddr",
          "type": "address"
        }
      ],
      "name": "getPreviousDelegateKey",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "memberAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "getPriorDelegateKey",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "enum DaoRegistry.ProposalFlag",
          "name": "flag",
          "type": "uint8"
        }
      ],
      "name": "getProposalFlag",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum DaoHelper.ProposalType",
          "name": "_proposalType",
          "type": "uint8"
        }
      ],
      "name": "getProposalVoteType",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "adapterAddress",
          "type": "address"
        },
        {
          "internalType": "enum DaoRegistry.AclFlag",
          "name": "flag",
          "type": "uint8"
        }
      ],
      "name": "hasAdapterAccess",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "adapterAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "extensionAddress",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "flag",
          "type": "uint8"
        }
      ],
      "name": "hasAdapterAccessToExtension",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "increaseFundingId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "increaseGovenorInId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "increaseGovenorOutId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "increaseNewFundId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_daoFactory",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "inverseAdapters",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "acl",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "inverseExtensions",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "deleted",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isActiveMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "adapterAddress",
          "type": "address"
        }
      ],
      "name": "isAdapter",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "extensionAddr",
          "type": "address"
        }
      ],
      "name": "isExtension",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "isMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockSession",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockedAt",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "mainConfiguration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "memberAddressesByDelegatedKey",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "members",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "flags",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "memberAddress",
          "type": "address"
        }
      ],
      "name": "potentialNewMember",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "processProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum DaoHelper.ProposalType",
          "name": "",
          "type": "uint8"
        }
      ],
      "name": "proposalVoteTypes",
      "outputs": [
        {
          "internalType": "enum DaoHelper.VoteType",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "proposals",
      "outputs": [
        {
          "internalType": "address",
          "name": "adapterAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "flags",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "extensionId",
          "type": "bytes32"
        }
      ],
      "name": "removeExtension",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "memberAddress",
          "type": "address"
        }
      ],
      "name": "removeMember",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "adapterId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "adapterAddress",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "acl",
          "type": "uint128"
        },
        {
          "internalType": "bytes32[]",
          "name": "keys",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "replaceAdapter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "extensionAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "adapterAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "acl",
          "type": "uint256"
        }
      ],
      "name": "setAclToExtensionForAdapter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "name": "setAddressConfiguration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "setConfiguration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "sponsoringMember",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "votingAdapterAddr",
          "type": "address"
        }
      ],
      "name": "sponsorProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "state",
      "outputs": [
        {
          "internalType": "enum DaoRegistry.DaoState",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "submitProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unlockSession",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "memberAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "newDelegateKey",
          "type": "address"
        }
      ],
      "name": "updateDelegateKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "votingAdapter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  Flex_Voting_Adapter_Contract_ABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteStartTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteStopTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nbYes",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nbNo",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "currentQuorum",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "currentSupport",
          "type": "uint256"
        }
      ],
      "name": "SubmitVote",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ADAPTER_NAME",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "voterAddr",
          "type": "address"
        }
      ],
      "name": "checkIfVoted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAdapterName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getAllStewardWeight",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "getAllStewardWeightByProposalId",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "getSenderAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getVotingWeight",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isActiveMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "startNewVotingForProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "voteValue",
          "type": "uint256"
        }
      ],
      "name": "submitVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "voteResult",
      "outputs": [
        {
          "internalType": "enum IFlexVoting.VotingState",
          "name": "state",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "nbYes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nbNo",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voteWeights",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "votes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "nbYes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nbNo",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startingTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  Flex_TEST_TKEN_CONTRACT_ABI: [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_totalSupply",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Flex_VESTING_CONTRACT_ABI: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "InvalidVestingAmountSetting",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidVestingTimeSetting",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotVestReceiver",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ownerAmount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "recipientAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "toBentoBox",
          "type": "bool"
        }
      ],
      "name": "CancelVesting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "start",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "cliffDuration",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "stepDuration",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "steps",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "cliffShares",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "stepShares",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "CreateVesting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "LogUpdateOwner",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "toBentoBox",
          "type": "bool"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "PERCENTAGE_PRECISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipientAddr",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "createVesting",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getRemainingPercentage",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getVestIdByTokenId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenIdToVestId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "updateOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        }
      ],
      "name": "vestBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vestIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "vests",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint128",
          "name": "claimed",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "steps",
              "type": "uint32"
            },
            {
              "internalType": "uint128",
              "name": "cliffShares",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "stepShares",
              "type": "uint128"
            }
          ],
          "internalType": "struct IFlexVesting.StepInfo",
          "name": "stepInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "start",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "end",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "cliffDuration",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "stepDuration",
              "type": "uint32"
            }
          ],
          "internalType": "struct IFlexVesting.TimeInfo",
          "name": "timeInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "nftToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "internalType": "struct IFlexVesting.VestNFTInfo",
          "name": "nftInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "internalType": "struct IFlexVesting.VestInfo",
          "name": "vestInfo",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Flex_ALLOCK_CONTRACT_ABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "lps",
          "type": "address[]"
        }
      ],
      "name": "AllocateToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gpAllocationBonusRadio",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "riceStakeAllocationRadio",
          "type": "uint256"
        }
      ],
      "name": "ConfigureDao",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "proposerAddr",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256[5]",
          "name": "uint256Args",
          "type": "uint256[5]"
        }
      ],
      "name": "allocateProjectToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "gpAllocationBonusRadio",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "riceStakeAllocationRadio",
          "type": "uint256"
        }
      ],
      "name": "configureDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "investor",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "getFundingRewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "getProposerBonus",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "ifEligible",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "recepient",
          "type": "address"
        }
      ],
      "name": "isNFTMinted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "recepient",
          "type": "address"
        }
      ],
      "name": "isVestCreated",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "nftMinted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "noEscrow",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "vestCreated",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "vestingInfos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "created",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  Flex_Funding_Return_Token_Contract_ABI: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "approvedInfos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "escrowAmount",
          "type": "uint256"
        },
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "erc20",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "escrowFundingReturnToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "escrowedReturnTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "erc20",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setFundingApprove",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "erc20",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        },
        {
          "internalType": "enum IFlexFunding.ProposalStatus",
          "name": "state",
          "type": "uint8"
        }
      ],
      "name": "withdrawFundingReturnToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Flex_Voting_Adapter_Contract_Address_MUMBAI: "0x2BA88e7a66524F2395BcB65f0b3c0D8A9A6B5eA8",
  Flex_Funding_Pool_Adapt_Contract_Address_MUMBAI: "0x7e0D554725E239F14bF654D69F6c71358d67F2Ba",
  FlexPollVotingContractADDRESS_MUMBAI: "0xCB718Bb0DB4395Bf5bC6A7Ec3C33C258A398Eca6",
  stewardMangementContractAddress_MUMBAI: "0x8906fE795D8e07a60F9962382550Cc8365eBA24d",
  summonDaoContractAddress_MUMBAI: "0x8ed6b538357889cFddFfF4a26633982eE74EBa73",
  flexFundingContractAddress_MUMBAI: "0xB40798f82ae5937b7Ab37E37fF9f6Cdc584008C2",
  Flex_Vesting_MUMBAI: "0x874320C07A247cD6Ca314C03f1e90e7959E9339b",
  FlexERC721_MUMBAI: "0x5025e698c0475a4Dde679B94f74b46d29D753a16",
  FlexAllocationAdapterContract_MUMBAI: "0x0276Bd6C4D6bd20ee9D4210D1Cc0076B628b15B1",
  FLex_BEN_TO_BOX_MUMBAI: "0x207513Ce3bd9E798F817655DaD18E828Cab67623",
  FLEX_ManagingContract_MUMBAI: "0xfEA36Da2805A57216cc610eac89447a79aBeD5c8",
  DaoFac_ADDRESS_MUMBAI: "0xceEb2b45a74A4d9F8348F09C33f70CEdEB0B7878",
  FlexFundingPoolFactory_ADDRESS_MUMBAI: "0x6B93AAD680B156D68F90aC62e61058728f071716",
  Flex_TEST_USDT_Address_MUMBAI: "0x043572b715D78B22BC1BBCAEA8aB6cd57F050adc",
  Flex_TEST_RETURN_TOKEN_Address_MUMBAI: "0xB02ff3BA5A6FFf8F3D26693b710bB7c658E6E9F2",

  Vintage_Fund_Raise_Adapter_Contract_GOERLI: "0x2a3749FC033327DEC18226080927D5952403d999",
  Vintage_Voting_Contract_GOERLI: "0x08163520559ed7C21512cE6985D0291a1d6C9e64",
  Vintage_Funding_Pool_Adapter_Contract_GOERLI: "0x59e89d8f98C3D75Ce65D53eeA3a78F6073123E9D",
  Vintage_Raiser_Management_Contract_GOERLI: "0xd594Ad1A43aD8feeF3a8547721756E9243b288dF",
  Vintage_Funding_Adapter_Contract_GOERLI: "0x355d2281e1fbAf6b356F981E83758395b07d03c8",
  Vintage_Allocation_Adapter_Contract_GOERLI: "0xb5dFF87e9826539d2Ce7521778c83531f1B9aA41",
  Vintage_Vesting_GOERLI: "0x962eE2B513B8B79CCcad1C3D104e8344E5afE48F",
  Vintage_Funding_Pool_Extension_GOERLI: "0x452c9f8f5665234457B37FDC1F6f5aC8aEa90e4B",
  Vintage_Funding_Pool_Factory_GOERLI: "0x65B63935982e54b4B5d3E288BfE758f28c9298eA",
  Vintage_Ben_To_Box_GOERLI: "0xA506aEEc9D6EdFFDf1554954F652F4c5a76744a8",
  vintage_Escrow_FundAdapter_Contract_GOERLI: "0xA506aEEc9D6EdFFDf1554954F652F4c5a76744a8",
  Summon_Vintage_Dao_GOERLI: "0xD34005a9Fe1db81c32a6D2a8E3285b456ced3436",

  Vintage_Fund_Raise_Adapter_Contract_XDAI: "0x33bF903A9D0A0296c8d51064EC61050659d2862A",
  Vintage_Voting_Contract_XDAI: "0xE160C497A4eF48de6022604fD42340E9c2128454",
  Vintage_Funding_Pool_Adapter_Contract_XDAI: "0x760c1c47Fc9295B62510c21d47f59F04F12e4587",
  Vintage_Raiser_Management_Contract_XDAI: "0xFaeB671057d93EfEdabD026181BbC933b0EbaC87",
  Vintage_Funding_Adapter_Contract_XDAI: "0xa1ef027b5e78fAA7E596b6341C4364bd72403843",
  Vintage_Allocation_Adapter_Contract_XDAI: "0x0373bADDEcD2bEd341c1958abE7BA45987591e1E",
  Vintage_Vesting_XDAI: "0x6605987037887E4950864d77764aFA6b682C3B36",
  Vintage_Funding_Pool_Extension_XDAI: "0x6B93AAD680B156D68F90aC62e61058728f071716",
  Vintage_Funding_Pool_Factory_XDAI: "0xA6b6ACA60B100AAc8dAB4354222a9E8f5Bd0E281",
  Vintage_Ben_To_Box_XDAI: "0x8c3827Fd47320940ed234f45C53344c970AEB4F1",
  vintage_Escrow_FundAdapter_Contract_XDAI: "0x278F18A79Cb84f5557C58F536Ce4A59e36970A4f",
  Vintage_Distribute_Adapter_Contract_Address_XAI: "0x94435dC96Ba2F23e83b62909c07352031d4D425B",
  Vintage_Raiser_Allocation_Adapter_Contract_Address_XDAI: "0xE5D5AEa259fe4B135e2D4a4f9F4B82d733Ee67b8",
  Vintage_Funding_Return_Token_Adapter_Contract_Address_XDAI: "0x7dd8e41164C2eEAC7E2BdAbb53ed10816e240f6C",
  Summon_Vintage_Dao_XDAI: "0xF51A9D626c14c12C91321b30BE033dd84ca2DE21",
  DaoFac_ADDRESS_XDAI: "0x6833c48C079492cD05B07af51D1A3C994b792603",
  TEST_USDT_Address_XDAI: "0xb894560E51dB39c906238b13E84b1822C1e0D604",
  TEST_RETURN_TOKEN_ADDRESS_XDAI: "0xdA844FFE2E922c9B3E6076c308411f748A29a6d1",
  Vintage_Fund_Raise_Adapter_Contract_ABI: [
    {
      "inputs": [],
      "name": "INVALID_PARAM",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "LAST_NEW_FUND_PROPOSAL_NOT_FINISH",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "VOTING_NOT_FINISH",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "ProposalCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "enum IVintageFundRaise.ProposalState",
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "allVotingWeight",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nbYes",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nbNo",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteResult",
          "type": "uint256"
        }
      ],
      "name": "proposalExecuted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "Proposals",
      "outputs": [
        {
          "internalType": "address",
          "name": "acceptTokenAddr",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fundRaiseTarget",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fundRaiseMaxAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpMinDepositAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpMaxDepositAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IVintageFundRaise.FundRaiseAmountInfo",
          "name": "amountInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fundRaiseStartTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fundRaiseEndTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fundTerm",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptPeriod",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redemptDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "returnDuration",
              "type": "uint256"
            }
          ],
          "internalType": "struct IVintageFundRaise.FundRiaseTimeInfo",
          "name": "timesInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "managementFeeRatio",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "returnTokenManagementFeeRatio",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "redepmtFeeRatio",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "protocolFeeRatio",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "managementFeeAddress",
              "type": "address"
            }
          ],
          "internalType": "struct IVintageFundRaise.FundRaiseRewardAndFeeInfo",
          "name": "feeInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fundFromInverstor",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "projectTokenFromInvestor",
              "type": "uint256"
            }
          ],
          "internalType": "struct IVintageFundRaise.ProoserReward",
          "name": "proposerReward",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "enable",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "vtype",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IVintageFundRaise.PriorityDeposite",
          "name": "priorityDeposite",
          "type": "tuple"
        },
        {
          "internalType": "uint8",
          "name": "fundRaiseType",
          "type": "uint8"
        },
        {
          "internalType": "enum IVintageFundRaise.ProposalState",
          "name": "state",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "creationTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopVoteTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "createdFundCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "getWhiteList",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPriorityDepositer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastProposalIds",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "processProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "contract DaoRegistry",
              "name": "dao",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "fundRaiseMinTarget",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "fundRaiseMaxCap",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lpMinDepositAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lpMaxDepositAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "fundRaiseType",
                  "type": "uint8"
                }
              ],
              "internalType": "struct IVintageFundRaise.ProposalFundRaiseInfo",
              "name": "proposalFundRaiseInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "fundTerm",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "redemptPeriod",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "redemptInterval",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "returnPeriod",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IVintageFundRaise.ProposalTimeInfo",
              "name": "proposalTimeInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "managementFeeRatio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "returnTokenManagementFeeRatio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "redepmtFeeRatio",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IVintageFundRaise.ProposalFeeInfo",
              "name": "proposalFeeInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "managementFeeAddress",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "fundRaiseTokenAddress",
                  "type": "address"
                }
              ],
              "internalType": "struct IVintageFundRaise.ProposalAddressInfo",
              "name": "proposalAddressInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "fundFromInverstor",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "projectTokenFromInvestor",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IVintageFundRaise.ProoserReward",
              "name": "proposerReward",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "vtype",
                  "type": "uint8"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address[]",
                  "name": "whitelist",
                  "type": "address[]"
                }
              ],
              "internalType": "struct IVintageFundRaise.ProposalPriorityDepositInfo",
              "name": "priorityDeposite",
              "type": "tuple"
            }
          ],
          "internalType": "struct IVintageFundRaise.ProposalParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "submitProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Vintage_Voting_Contract_ABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gracePeriod",
          "type": "uint256"
        }
      ],
      "name": "ConfigureDao",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blocktime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "origenalVotingWeight",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "origenalVoteValue",
          "type": "uint256"
        }
      ],
      "name": "RevokeVote",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votestartingTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteblockNumber",
          "type": "uint256"
        }
      ],
      "name": "StartNewVotingForProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteStartTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteStopTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nbYes",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nbNo",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "currentQuorum",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "currentSupport",
          "type": "uint256"
        }
      ],
      "name": "SubmitVote",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blocktime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "oldVotingWeight",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "newVotingWeight",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nbYes",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nbNo",
          "type": "uint128"
        }
      ],
      "name": "UpdateVoteWeight",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ADAPTER_NAME",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "voterAddr",
          "type": "address"
        }
      ],
      "name": "checkIfVoted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "votingPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "gracePeriod",
          "type": "uint256"
        }
      ],
      "name": "configureDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAdapterName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getAllRaiserWeight",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "getAllRaiserWeightByProposalId",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "getSenderAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getVotingWeight",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "projectVotingTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "startNewVotingForProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "voteValue",
          "type": "uint256"
        }
      ],
      "name": "submitVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "voteResult",
      "outputs": [
        {
          "internalType": "enum IVintageVoting.VotingState",
          "name": "state",
          "type": "uint8"
        },
        {
          "internalType": "uint128",
          "name": "nbYes",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "nbNo",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voteWeights",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "votes",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "nbYes",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "nbNo",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "startingTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "voters",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  Vintage_Funding_Pool_Adapter_Contract_ABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "dao",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "executor",
          "type": "address"
        }
      ],
      "name": "ClearFund",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "dao",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fundRound",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fundRaiseState",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fundRaisedAmount",
          "type": "uint256"
        }
      ],
      "name": "ProcessFundRaise",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "redemptionFee",
          "type": "uint256"
        }
      ],
      "name": "RedeptionFeeCharged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "WithDraw",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "investorAddr",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "clearFund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "quorum",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "superMajority",
          "type": "uint32"
        }
      ],
      "name": "configureDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "daoFundRaisingStates",
      "outputs": [
        {
          "internalType": "enum DaoHelper.FundRaiseState",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getFundEndTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fundRound",
          "type": "uint256"
        }
      ],
      "name": "getFundInvestors",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getFundRaiseWindowCloseTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getFundRaiseWindowOpenTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getFundRaisingMaxAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getFundRaisingTarget",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getFundReturnDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getFundStartTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getInvestorMembershipWhiteList",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getMaxInvestmentForLP",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getMinInvestmentForLP",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getRedemptDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getRedeptPeriod",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timeStamp",
          "type": "uint256"
        }
      ],
      "name": "ifInRedemptionPeriod",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "ifInvestorMembershipWhiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isActiveMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "latestRedempteTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "poolBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "processFundRaise",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "protocolFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "raiserBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "registerInvestorWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "resetFundRaiseState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "feeProtocol",
          "type": "uint256"
        }
      ],
      "name": "setProtocolFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Vintage_Raiser_Management_Contract_ABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "creationTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "stopVoteTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum VintageRaiserManagementContract.ProposalType",
          "name": "pType",
          "type": "uint8"
        }
      ],
      "name": "ProposalCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "enum VintageRaiserManagementContract.ProposalState",
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteResult",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "allVotingWeight",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nbYes",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nbNo",
          "type": "uint128"
        }
      ],
      "name": "ProposalProcessed",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getAllRaiser",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getRaiserAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getRaiserWhitelist",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isActiveMember",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isRaiserWhiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "processProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "proposals",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allocation",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "creationTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stopVoteTime",
          "type": "uint256"
        },
        {
          "internalType": "enum VintageRaiserManagementContract.ProposalState",
          "name": "state",
          "type": "uint8"
        },
        {
          "internalType": "enum VintageRaiserManagementContract.ProposalType",
          "name": "pType",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "quit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "registerRaiserWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "applicant",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allocation",
          "type": "uint256"
        }
      ],
      "name": "submitRaiserInProposal",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "applicant",
          "type": "address"
        }
      ],
      "name": "submitSteWardOutProposal",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Vintage_Funding_Adapter_Contract_ABI: [
    {
      "inputs": [],
      "name": "Empty",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "ProposalCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalID",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "allVotingWeight",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nbYes",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nbNo",
          "type": "uint128"
        }
      ],
      "name": "ProposalExecuted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalID",
          "type": "bytes32"
        }
      ],
      "name": "StartVote",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getFrontProposalId",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getQueueLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "ongoingProposal",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "processProposal",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "projectTeamLockedTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "proposalQueue",
      "outputs": [
        {
          "internalType": "int128",
          "name": "_begin",
          "type": "int128"
        },
        {
          "internalType": "int128",
          "name": "_end",
          "type": "int128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "proposals",
      "outputs": [
        {
          "internalType": "address",
          "name": "fundingToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fundingAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipientAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "internalType": "enum FundingLibrary.ProposalState",
          "name": "status",
          "type": "uint8"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "vestingStartTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vetingEndTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingCliffEndTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingCliffLockAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingInterval",
              "type": "uint256"
            }
          ],
          "internalType": "struct FundingLibrary.VestInfo",
          "name": "vestInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "escrow",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "returnToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "returnTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "approveOwnerAddr",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "nftEnable",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "erc721",
              "type": "address"
            }
          ],
          "internalType": "struct FundingLibrary.ProposalReturnTokenInfo",
          "name": "proposalReturnTokenInfo",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "inQueueTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "proposalStartVotingTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "proposalStopVotingTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "proposalExecuteTimestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct FundingLibrary.ProposalTimeInfo",
          "name": "proposalTimeInfo",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "protocolAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_protocolAddress",
          "type": "address"
        }
      ],
      "name": "setProtocolAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "startVotingProcess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "fundingAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "fundingToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "receiver",
                  "type": "address"
                }
              ],
              "internalType": "struct IVintageFunding.FundingInfo",
              "name": "fundingInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "escrow",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "returnToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "returnTokenAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "approver",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "nftEnable",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "vestingNft",
                  "type": "address"
                }
              ],
              "internalType": "struct IVintageFunding.ReturnTokenInfo",
              "name": "returnTokenInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingStartTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vetingEndTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingCliffEndTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingCliffLockAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingInterval",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IVintageFunding.VestInfo",
              "name": "vestInfo",
              "type": "tuple"
            }
          ],
          "internalType": "struct IVintageFunding.FundingProposalParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "submitProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "unLockProjectTeamToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Vintage_Allocation_Adapter_Contract_ABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "lps",
          "type": "address[]"
        }
      ],
      "name": "AllocateToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gpAllocationBonusRadio",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "riceStakeAllocationRadio",
          "type": "uint256"
        }
      ],
      "name": "ConfigureDao",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "PERCENTAGE_PRECISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "proposerAddr",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256[6]",
          "name": "uint256Args",
          "type": "uint256[6]"
        }
      ],
      "name": "allocateProjectToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "gpAllocationBonusRadio",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "riceStakeAllocationRadio",
          "type": "uint256"
        }
      ],
      "name": "configureDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "getFundingRewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "proposerAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "getProposerBonus",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "ifEligible",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "recepient",
          "type": "address"
        }
      ],
      "name": "isVestCreated",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "vestCreated",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "vestingInfos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "created",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  Vintage_Vesting_ABI: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "InvalidStart",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidStepSetting",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotVestReceiver",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ownerAmount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "recipientAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "toBentoBox",
          "type": "bool"
        }
      ],
      "name": "CancelVesting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "start",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "cliffDuration",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "stepDuration",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "steps",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "cliffShares",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "stepShares",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "CreateVesting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "LogUpdateOwner",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "toBentoBox",
          "type": "bool"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "PERCENTAGE_PRECISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipientAddr",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "createVesting",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "depositedShares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "stepShares",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "cliffShares",
          "type": "uint128"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "data",
          "type": "bytes[]"
        }
      ],
      "name": "multicall",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "results",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pendingOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_fetcher",
          "type": "address"
        }
      ],
      "name": "setTokenURIFetcher",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenURIFetcher",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "direct",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "renounce",
          "type": "bool"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "updateOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        }
      ],
      "name": "vestBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vestIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "vests",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "start",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "end",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "cliffDuration",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "stepDuration",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "steps",
          "type": "uint32"
        },
        {
          "internalType": "uint128",
          "name": "cliffShares",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "stepShares",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "claimed",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "vestId",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Vintage_Funding_Pool_Extension_ABI: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "distributeTo",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DistributeFund",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "chargedTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "lpAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ManagementFeeCharged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "member",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        }
      ],
      "name": "NewBalance",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Recovered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "chargedTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "lpAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RedeptionFeeCharged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "RewardAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "RewardPaid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newDuration",
          "type": "uint256"
        }
      ],
      "name": "RewardsDurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Staked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "depositer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addToBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "availableTokens",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "investorAddr",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "name": "checkpoints",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "fromBlock",
          "type": "uint96"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dao",
      "outputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipientAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "distributeFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "name": "feeCheckpoints",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "fromBlock",
          "type": "uint96"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "fundRaises",
      "outputs": [
        {
          "internalType": "enum DaoHelper.FundRaiseState",
          "name": "state",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fundRaisingTokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFundRaisingTokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getInvestors",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "getPriorAmount",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "_dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "investorAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isInvestor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "isTokenAllowed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "isValidInvestor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastLPChargedManagentFeeTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastUpdateTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lpChargedManagementFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxExternalTokens",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "numCheckpoints",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "periodFinish",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projectSnapFunds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projectSnapRice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipientAddress",
          "type": "address"
        }
      ],
      "name": "recoverERC20",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardPerTokenStored",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "rewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardsDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "riceTokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "serviceFeeRatio",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "maxTokens",
          "type": "uint8"
        }
      ],
      "name": "setMaxExternalTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "riceAddr",
          "type": "address"
        }
      ],
      "name": "setRiceTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "serviceFee",
          "type": "uint256"
        }
      ],
      "name": "setServiceFeeRatio",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "weightRadix",
          "type": "uint128"
        }
      ],
      "name": "setVotingWeightRadix",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "snapFunds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "subtractAllFromBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "member",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "subtractFromBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokens",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "updateType",
          "type": "uint8"
        }
      ],
      "name": "updateTotalGPsBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userRewardPerTokenPaid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingWeightAddend",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingWeightMultiplier",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingWeightRadix",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipientAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Vintage_Funding_Pool_Factory_ABI: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_identityAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "extensionAddress",
          "type": "address"
        }
      ],
      "name": "FundingPoolCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "create",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "dao",
          "type": "address"
        }
      ],
      "name": "getExtensionAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "identityAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  Vintage_Escrow_Fund_Adapter_ABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "dao",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fundRound",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "EscrowFund",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "dao",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fundRound",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "WithDraw",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fundRound",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "escrowFundFromFundingPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "escrowFunds",
      "outputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fundRound",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getEscrowAmount",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract DaoRegistry",
          "name": "dao",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fundRound",
          "type": "uint256"
        }
      ],
      "name": "withDraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Summon_Vintage_Dao_ABI: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoFactoryAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "daoAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "VintageDaoCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
            }
          ],
          "internalType": "struct SummonVintageDao.VintageCall[7]",
          "name": "calls",
          "type": "tuple[7]"
        }
      ],
      "name": "multiVintageCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "daoName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "daoFactoriesAddress",
              "type": "address[]"
            },
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "flags",
                  "type": "uint128"
                }
              ],
              "internalType": "struct DaoFactory.Adapter[]",
              "name": "enalbeAdapters",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "flags",
                  "type": "uint128"
                }
              ],
              "internalType": "struct DaoFactory.Adapter[]",
              "name": "adapters1",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "cap",
                  "type": "uint256"
                }
              ],
              "internalType": "struct SummonVintageDao.VintageParticipantCapInfo",
              "name": "participantCap",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "varifyType",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "minAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "address[]",
                  "name": "whiteList",
                  "type": "address[]"
                }
              ],
              "internalType": "struct SummonVintageDao.VintageBackerMembership",
              "name": "backerMembership",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "enable",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "varifyType",
                  "type": "uint8"
                },
                {
                  "internalType": "uint256",
                  "name": "minAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "address[]",
                  "name": "whiteList",
                  "type": "address[]"
                }
              ],
              "internalType": "struct SummonVintageDao.VintageRaiserMembership",
              "name": "raiserMembership",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "eligibilityType",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "tokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenID",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "votingWeightedType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "supportType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "quorumType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "support",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "quorum",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "votingPeriod",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "executingPeriod",
                  "type": "uint256"
                }
              ],
              "internalType": "struct SummonVintageDao.VintageVotingInfo",
              "name": "votingInfo",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "genesisRaisers",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "allocations",
              "type": "uint256[]"
            }
          ],
          "internalType": "struct SummonVintageDao.VintageDaoParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "summonVintageDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "daoFacAddr",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "daoName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "summonVintageDao1",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vintageFundingPoolFacAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "summonVintageDao2",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "daoFacAddr",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint128",
              "name": "flags",
              "type": "uint128"
            }
          ],
          "internalType": "struct DaoFactory.Adapter[]",
          "name": "enalbeAdapters",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        }
      ],
      "name": "summonVintageDao3",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "daoFacAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "vintageFundingPoolFacAddr",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint128",
              "name": "flags",
              "type": "uint128"
            }
          ],
          "internalType": "struct DaoFactory.Adapter[]",
          "name": "adapters1",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        }
      ],
      "name": "summonVintageDao4",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "vintageDaoStewardMembershipEnable",
          "type": "bool"
        },
        {
          "internalType": "uint256[3]",
          "name": "uint256Params",
          "type": "uint256[3]"
        },
        {
          "internalType": "address",
          "name": "vintageDaoStewardMembershipTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "vintageDaoRaiserMembershipWhitelist",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        }
      ],
      "name": "summonVintageDao5",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256[9]",
          "name": "votingInfo",
          "type": "uint256[9]"
        }
      ],
      "name": "summonVintageDao6",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "eligibilityType",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "genesisRaisers",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "allcationValues",
          "type": "uint256[]"
        }
      ],
      "name": "summonVintageDao7",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "enable",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "newDaoAddr",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "varifyType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "minHolding",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "vintageDaoInvestorMembershipWhitelist",
          "type": "address[]"
        }
      ],
      "name": "summonVintageDao8",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Management_Fee_address: "0x0309d2DC027e0843ab2bC72c69149ad1D746db55"
}