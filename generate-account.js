const { crypto } = require("@gny/client");
const bip39 = require("bip39");

const generateAccount = () => {
  const passphrase = bip39.generateMnemonic();

  const { publicKey, privateKey } = crypto.getKeys(passphrase);

  return { passphrase, publicKey, privateKey };
};

module.exports = generateAccount;

if (typeof module !== "undefined" && !module.parent) console.log(generateAccount());
