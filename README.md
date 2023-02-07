## PiggyBank Project
This smart contract allows users to create a "saving box" on the Ethereum blockchain, where they can deposit and withdraw funds with a specified locktime.



# Note!!: 
There are two smart contract files on this project;
1. __piggy.sol:__ This smart contract file contains the production worthy codes, where neccessary audits are made.

2. __piggyContract.sol:__ The contract contains codes mainly for development purpose. this code was written for demo purposes, showing how the workflow of the app will be on production level.


## Getting Started

To get started with the project, you will need to have Metamask installed as a browser extension. This will allow you to interact with the Ethereum blockchain and make transactions.

You will also need to have Node.js and npm installed on your machine.



## Project Link
[piggiebank](https://pigggybank.netlify.app/)


## Features

- Create a new saving box by specifying a locktime and initial deposit amount
- Withdraw funds from the box (only after the locktime has passed)



## Project Snapshot
![piggie](https://user-images.githubusercontent.com/58835748/214445990-df8167cc-5027-4ff3-8235-862225eb3a50.png)


## Usage

1. Create a new saving box by calling the createBox() function and specifying a locktime (in days) and initial deposit amount (in Ether).
2. Deposit additional funds to the box by calling the depositFunds() function and specifying the amount to deposit (in Ether).
3. After the locktime has passed, call the withdraw() function to withdraw the funds from the box.


## Notes

- The onlyOwner modifier ensures that only the account that created the saving box can perform actions on it.
- The boxBalance and numberDays public variables can be accessed to check the current balance and locktime of a saving box.




## Installing

1. Clone the repository

```bash
git clone https://github.com/mfonekpo/PiggyBank
```
2. Install the project dependencies

```bash
npm install
```

3. cd to the 'client' directory

```bash
cd client
```

4. Start the development Server

```bash
npm run dev
```


## Usage

Connect to the Ethereum network using Metamask.
Create a new campaign by filling out the form on the "Create a Campaign" page.
Browse existing campaigns on the "Explore Campaigns" page.
Donate to a campaign by clicking the "Donate" button on a campaign's page and entering the amount you wish to donate.
Campaign creators can withdraw funds from a successfully funded campaign by clicking the "Withdraw" button on their campaign's page.


## Smart Contract

The smart contract for this project is deployed on the Ethereum blockchain at the address '0xa9B0A2cdf369D8D66c45585dF4f760f5d098A163'. The contract has been audited and is safe to use.

You can interact with the contract using the methods provided by the StateContextProvider and useStateContext hooks in the project.



## Built With

- __RemixIde -__ _A solidity code editor for writing smart contract with a realtime UI for testing the functionalities of functions_
- __React -__ _A JavaScript library for building user interfaces_
- __Ethereum -__ _A decentralized platform that runs smart contracts_
- __ethers.js -__ _A library for interacting with the Ethereum blockchain_
- __@thirdweb-dev/react -__ _A set of hooks for interacting with Ethereum contracts_



## Contributing
If you would like to contribute to the project, please fork the repository and make a pull request with your changes.



## Authors
- Mfon Nsikak Ekpo



## License
This project is licensed under Grandida LLC.



## Acknowledgments
- Thank you to the Ethereum community for creating such a powerful and open platform for decentralized applications.

- Thank you to Grandida LLC for the training and learning opportunity.
