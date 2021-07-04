import React, { Component } from "react";

export default class DetailEvent extends Component {
    render() {
        return (
            <div>
                <section class="body-font">
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 mx-auto pt-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Detail Event
                            </h1>
                        </div>
                        <div className="container px-5 pt-6 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -m-4">
                                <div className="lg:w-2/3 md:w-full">
                                    <div className="flex flex-col px-4">
                                        <div className="w-full h-full sm:mr-8 sm:mb-0 mb-6 inline-flex items-center justify-center">
                                            <img src="/assets/img/event4.png" className="rounded-md" alt="" />
                                        </div>
                                        <div className="flex-grow">
                                        <h2 className="text-gray-900 text-xl title-font font-medium my-3 lg:hidden">
                                                Membuat RestFul API menggunakan bahasa pemrograman javascript
                                            </h2>
                                            <h2 className="text-gray-900 text-lg title-font font-medium my-3 ">
                                                Descriptions
                                            </h2>
                                            <p className="leading-relaxed text-base my-2">
                                                Consectetur adipiscing elit. Feugiat adipiscing ac id mi feugiat at aenean maecenas. Donec lacus et fermentum maecenas sed turpis sit. Nec nec a feugiat nisl pellentesque. Sed quis feugiat feugiat dictum ac. Nunc cras et eu iaculis. Turpis quis at nam rhoncus. Pharetra lobortis ipsum tempor vitae nisl augue ornare. Suspendisse viverra consectetur amet risus, eleifend tempor. Massa risus vitae auctor nulla.
                                            </p>
                                            <p className="leading-relaxed text-base">
                                                Feugiat adipiscing ac id mi feugiat at aenean maecenas. Donec lacus et fermentum maecenas sed turpis sit. Nec nec a feugiat nisl pellentesque. Sed quis feugiat feugiat dictum ac. Nunc cras et eu iaculis. Turpis quis at nam rhoncus. Pharetra lobortis ipsum tempor vitae nisl augue ornare. Suspendisse viverra consectetur amet risus, eleifend tempor. Massa risus vitae auctor nulla.
                                            </p>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-lg title-font font-medium my-3">
                                                RunDown Acara
                                            </h2>
                                            <p className="leading-relaxed text-base mb-2 lg:mb-3 md:mb-3 ">
                                                <span className="font-bold mr-2">19.00 - 19.10</span>Pembukaan oleh moderator (Felix Yunianto Gunawan - Google Associate Android Developer, Curriculum Developer Plugin).
                                            </p>
                                            <p className="leading-relaxed text-base">
                                                <span className="font-bold mr-2">19.10 - 20.00</span>"Plugin Developer Coaching #01: Android | Pentingnya Performa pada Aplikasi Android" akan dibawakan oleh Khafidul Mualif (Google Associate Android Developer, Code Reviewer Plugin).
                                            </p>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-lg title-font font-medium my-3">
                                                Schedule
                                            </h2>
                                            <p className="leading-relaxed text-base">
                                                Start   : 25 May 2021 19:00
                                            </p>
                                            <p className="leading-relaxed text-base">
                                                Finish  : 25 May 2021 20:00
                                            </p>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-lg title-font font-medium my-3">
                                                location
                                            </h2>
                                            <p className="leading-relaxed text-base">
                                                LIVE on Youtube:
                                            </p>
                                            <p className="leading-relaxed text-base">
                                                dicoding.id/dicodingdevelopercoaching
                                            </p>
                                            <p className="leading-relaxed text-base">
                                                Online
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-full">
                                    <div className="flex justify-center px-4 flex-col text-center lg:text-left">
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-xl title-font font-medium my-3 hidden lg:inline-block">
                                                Membuat RestFul API menggunakan bahasa pemrograman javascript
                                            </h2>
                                            <p className="leading-relaxed text-base my-2">
                                                Pembicara
                                            </p>
                                            <p className="text-base text-gray-900 title-font font-medium my-2">
                                                Kokoh Felix Yunianto Gunawan
                                            </p>
                                            <p className="leading-relaxed text-base my-2">
                                                Waktu
                                            </p>
                                            <p className="text-base text-gray-900 title-font font-medium my-2">
                                                20 - 04 - 2020 | <span className="text-gray-600">14 : 00 WIB</span> 
                                            </p>
                                            <button className="text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                                                Daftar Event
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}
