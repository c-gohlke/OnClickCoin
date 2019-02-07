//Connecting to Ethereum via infura
import {endpoint, sendPrivKey, networkID} from '../config/config'
import buildDeployment from './buildDeployment'

const Web3 = require("web3");
const EthTx = require("ethereumjs-tx");
const web3 = new Web3(new Web3.providers.HttpProvider(endpoint[networkID]));

const privateKeyFromBuffer = new Buffer(sendPrivKey, "hex");

async function deployContract() {
  const tx = await new EthTx(await buildDeployment());
  tx.sign(privateKeyFromBuffer);
  const serializedTx = tx.serialize();
  web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"), function(
    err,
    hash
  ) {
    if (!err) {
      console.log("successful deployment");
      console.log('transaction hash is', hash);
    } else {
      console.log(err);
    }
  });
}

export default deployContract;