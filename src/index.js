import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Button from './components/transactionButton'

ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Button />, document.getElementById('transactButton'));