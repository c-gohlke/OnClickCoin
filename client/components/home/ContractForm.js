import React, { Component } from "react";
import styles from "../../styles/styles";

/*
This class creates the form to define the constructor of the new ERC-20 token
Ticker Symbol refers to the abbreviation of the coin
Name refers to the name of the coin
Decimals refers to if the coin is atomic and if not to how many decimals it should be divisible.
Supply refers to the initial supply of the coin
*/

class ContractForm extends Component {
    render(){
        return(
            <div >
                <h3 >your coin parameters</h3>
                <form id="ContractForm">
                    <br></br>Ticker Symbol of your coin <br/><br/>
                    <input id= "symbol" placeholder="BCC" style={styles.InputStyle}/><br/>
                    <br></br>Name your coin <br/><br/>
                    <input id= "name" placeholder="Bitconnect" style={styles.InputStyle}/><br/>
                    <br></br>Number of decimals of the coin. Leave 0 for whole coins<br/><br/>
                    <input id= "decimals" placeholder="2" style={styles.InputStyle}/><br/>
                    <br></br>How many coins should be created?<br/><br/>
                    <input id="supply" placeholder="21000000" type="number" style={styles.InputStyle}/><br/>

                </form>
            </div>
        );
    }
}
export default ContractForm
