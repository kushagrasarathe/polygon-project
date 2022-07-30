// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";

interface NFT {
    function mint(address user, uint256 tokenId) external;

    function balanceOf(address user, uint256 tokenId)
        external
        returns (uint256);
}

contract Creator is Ownable {
    NFT nft;

    struct creator {
        address creatorAddress;
        string userData;
        uint256 balance;
        uint256 subscribers;
    }
    // userData is just a Ipfs CID that has name , description , pfp can be stored here
    // Content is stored in another contract Content.sol

    // mapping from CreatorID to creator Struct
    mapping(uint256 => creator) creators;

    uint256 id = 0;

    event creatorAdded(uint256 id, address creator, string user);

    constructor(address _NFTcontract) {
        nft = NFT(_NFTcontract);
    }

    /// @dev add the creator to the creators array with the Crator struct details
    /// @dev Checks if the user don't owns any creator NFT before registering
    /// @dev Mints a NFT after the creator is regsitered
    /// @param _creatorAddress - address of the creator to be added
    /// @param _userData - CID of the creator Data stored on IPFS
    //// @return _id - ID assigned to the creator , can be stored and accessed
    function addCreator(address _creatorAddress, string memory _userData)
        public
        returns (uint256 _id)
    {
        require(
            nft.balanceOf(_creatorAddress, 3) == 0,
            "You are already a creator"
        );
        require(_creatorAddress != address(0), "Enter a Valid Address");
        creators[id] = creator(_creatorAddress, _userData, 0, 0);
        uint256 _id = id;
        nft.mint(_creatorAddress, 3);
        emit creatorAdded(_id, _creatorAddress, _userData);
        id += 1;
        return _id;
    }

    /// @dev removes the creator for the id mentioned
    /// @param _id - id of the creator to be removed
    // onlyOwner can call this function
    function removeCreator(uint256 _id) public onlyOwner {
        delete creators[_id];
    }

    /// @dev function to increase the balance of the creator according to the subsription
    /// @param _id - id of the creator for whom the balance is to be increased
    /// @param _amount -  amount to be added to the balance
    /// @return _balance -  returns the current balance after increasing
    function addBalance(uint256 _id, uint256 _amount)
        internal
        returns (uint256 _balance)
    {
        require(nft.balanceOf(msg.sender, 3) > 0, "You are not a creator");
        creators[_id].balance += _amount;
        return creators[_id].balance;
    }

    /// @dev  function to deduct the balance of the creator according to the subsription
    /// @param _id - id of the creator for whom the balance is to be changed
    /// @param _amount -  amount to be deducted to the balance
    /// @return _balance -  returns the current balance after decreasing
    function detuctBalance(uint256 _id, uint256 _amount)
        external
        returns (uint256 _balance)
    {
        require(nft.balanceOf(msg.sender, 3) > 0, "You are not a creator");
        creators[_id].balance -= _amount;
        return creators[_id].balance;
    }

    /// @dev  function to add subscriber to the creator details
    /// @param _id - id of the creator
    /// @return _subscribers - current subscribers of the creators
    function addSubscriber(uint256 _id)
        external
        returns (uint256 _subscribers)
    {
        creators[_id].subscribers += 1;
        return creators[_id].subscribers;
    }

    /// @dev returns the creator for the id fetched
    /// @param _id - id of creator to be fetched
    /// @return creator - will return the creator called for
    function fetchCreators(uint256 _id) public view returns (creator memory) {
        return creators[_id];
    }

    /// @dev returns the ipfs data CID for the creatorID
    /// @param _id - id of the creator for which data CID is to be fetched
    function fetchCID(uint256 _id) public view returns (string memory) {
        return creators[_id].userData;
    }

    // returns the address for the Creator ID
    function fetchAddress(uint256 _id) public view returns (address) {
        return creators[_id].creatorAddress;
    }

    // returns the address for the Creator ID
    function fetchBalance(uint256 _id) public view returns (uint256) {
        return creators[_id].balance;
    }

    /// to check to make some functions internal so that nobody else can change these values
    /// also to check the person calling this function is a creator or not
}
