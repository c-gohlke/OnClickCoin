import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import ContractReceipt from '../components/contract-receipt/ContractReceipt';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/receipt' component={ContractReceipt}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;