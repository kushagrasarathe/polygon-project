// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Creator is Ownable {
    struct creator {
        address creatorAddress;
        string name;
        string ceramicDID;
    }

    mapping(uint256 => creator) creators;

    uint256 id = 0;

    event creatorAdded(
        uint256 id,
        address creator,
        string name,
        string ceramicId
    );

    /// add the creator to the creator Array;
    function addCreator(
        address _creatorAddress,
        string memory name,
        string memory ceramicDID
    ) public returns (uint256) {
        require(_creatorAddress != address(0), "Enter a Valid Address");
        creators[id] = creator(_creatorAddress, name, ceramicDID);
        uint256 _id = id;
        emit creatorAdded(_id, _creatorAddress, name, ceramicDID);
        id += 1;
        return _id;
    }

    /// removes the creator for the id mentioned
    function removeCreator(uint256 _id) public onlyOwner {
        delete creators[_id];
    }

    /// returns the creator for the id fetched
    function fetchCreators(uint256 _id) public view returns (creator memory) {
        return creators[_id];
    }

    function fetchDID(uint256 _id) public view returns (string memory) {
        return creators[_id].ceramicDID;
    }

    function fetchAddress(uint256 _id) public view returns (address) {
        return creators[_id].creatorAddress;
    }
}
