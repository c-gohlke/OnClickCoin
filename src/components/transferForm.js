import React, { Component } from "react";
import styles from "../style/styles"

class constructorForm extends Component {
    render(){
        return(
            <div  style={styles.General}>
                <form id="transferForm">
                    <br></br>Enter your contract address <br/><br/>
                    <input id= "contract" placeholder="0xabc123" style={styles.InputStyle}/><br/>
                    <br></br>Enter your friend address <br/><br/>
                    <input id= "to" placeholder="0xabc123" style={styles.InputStyle}/><br/>
                    <br></br>How many coins should be sent?<br/><br/>
                    <input id="amount" placeholder="1" type="number" style={styles.InputStyle}/><br/>
                </form>
            </div>
        );
    }
}
export default constructorForm
