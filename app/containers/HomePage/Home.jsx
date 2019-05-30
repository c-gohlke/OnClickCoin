import React from 'react';
import ContractForm from './ContractForm';
import coin from '../../images/coins.gif';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import DeployButton from './DeployButton';

/*
Defines the Homepage of the App
*/

const Home = () => (
  <div>
    <Navbar />
    <div className="wrapper">
      <div className="OnClickCoin">
        <h1>Welcome to OnClickCoin!</h1>
        <h2>
          Deploy an <a href="https://en.wikipedia.org/wiki/ERC-20"> ERC20</a>{' '}
          token in one click!
        </h2>
      </div>
      <img src={coin} alt="loading" />
      <div>
        <ContractForm />
      </div>
      <br />
      <DeployButton />
      <br />
      <div id="myBar">
        <div id="myProgressBar">Progress</div>
      </div>
      <br />
      <br />
      <br />
      Already created a coin? <a href="send?0x12345">Send!</a>
      <br />
      <br />
      <div style={{ justifyContent: 'center' }}>
        Powered by <a href="https://ethereum.org">Ethereum</a> and{' '}
        <a href="https://metamask.io/"> Metamask </a>
      </div>
      <br />
      <br />
    </div>
    <Footer />
  </div>
);

export default Home;
