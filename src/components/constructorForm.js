import React, { Component } from "react";
import styles from "../style/styles"

class constructorForm extends Component {
    render(){
        return(
            <div >
                <h3 >your coin parameters</h3>
                <form id="constructorForm">
                    <br></br>Name your coin <br/><br/>

                    <input id= "name" placeholder="Bitconnect" style={styles.InputStyle}/><br/>

                    <br></br>How many coins should be created?<br/><br/>

                    <input id="supply" placeholder="21000000" type="number" style={styles.InputStyle}/><br/>

                </form>
            </div>
        );
    }
}
export default constructorForm
