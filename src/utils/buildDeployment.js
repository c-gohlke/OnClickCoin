import {endpoint, sendAddress, gasPrice, gasLimit, chainId} from '../config/config'
import bytecode from "../contracts/basicContract"

const Web3 = require("web3");


async function buildDeployment(name, ticker, owner, supply) {
    var netID = document.getElementById("network");
    var network = netID.options[netID.selectedIndex].value;
    const web3 = new Web3(new Web3.providers.HttpProvider(endpoint[network]));

    const abiItemConstructor = {
        "inputs": [{"name": "initialSupply", "type": "uint256"}, {"name": "_ticker", "type": "string"}, {
            "name": "_name",
            "type": "string"
        }, {"name": "_owner", "type": "address"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }

    var abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiItemConstructor,
        [supply, ticker, name, owner])

    var sliceThatShit = abiPackedArgs.substring(10)
    const bcode =
        "0x" + bytecode.bytecode + sliceThatShit;

    var nonce = await web3.eth.getTransactionCount(sendAddress, 'pending');
    var gasP = web3.utils.toHex(gasPrice);
    var gasL = web3.utils.toHex(gasLimit);
    var value = web3.utils.toHex(web3.utils.toWei("0", "ether"));
    var cId = web3.utils.toHex(chainId[network]);
    var data = bcode;

    console.log('new transaction nonce is', nonce)
    console.log(data)

    return {
        nonce: nonce,
        gasPrice: gasP,
        gasLimit: gasL,
        value: value,
        chainId: cId,
        data: data
    };

}

export default buildDeployment;