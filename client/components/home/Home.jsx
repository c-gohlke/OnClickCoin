import React from 'react';
import ContractForm from './ContractForm';
import coin from '../images/coins.gif';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Home.css';
import DeployButton from './DeployButton';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


/*
Defines the Homepage of the App
*/

const Home = () => (
  <div>
    <Navbar />

    <Container style={{ fontFamily: 'Helvetica-Bold' }}>
      <h1 >Welcome to OnClickCoin!</h1>
      <h2>Deploy your cryptocurrency token in one click!</h2>
    </Container>
    <Image src={coin} fluid />;

    {/*<img src={coin} alt="loading" />*/}

    <Container style={
      { fontFamily: 'Helvetica-Bold' }
    } >
      <ContractForm />
    </Container>


    {/*
    <div className="wrapper">
      <div className="OnClickCoin">
      </div>
      <div>
        
      </div>
      <br />
      <DeployButton />
      <br />
      <br />
      <br />
    </div>
    <Footer />
    */}
  </div>
);

export default Home;
