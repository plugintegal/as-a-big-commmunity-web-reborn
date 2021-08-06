import React, { Component } from "react";

export default class Tech extends Component {
    render() {
        return (
            <div>
                <section className="container mx-auto px-5 pb-5 text-gray-600 body-font">
                    <h1 className="font-bold text-lg text-black text-center">Used Technology</h1>
                    <div className="flex justify-center flex-wrap text-center px-10 w-6/12 mx-auto mt-4">
                        <div className="p-1 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/code.png" alt="Logo Tech"/>
                        </div>
                        <div className="p-1 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/react.png" alt="Logo Tech"/>
                        </div>
                        <div className="p-1 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/postman.png" alt="Logo Tech"/>
                        </div>
                        <div className="p-1 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/vue.png" alt="Logo Tech"/>
                        </div>
                        <div className="p-1 sm:w-1/5 w-1/2 flex justify-center">
                            <img src="/assets/img/heroku.png" alt="Logo Tech"/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
