import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ContractForm from './ContractForm';
import coin from '../../images/coins.gif';
import Navbar from '../../components/Header/Navbar';
import Col from 'react-bootstrap/Col';

/*
Defines the Homepage of the App
*/

const Home = () => (
  <div>
    <Navbar />
    <Container style={{ fontFamily: 'Courier', textAlign: 'center' }}>
      <h1>On Click Coin</h1>
      <h2>Deploy your cryptocurrency token in one click!</h2>
      <Col>
        <Container style={{ textAlign: 'center', display: 'inline-block' }}>
          <Image src={coin} />
          <Image src={coin} />
          <Image src={coin} />
        </Container>
      </Col>
      <ContractForm />
    </Container>
  </div >
);

export default Home;
