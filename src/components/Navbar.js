import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="text-gray-600 body-font fixed w-screen z-30 bg-white top-0 shadow">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              to="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <img
                src="/assets/img/Logo.png"
                alt=""
                style={{ width: "56px", height: "40px" }}
              />
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <p className="mr-5 hover:text-gray-900 hover:font-bold">WiyataOs</p>
              <Link to="/blog" className="mr-5 hover:text-gray-900">Blog</Link>
              <Link to="/event" className="mr-5 hover:text-gray-900 ">Event</Link>
              <p className="mr-5 hover:text-gray-900">Achivment</p>
              <Link to="/registration-member" className=" hover:text-gray-900">Registration Member</Link>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
