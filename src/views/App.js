import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Send from "./pages/Send";
import ContractReceipt from "./pages/ContractReceipt";


console.log("App.js is called")
/*
Set up the Routes of the application. App Class gets rendered from "src/index.js"
*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/send/:id" render={() => <Send />} />
          <Route
            exact={true}
            path="/receipt/:id"
            render={() => <ContractReceipt />}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
