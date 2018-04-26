const faker = require('faker');
const Voting = artifacts.require('Voting.sol');

module.exports = function(deployer) {
  deployer.deploy(
    Voting,
    Array.from(Array(10)).map(() => faker.internet.domainWord())
  );
};
