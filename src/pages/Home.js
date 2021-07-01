import React, { Component } from "react";
import Blog from "../components/home/Blog";
import Event from "../components/home/Event";
import Microblog from "../components/home/Microblog";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";

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
