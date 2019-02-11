import React, { Component } from "react";
import ConstructorForm from "../components/constructorForm";
import styles from "../style/styles";
import coin from "../images/coins.gif";
import eth from "../images/ethereum.png";
import meta from "../images/metamask.png";
import DeployButton from "../components/deployButton";

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
        <DeployButton/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          Powered by <a href="https://ethereum.org">Ethereum</a> and  <a href="https://metamask.io/">Metamask</a>
      </div>
    );
  }
}

export default Home