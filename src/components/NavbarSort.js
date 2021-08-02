import React, { Component } from "react";
import { Link } from "react-router-dom";
import {FiMenu, FiGrid} from 'react-icons/fi';

export default class NavbarSort extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <div className="w-full border-2 h-15 rounded inline-flex">
          <div className="content-center flex flex-wrap items-center">
            <Link onClick={() => this.props.handleChangeTabEventGrid()}>
              <FiGrid className={(this.props.tabEventGrid ? "text-blue-400 " : " ") + " text-3xl ml-3 hover:text-blue-500"}/>
            </Link>
            <Link onClick={() => this.props.handleChangeTabEventList()}>
              <FiMenu className={(this.props.tabEventList ? "text-blue-400 " : " ") + " text-4xl ml-2 hover:text-blue-500"}/>
            </Link>
          </div>
          <div className="p-2 ml-auto">
            <div className="relative w-60 inline-block text-left ml-auto">
              <div>
                {/* <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Urut Berdasarkan
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
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
