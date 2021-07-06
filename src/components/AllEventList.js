import React, { Component } from "react";
import NavbarSort from "./NavbarSort";
import Search from "./SearchEvent";
import Sort from "./SortEvent";

export default class AllEventList extends Component {
  render() {
    return (
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-4 py-10 mx-auto">
            <h2 className="font-bold text-3xl mb-10">Event</h2>
            <NavbarSort />

            <Search />
            <div className="flex">
              <div className="flex flex-wrap">
                <div className="p-1 md:w-full mt-5">
                  <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-80 h-48 object-cover object-center sm:mb-0 mb-4"
                      src="/assets/img/event4.png"
                    />
                    <div className="flex-grow sm:pl-8 p-4">
                      <h2 className="title-font font-semibold mb-2 text-gray-900 text-2xl">
                        Holden Caulfield
                      </h2>
                      <p className="font-light text-2xl">
                        consectetur adipiscing elit. Mi duis bibendum sagittis
                        ac risus tristique. Neque, dignissim vitae amet,
                        venenatis, semper sed non vulputate. Lectus erat varius
                        enim ornare nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1 md:w-full mt-5">
                  <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-80 h-48 object-cover object-center sm:mb-0 mb-4"
                      src="/assets/img/event4.png"
                    />
                    <div className="flex-grow sm:pl-8 p-4">
                      <h2 className="title-font font-semibold mb-2 text-gray-900 text-2xl">
                        Holden Caulfield
                      </h2>
                      <p className="font-light text-2xl">
                        consectetur adipiscing elit. Mi duis bibendum sagittis
                        ac risus tristique. Neque, dignissim vitae amet,
                        venenatis, semper sed non vulputate. Lectus erat varius
                        enim ornare nec.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/4">
                <div>
                  <p className="ml-10 mt-5 flex-wrap">
                    Ornare condimentum in ac quis. Amet, proin faucibus
                    scelerisque scelerisque massa, donec fermentum.
                  </p>
                </div>
                <Sort />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
