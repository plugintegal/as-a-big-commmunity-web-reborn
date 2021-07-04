import React, { Component } from "react";
import AllBlog from "../components/blog/AllBlog";
import Navbar from "../components/Navbar";

export default class Blog extends Component {
    render() {
        return (
            <>
                <Navbar />
                <AllBlog />
            </>
        );
    }
}
