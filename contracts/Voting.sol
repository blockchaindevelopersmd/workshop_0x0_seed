pragma solidity ^0.4.23;

import './Stage1.sol';
// import './Stage2.sol';
// import './Stage3.sol';

contract Voting is
  Stage1/*,
  Stage2,
  Stage3*/
{
  using SafeMath for uint256;

  constructor()
    Stage1(
      'Blockchain Developers Moldova', // name
      'https://m.facebook.com/groups/592057231174722', // website
      'https://avatars3.githubusercontent.com/u/38734481' // logo
    )
    // Stage2(
    //   1525132800, // start time
    //   1527811200 // end time
    // )
    public
  {
      // @todo your code
  }

  /** Stage 1 */

  function setProposals(bytes32[] proposalNames) onlyOwner public {
    // @todo your code
  }

  function vote(address voter, uint8 proposal) public {
    // @todo your code
  }

  function hasVoted(address voter) view public returns (bool) {
    // @todo your code
  }

  function getVote(address voter) view public returns (uint8) {
    // @todo your code
  }

  /** Stage 2 */

  // function canVote() view public returns (bool) {
  //   // @todo your code
  // }

  // function hasEnded() view public returns (bool) {
  //   // @todo your code
  // }

  /** Stage 3 */

  // function delegateVote(address delegateTo) public {
  //   // @todo your code
  // }

  // function approveDelegation() public {
  //   // @todo your code
  // }
}
