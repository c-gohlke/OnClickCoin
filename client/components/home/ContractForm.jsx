import React from 'react';
import './ContractForm.css';

/*
This class creates the form to define the constructor of the new ERC-20 token
Ticker Symbol refers to the abbreviation of the coin
Name refers to the name of the coin
Decimals refers to if the coin is atomic and if not to how many decimals it should be divisible.
Supply refers to the initial supply of the coin
*/

/*
This class creates the form to define the constructor of the new ERC-20 token
Ticker Symbol refers to the abbreviation of the coin
Name refers to the name of the coin
Decimals refers to if the coin is atomic and if not to how many decimals it should be divisible.
Supply refers to the initial supply of the coin
*/

const ContractForm = () => (
  <div className="form">
    <form id="ContractForm">
      <fieldset>
        <legend>Your Coin Parameters</legend>
        <label htmlFor="symbol">
          <span>Ticker Symbol of your coin</span>
          <input id="symbol" defaultValue="BCC" />
        </label>
        <br />
        <br />
        <label htmlFor="name">
          <span>Name your coin</span>
          <input id="name" defaultValue="Bitconnect" />
        </label>
        <br />
        <br />
        <label htmlFor="decimals">
          <span>Divisibility</span>
          <input id="decimals" defaultValue="2" />
        </label>
        <br />
        <br />
        <label htmlFor="supply">
          <span>How many coins should be created?</span>
          <input id="supply" defaultValue="21000000" type="number" />
        </label>
        <br />
        <br />
      </fieldset>
    </form>
  </div>
);

export default ContractForm;
