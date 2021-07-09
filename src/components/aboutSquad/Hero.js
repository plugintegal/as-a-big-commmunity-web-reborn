import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Hero extends Component {
    render() {
        return (
            <div className="flex">
                <section className="text-gray-600 body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24 lg:flex-grow md:w-1/2 flex flex-col pl-0 sm:pl-0 md:pl-0 lg:pl-20">
                    <div className="mx-auto flex px-5 pt-5 md:flex-row flex-col items-center">
                        <div className="md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-3 font-bold text-gray-900">
                                Web Dev
                            </h1>
                            <p className="mb-8 leading-relaxed text-lg">
                                Web Dev adalah squad yang berfokus dalam membahas teknologi seputar pengembangan website baik penjelasan, tools yang digunakan, serta ruang lingkup website. Dolor sit amet, consectetur adipiscing elit. Lacus, mi ornare lobortis elit donec ipsum ornare facilisi enim.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pt-36 sm:pt-28 md:pt-28 lg:pt-24 hidden sm:hidden md:inline-block lg:inline-block">
                    <img
                        className="hidden sm:hidden md:inline-block lg:inline-block object-fit object-center object-containt w-screen ml-22 -mt-10"
                        alt="hero"
                        src="/assets/img/SquadWeb.png"
                    />
                </div>
            </div>
        );
    }
}
