import React, { Component } from "react";
import ConstructorForm from "../components/constructorForm";
import styles from "../style/styles";
import coin from "../images/coins.gif";

class Home extends Component {
  render() {
    return (
      <div style={styles.General}>
        <div style={styles.General} className="OnClickCoin">
          <h1>Welcome to OnClickCoin!</h1>
        </div>
        <div style={styles.General} className="OnClickCoin">
          <h2>
            Deploy an <a href="https://en.wikipedia.org/wiki/ERC-20"> ERC20</a>{" "}
            token in one click!
          </h2>
        </div>
        <img src={coin} alt="loading" />

        <div style={styles.FormStyles}>
          <ConstructorForm />
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default Home