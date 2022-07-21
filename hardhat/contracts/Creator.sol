// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Creator is Ownable {
    struct Creator {
        address creator;
        string name;
        string cermamicDID;
    }

    mapping(uint256 => Creator) creators;

    uint256 id = 0;

    event creatorAdded(
        uint256 id,
        address creator,
        string name,
        string ceramicId
    );

    /// add the creator to the creator Array;
    function addCreator(
        address creator,
        string memory name,
        string memory ceramicDID
    ) public returns (uint256) {
        require(creator != address(0), "Enter a Valid Address");
        Creator memory _creator = creators[id];
        _creator.name = name;
        _creator.creator = creator;
        _creator.cermamicDID = ceramicDID;
        uint256 _id = id;
        emit creatorAdded(_id, creator, name, ceramicDID);
        id += 1;
        return _id;
    }

    /// removes the creator for the id mentioned
    function removeCreator(uint256 id) public onlyOwner {
        delete creators[id];
    }

    /// returns the creator for the id fetched
    function fetchCreators(uint256 id) public view returns (Creator) {
        return creators[id];
    }
}
