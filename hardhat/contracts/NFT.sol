// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/// ERC1155 contract for the NFT for the subscription

contract NFT is ERC1155Supply, Ownable {
    // _paused is used to pause the contract in case of an emergency
    // 0 --> Silver NFT
    // 1 --> Gold NFT
    // 2 --> Platinum NFT

    event NFTminted(address user, uint256 tokenId);
    bool public _paused;
    using Strings for uint256;
    string _baseTokenURI;

    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract currently paused");
        _;
    }

    constructor(string memory baseURI) ERC1155("CazeNFT") {
        _baseTokenURI = baseURI;
    }

    /** to set new URI in case of any issues
     */
    function setURI(string memory newuri) public onlyOwner {
        _baseTokenURI = newuri;
    }

    /** @dev override the original uri function to give the same uri for all tokenIDs
     */
    function uri(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        string memory baseURI = _baseTokenURI;
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
                : "";
    }

    /**@dev mint to mint the DAO NFT
     */
    function mint(address user, uint256 tokenId) public onlyWhenNotPaused {
        _mint(user, tokenId, 1, "");
        emit NFTminted(user, tokenId);
    }

    /**
     * @dev setPaused makes the contract paused or unpaused
     */
    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    /**
     * @dev withdraw sends all the ether in the contract
     * to the owner of the contract
     */
    function withdraw(address payee) public onlyOwner {
        uint256 amount = address(this).balance;
        (bool sent, ) = payee.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
}
