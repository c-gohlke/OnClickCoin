import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import coin from '../../images/coins.gif';
import piggy from '../../images/piggy.gif';
import ICOForm from './ICOForm';

/*
Defines the Homepage of the App
*/

const ICO = () => (
  <div>
    <Container>
      <Container style={{ fontFamily: 'Open Sans', textAlign: 'center' }}>
        <h1>Sell your coins</h1>
        <h2>The easiest and safest way to create an ICO</h2>
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
