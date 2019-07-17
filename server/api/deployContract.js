import { bytecodeERC20, abiConstructorErc20 } from '../../contracts/erc20';
import getPermission from './getPermission';
const axios = require('axios');

const Web3 = require('web3');

async function deployContract(symbol, name, decimals, supply, netID) {
  // TODO: move folder somewhere else. This happens client-side
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

    let netname;
    switch (networkID) {
      case 1:
        netname = 'mainnet';
        break;
      case 2:
        netname = 'morden';
        break;
      case 3:
        netname = 'ropsten';
        break;
      case 4:
        netname = 'rinkeby';
        break;
      case 42:
        netname = 'kovan';
        break;
      default:
        netname = 'Unknown';
    }

    // sends the transaction via metamask
    let txHash;
    await window.web3.eth
      .sendTransaction({
        from: accounts[0],
        value: 0,
        chainId: netID,
        data: bcode,
      })
      .on('transactionHash', hash => {
        console.log('transaction received, hash is', hash);
        txHash = hash;
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('transaction has been confirmed');

        axios.post('/transaction', {
          name,
          symbol,
          decimals,
          supply,
          sender: accounts[0],
          receiver: '-1',
          transactionHash: txHash,
          contractAddress: receipt.contractAddr,
          netname,
        });

        window.location.replace(
          `${window.location.origin}/receipt?netname:${netname}?address:${
            receipt.contractAddress
          }?tokenname:${name}?supply:${supply}?sendAddr:${accounts[0]}`,
        );
      })
      .on('error', console.error);
  }
  // when the client does not have metamask, go through infura http provider
  else {
    console.log('Client does not have a web3 provider');
    let netname;
    switch (netID) {
      case 1:
        netname = 'mainnet';
        break;
      case 2:
        netname = 'morden';
        break;
      case 3:
        netname = 'ropsten';
        break;
      case 4:
        netname = 'rinkeby';
        break;
      case 42:
        netname = 'kovan';
        break;
      default:
        netname = 'Unknown';
    }
    axios
      .post('/deploy-contract', {
        symbol,
        name,
        decimals,
        supply,
        netname,
      })
      .then(function redirect(response) {
        console.log('transaction confirmed');
        window.location.replace(
          `${window.location.origin}/receipt?netname:${netname}?address:${response.data.contractAddr}?tokenname:${name}?supply:${supply}?sendAddr:${response.data.account}`,
        );
      });
  }
}

export default deployContract;
