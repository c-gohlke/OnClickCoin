import React, { Component } from "react";
import TransferForm from "../../components/send/TransactionForm"
import TransactButton from "../../components/send/TransactionButton";
import styles from "../styles/styles"
import give from "../images/give.gif"

/*
Defines the send page of the app
*/

class Send extends Component {
  render() {
    return (
        <div className="Send" style={styles.General}>
        < br/>
        <h1>It's Giveaway time!</h1>
            <img src={give} alt="loading"/>
        <TransferForm/>
        <TransactButton />
      </div>
    );
  }
}

export default Send