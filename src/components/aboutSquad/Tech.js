import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tech extends Component {
    render() {
        return (
            <div>
                <section className="container mx-auto px-5 pb-5 text-gray-600 body-font">
                    <h1 className="font-bold text-lg text-black text-center">Used Technology</h1>

                    <div class="flex flex-wrap text-center px-10 justify-center">
                        <div class="p-4 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/code.png" />
                        </div>
                        <div class="p-4 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/react.png" />
                        </div>
                        <div class="p-4 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/postman.png" />
                        </div>
                        <div class="p-4 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/vue.png" />
                        </div>
                        <div class="p-4 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/heroku.png" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
