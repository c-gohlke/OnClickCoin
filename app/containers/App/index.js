import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Home from '../HomePage';
import ContractReceipt from '../ReceiptPage';
import Send from '../SendPage';
import Info from '../InfoPage';
import ICO from '../CrowdsalePage';
import Data from '../DataPage';
import Dashboard from '../DashboardPage';
import Feedback from '../FeedbackPage';
import Login from '../LoginPage';
import Navbar from '../../components/Header/Navigationbar';
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
      <Route exact path="/receipt" component={ContractReceipt} />
      <Route exact path="/send" component={Send} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/ico" component={ICO} />
      <Route exact path="/data" component={Data} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
);

export default App;
