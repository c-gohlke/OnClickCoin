import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div class="dropdown">
          <button class="dropbtn">
            Dropdown
            <i class="fa fa-caret-down" />
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;