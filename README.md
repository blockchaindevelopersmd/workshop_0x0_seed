# workshop_0x0_seed

Seed project for the "Workshop 0x0".

## Prerequisites

- [ ] Git
- [ ] NodeJS >=8.x (We recommend using [nvm](https://github.com/creationix/nvm#installation))
- [ ] [ganache](https://github.com/trufflesuite/ganache/releases) or [ganache-cli](https://www.npmjs.com/package/ganache-cli)
- [ ] [truffle](https://www.npmjs.com/package/truffle)

## Installation

```bash
# npm install -g ganache-cli truffle
git clone https://github.com/blockchaindevelopersmd/workshop_0x0_seed.git
cd workshop_0x0_seed/
npm install
```

## The Task

> What's it about?

The task consists in developing Ethereum Smart Contracts using
the seed project we've created for you.

You need to implement the functionality so that
the tests pass (hopefully you're used to [TDD](https://en.wikipedia.org/wiki/Test-driven_development)).

> What are the contracts i am going to implement?

There should be implemented one single contract: `contracts/Voting.sol`

> What are `stages`? What are the differences between them?

Stages are basically the code&concepts complexity.
For example: the simplest stage would be `stage1`. It's very basic and the only one which is required.
You're free to extend and implement `stage2`, which will improve your knowledge of Solidity and blockchain concepts.

The special stage designed for Jedi's is the `stage3`. If this is quite easy for you- we will
be glad to provide you a very special, personalized, unique and amazingly interesting task ;)

## Validation

Start Test RPC using `ganache-cli`:

```bash
ganache-cli --accounts 50
```

Start Test RPC using `ganache`:

1. Open application
2. Go to settings
3. Select `ACCOUNT&KEYS`
4. Set `TOTAL ACCOUNTS TO GENERATE` value to 50

Run tests:

```bash
STAGE=1 truffle test --network development --compile-all
# or
STAGE=2 truffle test --network development --compile-all
# or
STAGE=3 truffle test --network development --compile-all
```

> If you want to log communication between `truffle test` and `ganache-cli`
> add `--verbose-rpc` option.

## Deployment

To deploy Smart Contracts we will use [Ropsten](https://ropsten.etherscan.io/) network.

```bash
MNEMONIC="apple banana buterin..." truffle migrate --network ropsten
```

Additional information can be found [here](http://truffleframework.com/tutorials/using-infura-custom-provider).
