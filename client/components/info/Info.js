import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

/*
Defines the send page of the app
*/

console.log("in components/info/Info");

class Info extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="info">
          <br />
          <h1>Info Page :)</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Info;
