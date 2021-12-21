// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// Connect to rinkeby account through infura using mnemonic password
const provider = new HDWalletProvider('shiver pull slender veteran vapor gospel combine race tiny advance summer mosquito', 'https://rinkeby.infura.io/v3/ad190564806943c096031a4982c4ec47' );

// Create new web3 instance and pass provider
const web3 = new Web3(provider);
