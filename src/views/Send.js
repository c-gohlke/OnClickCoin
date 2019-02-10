import React, { Component } from "react";
import DropdownNet from "../components/dropdownNet";
import SendForm from "../components/sendForm";
import TransactButton from "../components/transactionButton";

class Send extends Component {
  render() {
    return (
        <div className="Send">
        Send
        <DropdownNet />
        <SendForm />
        <TransactButton />
      </div>
    );
  }
}

export default Send