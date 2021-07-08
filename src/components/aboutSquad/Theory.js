import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Theory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openTab: 1
        }

        this.handleChangeOpenTab = this.handleChangeOpenTab.bind(this)
    }

    handleChangeOpenTab(value) {
        console.log("Open Tab ", this.state.openTab)
        console.log("Value ", value)
        this.setState({
            ...this.state,
            openTab: value
        })
    }

    render() {
        return (
            <div>
                <section className="container mx-auto px-5 py-5 text-gray-600 body-font">
                    <h1 className="text-3xl font-bold text-black mb-0 sm:mb-0 md:mb-10 lg:mb-14">Timeline Web Dev</h1>
                    <p className="mb-0 sm:mb-0 md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="flex flex-wrap mt-2">
                        <div className="w-full">
                            <ul
                                className="flex mb-0 list-none p-2 flex-wrap rounded-xl flex-row border-4 border-blue-400"
                                role="tablist"
                            >
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase my-1 px-1 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-0-5 lg:py-3 shadow-lg rounded-xl block leading-normal " +
                                            (this.state.openTab == 1
                                                ? "text-white bg-blue-400"
                                                : "text-blue-400 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            this.handleChangeOpenTab(1)
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        Beginner
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase my-1 px-1 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-0-5 lg:py-3 shadow-lg rounded-xl block leading-normal " +
                                            (this.state.openTab == 2
                                                ? "text-white bg-blue-400"
                                                : "text-blue-400 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            this.handleChangeOpenTab(2)
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        Medium
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase my-1 px-1 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-0-5 lg:py-3 shadow-lg rounded-xl block leading-normal " +
                                            (this.state.openTab == 3
                                                ? "text-white bg-blue-400"
                                                : "text-blue-400 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            this.handleChangeOpenTab(3)
                                        }}
                                        data-toggle="tab"
                                        href="#link3"
                                        role="tablist"
                                    >
                                        Advance
                                    </a>
                                </li>
                            </ul>
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="tab-content tab-space">
                                        <div className={this.state.openTab === 1 ? "block" : "hidden"} id="link1">
                                            <div class="flex flex-wrap">
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24 text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 1</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Algoritma, Flowchart dan Dasar Javascript</h2>
                                                            <p class="leading-relaxed">Pada minggu pertama, kalian akan mempelajari dasar programming yaitu Algoritma dan Flowchart, lalu dilanjut mempelajari dasar JavaScript</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 2</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">JavaScript Lanjutan</h2>
                                                            <p class="leading-relaxed">Kalian akan mempelajari JavaScript lanjutan seperti ES6, Asynchronous, dan methods atau built-in function dari JavaScript.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 3</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Responsive Website</h2>
                                                            <p class="leading-relaxed">Kalian akan mempelajari bagaimana membangun website yang responsive dengan HTML, CSS, dan Bootstrap</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 4</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Basic Backend dengan Node.js & Express.js</h2>
                                                            <p class="leading-relaxed">Selanjutnya, kalian akan membangun sebuah RESTful HTTP API dengan menggunakan Node.js dan Express.js, serta menggunakan database MySQL.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={this.state.openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div class="flex flex-wrap">
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 1</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Algoritma, Flowchart dan Dasar Javascript</h2>
                                                            <p class="leading-relaxed">Pada minggu pertama, kalian akan mempelajari dasar programming yaitu Algoritma dan Flowchart, lalu dilanjut mempelajari dasar JavaScript</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 2</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">JavaScript Lanjutan</h2>
                                                            <p class="leading-relaxed">Kalian akan mempelajari JavaScript lanjutan seperti ES6, Asynchronous, dan methods atau built-in function dari JavaScript.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 3</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Responsive Website</h2>
                                                            <p class="leading-relaxed">Kalian akan mempelajari bagaimana membangun website yang responsive dengan HTML, CSS, dan Bootstrap</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 4</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Basic Backend dengan Node.js & Express.js</h2>
                                                            <p class="leading-relaxed">Selanjutnya, kalian akan membangun sebuah RESTful HTTP API dengan menggunakan Node.js dan Express.js, serta menggunakan database MySQL.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={this.state.openTab === 3 ? "block" : "hidden"} id="link3">
                                        <div class="flex flex-wrap">
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 1</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Algoritma, Flowchart dan Dasar Javascript</h2>
                                                            <p class="leading-relaxed">Pada minggu pertama, kalian akan mempelajari dasar programming yaitu Algoritma dan Flowchart, lalu dilanjut mempelajari dasar JavaScript</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 2</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">JavaScript Lanjutan</h2>
                                                            <p class="leading-relaxed">Kalian akan mempelajari JavaScript lanjutan seperti ES6, Asynchronous, dan methods atau built-in function dari JavaScript.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 3</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Responsive Website</h2>
                                                            <p class="leading-relaxed">Kalian akan mempelajari bagaimana membangun website yang responsive dengan HTML, CSS, dan Bootstrap</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-6">
                                                    <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 mr-24  text-blue-400 font-medium inline-flex text-2xl justify-center">
                                                            <h1>WEEK 4</h1>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Basic Backend dengan Node.js & Express.js</h2>
                                                            <p class="leading-relaxed">Selanjutnya, kalian akan membangun sebuah RESTful HTTP API dengan menggunakan Node.js dan Express.js, serta menggunakan database MySQL.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
