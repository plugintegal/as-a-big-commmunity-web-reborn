import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-3 font-bold text-gray-900">
                Plugin
              </h1>
              <nav className="flex flex-wrap items-center text-base justify-center mb-10">
                <p className="mr-12 hover:text-gray-900">Passionate</p>
                <p className="mr-12 hover:text-gray-900">Learning</p>
                <p className="mr-12 hover:text-gray-900">Unity</p>
                <p className="mr-12 hover:text-gray-900">Global</p>
                <p className="mr-12 hover:text-gray-900">Inovate</p>
                <p className="mr-12 hover:text-gray-900">Nationality</p>
              </nav>
              <p className="mb-8 leading-relaxed text-3xl">
                komunitas linux dan pengembangan aplikasi di Politeknik Harapan
                Bersama Tegal.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center object-containt rounded"
                alt="hero"
                src="/assets/img/Hero.png"
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto py-10">
            <div className="flex flex-col text-center w-full mb-5">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Plugin Squad
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-1xl text-base">
                <span className="font-bold">Squad</span> di{" "}
                <span className="font-bold"> PLUGIN</span> ada 4, masing-masing
                punya fokus dan tujuan tersendiri, dibuatnya squad ini agar
                teman-teman PLUGIN bisa menentukan akan konsentrasi dimana
              </p>
            </div>
          </div>
          <div className="container px-5 py-6 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex p-8 sm:flex-row flex-col">
                  <div className="w-30 h-30 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center">
                    <img src="/assets/img/web.png" alt="" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Squad Web Dev
                    </h2>
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex p-8 sm:flex-row flex-col">
                  <div className="w-30 h-30 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center">
                    <img src="/assets/img/mobile.png" alt="" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Squad Mobile Dev
                    </h2>
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex p-8 sm:flex-row flex-col">
                  <div className="w-30 h-30 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center">
                    <img src="/assets/img/ui.png" alt="" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Squad UI / UX
                    </h2>
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex p-8 sm:flex-row flex-col">
                  <div className="w-30 h-30 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center">
                    <img src="/assets/img/network.png" alt="" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Squad Networking
                    </h2>
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
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
