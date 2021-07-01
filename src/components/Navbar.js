import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a
              href
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <img
                src="/assets/img/Logo.png"
                alt=""
                style={{ width: "56px", height: "40px" }}
              />
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <p className="mr-5 hover:text-gray-900">WiyataOs</p>
              <p className="mr-5 hover:text-gray-900">Blog</p>
              <p className="mr-5 hover:text-gray-900">Event</p>
              <p className="mr-5 hover:text-gray-900">Achivment</p>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
