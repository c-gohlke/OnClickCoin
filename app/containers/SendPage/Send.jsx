import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import TransferForm from './TransactionForm';
import give from '../../images/give.gif';
import Navbar from '../../components/Header/Navbar';

/*
Defines the send page of the app
*/

const Send = () => (
  <div>
    <Navbar />
    <Container style={{ fontFamily: 'Open Sans', textAlign: 'center' }}>
      <h1>It&apos;s Giveaway time!</h1>
      <Image src={give} rounded />
      <br />
      <br />
      <div className="send">
        <TransferForm />
      </div>
    </Container>
  </div>
);

export default Send;
