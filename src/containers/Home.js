import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="OnClickCoin">Welcome to OnClickCoin!</div>
        <select id="network">
            <option value="0" defaultChecked>rinkeby</option>
            <option value="1">kovan</option>
            <option value="2">ropsten</option>

        </select>
      </div>
    );
  }
}

export default Home;
