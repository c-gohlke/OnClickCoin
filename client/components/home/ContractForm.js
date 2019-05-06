import React, { Component } from "react";
import DeployButton from "../../components/home/DeployButton";

/*
This class creates the form to define the constructor of the new ERC-20 token
Ticker Symbol refers to the abbreviation of the coin
Name refers to the name of the coin
Decimals refers to if the coin is atomic and if not to how many decimals it should be divisible.
Supply refers to the initial supply of the coin
*/

class ContractForm extends Component {
  render() {
    return (
      <div class="form">
        <form>
          <fieldset>
            <legend>Your Coin Parameters</legend>
            <label for="symbol">
              <span>Ticker Symbol of your coin</span>
              <input
                type="text"
                class="input-field"
                id="symbol"
                defaultValue="BCC"
              />
            </label>
            <label for="name">
              <span>Name your coin</span>
              <input
                type="text"
                class="input-field"
                id="name"
                defaultValue="Bitconnect"
              />
            </label>
            <label for="decimals">
              <span>Divisibility of the coin</span>
              <input
                type="text"
                class="input-field"
                id="decimals"
                defaultValue="2"
              />
            </label>
            <label for="supply">
              <span>How many coins should be created?</span>
              <input
                type="text"
                class="input-field"
                id="supply"
                defaultValue="21000000"
              />
            </label>
            <DeployButton />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default ContractForm;
