import { Router } from 'express';

import { bytecodeERC20, abiConstructorErc20 } from '../../../contracts/erc20';
import TransactionSchema from '../../../app/models/TransactionModel';

const EthereumTx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');

export default () => {
  const app = Router();

  app.post('api/deploy-contract', async function deploycontract(req, res) {
    // TODO: find way to make synchronous. If many clients use website and deploy tokens at the same time,
    // huge bottleneck happening here, waiting for each individual contract to get confirmed one-at-a-time
    console.log('Deploying contract post request received');

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

    const value = 0;
    const privateKeyFromBuffer = Buffer.from(sendPrivKey, 'hex');

    const abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiConstructorErc20, [
      req.body.symbol,
      req.body.name,
      req.body.decimals,
      req.body.supply,
    ]);

    const removeMethodSignature = abiPackedArgs.substring(10);
    const data = `0x${bytecodeERC20}${removeMethodSignature}`;

    const nonce = await web3.eth.getTransactionCount(sendAddr, 'pending');

    const txParams = {
      nonce,
      gasPrice,
      gasLimit,
      value,
      data,
    };

    const tx = new EthereumTx(txParams, { chain: netname });

    tx.sign(privateKeyFromBuffer);
    const serializedTx = tx.serialize();

    let userID;
    if (req.user) {
      userID = req.user._id;
    }

    await web3.eth
      .sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
      .once('transactionHash', hash => {
        console.log('transaction hash is', hash);
      })
      .once('confirmation', (confirmationNumber, receipt) => {
        console.log('transaction has been confirmed');

        const transaction = new TransactionSchema({
          name: req.body.name,
          symbol: req.body.symbol,
          decimals: req.body.decimals,
          supply: req.body.supply,
          sender: receipt.from,
          receiver: receipt.to,
          transactionHash: receipt.transactionHash,
          contractAddress: receipt.contractAddress,
          netname,
          userID,
        });

        transaction.save();

        res.send({ transactionHash: receipt.transactionHash });
      });
  });

  return app;
};
