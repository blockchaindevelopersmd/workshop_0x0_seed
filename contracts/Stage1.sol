pragma solidity ^0.4.23;

import '../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol';

contract Stage1 {
  using SafeMath for uint256;

  struct Voter {
    bool voted;
    bytes32 vote;
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

  event Voted(address voter, bytes32 proposal);

  constructor(
    string _name,
    string _website,
    string _logo,
    bytes32[] proposalsNames
  )
    public 
  {
    require(proposalsNames.length > 0, 'You must provide some proposals');

    name = _name;
    website = _website;
    logo = _logo;
    
    for (uint256 i; i < proposalsNames.length; i++) {
      addProposal(proposalsNames[i]);
    }
  }

  function addProposal(bytes32 proposalName) internal {
    proposals.push(Proposal(proposalName, 0));
  }

  function getProposalRef(bytes32 proposalName) view internal returns (uint256 proposalRef) {
    bool proposalFound;

    for (uint256 i; i < proposals.length; i++) {
      if (proposals[i].name == proposalName) {
        proposalFound = true;
        proposalRef = i;
        break;
      }
    }

    require(proposalFound, 'No such proposal');

    return proposalRef;
  }

  function getProposals() view public returns (bytes32[]);
  function vote(bytes32 proposal) public;
  function hasVoted(address voter) view public returns (bool);
  function getVote(address voter) view public returns (bytes32);
  function getProposalVoteCount(bytes32 proposal) view public returns (uint256);
  function getLeader() view public returns (bytes32);
}
