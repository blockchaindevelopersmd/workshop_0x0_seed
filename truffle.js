const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      gas: 4600000,
      network_id: '*'
    },
    ropsten: {
      provider() {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/metamask');
      },
      network_id: 3,
      gas: 4600000
    }
  }
};
