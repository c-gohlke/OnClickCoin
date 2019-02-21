import { abiTransferErc20 } from "../../contracts/erc20";
import getPermission from "./getPermission.js";

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);

async function transferToken(contractAddress, toAddress, amount) {
  window.web3 = new Web3(window.ethereum);

  //gets permission from metamask to access accounts and other info
  getPermission();

  ////Create the data for the transfer transaction encoding the arguments of the transfer function with the transfer item of the contract ABI
  const data = web3.eth.abi.encodeFunctionCall(abiTransferErc20, [
    toAddress,
    amount
  ]);

  //returns an array of the accounts of the metamask user
  //TODO: make getAccounts work
  // const accounts = await getAccounts()
  //TODO: remove what is below
  const accounts = await web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      console.log("error in getAccount");
      console.log(err);
    } else if (accounts.length === 0) {
      console.log("MetaMask is locked");
      return -1;
    } else {
      console.log("MetaMask is unlocked");
    }
  });
  //remove untill here

  //returns the id of the ethereum network the client is working on
  const netID = await web3.eth.net.getId();

  await web3.eth
    .sendTransaction({
      from: accounts[0],
      to: contractAddress,
      value: 0,
      chainId: netID,
      data: data
    })
    .on("transactionHash", function(hash) {
      console.log("transaction received, hash is", hash);
    })
    .on("receipt", function(receipt) {
      console.log("receipt info is", receipt);
    });
}

export default transferToken;
