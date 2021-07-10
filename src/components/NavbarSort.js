import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarSort extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
        <div className="md:w-3/4 border-2 h-15 rounded inline-flex">
          <div className="content-center flex flex-wrap">
            <Link onClick={() => this.props.handleChangeTabEventGrid()}>
              <img
                src="/assets/img/sort.png"
                className="w-5 h-5 ml-3"
                alt="grid"
              />
            </Link>
            <Link onClick={() => this.props.handleChangeTabEventList()}>
              <img
                src="/assets/img/list.png"
                className="w-6 h-5 ml-5 mr-32"
                alt="list"
              />
            </Link>
          </div>
          <div className="ml-auto content-center flex flex-wrap">
            <p className="ml-96 ">
              Urut <br /> <span>Berdasarkan</span>{" "}
            </p>
          </div>
          <div className="p-2 ml-auto">
            <div className="relative inline-block text-left ml-auto">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Event Yang Akan Datang
                  {/* Heroicon name: solid/chevron-down */}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
