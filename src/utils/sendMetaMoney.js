//Connecting to Ethereum via infura

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);

async function sendMetaMoney(receiveAccID, gasPrice, gasLimit, sendAmount) {
  window.web3 = new Web3(window.ethereum);
  try {
    await window.ethereum.enable();
  } catch (error) {
    console.log(error);
  }
    
  const value = web3.utils.toHex(web3.utils.toWei(sendAmount, "ether"))

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
    to: receiveAccID,
    gas: gasLimit,
    gasPrice: gasPrice,
    value: value,
  })
  console.log(tx)
  
}

export default sendMetaMoney;
