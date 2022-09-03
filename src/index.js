require('dotenv').config();
const Web3 = require('web3');

const infuraKey = process.env.INFURA_KEY;

const provider = `https://mainnet.infura.io/v3/${infuraKey}`;
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);

web3.eth.getBlockNumber().then((result) => {
  console.log('Latest Ethereum Block is ', result);
});
