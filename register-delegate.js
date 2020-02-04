const { Connection } = require('@gny/client');
const readlineSync = require('readline-sync');

const connection = new Connection('45.76.215.117');

const registerDelegate = (username, passphrase, secondPassphrase) => {
  const normalizedName = username.toLowerCase().trim();

  if (secondPassphrase) {
    return connection.contract.Basic.setUserName(normalizedName, passphrase, secondPassphrase);
  }

  return connection.contract.Basic.setUserName(normalizedName, passphrase);
};

module.exports = registerDelegate;

const main = async () => {
  const username = readlineSync.question('Username?\n> ');
  const passphrase = readlineSync.question('\nPassphrase?\n> ');
  const secondPassphrase = readlineSync.question(
    '\nSecond passphrase (leavy empty if not present)?\n> '
  );

  const res = await registerDelegate(username, passphrase, secondPassphrase);

  console.log(res);
};

if (typeof module !== 'undefined' && !module.parent) main();
