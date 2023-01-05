const BigInteger = require('bigi');
const shajs = require('sha.js');

function bufferToInt(buffer) {
  return BigInteger.fromBuffer(buffer);
}

function intToBuffer(bigInteger) {
  return bigInteger.toBuffer(32);
}

function hash(buffer) {
  return shajs('sha256').update(buffer).digest();
}

module.exports = {
  bufferToInt,
  intToBuffer,
  hash,
};
