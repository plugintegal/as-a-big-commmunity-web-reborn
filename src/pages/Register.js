import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <section className="text-gray-600 body-font">
          <div className="bg-hero-pattern2 bg-no-repeat bg-HW z-10 bg-500px">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
              <div className=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center md:mt-10  xs">
                <h3 className=" lg:text-3xl md:text-2xl sm:text-xl text-blue-400 font-bold ">
                  Registration Member
                </h3>
                <form className="mt-10 pb-8 mb-4">
                  <div className="mb-6">
                    <input
                      className="shadow appearance-none border border-blue-500 rounded-2xl w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border border-blue-500 rounded-2xl w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border border-blue-500 rounded-2xl w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border border-blue-500 rounded-2xl w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Date of Birth"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border border-blue-500 rounded-2xl w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Addres"
                    />
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-blue-500 w-80 rounded-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="md:w-1/2 ">
                <div className="bg-blue-500 relative -z-1 text-white md:rounded-3xl rounded-b-none rounded-t-2xl md:w-600px md:h-580px md:mt-1  w-400px h-200px -mb-14  -mt-9">
                  <div className="md:pt-36 pt-5 md:text-right text-center md:mr-20">
                    <h1 className=" text-4xl font-bold">Plugin</h1>
                    <p className="mt-5 md:mt-10 md:text-xl">
                      Plugin adalah sebuah <br /> organisasi linux yang berada
                      di <br /> tegal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
