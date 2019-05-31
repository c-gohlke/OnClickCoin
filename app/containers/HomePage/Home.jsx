import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import ContractForm from './ContractForm';
import coin from '../../images/coins.gif';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import './Home.css';

/*
Defines the Homepage of the App
*/

const Home = () => (
  <div>
    <Navbar />
    <Container style={{ fontFamily: 'Helvetica-Bold' }}>
      <h1>Welcome to OnClickCoin!</h1>
      <h2>Deploy your cryptocurrency token in one click!</h2>
    </Container>
    <Image src={coin} fluid />
    <Container style={{ fontFamily: 'Helvetica-Bold' }}>
      <ContractForm />
    </Container>
    <Footer />
  </div>
);

export default Home;
