import React, { Component } from "react";
import styles from "../style/styles"

class constructorForm extends Component {
    render(){
        return(
            <div  style={styles.General}>
                <form id="constructorForm">
                    <br></br>Enter your contract address <br/><br/>
                    <input id= "name" placeholder="0xabc123" style={styles.InputStyle}/><br/>
                    <br></br>Enter your friend address <br/><br/>
                    <input id= "name" placeholder="0xabc123" style={styles.InputStyle}/><br/>
                    <br></br>How many coins should be send?<br/><br/>
                    <input id="supply" placeholder="1" type="number" style={styles.InputStyle}/><br/>
                </form>
            </div>
        );
    }
}
export default constructorForm
