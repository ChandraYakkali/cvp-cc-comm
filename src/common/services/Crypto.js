const crypto = require('crypto');
const IV_LENGTH = 16; /* For AES, this is always 16 */

class Crypto {

    constructor() {

    }

    static generateKey(accessToken) {

        return new Promise(function (resolve, reject) {

            accessToken = accessToken.replace(/-/g, "");
            var base64AccessToken = new Buffer(accessToken).toString('base64');
            var encryptionKey = base64AccessToken.substring(0, AESMethod.KEY_LENGTH);

            const cipher = crypto.createCipher(AESMethod.CBC, new Buffer(encryptionKey));
            var encrypted = cipher.update(accessToken);
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            encryptionKey = encrypted.toString('hex');
            encryptionKey = encryptionKey.substring(0, AESMethod.KEY_LENGTH);

            resolve(encryptionKey);
        });
    }

    static async decrypt(cipherText, accessToken) {

        try {
            const encryptionKey = await Crypto.generateKey(accessToken);
            var ivText = cipherText.substring(0, IV_LENGTH * 2);
            var dataText = cipherText.substring(IV_LENGTH * 2);

            const iv = new Buffer(ivText, 'hex');
            const encryptedText = new Buffer(dataText, 'hex');

            const decipher = crypto.createDecipheriv(AESMethod.CBC, new Buffer(encryptionKey), iv);
            var decrypted = decipher.update(encryptedText);

            decrypted = Buffer.concat([decrypted, decipher.final()]);

            const json = JSON.parse(decrypted.toString());

            return json;

        } catch (error) {
            return null;
        }
        return cipherText;
    }

    static async encrypt(vaRequest) {

        try {
            const encryptionKey = await Crypto.generateKey(vaRequest.accessToken);
            const text = JSON.stringify(vaRequest);
            const iv = crypto.randomBytes(IV_LENGTH);
            const cipher = crypto.createCipheriv(AESMethod.CBC, new Buffer(encryptionKey), iv);
            var encrypted = cipher.update(text);

            encrypted = Buffer.concat([encrypted, cipher.final()]);

            return iv.toString('hex') + encrypted.toString('hex');

        } catch (error) {
            return null;
        }
    }

    static async decryptString(cipherText, accessToken) {

        try {
            const encryptionKey = await Crypto.generateKey(accessToken);
            var ivText = cipherText.substring(0, IV_LENGTH * 2);
            var dataText = cipherText.substring(IV_LENGTH * 2);

            const iv = new Buffer(ivText, 'hex');
            const encryptedText = new Buffer(dataText, 'hex');

            const decipher = crypto.createDecipheriv(AESMethod.CBC, new Buffer(encryptionKey), iv);
            var decrypted = decipher.update(encryptedText);

            decrypted = Buffer.concat([decrypted, decipher.final()]);

            return decrypted.toString();

        } catch (error) {
            return null;
        }
        return cipherText;
    }

    static async encryptString(text, accessToken) {

        try {
            const encryptionKey = await Crypto.generateKey(accessToken);
            const iv = crypto.randomBytes(IV_LENGTH);
            const cipher = crypto.createCipheriv(AESMethod.CBC, new Buffer(encryptionKey), iv);
            var encrypted = cipher.update(text);

            encrypted = Buffer.concat([encrypted, cipher.final()]);

            return iv.toString('hex') + encrypted.toString('hex');

        } catch (error) {
            return null;
        }
    }
}

Crypto.AES = {
    AES256: {
        KEY_LENGTH: 32,
        CBC: 'aes-256-cbc'
    },
    AES128: {
        KEY_LENGTH: 16,
        CBC: 'aes128'
    }
};

const AESMethod = Crypto.AES.AES128;

module.exports = Crypto;