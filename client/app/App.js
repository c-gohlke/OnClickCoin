import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import ContractReceipt from '../components/contract-receipt/ContractReceipt';
import Send from '../components/send/Send'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/receipt' component={ContractReceipt}/>
          <Route exact path='/send' component={Send}/>
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