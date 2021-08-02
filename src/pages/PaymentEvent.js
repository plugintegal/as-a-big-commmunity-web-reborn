import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaymentEvent extends Component {
  render() {
    return (
      <>
        <section className="container text-gray-600 body-font container mx-auto px-5 py-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-700">
            Payment
          </h1>
          <div className="flex flex-wrap shadow-lg">
            <div className="bg-gray-100 flex flex-wrap w-full sm:w-full md:w-1/2 lg:w-1/2 rounded-tl-xl rounded-bl-none sm:rounded-bl-xl md:rounded-bl-xl rounded-tr-xl sm:rounded-tr-xl md:rounded-tr-none text-gray-800 px-8 py-10">
              <h1 className="text-3xl font-bold mb-2">
                Registration Event Flow
              </h1>
              <p className="leading-relaxed text-sm mb-12">
                Ikuti flow dibawah ini jika anda mengalami kebingungan pada saat
                akan mengikuti event kami
              </p>
              <div class="flex flex-wrap">
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mb-4">
                  <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <img src="/assets/img/eventRegis1.png" alt="logo" />
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-2 text-xl">
                      Register
                    </h2>
                    <p class="leading-relaxed text-gray-900">
                      Setelah anda memilih untuk mendaftar event, anda akan
                      dilanjutkan kehalaman ini, yaitu pengisian formulir
                      pendaftaran
                    </p>
                  </div>
                </div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mb-4">
                  <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <img src="/assets/img/eventRegis2_1.png" alt="logo" />
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-2 text-xl">
                      Fill In Personal Data
                    </h2>
                    <p class="leading-relaxed text-gray-900">
                      Isi data diri anda menggunakan data yang sebenar benarnya
                    </p>
                  </div>
                </div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mb-4">
                  <div class="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <img src="/assets/img/eventRegis3_1.png" alt="logo" />
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-2 text-xl">
                      Fill In Personal Data
                    </h2>
                    <p class="leading-relaxed text-gray-900">
                      Setelah Mengisi data diri lanjutkan ke proses registrasi,
                      karena event ini tidak gratis, wkwk
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 w-full sm:w-full md:w-1/2 lg:w-1/2 rounded-tr-none rounded-br-xl sm:rounded-tr-xl rounded-tl-none sm:rounded-tl-xl md:rounded-tl-none rounded-bl-xl sm:rounded-bl-xl md:rounded-bl-none  px-8 py-10 container mx-auto">
              <div className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pl-0 sm:pl-6 md:pl-3 lg:pl-0 xl:pl-16 ">
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nomor Rekening
                  </label>
                  <p>3600236279 AN FELIX YUNIANTO GUNAWAN</p>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nomor Whatsapp
                  </label>
                  <p>0878-47811-4793</p>
                </div>
                <p className="leading-relaxed font-bold text-gray-700 mt-6">
                  Tata Cara Transfer
                </p>
                <ol className="mb-10">
                  <li>
                    1. Transfer Ke nomor rekening diatas ini AN Felix Yunianto
                    Gunawan
                  </li>
                  <li>
                    2. Hubungi Nomor whatsap yang tersedia diatas untuk
                    mengkonfirmasi.
                  </li>
                  <li>
                    3. Format pesan
                    <ul>
                      <li className="ml-5">Nama: </li>
                      <li className="ml-5">Nama Event: </li>
                      <li className="ml-5">Sertakan Foto Bukti Transfer .</li>
                    </ul>
                  </li>
                  <li>4. Tunggu informasi selanjutnya.</li>
                </ol>
                <Link to="/" className="w-full sm:w-80 md:w-64 lg:w-98 text-white bg-blue-400 rounded-full border-0 py-2 px-6 focus:outline-nonetext-lg text-center">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
