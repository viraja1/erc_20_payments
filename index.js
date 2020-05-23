var Dagger = require("@maticnetwork/eth-dagger");

const Web3 = require('web3');
const dotEnv = require('dotenv-safe');
dotEnv.config({example: '.env'});

const contractAddress = process.env.TOKEN_CONTRACT_ADDRESS;
const network = process.env.NETWORK;
const receiverAddress = process.env.RECEIVER_ADDRESS;
const web3 = new Web3();
const ERC20ABI = require('./ERC20');

var dagger = new Dagger(`wss://${network}.dagger.matic.network`);
var contract = dagger.contract(new web3.eth.Contract(ERC20ABI, contractAddress));

var filter = contract.events.Transfer({
  filter: { to: receiverAddress},
  room: "confirmed"
});
// watch
filter.watch(function(data, removed) {
  const from = data["returnValues"]["from"];
  const to = data["returnValues"]["to"];
  const value = data["returnValues"]["value"];
  if(value === '0' || from === '0x0000000000000000000000000000000000000000'){
    return
  }
  console.log(data);
  console.log("From: " + from);
  console.log("To: " + to);
  console.log("Amount: " + value);
  // add purchase flow trigger logic here
});
