import React, { Component } from "react";
import DropdownNet from "../components/dropdownNet";
import ConstructorForm from "../components/constructorForm";
import DeployButton from "../components/deployButton";

class Deploy extends Component {
  render() {
    return (
      <div className="Deploy">
      Deploy
        <DropdownNet />
        <ConstructorForm />
        <DeployButton />
      </div>
    );
  }
}

export default Deploy;
