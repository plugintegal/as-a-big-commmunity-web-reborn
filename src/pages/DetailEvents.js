import React, { Component } from "react";
import Navbar from "../components/Navbar";
import DetailEvent from "../components/event/DetailEvent";

export default class DetailEvents extends Component {
    render() {
        return (
            <>
                <Navbar />
                <DetailEvent />
            </>
        );
    }
}
