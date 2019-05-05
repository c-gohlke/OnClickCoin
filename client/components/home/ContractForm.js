import React, { Component } from "react";

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
                    <input id= "symbol" defaultValue="BCC"/><br/>
                    <br></br>Name your coin <br/><br/>
                    <input id= "name" defaultValue="Bitconnect"/><br/>
                    <br></br>Divisibility of the coin. (0 for atomic coins, 2 for maximal 2 decimals (e.g. Euros, USD etc.)<br/><br/>
                    <input id= "decimals" defaultValue="2"/><br/>
                    <br></br>How many coins should be created?<br/><br/>
                    <input id="supply" defaultValue="21000000" type="number"/><br/>

                </form>
            </div>
        );
    }
}
export default ContractForm
