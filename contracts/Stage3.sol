pragma solidity ^0.4.23;

interface Stage3 {
  event VoteDelegated(address voter, address delegateTo);

  function delegateVote(address delegateTo) external;
  function approveDelegation() external;
}
