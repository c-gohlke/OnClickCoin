import { bytecodeERC20, abiConstructorErc20 } from "../contracts/erc20";
import getPermission from "./getPermission";
import getAccounts from "./getAccounts"

const Web3 = require("web3");
//TODO: check if client doesn't have web3 provider (metamask uninstalled)
const web3 = new Web3(Web3.givenProvider);

async function deployContract(symbol, name, decimals, supply) {
  window.web3 = new Web3(window.ethereum);

  //gets permission from metamask to access accounts and other info
  getPermission()

  //TODO: Hugo: comment on what this does
  var abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiConstructorErc20, [
    symbol,
    name,
    decimals,
    supply
  ]);

  //TODO: Hugo: comment on form of abiPackedArgs, find better name for removeMethodSignature
  var removeMethodSignature = abiPackedArgs.substring(10);

  const bcode = "0x" + bytecodeERC20 + removeMethodSignature;

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

  var netname;

  //returns the id of the ethereum network the client is working on
  const netID = await web3.eth.net.getId();

  switch (netID) {
    case "1":
      netname = "";
      break;
    case "2":
      netname = "morden";
      break;
    case "3":
      netname = "ropsten";
      break;
    case 4:
      netname = "rinkeby";
      break;
    case "42":
      netname = "kovan";
      break;
    default:
      netname = "Unknown";
  }

  //sends the transaction via metamask
  await web3.eth
    .sendTransaction({
      from: accounts[0],
      value: 0,
      chainId: netID,
      data: bcode
    })
    .on("transactionHash", function(hash) {
      console.log("transaction received, hash is", hash);
    })
    .on("receipt", function(receipt) {
      //when the transaction receipt is returned by the sendTransaction function,
      //reroute to the receipt page
      //on top of rerouting, add netname, contractAddress, name of token, initial supply and account address to the URL so that receipt page can use that info
      //TODO: Clem: find better/safer way to pass the info to the receipt page
      window.location.replace(
        "http://localhost:3000/receipt/:" +
          netname +
          "?" +
          receipt.contractAddress +
          "?" +
          name +
          "?" +
          supply +
          "?" +
          accounts[0]
      );
    });
}

export default deployContract;
