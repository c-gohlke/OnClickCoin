import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import Home from './containers/HomePage/index';
import ContractReceipt from './containers/ReceiptPage/index';
import Send from './containers/SendPage/index';
import Info from './containers/InfoPage/index';
import ICO from './containers/CrowdsalePage/index';
import Data from './containers/DataPage/index';
import Login from './containers/LoginPage/index';

const App = () => (
  <BrowserRouter>
    <div>
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
  </BrowserRouter>
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
