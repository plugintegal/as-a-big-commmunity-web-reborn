import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <section className="text-gray-600 body-font">
          <div className="bg-hero-pattern1 bg-no-repeat bg-HW z-10 bg-410px">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
              <div className="md:w-1/2">
                <div className="bg-blue-500 relative -z-1 text-white rounded-3xl md:w-600px md:h-580px w-400px h-200px">
                  <div className=" md:pt-20 md:px-24 pt-16">
                    <h3 className=" lg:text-4xl md:text-2xl sm:text-xl font-bold lg:mt-20 text-center md:text-left text-2xl sm:mt-8">
                      Plugin
                    </h3>
                    <p className="lg:text-xl md:text-lg md:mt-16   md:text-left text-center sm:text-base sm:mt-6">
                      Plugin adalah sebuah <br /> organisasi linux yang berada
                      di <br />
                      tegal
                    </p>
                  </div>
                </div>
              </div>
              <div className=" lg:flex-grow md:w-1/2 w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center md:ml-24">
                <h3 className=" lg:text-4xl md:text-2xl text-2xl font-bold text-blue-400">
                  Login
                </h3>
                <form className=" pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border border-blue-500 rounded-2xl w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      className="shadow appearance-none border border-blue-500 rounded-2xl w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-blue-500 w-80 rounded-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
