import React, { Component } from "react";
import ContractForm from "../../components/home/ContractForm";
import styles from "../../styles/styles";
import coin from "../images/coins.gif";
import DeployButton from "../../components/home/DeployButton";

/*
Defines the Homepage of the App
*/

class Home extends Component {
  render() {
    return (
      <div style={styles.General}>
        <div style={styles.General} className="OnClickCoin">
          <h1>Welcome to OnClickCoin!</h1>
          <h2>
            Deploy an <a href="https://en.wikipedia.org/wiki/ERC-20"> ERC20</a>{" "}
            token in one click!s
          </h2>
        </div>
        <img src={coin} alt="loading" />
        <div style={styles.FormStyles}>
          <ContractForm />
        </div>
        <DeployButton />
        <br />
        <br />
        <br />
        <br />
        Already created a coin? <a href={"send/:?0x12345"}>Send!</a>
        <br />
        <br />
        <div style={{ justifyContent: "center" }}>
          Powered by <a href="https://ethereum.org">Ethereum</a> and
          <a href="https://metamask.io/"> Metamask </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          Do not use in production
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Home;
