import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';
import Home from '../HomePage';
import ContractReceipt from '../ContractReceiptPage';
import TransactionReceipt from '../TransactionReceiptPage';
import Send from '../SendPage';
import Info from '../InfoPage';
import ICO from '../CrowdsalePage';
import TokenData from '../TokenDataPage';
import TransactionData from '../TransactionDataPage';
import Dashboard from '../DashboardPage';
import Feedback from '../FeedbackPage';
import Login from '../LoginPage';
import Navbar from '../../components/Header/Navigationbar';
import Notfound from '../NotfoundPage';
import paramObject from './particlesConfig';

const App = () => (
  <div>
    <Navbar />
    <Particles
      params={paramObject}
      style={{ position: 'absolute', zIndex: '-1' }}
    />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/receipt/token/:txHash" component={ContractReceipt} />
      <Route
        path="/receipt/transaction/:txHash"
        component={TransactionReceipt}
      />
      <Route path="/send" component={Send} />
      <Route path="/info" component={Info} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/ico" component={ICO} />
      <Route path="/data/tokens" component={TokenData} />
      <Route path="/data/transactions" component={TransactionData} />
      <Route path="/login" component={Login} />
      <Route component={Notfound} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
