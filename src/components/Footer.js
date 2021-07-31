import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="text-white body-font bg-biru">
                    <div className="container px-5 pt-24 mx-auto">
                        <div className="flex flex-wrap md:text-left order-first">
                            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium tracking-widest text-sm mb-3">Sosial Media</h2>
                                <nav className="list-none mb-10">
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/fb.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">PluginOfficiall</Link>
                                    </li>
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/ig.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">PluginOfficiall</Link>
                                    </li>
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/yt.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">PluginOfficiall</Link>
                                    </li>
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/github.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">PLUGIN</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium tracking-widest text-sm mb-3">Tentang</h2>
                                <nav className="list-none mb-10">
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/sertif.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">Cek Sertifikat</Link>
                                    </li>
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/kebijakan.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">Kebijakan Privasi</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-2/5 md:w-full w-full px-4">
                                <h2 className="title-font font-medium tracking-widest text-sm mb-3">Home Base</h2>
                                <nav className="list-none mb-10">
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/lokasi.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">Perumahan nDalem Parikesit B7</Link>
                                    </li>
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/email.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">plugintegal@gmail.com</Link>
                                    </li>
                                    <li className="mt-3">
                                    <img
                                        src="/assets/img/about.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                        <Link to="" className="hover:text-gray-800">Poltek Harber Linux User Group - Indonesia</Link>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}