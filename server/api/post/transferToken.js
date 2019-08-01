import { Router } from 'express';

import { abiTransferErc20 } from '../../../contracts/erc20';
import TransactionSchema from '../../../app/models/TransactionModel';
const EthereumTx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');

export default () => {
  const app = Router();

  app.post('api/transfer-token', async function transferToken(req, res) {
    const apiKey = process.env.INFURA_API_KEY;
    const sendAddr = process.env.ADDRESS;
    const sendPrivKey = process.env.PRIVATE_KEY;
    const { netname } = req.body;
    const endpoint = `https://${netname}.infura.io/v3/${apiKey}`;

    const web3 = new Web3(new Web3.providers.HttpProvider(endpoint), null, {
      transactionConfirmationBlocks: 1,
    });

    const gasPrice = parseInt(
      await Promise.resolve(web3.eth.getGasPrice()),
      10,
    );
    console.log('gasPrice used is ', gasPrice);

    // Sometimes transactions times super slow if gasLimit too high (yes I know it's weird and makes little sense)
    // if transactions not going through, deploy contract with metamask and check gas values used by it
    const gasLimit = 2574111;

    const privateKeyFromBuffer = Buffer.from(sendPrivKey, 'hex');

    const value = 0;
    const data = web3.eth.abi.encodeFunctionCall(abiTransferErc20, [
      req.body.receiveAddr,
      req.body.sendAmount,
    ]);

    const nonce = await web3.eth.getTransactionCount(sendAddr, 'pending');
    const txParams = {
      nonce,
      gasPrice,
      gasLimit,
      to: req.body.contractAddr,
      value,
      data,
    };

    const tx = new EthereumTx(txParams, { chain: netname });

    tx.sign(privateKeyFromBuffer);
    const serializedTx = tx.serialize();

    let userID = null;
    if (req.user) {
      userID = req.user._id;
    }
    web3.eth
      .sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
      .on('transactionHash', hash => {
        console.log('transaction received, hash is', hash);

        const transaction = new TransactionSchema({
          name: 'sendTransaction',
          symbol: 'sendTransaction',
          decimals: -1,
          sender: sendAddr,
          supply: -1,
          transactionHash: hash,
          contractAddress: req.body.contractAddr,
          netname,
          userID,
        });

        transaction.save();
      });

    res.end('transaction confirmed');
  });

  return app;
};
