import React, { Component } from "react";
import LinkButton from "../../components/contract-receipt/EtherscanLinkButton.js";
import SendButton from "../../components/contract-receipt/RerouteSendButton.js";

console.log("in components/contract-receipt/ContractReceipt")

class ContractReceipt extends Component {

  constructor(props){
    /*the name and the Supply's information of the token are passed on through the URL.

    The URL's form is:
    pathname/receipt/: { name of the net } ? { sender's address } ? { name of the token } ? {initial supply }

    This URL is created by deployErc20Contract() function in server/api/deployErc20Contract
    */
   
    super(props)
    const url = (String(window.location))

    console.log("url is", url)
  
    var parseName = url.split("tokenname:")[1]
    var parseSupply = url.split("supply:")[1]
    
    console.log(parseName)
    
    var name = parseName.split("?supply")[0]
    var supply = parseSupply.split("?sendAddr")[0]
    
    console.log(name)
    console.log(supply)

    this.state = {
      name: name,
      supply: supply
    }
  }

  state = {
    name: "default",
    supply: "default"
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="receipt">Your Token info:</div>
        <br />
        <table width="100%" border="1">
          <tbody>
            <tr>
              <td>Name:</td>
              <td> {this.state.name}</td>
            </tr>
            <tr>
              <td>Current supply:</td>
              <td> {this.state.supply}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div>
          <br />
          Your contract has been successfully created! Link to your transaction
          receipt:
          <br />
          <br />
          <LinkButton />
        </div>
        <br />
        <br />
        <div>
          <br />
          Press here to send some of your tokens to friends!!!:
          <br />
          <br />
          <SendButton />
        </div>
      </div>
    );
  }
}

export default ContractReceipt;
