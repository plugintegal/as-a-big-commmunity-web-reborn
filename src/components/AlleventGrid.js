import React, { Component } from "react";
import NavbarSort from "./NavbarSort";
import Search from "./SearchEvent";
import Sort from "./SortEvent";
export default class Allevent extends Component {
  render() {
    return (
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-4 py-10 mx-auto">
            <h2 className="font-bold text-3xl mb-10">Event</h2>
            <NavbarSort />
            <Search />
            <div className="flex">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 mt-5">
                  <div className="rounded-lg h-72  overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-auto"
                      src="/assets/img/event1.png"
                    />
                  </div>
                  <div className="bg-white rounded-md   h-52 shadow-lg">
                    <p className="mt-2 text-xs ml-2 mb-2 border-2 content-center border-black w-20  justify-items-center p-2 pl-3 rounded-lg ">
                      Workshop
                    </p>
                    <div className="inline-flex">
                      <div className="inline-flex ">
                        <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-7 py-4 text-xl mb-4  block text-center">
                          25 <span className="block text-center">Jun</span>
                        </div>
                      </div>
                      <div class="flex-grow inline ">
                        <h2 class="text-gray-900 text-xl title-font font-medium">
                          Membuat Rest Full Api
                        </h2>
                        <p class="leading-relaxed text-base">Pembicara Felix</p>
                      </div>
                    </div>
                    <div className="float-right mt-7">
                      <span className="block w-52 text-center  text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                        Rp 50.000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 mt-5">
                  <div className="rounded-lg h-72  overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-auto"
                      src="/assets/img/event1.png"
                    />
                  </div>
                  <div className="bg-white rounded-md   h-52 shadow-lg">
                    <p className="mt-2 text-xs ml-2 mb-2 border-2 content-center border-black w-20  justify-items-center p-2 pl-3 rounded-lg ">
                      Workshop
                    </p>
                    <div className="inline-flex">
                      <div className="inline-flex ">
                        <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-7 py-4 text-xl mb-4  block text-center">
                          25 <span className="block text-center">Jun</span>
                        </div>
                      </div>
                      <div class="flex-grow inline ">
                        <h2 class="text-gray-900 text-xl title-font font-medium">
                          Membuat Rest Full Api
                        </h2>
                        <p class="leading-relaxed text-base">Pembicara Felix</p>
                      </div>
                    </div>
                    <div className="float-right mt-7">
                      <span className="block w-52 text-center  text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                        Rp 50.000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/2">
                  <div className="rounded-lg h-72  overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-auto"
                      src="/assets/img/event1.png"
                    />
                  </div>
                  <div className="bg-white rounded-md   h-52 shadow-lg">
                    <p className="mt-2 text-xs ml-2 mb-2 border-2 content-center border-black w-20  justify-items-center p-2 pl-3 rounded-lg ">
                      Workshop
                    </p>
                    <div className="inline-flex">
                      <div className="inline-flex ">
                        <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-7 py-4 text-xl mb-4  block text-center">
                          25 <span className="block text-center">Jun</span>
                        </div>
                      </div>
                      <div class="flex-grow inline ">
                        <h2 class="text-gray-900 text-xl title-font font-medium">
                          Membuat Rest Full Api
                        </h2>
                        <p class="leading-relaxed text-base">Pembicara Felix</p>
                      </div>
                    </div>
                    <div className="float-right mt-7">
                      <span className="block w-52 text-center  text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                        Rp 50.000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/2">
                  <div className="rounded-lg h-72  overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-auto"
                      src="/assets/img/event1.png"
                    />
                  </div>
                  <div className="bg-white rounded-md   h-52 shadow-lg">
                    <p className="mt-2 text-xs ml-2 mb-2 border-2 content-center border-black w-20  justify-items-center p-2 pl-3 rounded-lg ">
                      Workshop
                    </p>
                    <div className="inline-flex">
                      <div className="inline-flex ">
                        <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-7 py-4 text-xl mb-4  block text-center">
                          25 <span className="block text-center">Jun</span>
                        </div>
                      </div>
                      <div class="flex-grow inline ">
                        <h2 class="text-gray-900 text-xl title-font font-medium">
                          Membuat Rest Full Api
                        </h2>
                        <p class="leading-relaxed text-base">Pembicara Felix</p>
                      </div>
                    </div>
                    <div className="float-right mt-7">
                      <span className="block w-52 text-center  text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                        Rp 50.000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/4">
                <div>
                  <p className="ml-11 mt-5 flex-wrap">
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
