import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class RegistrationMembers extends Component {
    render() {
        return (
            <>
                <div class="container mx-auto px-5 py-5 text-gray-600 body-font flex flex-wrap w-full sm:w-full md:w-full lg:w-1/2">
                    <div class="flex relative pt-6">
                        <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 mr-12 text-blue-400 font-medium inline-flex text-2xl justify-center">
                                <img src="/assets/img/oprec6.png" alt="logo" />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-22">
                                <p class="leading-relaxed text-gray-900">Mau jadi <span className="font-bold">NEXT PLUGIN?</span> yuk daftar, dijamin ga bakal nyesel, Catat tanggal pentingnya ya !!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto px-5 py-5 text-gray-600 body-font flex justify-center flex-wrap w-full">
                    <div class="flex relative pt-6">
                        <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-22">
                                <h1 class="leading-relaxed text-gray-900 font-bold">Pendaftaran Calon Anggota PLUG-IN</h1>
                                <p class="leading-relaxed mt-2">Semua info dan teknis ada di sini.</p>
                                <Link to="/blog">
                                    <button class="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg ">
                                        Registration
                                    </button>
                                </Link>
                            </div>
                            <div class="flex-shrink-0 mr-12 text-blue-400 font-medium inline-flex text-2xl justify-center">
                                <img src="/assets/img/oprec7.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
