// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/************************************************************
* @title:                                                   *
* @notice:                                                  *
************************************************************/

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
import "./Authorized.sol";

contract Base1155 is Authorized, ERC1155Supply, PaymentSplitter {
    using Counters for Counters.Counter;
    Counters.Counter private counter;

    string public name;
    string public symbol; 

    mapping(uint256 => Token) private tokens;

    struct Token {
        bool saleOpen;
        string tokenURI;
        mapping(address => uint256) minted;
    }

    address[] private payees = [0x2B7952c3F442Eb8BaA069f90bF692Facb52890a9];
    uint256[] private splits = [100];

    constructor(
        string memory _name, 
        string memory _symbol
    ) ERC1155("") PaymentSplitter(payees, splits){
        name = _name;
        symbol = _symbol;
    }

    /**
    @dev Fallback function.
    */
    fallback() external payable {}

    /**
    @dev Adds a new token.
    */
    function addToken(
        bool _saleOpen,
        string memory _tokenURI
    ) public onlyAuthorized {
        Token storage t = tokens[counter.current()];
        t.saleOpen = _saleOpen;
        t.tokenURI = _tokenURI;

        counter.increment();
    }    

    /**
    @dev Edits an existing token.
    */
    function editToken(
        uint256 _tokenID,
        bool _saleOpen,
        string memory _tokenURI
    ) external onlyAuthorized {
        require(exists(_tokenID), "EditToken: Token ID does not exist");

        Token storage t = tokens[_tokenID];
        t.saleOpen = _saleOpen; 
        t.tokenURI = _tokenURI;  
    }

     /**
    @dev Edits token uri.
     */
    function editTokenURI( uint256 _tokenID, string memory _tokenURI ) external onlyAuthorized {
        require(exists(_tokenID), "EditTokenURI: Token ID does not exist");
        Token storage t = tokens[_tokenID];
        t.tokenURI = _tokenURI;  
    }

     /**
    @dev Set token pause state.
     */
    function setTokensaleOpen ( uint256 _tokenID, bool _saleOpen ) external onlyAuthorized {
        require(exists(_tokenID), "EditTokenURI: Token ID does not exist");
        Token storage t = tokens[_tokenID];
        t.saleOpen = _saleOpen;  
    }

    /**
    @dev Send specified token to specified address.
     */
    function airdrop ( uint256 _tokenID, address _address, uint256 _quantity ) external onlyAuthorized {
        require( exists(_tokenID), "airdrop: token does not exist" );

        _mint(_address, _tokenID, _quantity, "");
    }

    /**
    @dev Handle token mints.
    */
    function mint ( uint256 _tokenID, uint256 _quantity ) external payable {
        require( exists(_tokenID), "mint: token does not exist" );
        require( isSaleOpen(_tokenID), "mint: sale is closed" );
        
        tokens[_tokenID].minted[msg.sender] += _quantity;

        _mint(msg.sender, _tokenID, _quantity, "");
    }

    /**
    @dev Return whether mints are open for a certain tokenID.
    */
    function isSaleOpen( uint256 _tokenID ) public view returns ( bool ) {
        require( exists(_tokenID), "isSaleClosed: token does not exist" );
        return tokens[_tokenID].saleOpen;
    }

    /**
    @dev Return array of totalSupply for all tokens.
    */
    function totalSupplyAll() external view returns ( uint[] memory ) {
        uint[] memory result = new uint[](counter.current());

        for(uint256 i; i < counter.current(); i++) {
            result[i] = totalSupply(i);
        }

        return result;
    }

    /**
    @dev Indicates whether a token exists with a given tokenID.
    */
    function exists( uint256 _tokenID ) public view override returns ( bool ) {
        return counter.current() > _tokenID;
    } 

    /**
    @dev Return URI for existing tokenID.
    */
    function uri( uint256 _tokenID ) public view override returns ( string memory ) {
        require( exists(_tokenID), "URI: nonexistent token" );
        return tokens[_tokenID].tokenURI;
    }
}