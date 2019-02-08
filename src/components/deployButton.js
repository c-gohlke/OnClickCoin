import React, { Component } from "react";
import deployContract from "../utils/deployContract";

class DeployButton extends Component {
    handleClick(event) {
        const formInfo = document.getElementById("constructorForm")
        const name = formInfo[0].value
        const ticker = formInfo[1].value
        const owner = formInfo[2].value
        const supply = formInfo [3].value

        deployContract(name, ticker, owner, supply);
    }

    render() {
        return <button onClick={this.handleClick.bind(this)}>Click here to deploy your new Contract!</button>;
    }
}

export default DeployButton;