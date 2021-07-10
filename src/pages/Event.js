import React, { Component } from "react";
import Allevent from "../components/event/Allevent";
import Navbar from "../components/Navbar";

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
