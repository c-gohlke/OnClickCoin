import React, { Component } from "react";
import TransfermForm from "../components/transferForm"
import TransactButton from "../components/transactionButton";
import styles from "../style/styles"

class Send extends Component {
  render() {
    return (
        <div className="Send" style={styles.General}>
        <h1>Time to give away some coins to your friends</h1>
        <TransfermForm/>
        <TransactButton />
      </div>
    );
  }
}

export default Send