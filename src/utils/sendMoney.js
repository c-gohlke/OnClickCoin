//Connecting to Ethereum via infura
import { endpoint, sendPrivKey } from "../config/config";
import buildTransaction from "./buildTransaction";

const Web3 = require("web3");
const EthTx = require("ethereumjs-tx");


async function sendMoney() {
  var netID = document.getElementById("network");
  var network = netID.options[netID.selectedIndex].value;
  console.log("the network is", network);
  const web3 = new Web3(new Web3.providers.HttpProvider(endpoint[network]));

  const privateKeyFromBuffer = new Buffer(sendPrivKey, "hex");

  const tx = await new EthTx(await buildTransaction());
  tx.sign(privateKeyFromBuffer);
  const serializedTx = tx.serialize();
  web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"), function(
    err,
    hash
  ) {
    if (!err) {
      console.log("successful transaction");
      console.log("transaction hash is", hash);
    } else {
      console.log(err);
    }
  });
}

export default sendMoney;
