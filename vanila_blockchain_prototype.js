// Vanila Blockchain written in javascript
// Not sure if this is the best way to do our NFT project, but it should work in some way.
// Block
const sha256 = require('crypto-js/sha256')
class Block {
    constructor(data, previousHash = '') {
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp).toString();
    }
}

// Chain
class Chain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block('Genesis Block', '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

const myChain = new Chain();
console.log(myChain);

const blockOne = new Block('My first block', '0');
myChain.addBlock(blockOne);
console.log(myChain);
console.log(myChain.isChainValid());
