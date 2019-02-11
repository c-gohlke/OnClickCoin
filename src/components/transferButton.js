import React, {Component} from "react"
import transferErc20 from "../utils/transferErc20"


class TransferButton extends Component {
    handleClick(event) {
        const formInfo = document.ElementById("constructorForm")
        //TO DO
        const symbol = formInfo[0].value;
        const name = formInfo[1].value;
        const decimals = formInfo[2].value;
        const supply = formInfo[3].value;
        transferErc20(symbol, name, decimals, supply)
    }
}