//Connecting to Ethereum via infura
import bytecode from "../contracts/basicContract"

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);




async function deployMetaContract(name, supply) {
  window.web3 = new Web3(window.ethereum);
  try {
    await window.ethereum.enable();
  } catch (error) {
    console.log(error);
  }

  const abiItemConstructor = {
    "inputs": [{"name": "initialSupply", "type": "uint256"}, {"name": "_name", "type": "string"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }

  var abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiItemConstructor,
      [supply, name])

  var sliceThatShit = abiPackedArgs.substring(10)

  const bcode =
      "0x" + bytecode.bytecode + sliceThatShit;


  const accounts = await web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      console.log(err);
    } else if (accounts.length === 0) {
      console.log("MetaMask is locked");
    } else {
      console.log("MetaMask is unlocked");
    }
  });
  console.log('account 0 is', accounts)

  const tx = await web3.eth.sendTransaction({
    from: accounts[0],
    value: 0,
    data: bcode
  })
  console.log(tx)
}

export default deployMetaContract;