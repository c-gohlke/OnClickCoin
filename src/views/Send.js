import React, { Component } from "react";
import TransfermForm from "../components/transferForm"
import TransactButton from "../components/transactionButton";
import styles from "../style/styles"
import give from "../images/give.gif"


class Send extends Component {
  render() {
    return (
        <div className="Send" style={styles.General}>
        <h1>Giveaway time!</h1>
            <img src={give}/>
        <TransfermForm/>
        <TransactButton />

      </div>
    );
  }
}

export default Send
