import { bytecodeERC20, abiConstructorErc20 } from "../../contracts/erc20";

const Web3 = require("web3");
//TODO: check if client doesn't have web3 provider (metamask uninstalled)
const web3 = new Web3(Web3.givenProvider);

async function deployContract(symbol, name, decimals, supply) {
  window.web3 = new Web3(window.ethereum);

  //Create the data for the deploy transaction encoding the arguments of the constructor with the constructor item of the contract ABI
  var abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiConstructorErc20, [
    symbol,
    name,
    decimals,
    supply
  ]);

  //remove the function signature (hash of the method signature) so the object can be added directly to the bytecode
  var removeMethodSignature = abiPackedArgs.substring(10);

  const bcode = "0x" + bytecodeERC20 + removeMethodSignature;

  //returns an array of the accounts of the metamask user
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

  var progressBar = document.getElementById("myProgressBar");
  var fullBar = document.getElementById("myBar");

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

      //toggle to show the bars
      progressBar.style.display = 'block';
      fullBar.style.display = 'block';

      //code below makes the progress bar move from 1% to 100%. Percentage point incremental happens every 350 milliseconds
      var width = 1;
      var id = setInterval(frame, 300);

      function frame() {
        console.log("in frame function. width is", width);
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++;
          progressBar.style.width = width + "%";
        }
      }
    })
    .on("receipt", function(receipt) {
      //when the transaction receipt is returned by the sendTransaction function,
      //reroute to the receipt page
      //on top of rerouting, add netname, contractAddress, name of token, initial supply and account address to the URL so that receipt page can use that info
      //TODO: Clem: find better/safer way to pass the info to the receipt page

      //toggle to remove progress bar
      progressBar.style.display = 'none';
      fullBar.style.display = 'none';

      window.location.replace(
        window.location.origin +
          "/receipt?netname:" +
          netname +
          "?address:" +
          receipt.contractAddress +
          "?tokenname:" +
          name +
          "?supply:" +
          supply +
          "?sendAddr:" +
          accounts[0]
      );
    });
  // .on("confirmation", function(confirmationNumber, receipt) {
  //   progressBar.style.width = "100%";
  // });
}

export default deployContract;
