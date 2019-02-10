import React, { Component } from "react";

class constructorForm extends Component {
    render(){
        return(
            <div>
                <h3 >Your coin parameters</h3>
                <form id="constructorForm">
                    Name:<input id= "name" placeholder="Bitconnect"/><br></br>
                    Ticker:<input id="ticker" placeholder="BCC"/><br></br>
                    Owner:<input id="owner" placeholder="0xabc..."/><br></br>
                    Supply:<input id="supply" placeholder="21000000"/><br></br>
                </form>
            </div>
        );
    }
}
export default constructorForm