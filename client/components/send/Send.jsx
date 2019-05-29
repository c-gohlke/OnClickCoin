import React from 'react';
import TransferForm from './TransactionForm';
import TransactButton from './TransactionButton';
import give from '../images/give.gif';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

/*
Defines the send page of the app
*/

const Send = () => (
  <div>
    <Navbar />
    <div className="send">
      <br />
      <h1>It&apos;s Giveaway time!</h1>
      <img src={give} alt="loading" />
      <TransferForm />
      <TransactButton />
    </div>
    <Footer />
  </div>
);

export default Send;
