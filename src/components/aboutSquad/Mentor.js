import React, { Component } from "react";

export default class Mentor extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-600 body-font container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <h1 className="text-xl font-bold text-black inline-block sm:inline-block md:hidden lg:hidden">Web Dev Mentor</h1>
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 text-center py-5">
                        <div className=" border-8 border-blue-400 rounded-3xl w-80 h-98 hidden sm:hidden md:hidden lg:inline-block"></div>
                            <img
                                className="z-10 lg:-mt-96 lg:ml-24 inline-block"
                                alt="hero"
                                src="/assets/img/Mentor.png"
                            />
                    </div>
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 mt-0 sm:mt-0 md:-mt-24 lg:-mt-48">
                        <h1 className="text-3xl font-bold text-black hidden sm:hidden md:inline-block lg:inline-block mb-0 sm:mb-0 md:mb-10 lg:mb-20">Web Dev Mentor</h1>
                        <table className="">
                            <thead>
                                <tr>
                                    <td className="font-bold text text-left hidden sm:hidden md:hidden lg:inline-block mr-12">Nama</td>
                                    <td className="">Rijal Mantap Mantap.</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-left hidden sm:hidden md:hidden lg:inline-block mr-12">Experience</td>
                                    <td className="">HTML, CSS, Javascript.</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-left hidden sm:hidden md:hidden lg:inline-block mr-12">Hobby</td>
                                    <td className="">Slepp.</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-left hidden sm:hidden md:hidden lg:inline-block mr-12">Quotes</td>
                                    <td className="">“Consectetur adipiscing elit. Dictumst sed lobortis sit est. Interdum et dictum fermentum nisi, leo. Sed at nunc lectus odio dui dolor phasellus scelerisque nulla. Varius mi, vestibulum egestas massa massa ultrices enim senectus morbi.”</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}
