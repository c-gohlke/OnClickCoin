import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Particles from 'react-particles-js';
import ContractForm from './ContractForm';
import coin from '../../images/coins.gif';
import Navigationbar from '../../components/Header/Navigationbar';
import paramObject from './particlesConfig';

/*
Defines the Homepage of the App
*/

const Home = () => (
  <div>
    <Particles params={paramObject} style={{ position: 'absolute' }} />
    <Navigationbar />
    <Container>
      <Container style={{ fontFamily: 'Open Sans', textAlign: 'center' }}>
        <h1>On Click Coin</h1>
        <h2>Deploy your cryptocurrency token in one click!</h2>
        <br />
        <Container style={{ textAlign: 'center', display: 'inline-block' }}>
          <Image src={coin} />
          <Image src={coin} />
          <Image src={coin} />
        </Container>
        <br />
        <br />
        <br />
        <ContractForm />
      </Container>
    </Container>
  </div>
);

export default Home;
