import React, { Component } from "react";
import AlleventGrid from "../components/AlleventGrid";
import Navbar from "../components/Navbar";

export default class Event extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AlleventGrid />
      </div>
    );
  }
}
