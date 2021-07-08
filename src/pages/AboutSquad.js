import React, { Component } from "react";
import Hero from "../components/aboutSquad/Hero";
import Mentor from "../components/aboutSquad/Mentor";
import Tech from "../components/aboutSquad/Tech";
import Theory from "../components/aboutSquad/Theory";
import Navbar from "../components/Navbar";

export default class AboutSquad extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Hero />
                {/* <Mentor /> */}
                <Tech />
                <Theory />
            </>
        );
    }
}
