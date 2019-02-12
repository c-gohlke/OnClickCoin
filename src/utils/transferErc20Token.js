import {abiTransferErc20 }from "../contracts/erc20";


const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);

async function transferErc20Token(contractAddress, toAddress, amount) {
    window.web3 = new Web3(window.ethereum);
    try {
        await window.ethereum.enable();
    } catch (error) {
        console.log(error);
    }


    var abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiTransferErc20, [
        toAddress, amount
    ]);

    //var removeMethodSignature = abiPackedArgs.substring(10);

    const data = abiPackedArgs
    console.log("erc20 transfer data",data)



    const accounts = await web3.eth.getAccounts(function(err, accounts) {
        if (err != null) {
            console.log(err);
        } else if (accounts.length === 0) {
            console.log("MetaMask is locked");
        } else {
            console.log("MetaMask is unlocked");
        }
    });
    console.log("account 0 is", accounts);

    var netname = undefined;
    const netID = await web3.eth.net.getId();
    console.log("the net ID is", netID);
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

    console.log("got to here")

    const tx = await web3.eth
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
    console.log(tx);
}

export default transferErc20Token;
