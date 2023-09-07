import {defineConfig} from '@wagmi/cli'
import {react} from '@wagmi/cli/plugins'

export default defineConfig({
    out: 'src/contracts/contract.ts',
    contracts: [
        {
            name: 'Zero Stars',
            address: {
                5: "0xBA687095255e51B0FB7BaAa863f158f5224aDfCA", // ETH Goerli testnet
                280: "0x07bb9324E15F38B64c765e7C95FBEf067518048A", // ZkSync Era testnet
                421613: "0x35f96640e07b1b94cfB5F5aD6DB26AC07ad2deab" // Arbitrum Goerli testnet
            },
            abi: [{
                "inputs": [{"internalType": "address", "name": "_endpoint", "type": "address"}],
                "stateMutability": "nonpayable",
                "type": "constructor"
            }, {"inputs": [], "name": "InsufficientGas", "type": "error"}, {
                "inputs": [],
                "name": "NotTokenOwner",
                "type": "error"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }, {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
                "name": "Approval",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }, {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }, {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"}],
                "name": "ApprovalForAll",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                }, {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                }, {"indexed": false, "internalType": "uint64", "name": "_nonce", "type": "uint64"}, {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_payload",
                    "type": "bytes"
                }, {"indexed": false, "internalType": "bytes", "name": "_reason", "type": "bytes"}],
                "name": "MessageFailed",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
                "name": "OwnershipTransferred",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                }, {"indexed": false, "internalType": "address", "name": "_from", "type": "address"}, {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }],
                "name": "ReceivedNFT",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                }, {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                }, {"indexed": false, "internalType": "uint64", "name": "_nonce", "type": "uint64"}, {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "_payloadHash",
                    "type": "bytes32"
                }],
                "name": "RetryMessageSuccess",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_dstChainId",
                    "type": "uint16"
                }, {"indexed": false, "internalType": "uint16", "name": "_type", "type": "uint16"}, {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_minDstGas",
                    "type": "uint256"
                }],
                "name": "SetMinDstGas",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{"indexed": false, "internalType": "address", "name": "precrime", "type": "address"}],
                "name": "SetPrecrime",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_remoteChainId",
                    "type": "uint16"
                }, {"indexed": false, "internalType": "bytes", "name": "_path", "type": "bytes"}],
                "name": "SetTrustedRemote",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_remoteChainId",
                    "type": "uint16"
                }, {"indexed": false, "internalType": "bytes", "name": "_remoteAddress", "type": "bytes"}],
                "name": "SetTrustedRemoteAddress",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                }, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }],
                "name": "Transfer",
                "type": "event"
            }, {
                "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
                "name": "balanceOf",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "dstChainId",
                    "type": "uint16"
                }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
                "name": "crossChain",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "dstChainId",
                    "type": "uint16"
                }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
                "name": "estimateFees",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
                "name": "getApproved",
                "outputs": [{"internalType": "address", "name": "", "type": "address"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                }, {"internalType": "bytes", "name": "_srcAddress", "type": "bytes"}, {
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                }, {"internalType": "bytes", "name": "_payload", "type": "bytes"}],
                "name": "lzReceive",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint16", "name": "", "type": "uint16"}, {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }],
                "name": "minDstGasLookup",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint256", "name": "numberOfTokens", "type": "uint256"}],
                "name": "mint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }, {
                "inputs": [],
                "name": "name",
                "outputs": [{"internalType": "string", "name": "", "type": "string"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                }, {"internalType": "bytes", "name": "_srcAddress", "type": "bytes"}, {
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                }, {"internalType": "bytes", "name": "_payload", "type": "bytes"}],
                "name": "nonblockingLzReceive",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [],
                "name": "owner",
                "outputs": [{"internalType": "address", "name": "", "type": "address"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
                "name": "ownerOf",
                "outputs": [{"internalType": "address", "name": "", "type": "address"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint16", "name": "", "type": "uint16"}],
                "name": "payloadSizeLimitLookup",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [],
                "name": "precrime",
                "outputs": [{"internalType": "address", "name": "", "type": "address"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                }, {"internalType": "bytes", "name": "_srcAddress", "type": "bytes"}, {
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                }, {"internalType": "bytes", "name": "_payload", "type": "bytes"}],
                "name": "retryMessage",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            }, {
                "inputs": [],
                "name": "saleState",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            }, {
                "inputs": [{"internalType": "uint16", "name": "_version", "type": "uint16"}, {
                    "internalType": "uint16",
                    "name": "_chainId",
                    "type": "uint16"
                }, {"internalType": "uint256", "name": "_configType", "type": "uint256"}, {
                    "internalType": "bytes",
                    "name": "_config",
                    "type": "bytes"
                }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "_dstChainId",
                    "type": "uint16"
                }, {"internalType": "uint16", "name": "_packetType", "type": "uint16"}, {
                    "internalType": "uint256",
                    "name": "_minGas",
                    "type": "uint256"
                }], "name": "setMinDstGas", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "_dstChainId",
                    "type": "uint16"
                }, {"internalType": "uint256", "name": "_size", "type": "uint256"}],
                "name": "setPayloadSizeLimit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "_precrime", "type": "address"}],
                "name": "setPrecrime",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint16", "name": "_version", "type": "uint16"}],
                "name": "setReceiveVersion",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
                "name": "setSaleState",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint16", "name": "_version", "type": "uint16"}],
                "name": "setSendVersion",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                }, {"internalType": "bytes", "name": "_path", "type": "bytes"}],
                "name": "setTrustedRemote",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint16",
                    "name": "_remoteChainId",
                    "type": "uint16"
                }, {"internalType": "bytes", "name": "_remoteAddress", "type": "bytes"}],
                "name": "setTrustedRemoteAddress",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
                "name": "supportsInterface",
                "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [],
                "name": "symbol",
                "outputs": [{"internalType": "string", "name": "", "type": "string"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint256", "name": "index", "type": "uint256"}],
                "name": "tokenByIndex",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }],
                "name": "tokenOfOwnerByIndex",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [],
                "name": "tokenPrice",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
                "name": "tokenURI",
                "outputs": [{"internalType": "string", "name": "", "type": "string"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "uint16", "name": "", "type": "uint16"}],
                "name": "trustedRemoteLookup",
                "outputs": [{"internalType": "bytes", "name": "", "type": "bytes"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {"stateMutability": "payable", "type": "receive"}],
        },
    ],
    plugins: [
        react({
            useContractRead: true,
            useContractFunctionRead: true,
        }),
    ]
})