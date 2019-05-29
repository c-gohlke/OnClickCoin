import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <a href="/">Home</a>
        <a href="/Send">Send</a>
        <div class="dropdown">
          <button class="dropbtn">
            Info
            <i class="fa fa-caret-down" />
          </button>
          <div class="dropdown-content">
            <a href="info?metamask">Metamask</a>
            {/* <a href="">Link 2</a>
            <a href="">Link 3</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
