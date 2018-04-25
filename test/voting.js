const Voting = artifacts.require('Voting');
const stage = parseInt(process.env.STAGE) || 1;

if (stage >= 1) {
  contract('Stage@1', async (accounts) => {
    it('should allow setting proposals', async () => {
      const instance = await Voting.deployed();
    });

    it('should not allow setting proposals to non owner', async () => {
      const instance = await Voting.deployed();
    });

    it('should allow voting', async () => {
      const instance = await Voting.deployed();
    });

    it('should update total vote counter', async () => {
      const instance = await Voting.deployed();
    });

    it('should not allow repeated voting', async () => {
      const instance = await Voting.deployed();
    });

    it('should allow checking if an user voted', async () => {
      const instance = await Voting.deployed();
    });

    it('should allow getting the proposal an user voted for', async () => {
      const instance = await Voting.deployed();
    });
  });
}

if (stage >= 2) {
  contract('Stage@2', async (accounts) => {
    it('should be initialized with the stage set to Stage.Scheduled', async () => {
      const instance = await Voting.deployed();
    });

    it('should not allow voting before start', async () => {
      const instance = await Voting.deployed();
    });

    it('should change stage to Stage.Running after voting starts', async () => {
      const instance = await Voting.deployed();
    });

    it('should not allow setting proposals after start', async () => {
      const instance = await Voting.deployed();
    });

    it('should allow voting after start', async () => {
      const instance = await Voting.deployed();
    });

    it('should change stage to Stage.Ended after voting ends', async () => {
      const instance = await Voting.deployed();
    });

    it('should not allow voting after end', async () => {
      const instance = await Voting.deployed();
    });
  });
}

if (stage >= 3) {
  contract('Stage@3', async (accounts) => {
    it('should allow delegating', async () => {
      const instance = await Voting.deployed();
    });

    it('should emit VoteDelegated event on delegation', async () => {
      const instance = await Voting.deployed();
    });

    it('should not allow repeated delegating after approval', async () => {
      const instance = await Voting.deployed();
    });

    it('should not allow voting after delegation', async () => {
      const instance = await Voting.deployed();
    });

    it('should allow approving delegation', async () => {
      const instance = await Voting.deployed();
    });

    it('should allow voting after delegation approved', async () => {
      const instance = await Voting.deployed();
    });

    it('should allow as many extra votes as delegations', async () => {
      const instance = await Voting.deployed();
    });
  });
}
