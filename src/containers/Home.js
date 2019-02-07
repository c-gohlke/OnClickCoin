import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="OnClickCoin">Welcome to OnClickCoin!</div>
        <select id="network">
          <option value="0" defaultChecked>rynkeby</option>
          <option value="1">kovan</option>
        </select>
      </div>
    );
  }
}

export default Home;
