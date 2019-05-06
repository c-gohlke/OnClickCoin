import React, { Component } from "react";
import TransferForm from "../../components/send/TransactionForm";
import give from "../images/give.gif";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

/*
Defines the send page of the app
*/

console.log("in components/send/Send");

class Send extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <br />
          <h1 className='align-center'>It's Giveaway time!</h1>
          <br />
          <div className='align-center'>
            <img src={give} alt="loading" />
          </div>
          <br />
          <TransferForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Send;
