import React, { Component } from "react";
import ContractForm from "../../components/home/ContractForm";
import coin from "../images/coins.gif";
import DeployButton from "../../components/home/DeployButton";
import "../../css/style.css";

console.log("in components/home/Home");

/*
Defines the Homepage of the App
*/

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="OnClickCoin">
          <h1>Welcome to OnClickCoin!</h1>
          <h2>
            Deploy an <a href="https://en.wikipedia.org/wiki/ERC-20"> ERC20</a>{" "}
            token in one click!
          </h2>
        </div>
        <img src={coin} alt="loading" />
        <div>
          <ContractForm />
        </div>
        <DeployButton />
        <br />
        <div id="myBar">
          <div id="myProgressBar">Progress</div>
        </div>
        <br />
        <br />
        <br />
        Already created a coin? <a href={"send?0x12345"}>Send!</a>
        <br />
        <br />
        <div style={{ justifyContent: "center" }}>
          Powered by <a href="https://ethereum.org">Ethereum</a> and
          <a href="https://metamask.io/"> Metamask </a>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Home;
