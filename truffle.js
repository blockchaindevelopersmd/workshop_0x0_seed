const HDWalletProvider = require('truffle-hdwallet-provider');

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
        return new HDWalletProvider(process.env.MNEMONIC, 'https://ropsten.infura.io/metamask');
      },
      gas: 4600000,
      network_id: 3
    }
  }
};
