class Identity {
  /**
   * @param {Array} accounts 
   */
  constructor(accounts) {
    this.accounts = accounts;
    this.pointer = 1;
  }

  get owner() {
    return this.accounts[0];
  }

  get signedByOwner() {
    return { from: this.owner };
  }

  next() {
    return this.accounts[this.pointer++];
  }
}

module.exports = Identity;
