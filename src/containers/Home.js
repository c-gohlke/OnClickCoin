import React, { Component } from "react";
import DropdownNet from "../components/dropdownNet"
import SendForm from "../components/sendForm"
import TransactButton from "../components/transactionButton";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="OnClickCoin">Welcome to OnClickCoin!</div>
        <DropdownNet></DropdownNet>
        <br></br><br></br>
        <SendForm></SendForm>
        <br></br>
        <TransactButton></TransactButton>
      </div>
    );
  }
}

export default Home;
