// SPDX-License-Identifier: UNLICENSED

pragma solidity = 0.8.17;

contract Piggie{git

// This smart contract is strictly built for development purpose,
// this was written by the Author to illustrate how the workflow of the piggybank app will work on production.


    uint public boxBalance; // A variable with public visibility to hold the balance
    uint public numberDays; // holds the number of days


// a struct to hold the box details
    struct savingBox{
        address owner;
        uint locktime;
        uint amountSaved;
    }


// A modifier to restrict use of functions to creators only
    modifier onlyOwner(){
        require(msg.sender == users[msg.sender].owner, "you are not the owner");
        _;
    }

// A mapping is a key value pair data type,this is used to map users address to it's account info
    mapping(address => savingBox) users;

// A create box function
    function createBox(uint _locktime, uint _amount) public {
        address _accountOwner =(msg.sender);
        users[msg.sender].owner = _accountOwner;
        users[msg.sender].locktime = _locktime;
        users[msg.sender].amountSaved = _amount;
        numberDays = users[msg.sender].locktime;
        boxBalance = users[msg.sender].amountSaved;
    }



// A withdraw function
    function withdraw() public onlyOwner{
        require(boxBalance <= users[msg.sender].amountSaved, "You can't withdraw more than what you deposited");
        users[msg.sender].amountSaved -= boxBalance;
        boxBalance = users[msg.sender].amountSaved;
        boxBalance = 0;
        
    }


}