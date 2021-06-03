import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class Event extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-4 py-24 mx-auto">
            <div>
              <h4 className="font-bold text-3xl">Event</h4>
            </div>
            <div className="flex flex-wrap">
              <div className="md:w-7/12">
                <Slider {...settings}>
                  <div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                      <div className="rounded-lg h-60 w-80 overflow-hidden">
                        <img
                          alt="content"
                          className="object-cover object-center h-full w-full"
                          src="/assets/img/event1.png"
                        />
                      </div>
                      <div className="bg-white rounded-md w-80 shadow-lg">
                        <div className="inline-flex ">
                          <div className="inline-flex ">
                            <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-6 py-4 mb-4 mt-4 block text-center">
                              25 <span className="block text-center">Jun</span>
                            </div>
                          </div>
                          <div class="flex-grow inline mt-6">
                            <h2 class="text-gray-900 text-lg title-font font-medium">
                              Membuat Rest Full Api
                            </h2>
                            <p class="leading-relaxed text-base">
                              Pembicara Felix
                            </p>
                          </div>
                        </div>
                        <div className="ml-40">
                          <span className="block w-40 text-center text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                            Rp 50.000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                      <div className="rounded-lg h-60 w-80 overflow-hidden">
                        <img
                          alt="content"
                          className="object-cover object-center h-full w-full"
                          src="/assets/img/event3.png"
                        />
                      </div>
                      <div className="bg-white rounded-md w-80 shadow-lg">
                        <div className="inline-flex ">
                          <div className="inline-flex ">
                            <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-6 py-4 mb-4 mt-4 block text-center">
                              25 <span className="block text-center">Jun</span>
                            </div>
                          </div>
                          <div class="flex-grow inline mt-6">
                            <h2 class="text-gray-900 text-lg title-font font-medium">
                              Membuat Rest Full Api
                            </h2>
                            <p class="leading-relaxed text-base">
                              Pembicara Felix
                            </p>
                          </div>
                        </div>
                        <div className="ml-40">
                          <span className="block w-40 text-center text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                            Rp 50.000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                      <div className="rounded-lg h-60 w-80 overflow-hidden">
                        <img
                          alt="content"
                          className="object-cover object-center h-full w-full"
                          src="/assets/img/event1.png"
                        />
                      </div>
                      <div className="bg-white rounded-md w-80 shadow-lg">
                        <div className="inline-flex ">
                          <div className="inline-flex ">
                            <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-6 py-4 mb-4 mt-4 block text-center">
                              25 <span className="block text-center">Jun</span>
                            </div>
                          </div>
                          <div class="flex-grow inline mt-6">
                            <h2 class="text-gray-900 text-lg title-font font-medium">
                              Membuat Rest Full Api
                            </h2>
                            <p class="leading-relaxed text-base">
                              Pembicara Felix
                            </p>
                          </div>
                        </div>
                        <div className="ml-40">
                          <span className="block w-40 text-center text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                            Rp 50.000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="px-4 pl-12 pt-8 md:w-1/3 sm:mb-0 mb-6">
                <p className="font-medium text-2xl items-center  justify-center">
                  Ikuti Event yang kami selenggarakan, dapatkan ilmu yang
                  bermanfaat dan tentunya pengalaman
                </p>
                <div class="p-2 w-full mt-5">
                  <Link to="/event">
                    <button class="flex  text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                      Lihat Semua Event
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
