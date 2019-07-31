import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import coin from '../../images/coins.gif';
import piggy from '../../images/piggy.gif';
import ico from '../../images/ico.jpg';
import ICOForm from './ICOForm';

/*
Defines the Homepage of the App
*/

const ICO = () => (
  <div>
    <Container>
      <Alert variant="danger">
        ICOs are a regulated product. Don't sell securities without legal
        approval. We are not responsible for any ICOs created using this
        platform
      </Alert>
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
        <h1>Sell your coins</h1>
        <h2>There is no easier way to create an ICO</h2>
      </Container>

      <Container style={{ fontFamily: 'Open Sans', textAlign: 'center' }}>
        <Col>
          <Container style={{ textAlign: 'center', display: 'inline-block' }}>
            <Image src={coin} />
            <Image src={piggy} />
            <Image src={coin} />
          </Container>
        </Col>
        <ICOForm />
      </Container>
    </Container>
  </div>
);

export default ICO;
