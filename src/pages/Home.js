import React, { Component } from "react";
import Blog from "../components/Blog";
import Event from "../components/Event";
import Microblog from "../components/Microblog";
import Hero from "../parts/Hero";
import Navbar from "../parts/Navbar";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Event />
        <Blog />
        <Microblog />
      </>
    );
  }
}
