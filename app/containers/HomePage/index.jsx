import React from 'react';
import { Container, Image } from 'react-bootstrap';
import ContractForm from './ContractForm';
import coin from '../../images/coins.gif';

/*
Defines the Homepage of the App
*/

const Home = () => (
  <div>
    <Container>
      <Container style={{ fontFamily: 'Open Sans', textAlign: 'center' }}>
        <h1>On Click Coin</h1>
        <h2>Deploy your cryptocurrency token in one click!</h2>
        <br />
        <Container
          style={{
            textAlign: 'center',
            display: 'inline-block',
            zIndex: '1',
            backgroundColor: 'white',
          }}
        >
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
