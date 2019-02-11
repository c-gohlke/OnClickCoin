//Connecting to Ethereum via infura
import {bytecode, abiConstructorErc20 }from "../contracts/basicContract"

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);




async function deployErc20(symbol, name, decimals, supply, contractAddress) {
    window.web3 = new Web3(window.ethereum);
    try {
        await window.ethereum.enable();
    } catch (error) {
        console.log(error);
    }

    var abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiConstructorErc20,
        [symbol, name, decimals, supply])

    var sliceThatShit = abiPackedArgs.substring(10);

    const data =
        "0x" + bytecode.bytecode+abiPackedArgs + sliceThatShit;


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
        to: contractAddress,
        value: 0,
        data: data
    })
    console.log(tx)
}

export default deployErc20;