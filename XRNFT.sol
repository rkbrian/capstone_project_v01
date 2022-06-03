// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract XRObjectNFT is ERC721URIStorage
{
    uint public tIdCounter;

    // constructor, name, symbol
    constructor() ERC721("XRObjectNFT", "XRN")
    {
        tIdCounter = 0;
    }

    function createXRNFT(string memory tokenURI) public returns (uint)
    {
        uint tokenID = tIdCounter;

        _safeMint(msg.sender, tokenID);
        _setTokenURI(tokenID, tokenURI);

        tIdCounter++;

        return tokenID;
    }

    function burnXRNFT(uint256 tokenID) public virtual
    {
        // burnt tokens can be seen on OpenSea, but with null address and can't be traded.
        require(_isApprovedOrOwner(msg.sender, tokenID), "You are not qualified to burn this token.");
        super._burn(tokenID);
    }
}
