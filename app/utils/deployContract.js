import { bytecodeERC20, abiConstructorErc20 } from '../../contracts/erc20';
import getPermission from './getPermission';
import netIDtoName from './netIDtoName';
import history from './history';

const axios = require('axios');
const Web3 = require('web3');

async function deployContract(symbol, name, decimals, supply, netID) {
  if (typeof web3 !== 'undefined') {
    await getPermission();
    window.web3 = new Web3(window.ethereum);

    // Create the data for the deploy transaction encoding the
    // arguments of the constructor with the constructor item of the contract ABI
    const abiPackedArgs = window.web3.eth.abi.encodeFunctionCall(
      abiConstructorErc20,
      [symbol, name, decimals, supply],
    );

    // remove the function signature (hash of the method signature)
    // so the object can be added directly to the bytecode
    const removeMethodSignature = abiPackedArgs.substring(10);

    const bcode = `0x${bytecodeERC20}${removeMethodSignature}`;

    const accounts = await window.ethereum.enable();
    const networkID = await window.web3.eth.net.getId();
    const netname = netIDtoName(networkID);

    // sends the transaction via metamask
    let txHash;
    await window.web3.eth
      .sendTransaction({
        from: accounts[0],
        value: 0,
        chainId: netID,
        data: bcode,
      })
      .on('txHash', hash => {
        console.log('transaction received, hash is', hash);
        txHash = hash;
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('transaction has been confirmed');

        axios.post('/api/contract', {
          name,
          symbol,
          decimals,
          supply,
          sender: accounts[0],
          txHash,
          address: receipt.contractAddr,
          netname,
        });

        history.push(`${window.location.origin}/receipt/${txHash}`);
      })
      .on('error', console.error);
  }
  // when the client does not have metamask, go through infura http provider
  else {
    console.log('Client does not have a web3 provider');
    const netname = netIDtoName(netID);

    axios
      .post('/api/deploy-contract', {
        symbol,
        name,
        decimals,
        supply,
        netname,
      })
      .then(function redirect(response) {
        console.log('transaction confirmed');
        history.push(`/receipt/${response.data.txHash}`);
      });
  }
}

export default deployContract;
