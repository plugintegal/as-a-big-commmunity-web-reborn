import React, { Component } from "react";

export default class Allevent extends Component {
  render() {
    return (
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-4 py-10 mx-auto">
            <h2 className="font-bold text-3xl mb-10">Event</h2>
            <div className="md:w-2/3 border-2 h-15 rounded">
              <div className="p-3 flex flex-wrap">
                <img
                  src="/assets/img/sort.png"
                  className="w-5 h-5 ml-3"
                  alt=""
                />
                <img
                  src="/assets/img/list.png"
                  className="w-6 h-5 ml-5"
                  alt=""
                />
                <p>Urut Berdasarkan</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
