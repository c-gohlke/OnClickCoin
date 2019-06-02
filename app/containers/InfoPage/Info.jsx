import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*
Defines the send page of the app
*/

const Info = () => (
  <div>
    <Navbar />
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row>
      <Col></Col>
      <Col>
        <Container fluid>
          Ethereum powered token generator
          <ul>
            <li>What is this?</li>
            <li>Metamask </li>
            <li>Faucet </li>
            <li>Disclaimer</li>
            <li><a href="https://github.com/clement2705/OnClickCoin">help us!</a> ⭐️ or submit a PR</li>
            <li>Made by <a href="https://github.com/clement2705">CG</a> and <a href="https://github.com/hugoroussel">HR</a></li>
          </ul>






        </Container>
      </Col>
      <Col></Col>
    </Row>
    <Row>
    </Row>


  </div>
);

export default Info;
