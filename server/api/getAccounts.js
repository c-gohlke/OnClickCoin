const Web3 = require("web3");
//TODO: check if client doesn't have web3 provider (metamask uninstalled)
const web3 = new Web3(Web3.givenProvider);

async function getAccounts() {
  await web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      console.log("error in getAccount");
      console.log(err);
    } else if (accounts.length === 0) {
      console.log("MetaMask is locked");
      return -1;
    } else {
      console.log("MetaMask is unlocked");
      return accounts;
    }
  });
}

export default getAccounts;
