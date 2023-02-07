// SPDX-License-Identifier: MIT

pragma solidity = 0.8.17;

contract Piggie{

// This smart contract is a production version of the piggyContract.sol
// The difference between this contract and the latter is the payable functions and the block.timestamp

// There are alot of functionalities that can be added to this in the production level to make it standard
// some of those functionalities includes using tokens and not neccessarily native coins, to mention but a few


    uint currentTime = block.timestamp;

    struct savingBox{
        address payable owner;
        // string savingName;
        uint locktime;
        uint amountSaved;
        // uint[] boxId;
    }

    modifier onlyOwner(){
        require(msg.sender == users[msg.sender].owner, "you are not the owner");
        _;
    }


    mapping(address => savingBox) users;


    function createBox(uint _locktime) public {
        // uint boxCount = 0;
        address payable _accountOwner = payable(msg.sender);
        uint _unlockTime = block.timestamp + (86400 * _locktime);

        users[msg.sender].owner = _accountOwner;
        // users[msg.sender].savingName = _savingName;
        users[msg.sender].locktime = _unlockTime;
        // boxCount ++;
        // users[msg.sender].boxId.push(boxCount);
    }


    function depositFunds() public payable onlyOwner{
        require(msg.value >= 1 wei, "Amount too small"); // checks if value to save is upto 1 ether
        require(msg.value <= msg.sender.balance, "insufficient funds"); //check if user has ether to save
        require(block.timestamp <= users[msg.sender].locktime, "you can't deposit anymore"); //if time elapsed, you can't deposit again
        msg.sender.balance - msg.value;
        users[msg.sender].amountSaved += msg.value;

    }

    function withdraw(uint _amount) public payable onlyOwner{
        require(block.timestamp >= users[msg.sender].locktime, "You can't withdraw yet");
        require(_amount <= users[msg.sender].amountSaved, "You can't withdraw more than what you deposited");
        users[msg.sender].amountSaved -= _amount;
        payable(msg.sender).transfer(_amount);

    }

    // A withdraw function to collect fundz
    function boxBalance() public onlyOwner view returns(uint balance) {
        balance = users[msg.sender].amountSaved;
    }

    function numberDays() public onlyOwner view returns(uint){
        uint time = (users[msg.sender].locktime - currentTime) / 86400; //A conversion factor to handle the real world dateTime object and the smart contract date time.
        return (time);
    }


}