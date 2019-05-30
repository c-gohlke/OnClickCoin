import React from 'react';

const Header = () => (
  <div className="navbar">
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <div className="dropdown">
      <button type="button" className="dropbtn">
        Dropdown
        <i className="fa fa-caret-down" />
      </button>
      <div className="dropdown-content">
        <a href="metamask">Link 1</a>
        <a href="information">Link 2</a>
        <a href="random value">Link 3</a>
      </div>
    </div>
  </div>
);

export default Header;
