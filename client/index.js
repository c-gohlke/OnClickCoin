import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/Home';
import ContractReceipt from './components/contract-receipt/ContractReceipt';

console.log ("index.js is called")

//TODO fix: only renders the first but not the second WTF? (interchange line a and b to make the other function)
console.log("rendering ContractReceipt from index.js")
ReactDOM.render(<ContractReceipt />, document.getElementById('contract-receipt'));
console.log("rendering Home from index.js")
ReactDOM.render(<Home />, document.getElementById('home'));
