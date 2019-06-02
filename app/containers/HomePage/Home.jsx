import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ContractForm from './ContractForm';
import coin from '../../images/coins.gif';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*
Defines the Homepage of the App
*/

const Home = () => (
  <div>
    <Navbar />
    <Row>
    </Row>
    <Row>
      <Col></Col>
      <Col>
        <Container style={{ fontFamily: 'Helvetica-Bold' }} fluid>
          <h1>On Click Coin</h1>
          <h2>Deploy your cryptocurrency token in one click!</h2>
          <Row>
          </Row>
          <Row>
            <Col></Col>
            <Col><Image src={coin} fluid /></Col>
            <Col></Col>
          </Row>
          <Row>
          </Row>
        </Container>
        <Container style={{ fontFamily: 'Helvetica-Bold' }} fluid>
          <ContractForm />
        </Container>

      </Col>
      <Col></Col>
    </Row>
    <Row>
    </Row>

  </div >
);

export default Home;
