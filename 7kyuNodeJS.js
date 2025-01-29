// Create the function String.prototype.toBase64 that encodes a string in Base64. Also create the function String.prototype.fromBase64 that decodes a Base64 string into utf8.

const { Buffer } = require("node:buffer");

String.prototype.toBase64 = function () {
    return Buffer.from(this).toString('base64');
}

String.prototype.fromBase64 = function () {
    return Buffer.from(this, 'base64').toString('utf8');
}