import React, { Component } from "react";

export default class SortEvent extends Component {
  render() {
    return (
      <div className="flex flex-wrap">
        <div className="border-2 h-60 w-10/12 rounded-lg ml-10 mt-5">
          <p className="px-4 py-6">Tipe Event</p>
          <div className="px-10 mr-32 w-44">
            <div className="flex">
              <img
                src="/assets/img/kotak.png"
                className="w-5 h-5 -ml-3 mr-3"
                alt=""
              />
              <p>Workshop</p>
            </div>

            <div className="flex">
              <img
                src="/assets/img/kotak.png"
                className="w-5 h-5 -ml-3 mr-3"
                alt=""
              />
              <p>Seminar</p>
            </div>
            <div className="flex">
              <img
                src="/assets/img/kotak.png"
                className="w-5 h-5 -ml-3 mr-3"
                alt=""
              />
              <p>Online</p>
            </div>
            <div className="flex">
              <img
                src="/assets/img/kotak.png"
                className="w-5 h-5 -ml-3 mr-3"
                alt=""
              />
              <p>Offline</p>
            </div>
            <div className="flex w-30">
              <img
                src="/assets/img/kotak.png"
                className="w-5 h-5 -ml-3  mr-3"
                alt=""
              />
              <h6 className="">Inline Flex</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
