pragma solidity ^0.4.23;

import '../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol';
import '../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol';

contract Stage1 is Ownable {
  using SafeMath for uint256;

  struct Voter {
    bool voted;
    uint8 vote;
  }

  struct Proposal {
    bytes32 name;
    uint256 voteCount;
  }

  string public name;
  string public website;
  string public logo;

  uint256 public totalVoteCount;
  mapping(address => Voter) public voters;
  Proposal[] public proposals;

  event Voted(address voter, uint8 proposal);

  constructor(string _name, string _website, string _logo) public {
    name = _name;
    website = _website;
    logo = _logo;
  }

  function setProposals(bytes32[] proposalNames) /*onlyOwner*/ public;
  function vote(address voter, uint8 proposal) public;
  function hasVoted(address voter) view public returns (bool);
  function getVote(address voter) view public returns (uint8);
}
