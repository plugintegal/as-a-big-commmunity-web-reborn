import React, { Component } from "react";
import Allevent from "../components/Allevent";
import Navbar from "../parts/Navbar";

export default class Event extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Allevent />
      </div>
    );
  }
}
