import React, { Component } from "react";

export default class FlowRegistrationMember extends Component {
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
            <>
                <section className="container mx-auto px-5 py-5 text-gray-600 body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24">
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
                                            (this.state.openTab === 1
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
                                        Member
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase my-1 px-1 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-0-5 lg:py-3 shadow-lg rounded-xl block leading-normal " +
                                            (this.state.openTab === 2
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
                                        Mentor
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase my-1 px-1 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-0-5 lg:py-3 shadow-lg rounded-xl block leading-normal " +
                                            (this.state.openTab === 3
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
                                        Other
                                    </a>
                                </li>
                            </ul>
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="tab-content tab-space">
                                        <div className={this.state.openTab === 1 ? "block" : "hidden"} id="link1">
                                            <div class="flex flex-wrap">
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">1</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec1.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Pembukaan Pendaftaran</h2>
                                                            <p class="leading-relaxed">2-4 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Semua calon anggota baru wajib mengisi data diri di website resmi PLUG-IN untuk kebutuhan tes selanjutnya.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">2</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec2.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Wawancara</h2>
                                                            <p class="leading-relaxed">16-18 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Calon anggota yang sudah mendaftarkan diri melalui website resmi PLUG-IN nantinya akan melakukan tes wawancara secara online.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">3</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec3.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Logika Dasar</h2>
                                                            <p class="leading-relaxed">19-20 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Semua calon anggota baru wajib mengerjakan tes logika dasar secara online, untuk teknis dan cara pengumpulannya silahkan klik tombol di bawah</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">4</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec4.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Squad</h2>
                                                            <p class="leading-relaxed">23 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Ini merupakan tes terakhir yang merupakan tes penjurusan</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">5</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec5.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Pengumuman</h2>
                                                            <p class="leading-relaxed">28 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Pengumuman akan dilakukan di Instagram PLUG-IN</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={this.state.openTab === 2 ? "block" : "hidden"} id="link2">
                                            <div class="flex flex-wrap">
                                            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">1</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec1.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Pembukaan Pendaftaran</h2>
                                                            <p class="leading-relaxed">2-4 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Semua calon anggota baru wajib mengisi data diri di website resmi PLUG-IN untuk kebutuhan tes selanjutnya.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">2</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec2.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Wawancara</h2>
                                                            <p class="leading-relaxed">16-18 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Calon anggota yang sudah mendaftarkan diri melalui website resmi PLUG-IN nantinya akan melakukan tes wawancara secara online.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">3</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec3.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Logika Dasar</h2>
                                                            <p class="leading-relaxed">19-20 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Semua calon anggota baru wajib mengerjakan tes logika dasar secara online, untuk teknis dan cara pengumpulannya silahkan klik tombol di bawah</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">4</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec4.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Squad</h2>
                                                            <p class="leading-relaxed">23 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Ini merupakan tes terakhir yang merupakan tes penjurusan</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">5</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec5.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Pengumuman</h2>
                                                            <p class="leading-relaxed">28 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Pengumuman akan dilakukan di Instagram PLUG-IN</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={this.state.openTab === 3 ? "block" : "hidden"} id="link3">
                                            <div class="flex flex-wrap">
                                            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">1</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec1.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Pembukaan Pendaftaran</h2>
                                                            <p class="leading-relaxed">2-4 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Semua calon anggota baru wajib mengisi data diri di website resmi PLUG-IN untuk kebutuhan tes selanjutnya.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">2</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec2.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Wawancara</h2>
                                                            <p class="leading-relaxed">16-18 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Calon anggota yang sudah mendaftarkan diri melalui website resmi PLUG-IN nantinya akan melakukan tes wawancara secara online.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">3</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec3.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Logika Dasar</h2>
                                                            <p class="leading-relaxed">19-20 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Semua calon anggota baru wajib mengerjakan tes logika dasar secara online, untuk teknis dan cara pengumpulannya silahkan klik tombol di bawah</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">4</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec4.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Tes Squad</h2>
                                                            <p class="leading-relaxed">23 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Ini merupakan tes terakhir yang merupakan tes penjurusan</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">5</div>
                                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                                        <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                            <img src="/assets/img/oprec5.png" alt="logo"/>
                                                        </div>
                                                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Pengumuman</h2>
                                                            <p class="leading-relaxed">28 November 2020</p>
                                                            <p class="leading-relaxed text-gray-900">Pengumuman akan dilakukan di Instagram PLUG-IN</p>
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
            </>
        );
    }
}
