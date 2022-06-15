// EC library:
import ecLib from 'elliptic/lib/elliptic/ec/index.js';
import sha256 from 'crypto-js/sha256.js';

// Create a new EC object: secp256k1 curve
const ec = new ecLib('secp256k1');

// Create a new key pair:
const key = ec.genKeyPair();
// Get the private key and the public key, hex string:
// console.log('private key: ', key.getPrivate('hex'));
// console.log('public key: ', key.getPublic('hex'));
const doc = "I am a document";
const hashedDoc = sha256(doc).toString();
const signature = key.sign(hashedDoc, 'base64').toDER('hex');

console.log('hashedDoc: ', hashedDoc);
console.log('signature: ', signature);
const publicKey = ec.keyFromPublic(key.getPublic('hex'), 'hex');
console.log('publicKey: ', publicKey.verify(hashedDoc, signature));
