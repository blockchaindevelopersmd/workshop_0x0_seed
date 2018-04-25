pragma solidity ^0.4.23;

import '../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol';

contract Stage2 {
  using SafeMath for uint256;

  enum Stage { Scheduled, Running, Ended }

  uint256 public startTime;
  uint256 public endTime;
  Stage public stage = Stage.Scheduled;

  constructor(uint256 _startTime, uint256 _endTime) public {
    require(_startTime >= now);
    require(_endTime > _startTime);

    startTime = _startTime;
    endTime = _endTime;
  }

  function canVote() view public returns (bool);
  function hasEnded() view public returns (bool);
}
