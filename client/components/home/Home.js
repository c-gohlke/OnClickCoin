import React, { Component } from "react";
import ContractForm from "../../components/home/ContractForm";
import coin from "../images/coins.gif";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Home.css"

console.log("in components/home/Home");

/*
Defines the Homepage of the App
*/

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div>
            <h1 className='title'>Welcome to OnClickCoin!</h1>
            <h2 className='align-center'>
              Deploy an{" "}
              <a href="https://en.wikipedia.org/wiki/ERC-20"> ERC20</a> token in
              one click!
            </h2>
          </div>
          <div className='align-center'>
            <img src={coin} alt="loading" />
          </div>
          <div>
            <ContractForm />
          </div>
          <br />
          <h4 className='align-center'>Already created a coin? <a className='button' href={"send?0x12345"}>Send!</a></h4>
          <br />
          <div className='align-center'>
            Powered by <a href="https://ethereum.org">Ethereum</a> and <a href="https://metamask.io/">Metamask</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
