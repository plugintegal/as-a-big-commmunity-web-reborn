import React, { Component } from "react";
import Navbar from "../components/Navbar";
import FlowRegistrationMember from "../components/registrationMember/FlowRegistrationMembers";
import RegistrationMembers from "../components/registrationMember/RegistrationMembers";

export default class RegistrationMember extends Component {
    render() {
        return (
            <>
                <Navbar />
                <FlowRegistrationMember />
                <RegistrationMembers />
            </>
        );
    }
}
