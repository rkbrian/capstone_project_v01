// memo

const sha256 = require('crypto-js/sha256')
class Block {
        constructor(data, previousHash){
                this.data = data
                this.previousHash = previousHash
                this.hash
        }
}
