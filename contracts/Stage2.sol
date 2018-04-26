pragma solidity ^0.4.23;

contract Stage2 {
  enum Stage { Scheduled, Running, Finished }

  uint public startTime;
  uint public endTime;
  Stage public stage = Stage.Scheduled;

  constructor(uint _startTime, uint _endTime) public {
    require(_startTime >= now, 'Start time cannot be in past');
    require(_endTime > _startTime, 'End time have to be bigger that start time');

    startTime = _startTime;
    endTime = _endTime;
  }

  modifier whileRunning() {
    require(stage == Stage.Running, 'You can only vote while running');
    _;
  }
}
