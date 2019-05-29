import React, { Component } from 'react';
import LinkButton from './EtherscanLinkButton';
import SendButton from './RerouteSendButton';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

class ContractReceipt extends Component {
  constructor(props) {
    /* the name and the Supply's information of the token are passed on through the URL.

    The URL's form is:
    pathname/receipt/: { name of the net } ?
    { sender's address } ? { name of the token } ? {initial supply }

    This URL is created by deployErc20Contract() function in server/api/deployErc20Contract
    */

    super(props);
    const url = String(window.location);

    console.log('url is', url);

    const parseName = url.split('tokenname:')[1];
    const parseSupply = url.split('supply:')[1];

    console.log(parseName);

    const name = parseName.split('?supply')[0];
    const supply = parseSupply.split('?sendAddr')[0];

    console.log(name);
    console.log(supply);

    this.state = {
      name,
      supply,
    };
  }

  // state = {
  //   name: 'default',
  //   supply: 'default',
  // };

  render() {
    const { name, supply } = this.state;
    // const { supply } = this.state;

    return (
      <div>
        <Navbar />
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
                <td> {name}</td>
              </tr>
              <tr>
                <td>Current supply:</td>
                <td> {supply}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div>
            <br />
            Your contract has been successfully created! Link to your
            transaction receipt:
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
        <Footer />
      </div>
    );
  }
}

export default ContractReceipt;
