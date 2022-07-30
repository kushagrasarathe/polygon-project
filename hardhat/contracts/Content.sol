// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Content {
    // Mapping from CreatorId => content CID array
    mapping(uint256 => string[]) content;

    // Event emitted when
    event ContentAdded(uint256 _id, string _cid);

    /// @dev -function to add content CID for the partiuclar creator
    /// @param _creatorId -  Id of the creator for which content is added
    /// @param _CID -  CID of the content to be added
    function addContent(uint256 _creatorId, string memory _CID) public {
        // require(_CID !=0 , "CID is not valid") ;
        content[_creatorId].push(_CID);
        emit ContentAdded(_creatorId, _CID);
    }

    /// @dev - function to get the CID for a creatorID
    /// @param _creatorID - Id of the creator for which content is to be added
    /// @return CID - returns an array of CID
    function getContent(uint256 _creatorID)
        public
        view
        returns (string[] memory CID)
    {
        return content[_creatorID];
    }
}
