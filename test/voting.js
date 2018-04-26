const Voting = artifacts.require('Voting');
const Identity = require('./helper/identity');
const EVM = require('./helper/evm');

// Allow tracking events
require('truffle-test-utils').init();

/** Constants */
const STAGE1 = 0x1;
const STAGE2 = 0x2;
const STAGE3 = 0x4;

/** Stage */
let STAGE = 0x0;
const stage = parseInt(process.env.STAGE) || 1;

if (stage >= 1) STAGE |= STAGE1;
if (stage >= 2) STAGE |= STAGE2;
if (stage >= 3) STAGE |= STAGE3;

const Stage = {
  Scheduled: '0',
  Running: '1',
  Finished: '2',
};

/** Tests */
contract('Voting', async (accounts) => {
  const identity = new Identity(accounts);
  const voters = [];
  let leader = null;

  (STAGE & STAGE1) && it('[#1] should initialize with proposals', async () => {
    const instance = await Voting.deployed();

    assert.isAbove((await instance.getProposals.call()).length, 0);
  });

  (STAGE & STAGE2) && it('[#2] should be initialized with the stage set to Stage.Scheduled', async () => {
    const instance = await Voting.deployed();

    assert.equal(await instance.stage.call(), Stage.Scheduled);
  });

  (STAGE & STAGE2) && it('[#2] should not allow voting before start', async () => {
    const instance = await Voting.deployed();
    const proposal = (await instance.getProposals.call())[0];
    let error = null;
    
    try {
      await instance.vote(proposal, { from: identity.next() });
    } catch (e) {
      error = e;
    }

    assert.isNotNull(error);
  });

  (STAGE & STAGE2) && it('[#2] should change stage to Stage.Running after voting starts', async () => {
    const evm = new EVM(web3);
    const instance = await Voting.deployed();
    const time = await instance.startTime.call();

    await evm.timeTravelTo(time.toString(10));
    await instance.synchronize();

    assert.equal(await instance.stage.call(), Stage.Running);
  });

  (STAGE & STAGE1) && it('[#1] should allow voting', async () => {
    const instance = await Voting.deployed();
    const voter = identity.next();
    const proposal = (await instance.getProposals.call())[0];
    const voteResult = await instance.vote(proposal, { from: voter });

    assert.web3Event(voteResult, {
      event: 'Voted',
      args: { voter, proposal },
    }, 'Vote event has not been emited');

    leader = proposal;

    voters.push(voter);
  });

  (STAGE & STAGE1) && it('[#1] should update total vote counter', async () => {
    const instance = await Voting.deployed();

    assert.equal(await instance.totalVoteCount.call(), voters.length);
  });

  (STAGE & STAGE1) && it('[#1] should not allow repeated voting', async () => {
    const instance = await Voting.deployed();
    let error = null;
    
    try {
      await instance.vote(leader, { from: voters[0] });
    } catch (e) {
      error = e;
    }

    assert.isNotNull(error);
  });

  (STAGE & STAGE1) && it('[#1] should allow checking if an user voted', async () => {
    const instance = await Voting.deployed();
    
    assert.isTrue(await instance.hasVoted.call(voters[0]));
  });

  (STAGE & STAGE1) && it('[#1] should allow getting the proposal an user voted for', async () => {
    const instance = await Voting.deployed();

    assert.equal(await instance.getVote.call(voters[0]), leader);
  });

  (STAGE & STAGE1) && it('[#1] should not allow getting proposal for an user which has not voted', async () => {
    const instance = await Voting.deployed();
    let error = null;
    
    try {
      await instance.getVote.call(identity.next());
    } catch (e) {
      error = e;
    }

    assert.isNotNull(error);
  });

  (STAGE & STAGE1) && it('[#1] should allow getting proposal vote count', async () => {
    const instance = await Voting.deployed();

    assert.equal((await instance.getProposalVoteCount.call(leader)).toString(10), '1');
  });

  (STAGE & STAGE1) && it('[#1] should allow getting the leader', async () => {
    const instance = await Voting.deployed();

    assert.equal(await instance.getLeader.call(), leader);
  });

  (STAGE & STAGE3) && it('[#3] should allow delegating', async () => {
    // @todo your code
    assert.isTrue(false);
  });

  (STAGE & STAGE3) && it('[#3] should emit VoteDelegated event on delegation', async () => {
    // @todo your code
    assert.isTrue(false);
  });

  (STAGE & STAGE3) && it('[#3] should not allow repeated delegating after approval', async () => {
    // @todo your code
    assert.isTrue(false);
  });

  (STAGE & STAGE3) && it('[#3] should not allow voting after delegation', async () => {
    // @todo your code
    assert.isTrue(false);
  });

  (STAGE & STAGE3) && it('[#3] should allow approving delegation', async () => {
    // @todo your code
    assert.isTrue(false);
  });

  (STAGE & STAGE3) && it('[#3] should allow voting after delegation approved', async () => {
    // @todo your code
    assert.isTrue(false);
  });

  (STAGE & STAGE3) && it('[#3] should allow as many extra votes as delegations', async () => {
    // @todo your code
    assert.isTrue(false);
  });

  (STAGE & STAGE2) && it('[#2] should change stage to Stage.Ended after voting ends', async () => {
    const evm = new EVM(web3);
    const instance = await Voting.deployed();
    const time = await instance.endTime.call();
    
    await evm.timeTravelTo(time.toString(10));
    await instance.synchronize();

    assert.equal(await instance.stage.call(), Stage.Finished);
  });

  (STAGE & STAGE2) && it('[#2] should not allow voting after end', async () => {
    const instance = await Voting.deployed();
    const proposal = (await instance.getProposals.call())[0];
    let error = null;
    
    try {
      await instance.vote(proposal, { from: identity.next() });
    } catch (e) {
      error = e;
    }

    assert.isNotNull(error);
  });
});
