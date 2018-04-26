const pify = require('pify');

class EVM {
  /**
   * @param {Web3} web3 
   */
  constructor(web3) {
    this.web3 = web3;
    this.lastSnapshot = null;
    this._lastTraveledDiff = 0;
  }

  static now() {
    return Math.ceil(Date.now() / 1000);
  }

  /**
   * @param {number} timestamp 
   */
  async timeTravelTo(timestamp) {
    const diff = Number.parseInt(timestamp) - EVM.now();

    if ((diff + this._lastTraveledDiff) <= 0) {
      return this;
    }

    await this.timeTravel(diff + this._lastTraveledDiff);

    this._lastTraveledDiff += diff;

    return this;
  }

  /**
   * @param {number} increaseBy 
   */
  async timeTravel(increaseBy) {
    await this._call('evm_increaseTime', increaseBy);

    return this.mineBlock();
  }

  async mineBlock() {
    await this._call('evm_mine');

    return this;
  }

  async snapshot() {
    const { result } = await this._call('evm_snapshot');

    this.lastSnapshot = result;

    return result;
  }

  /**
   * @param {number} snapshot 
   */
  async revert(snapshot = null) {
    await this._call('evm_revert', snapshot || this.lastSnapshot);

    return this.mineBlock();
  }

  /**
   * @param {string} method 
   * @param {*} params
   */
  async _call(method, ...params) {
    return pify(this.web3.currentProvider.sendAsync)({
      method,
      params,
      id: EVM.now(),
      jsonrpc: '2.0',
    });
  }
}

module.exports = EVM;
