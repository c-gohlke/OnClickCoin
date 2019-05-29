import { bytecodeERC20, abiConstructorErc20 } from '../../contracts/erc20';

const Web3 = require('web3');

async function deployContract(symbol, name, decimals, supply) {
  if (typeof web3 !== 'undefined') {
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

    let netname;

    // returns the id of the ethereum network the client is working on
    const netID = await window.web3.eth.net.getId();

    switch (netID) {
      case '1':
        netname = '';
        break;
      case '2':
        netname = 'morden';
        break;
      case '3':
        netname = 'ropsten';
        break;
      case 4:
        netname = 'rinkeby';
        break;
      case '42':
        netname = 'kovan';
        break;
      default:
        netname = 'Unknown';
    }
    console.log('about to send transaction');
    // sends the transaction via metamask
    await window.web3.eth
      .sendTransaction({
        from: accounts[0],
        value: 0,
        chainId: netID,
        data: bcode,
      })
      .on('transactionHash', hash => {
        console.log('transaction received, hash is', hash);
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('transaction has been confirmed');
        window.location.replace(
          `${window.location.origin}/receipt?netname:${netname}?address:${
            receipt.contractAddress
          }?tokenname:${name}?supply:${supply}?sendAddr:${accounts[0]}`,
        );
      })
      .on('error', console.error);
  } else {
    console.log('Client does not have a web3 provider');
    if (
      window.confirm(
        'It seems you do not have a web3 provider installed. To be able to safely deploy your smart contracts/create your own ERC-20 token, it is advised you download metamask. Press OK for more information',
      )
    ) {
      window.location.replace(`${window.location.origin}/info?metamask`);
    }
  }
}

export default deployContract;
