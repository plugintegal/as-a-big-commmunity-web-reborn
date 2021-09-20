import React from "react";
import { Link } from "react-router-dom";

const HandleRegister = () => {
  return (
    <div class="container mx-auto px-5 py-5 text-gray-600 body-font flex flex-wrap w-full sm:w-full md:w-full lg:w-1/2 h-screen flex justify-center items-center">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xl font-bold">
          Pendaftaran dibuka tanggal 23 September 2021.
        </p>
        <Link
          to="/"
          className="bg-biru rounded-xl px-4 py-2 text-white w-1/2 font-bold flex justify-center items-center"
        >
          Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
};

export default HandleRegister;
