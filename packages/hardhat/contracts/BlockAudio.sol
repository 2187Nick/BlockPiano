//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract BlockAudio{

  address private _owner;

  constructor() {
    _owner = 0xef3A8D0a15755D024D514b984bec87d59638f1D1;
  }

  modifier onlyOwner() 
  {
    require(isOwner(),
    "Function accessible only by the owner !!");
    _;
  }

  function isOwner() public view returns(bool) 
  {
    return msg.sender == _owner;
  }

  
  string aSharp;
  string cSharp;
  string dSharp;
  string fSharp;
  string gSharp;
  string aFlat;
  string bFlat;
  string cFlat;
  string dFlat;
  string eFlat;
  string fFlat;
  string gFlat;


  function setASharp(string memory _audio) onlyOwner external {
    aSharp = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getASharp() public view returns (string memory) {
        return aSharp;
  }

   function setCSharp(string memory _audio) onlyOwner external {
    cSharp = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getCSharp() public view returns (string memory) {
        return cSharp;
  }
   function setDSharp(string memory _audio) onlyOwner external {
    dSharp = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getDSharp() public view returns (string memory) {
        return dSharp;
  }
   function setFSharp(string memory _audio) onlyOwner external {
    fSharp = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getFSharp() public view returns (string memory) {
        return fSharp;
  }
   function setGSharp(string memory _audio) onlyOwner external {
    gSharp = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getGSharp() public view returns (string memory) {
        return gSharp;
  }
  function setAFlat(string memory _audio) onlyOwner external {
    aFlat = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getAFlat() public view returns (string memory) {
        return aFlat;
  }

  function setBFlat(string memory _audio) onlyOwner external {
    bFlat = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getBFlat() public view returns (string memory) {
        return bFlat;
  }
  function setCFlat(string memory _audio) onlyOwner external {
    cFlat = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getCFlat() public view returns (string memory) {
        return cFlat;
  }
  function setDFlat(string memory _audio) onlyOwner external {
    dFlat = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getDFlat() public view returns (string memory) {
        return dFlat;
  }
  function setEFlat(string memory _audio) onlyOwner external {
    eFlat = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getEFlat() public view returns (string memory) {
        return eFlat;
  }
  function setFFlat(string memory _audio) onlyOwner external {
    fFlat = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getFFlat() public view returns (string memory) {
        return fFlat;
  }
  function setGFlat(string memory _audio) onlyOwner external {
    gFlat = string(abi.encodePacked('data:audio/mp3;base64,', _audio));
  } 

  function getGFlat() public view returns (string memory) {
        return gFlat;
  }

}

