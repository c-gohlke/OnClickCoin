import React from 'react';
import { Container, Image } from 'react-bootstrap';
import ContractForm from '../../components/ContractForm/ContractForm';
import logo from '../../images/eth_black_3.png';

/*
Defines the Homepage of the App
*/

const Home = () => (
  <div>
    <Container
      style={{
        fontFamily: 'Roboto Mono',
        position: 'absolute',
        left: '10px',
        width: '500px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '15px',
        border: '0px solid #000000',
      }}
    >
      <h1>On Click Coin</h1>
      <h2>Create your cryptocurrency token in one click.</h2>
    </Container>
    <Container>
      <Container style={{ fontFamily: 'Montserrat', textAlign: 'center' }}>
        <br />
        <Image src={logo} rounded />
        <Container
          style={{
            textAlign: 'center',
            display: 'inline-block',
            zIndex: '1',
            backgroundColor: 'white',
          }}
        ></Container>
        <br />
        <br />
        <br />
        <ContractForm />
      </Container>
    </Container>
  </div>
);

export default Home;
