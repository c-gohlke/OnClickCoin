import React, { Component } from "react";
import styles from "../style/styles"

class constructorForm extends Component {
    render(){
        return(
            <div >
                <h3 >Your coin parameters</h3>
                <form id="constructorForm">
                    <br></br>Name your coin <br/><br/>

                    <input id= "name" placeholder="Bitconnect" style={styles.InputStyle}/><br/>

                    <br></br>How many coins should be created?<br/><br/>

                    <input id="supply" placeholder="21000000" type="number" style={styles.InputStyle}/><br/>

                    <br></br>Put the address you wish to send the coins<br/><br/>

                    <input id="owner" placeholder="0xabc..."style={styles.InputStyle}/><br></br>

                </form>
            </div>
        );
    }
}
export default constructorForm


/*
*   <br/><br/>Give him an unique ticker <br/><br/>
                    <input id="ticker" placeholder="BCC"/><br></br>
*
*
* */