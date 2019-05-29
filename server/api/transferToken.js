import { abiTransferErc20 } from "../../contracts/erc20";
import getPermission from "./getPermission.js";

const Web3 = require("web3");

async function transferToken(contractAddress, toAddress, amount) {
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider.
    web3 = new Web3(Web3.currentProvider);
    window.web3 = new Web3(window.ethereum);

  //gets permission from metamask to access accounts and other info
  await getPermission();

  ////Create the data for the transfer transaction encoding the arguments of the transfer function with the transfer item of the contract ABI
  const data = web3.eth.abi.encodeFunctionCall(abiTransferErc20, [
    toAddress,
    amount
  ]);

  const accounts = await ethereum.enable()

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
    })}else {
      console.log("Client does not have a web3 provider");
      if (
        window.confirm(
          "It seems you do not have a web3 provider installed. To be able to safely deploy your smart contracts/create your own ERC-20 token, it is advised you download metamask. Press OK for more information"
        )
      ) {
        window.location.replace(window.location.origin + "/info?metamask");
      }
    }
}

export default transferToken;
