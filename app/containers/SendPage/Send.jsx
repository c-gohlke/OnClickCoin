import React from 'react';
import TransferForm from './TransactionForm';
import give from '../../images/give.gif';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*
Defines the send page of the app
*/

const Send = () => (
  <div>
    <Navbar />
    <Row>
      <Col></Col>
      <Col>
        <h1>It&apos;s Giveaway time!</h1>
        <img src={give} alt="loading" />
      </Col>
      <Col></Col>
    </Row>
    <Row>
      <Col></Col>
      <Col>
        <div className="send">
          <br />
          <br />
          <TransferForm />
        </div>
      </Col>
      <Col></Col>
    </Row>
    <Row></Row>
  </div>
);

export default Send;
