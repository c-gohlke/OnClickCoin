import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../HomePage';
import ContractReceipt from '../ReceiptPage';
import Send from '../SendPage';
import Info from '../InfoPage';
import ICO from '../CrowdsalePage';
import Data from '../DataPage';
import Login from '../LoginPage';
import Navbar from '../../components/Header/Navigationbar';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/receipt" component={ContractReceipt} />
      <Route exact path="/send" component={Send} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/ico" component={ICO} />
      <Route exact path="/data" component={Data} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
);

export default App;
