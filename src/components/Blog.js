import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-4 py-24 mx-auto">
            <div className="mb-3">
              <h4 className="font-bold text-3xl">Blog</h4>
            </div>
            <div className="flex flex-wrap mb-5">
              <div className="">
                <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center text-center sm:text-left">
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-semibold mb-2 text-gray-900 text-2xl">
                      Holden Caulfield
                    </h2>
                    <p className="mb-4 md:w-4/5 font-light text-2xl">
                      consectetur adipiscing elit. Mi duis bibendum sagittis ac
                      risus tristique. Neque, dignissim vitae amet, venenatis,
                      semper sed non vulputate. Lectus erat varius enim ornare
                      nec.
                    </p>
                  </div>
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-70 h-60 object-cover object-center sm:mb-0 mb-4"
                    src="/assets/img/event4.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="p-1">
                <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center text-center sm:text-left">
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-semibold mb-2 text-gray-900 text-2xl">
                      Holden Caulfield
                    </h2>
                    <p className="mb-4 md:w-4/5 font-light text-2xl">
                      consectetur adipiscing elit. Mi duis bibendum sagittis ac
                      risus tristique. Neque, dignissim vitae amet, venenatis,
                      semper sed non vulputate. Lectus erat varius enim ornare
                      nec.
                    </p>
                  </div>
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-70 h-60 object-cover object-center sm:mb-0 mb-4"
                    src="/assets/img/event4.png"
                  />
                </div>
              </div>
            </div>
            <div class="p-3 w-full mt-5 ">
              <button class="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                Lihat Berita Lainya
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
