import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Send from "./Send";
import Deploy from "./Deploy";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/send" render={() => <Send />} />
          <Route exact={true} path="/deploy" render={() => <Deploy />} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;