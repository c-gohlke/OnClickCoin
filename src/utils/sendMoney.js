//Connecting to Ethereum via infura
import { endpoint } from "../config/config";
import buildTransaction from "./buildTransaction";

const Web3 = require("web3");
const EthTx = require("ethereumjs-tx");

async function sendMoney(
  senderAccID,
  receiveAccID,
  senderPrivateKey,
  gasPrice,
  gasLimit,
  sendAmount
) {
  const netID = document.getElementById("network");
  const network = netID.options[netID.selectedIndex].value;
  const netname = netID.options[netID.selectedIndex].text;
  var link = "https://" + netname + ".etherscan.io/tx/";
  console.log("the network is", netname);
  const web3 = new Web3(new Web3.providers.HttpProvider(endpoint[network]));
  const privateKeyFromBuffer = new Buffer(senderPrivateKey, "hex");

  const tx = await new EthTx(
    await buildTransaction(
      senderAccID,
      receiveAccID,
      gasPrice,
      gasLimit,
      sendAmount
    )
  );
  tx.sign(privateKeyFromBuffer);
  const serializedTx = tx.serialize();
  web3.eth
    .sendSignedTransaction("0x" + serializedTx.toString("hex"), function(
      err,
      hash
    ) {
      if (err) {
        console.log(err);
      }
    })
    .on("transactionHash", function(hash) {
      console.log("transaction recieved, hash is", hash);
      link = link + hash;
    })
    .on("receipt", function(receipt) {
      // window.confirm("Receipt received! Click ok to go to transaction details");
      window.open(link.toString());
      console.log("receipt info is", receipt);
    });
}

export default sendMoney;
