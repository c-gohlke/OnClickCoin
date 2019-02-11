import React, { Component } from "react";
import styles from "../style/styles";
import LinkButton from "../components/linkButton.js";

class Giveaway extends Component {
  render() {
    return (
      <div style={styles.General}>
        <br />
        <br />
        Your contract has been successfully created! Link to your transaction
        receipt:<br />
        <LinkButton />
      </div>
    );
  }
}

export default Giveaway;
