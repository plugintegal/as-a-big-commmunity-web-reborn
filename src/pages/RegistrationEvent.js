import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { postParticipant } from "../redux/actions/userActions";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const RegistrationEvent = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const location = useLocation();
  const eventId = location.state.eventId;

  const initialValues = {
    name : '',
    email : '',
    phone : '',
    institution : '',
    address : ''
  }

  const onSubmit = (values) => {
    const data = {
        name : values.name,
        email : values.email,
        phone : values.phone,
        institution : values.institution,
        address : values.address,
        event_id : eventId
    }
    dispatch(postParticipant(data))
    history.push('/payment-event')

  }

  const validationSchema = Yup.object({
      name : Yup.string().required("Required"),
      email : Yup.string().required("Required"),
      phone : Yup.string().required("Required"),
      institution : Yup.string().required("Required"),
      address : Yup.string().required("Required"),
  })

  const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema
  })

  return (
    <>
      <section className="container text-gray-600 body-font container mx-auto px-5 py-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-700">
          Event Register
        </h1>
        <div className="flex flex-wrap shadow-lg">
          <div className="bg-gray-100 flex flex-wrap w-full sm:w-full md:w-1/2 lg:w-1/2 rounded-tl-xl rounded-bl-none sm:rounded-bl-xl md:rounded-bl-xl rounded-tr-xl sm:rounded-tr-xl md:rounded-tr-none text-gray-800 px-8 py-10">
            <h1 className="text-3xl font-bold mb-2">Registration Event Flow</h1>
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
                  <img src="/assets/img/eventRegis2.png" alt="logo" />
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
                  <img src="/assets/img/eventRegis3.png" alt="logo" />
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
            <form className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pl-0 sm:pl-6 md:pl-3 lg:pl-0 xl:pl-16 " onSubmit={formik.handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full sm:w-80 md:w-64 lg:w-98 block bg-gray-200 rounded-full border border-gray-700 focus:border-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Fullname"
                  value={formik.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                
                {formik.errors.name && formik.touched.name 
                    ? <span className="text-sm text-red-500">{formik.errors.name}</span> : null
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full sm:w-80 md:w-64 lg:w-98 block bg-gray-200 rounded-full border border-gray-700 focus:border-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Email"
                  value={formik.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email 
                    ? <span className="text-sm text-red-500">{formik.errors.email}</span> : null
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  No Hp
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full sm:w-80 md:w-64 lg:w-98 block bg-gray-200 rounded-full border border-gray-700 focus:border-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Phone number"
                  value={formik.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.phone && formik.touched.phone 
                    ? <span className="text-sm text-red-500">{formik.errors.phone}</span> : null
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="institution"
                  className="leading-7 text-sm text-gray-600"
                >
                  Institution
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  className="w-full sm:w-80 md:w-64 lg:w-98 block bg-gray-200 rounded-full border border-gray-700 focus:border-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Institution"
                  value={formik.institution}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.institution && formik.touched.institution 
                    ? <span className="text-sm text-red-500">{formik.errors.institution}</span> : null
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm text-gray-600"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full sm:w-80 md:w-64 lg:w-98 block bg-gray-200 rounded-full border border-gray-700 focus:border-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Address"
                  value={formik.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.address && formik.touched.address 
                    ? <span className="text-sm text-red-500">{formik.errors.address}</span> : null
                }
              </div>
              <button
                type="submit"
                className="w-full sm:w-80 md:w-64 lg:w-98 text-white bg-blue-400 rounded-full border-0 py-2 px-6 focus:outline-none text-lg hover:bg-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationEvent;
