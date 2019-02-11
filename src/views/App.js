import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Send from "./Send";
import Deploy from "./Deploy";
import Giveaway from "./Giveaway";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/send/:id" render={() => <Send />} />
          <Route exact={true} path="/deploy" render={() => <Deploy />} />
          <Route
            exact={true}
            path="/giveaway/:id"
            render={() => <Giveaway />}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
