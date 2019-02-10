import React, { Component } from "react";
import DropdownNet from "../components/dropdownNet";
import SendForm from "../components/sendForm";
import TransactButton from "../components/transactionButton";
import ConstructorForm from "../components/constructorForm"
import styles from "../style/styles"

class Home extends Component {
  render() {
    return (
        <div style={styles.General}>
            <div style={styles.Titles}className="OnClickCoin"><h1>Welcome to OnClickCoin!</h1></div>
            <div style={styles.Titles}className="OnClickCoin"><h3>Deploy an ERC20 token in one click!</h3></div>
            <div style={styles.FormStyles}><DropdownNet/></div>
            <br/>
            <br/>
            <SendForm style={styles.General}/>
            <TransactButton style={styles.General}/>
            <br/>
            <div style={styles.FormStyles}><ConstructorForm></ConstructorForm></div>

            <br/>
            <br/>
        </div>
    );
  }
}

export default Home;
