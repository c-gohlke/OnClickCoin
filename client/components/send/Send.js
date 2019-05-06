import React, { Component } from "react";
import TransferForm from "../../components/send/TransactionForm";
import TransactButton from "../../components/send/TransactionButton";
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
        <div className="send">
          <br />
          <h1>It's Giveaway time!</h1>
          <img src={give} alt="loading" />
          <TransferForm />
          <TransactButton />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Send;
