import React, {Component} from "react"



class TransferButton extends Component {
    handleClick(event) {
        const formInfo = document.ElementById("constructorForm")
        //TO DO
        const contract = formInfo[0].value;
        const to = formInfo[1].value;
        const amount = formInfo[2].value;
    }
}