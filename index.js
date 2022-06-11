const {ethers} = require("ethers");

async function connect() {
        if (typeof window.ethereum !== "undefined") {
                await ethereum.request({ method: "eth_requestAccounts" });
                // window.web3 = new Web3(ethereum);
                // try {
                //         ethereum.enable();
                // } catch (error) {
                //         // User denied account access...
                // }
        }
}
async function execute() {
        // we need: address
        // contract ABI (blueprint to interact with a contract) -- checked
        // function -- unchecked
        // node connection -- unchecked
        const abi = [
                {
                        inputs: [],
                        stateMutability: "nonpayable",
                        type: "constructor"
                },
                {
                        anonymous: false,
                        inputs: [
                                {
                                        indexed: true,
                                        internalType: "address",
                                        name: "owner",
                                        type: "address"
                                },
                                {
                                        indexed: true,
                                        internalType: "address",
                                        name: "approved",
                                        type: "address"
                                },
                                {
                                        indexed: true,
                                        internalType: "uint256",
                                        name: "tokenId",
                                        type: "uint256"
                                }
                        ],
                        name: "Approval",
                        type: "event"
                },
                {
                        anonymous: false,
                        inputs: [
                                {
                                        indexed: true,
                                        internalType: "address",
                                        name: "owner",
                                        type: "address"
                                },
                                {
                                        indexed: true,
                                        internalType: "address",
                                        name: "operator",
                                        type: "address"
                                },
                                {
                                        indexed: false,
                                        internalType: "bool",
                                        name: "approved",
                                        type: "bool"
                                }
                        ],
                        name: "ApprovalForAll",
                        type: "event"
                },
                {
                        anonymous: false,
                        inputs: [
                                {
                                        indexed: true,
                                        internalType: "address",
                                        name: "from",
                                        type: "address"
                                },
                                {
                                        indexed: true,
                                        internalType: "address",
                                        name: "to",
                                        type: "address"
                                },
                                {
                                        indexed: true,
                                        internalType: "uint256",
                                        name: "tokenId",
                                        type: "uint256"
                                }
                        ],
                        name: "Transfer",
                        type: "event"
                },
                {
                        inputs: [
                                {
                                        internalType: "address",
                                        name: "to",
                                        type: "address"
                                },
                                {
                                        internalType: "uint256",
                                        name: "tokenId",
                                        type: "uint256"
                                }
                        ],
                        name: "approve",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                },
                        {
                                inputs: [
                                        {
                                                internalType: "address",
                                                name: "owner",
                                                type: "address"
                                        }
                                ],
                                        name: "balanceOf",
                                        outputs: [
                                                {
                                                        internalType: "uint256",
                                                        name: "",
                                                        type: "uint256"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "uint256",
                                                        name: "tokenID",
                                                        type: "uint256"
                                                }
                                        ],
                                        name: "burnXRNFT",
                                        outputs: [],
                                        stateMutability: "nonpayable",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "string",
                                                        name: "tokenURI",
                                                        type: "string"
                                                }
                                        ],
                                        name: "createXRNFT",
                                        outputs: [
                                                {
                                                        internalType: "uint256",
                                                        name: "",
                                                        type: "uint256"
                                                }
                                        ],
                                        stateMutability: "nonpayable",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "uint256",
                                                        name: "tokenId",
                                                        type: "uint256"
                                                }
                                        ],
                                        name: "getApproved",
                                        outputs: [
                                                {
                                                        internalType: "address",
                                                        name: "",type: "address"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "address",
                                                        name: "owner",
                                                        type: "address"
                                                },
                                                {
                                                        internalType: "address",
                                                        name: "operator",
                                                        type: "address"
                                                }
                                        ],
                                        name: "isApprovedForAll",
                                        outputs: [
                                                {
                                                        internalType: "bool",
                                                        name: "",
                                                        type: "bool"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [],
                                        name: "name",
                                        outputs: [
                                                {
                                                        internalType: "string",
                                                        name: "",
                                                        type: "string"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "uint256",
                                                        name: "tokenId",
                                                        type: "uint256"
                                                }
                                        ],
                                        name: "ownerOf",
                                        outputs: [
                                                {
                                                        internalType: "address",
                                                        name: "",
                                                        type: "address"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "address",
                                                        name: "from",
                                                        type: "address"
                                                },
                                                {
                                                        internalType: "address",
                                                        name: "to",
                                                        type: "address"
                                                },
                                                {
                                                        internalType: "uint256",
                                                        name: "tokenId",
                                                        type: "uint256"
                                                }
                                        ],
                                        name: "safeTransferFrom",
                                        outputs: [],
                                        stateMutability: "nonpayable",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "address",
                                                        name: "from",
                                                        type: "address"
                                                },
                                                {
                                                        internalType: "address",
                                                        name: "to",
                                                        type: "address"
                                                },
                                                {
                                                        internalType: "uint256",
                                                        name: "tokenId",
                                                        type: "uint256"
                                                },
                                                {
                                                        internalType: "bytes",
                                                        name: "_data",
                                                        type: "bytes"
                                                }
                                        ],
                                        name: "safeTransferFrom",
                                        outputs: [],
                                        stateMutability: "nonpayable",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "address",
                                                        name: "operator",
                                                        type: "address"
                                                },
                                                {
                                                        internalType: "bool",
                                                        name: "approved",
                                                        type: "bool"
                                                }
                                        ],
                                        name: "setApprovalForAll",
                                        outputs: [],
                                        stateMutability: "nonpayable",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "bytes4",
                                                        name: "interfaceId",
                                                        type: "bytes4"
                                                }
                                        ],
                                        name: "supportsInterface",
                                        outputs: [
                                                {
                                                        internalType: "bool",
                                                        name: "",type: "bool"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [],
                                        name: "symbol",
                                        outputs: [
                                                {
                                                        internalType: "string",
                                                        name: "",
                                                        type: "string"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [],
                                        name: "tIdCounter",
                                        outputs: [
                                                {
                                                        internalType: "uint256",
                                                        name: "",
                                                        type: "uint256"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "uint256",
                                                        name: "tokenId",
                                                        type: "uint256"
                                                }
                                        ],
                                        name: "tokenURI",
                                        outputs: [
                                                {
                                                        internalType: "string",
                                                        name: "",
                                                        type: "string"
                                                }
                                        ],
                                        stateMutability: "view",
                                        type: "function"
                                },
                                {
                                        inputs: [
                                                {
                                                        internalType: "address",
                                                        name: "from",
                                                        type: "address"
                                                },
                                                {
                                                        internalType: "address",
                                                        name: "to",
                                                        type: "address"
                                                },
                                                {
                                                        internalType: "uint256",
                                                        name: "tokenId",
                                                        type: "uint256"
                                                }
                                        ],
                                        name: "transferFrom",
                                        outputs: [],
                                        stateMutability: "nonpayable",
                                        type: "function"
                                }
                        ]
        const contractAddress = "0x9c8c6f9f8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b" // workable????
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(); // get the connected account
        const contract = new ethers.Contract(contractAddress, abi, signer); // necessary????
        await contract.XRObjectNFT.createXRNFT(); // workable????
        console.log("Connected");
        // var accounts = await web3.eth.getAccounts();
        // console.log(accounts);
}

module.exports = {
        connect,
        execute,
};

