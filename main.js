import { Encryption, Block, Chain } from './XRNFT.js';
import ecLib from 'elliptic/lib/elliptic/ec/index.js';

const ec = new ecLib('secp256k1');

// json stuff
const objectBackend = { "name": "user", "email": "example@gmail.com", "price": "$19.00", "time": new Date().getTime() };
const myString = JSON.stringify(objectBackend);

const myChain = new Chain();
// console.log(myChain);


// 2 pairs of keys
// Seller's key pair should be generated by the server
const keyPairSeller = ec.genKeyPair();
// const privateKeySeller = keyPairSeller.getPrivate('hex');
const publicKeySeller = keyPairSeller.getPublic('hex');
// Buyer's key pair should be provided by the client
const keyPairBuyer = ec.genKeyPair();
// const privateKeyBuyer = keyPairBuyer.getPrivate('hex');
const publicKeyBuyer = keyPairBuyer.getPublic('hex');

const e1 = new Encryption(myString, publicKeySeller, publicKeyBuyer);
e1.sign(keyPairSeller)
// console.log(e1);
// console.log(e1.isValid());
if(e1.isValid()) {
    const blockOne = new Block(myString, e1, '0');
    myChain.addBlock(blockOne);
}
else {
    console.log('Invalid signature');
}

console.log(myChain);
console.log(myChain.isChainValid());
