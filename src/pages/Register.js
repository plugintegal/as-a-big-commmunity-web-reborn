import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postProspectiveMember } from "../redux/actions/userActions";
import { BiLoader } from 'react-icons/bi';

const Register = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [focusField, setFocusField] = useState("");
  const [loading, setLoading] = useState(false);
  const prospectiveMemberLoading = useSelector((state) => state.prospectiveMemberReducers.prospectiveMemberLoading);


  const initialValues = {
    name: "",
    email: "",
    dob: "",
    address: "",
    institute: "",
    phone_number: "",
    gender: "",
  };

  const onSubmit = (values) => {
    setLoading(true)
    const data = {
      name: values.name,
      email: values.email,
      dob: values.dob,
      address: values.address,
      institute: values.institute,
      phone_number: values.phone_number,
      gender: values.gender,
    };

    dispatch(postProspectiveMember(data));
    
  };

  useEffect(() => {
    if(!prospectiveMemberLoading){
      history.push("/");
    }
  }, [prospectiveMemberLoading, history])

  const validationSchema = Yup.object({
    name: Yup.string().required("Must be filled"),
    email: Yup.string().required("Must be filled"),
    dob: Yup.string().required("Must be filled"),
    address: Yup.string().required("Must be filled"),
    institute: Yup.string().required("Must be filled"),
    phone_number: Yup.string().required("Must be filled"),
    gender: Yup.string().required("Must be filled"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const onBlurField = (e) => {
    let name = e.target.name
    setFocusField("");
    formik.setTouched({...formik.touched, [name] : true})
  };

  return (
    <div>
      <section className="text-gray-600 body-font h-screen flex items-center box-border">
        <div className="flex flex-wrap justify-between w-full mx-10 pt-56 lg:pt-28 md:pt-48 sm:pt-44">
          <div className="w-full lg:w-1/2 md:w-full flex justify-center items-center">
            <div className="w-full">
              <h1 className="text-blue-400 lg:text-3xl md:text-2xl sm:text-xl font-bold">
                Registration
              </h1>
              <p className="mt-3">Please login to continue in our website</p>
              <form
                className="pt-12 px-2 flex flex-col gap-2 items-center"
                onSubmit={formik.handleSubmit}
              >
                <div className="w-full lg:w-3/4 md:w-3/4 sm:w-full border-blue-400 border-2 rounded-full h-14 outline-none px-8 py-6 flex items-center relative">
                  <div
                    className={
                      "absolute -top-3.5 bg-white px-2  font-bold " +
                      (focusField === "name" || formik.values.name !== ""
                        ? ""
                        : "hidden")
                    }
                  >
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="outline-none focus:placeholder-transparent w-full"
                    placeholder="Full Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={onBlurField}
                    onFocus={(e) => setFocusField(e.target.name)}
                  />
                </div>
                {formik.errors.name && formik.touched.name ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.name}
                  </span>
                ) : null}

                <div className="w-full lg:w-3/4 md:w-3/4 sm:w-full border-blue-400 border-2 rounded-full h-14 outline-none px-8 py-6 flex items-center relative mt-3">
                  <div
                    className={
                      "absolute -top-3.5 bg-white font-bold " +
                      (focusField === "email" || formik.values.email !== ""
                        ? ""
                        : "hidden")
                    }
                  >
                    <label htmlFor="email">&nbsp; Email &nbsp;</label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="outline-none focus:placeholder-transparent w-full"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={onBlurField}
                    onFocus={(e) => setFocusField(e.target.name)}
                  />
                </div>
                {formik.errors.email && formik.touched.email ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.email}
                  </span>
                ) : null}
                <div className="w-full lg:w-3/4 md:w-3/4 sm:w-full border-blue-400 border-2 rounded-full h-14 outline-none px-8 py-6 flex items-center relative mt-3">
                  <div
                    className={
                      "absolute -top-3.5 bg-white font-bold " +
                      (focusField === "dob" || formik.values.dob !== ""
                        ? ""
                        : "hidden")
                    }
                  >
                    <label htmlFor="dob">&nbsp; Date of birth &nbsp;</label>
                  </div>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onFocus={(e) => setFocusField(e.target.name)}
                    onBlur={onBlurField}
                    className="outline-none focus:placeholder-transparent w-full"
                    placeholder="Date of Birth"
                  />
                </div>
                {formik.errors.dob && formik.touched.dob ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.dob}
                  </span>
                ) : null}

                <div className="w-full lg:w-3/4 md:w-3/4 sm:w-full border-blue-400 border-2 rounded-full h-14 outline-none px-8 py-6 flex items-center relative mt-3">
                  <div
                    className={
                      "absolute -top-3.5 bg-white font-bold " +
                      (focusField === "address" || formik.values.address !== ""
                        ? ""
                        : "hidden")
                    }
                  >
                    <label htmlFor="address">&nbsp; Address &nbsp;</label>
                  </div>

                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={onBlurField}
                    onFocus={(e) => setFocusField(e.target.name)}
                    className="outline-none focus:placeholder-transparent w-full"
                    placeholder="Address"
                  />
                </div>

                {formik.errors.address && formik.touched.address ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.address}
                  </span>
                ) : null}

                <div className="w-full lg:w-3/4 md:w-3/4 sm:w-full border-blue-400 border-2 rounded-full h-14 outline-none px-8 py-6 flex items-center relative mt-3">
                  <div
                    className={
                      "absolute -top-3.5 bg-white font-bold " +
                      (focusField === "institute" ||
                      formik.values.institute !== ""
                        ? ""
                        : "hidden")
                    }
                  >
                    <label htmlFor="institute">&nbsp; Institute &nbsp;</label>
                  </div>

                  <input
                    type="text"
                    id="institute"
                    name="institute"
                    value={formik.values.institute}
                    onChange={formik.handleChange}
                    onBlur={onBlurField}
                    onFocus={(e) => setFocusField(e.target.name)}
                    className="outline-none focus:placeholder-transparent w-full"
                    placeholder="Institute"
                  />
                </div>

                {formik.errors.institute && formik.touched.institute ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.institute}
                  </span>
                ) : null}

                <div className="w-full lg:w-3/4 md:w-3/4 sm:w-full border-blue-400 border-2 rounded-full h-14 outline-none px-8 py-6 flex items-center relative mt-3">
                  <div
                    className={
                      "absolute -top-3.5 bg-white font-bold " +
                      (focusField === "phone_number" ||
                      formik.values.phone_number !== ""
                        ? ""
                        : "hidden")
                    }
                  >
                    <label htmlFor="phone_number">&nbsp; Phone Number &nbsp;</label>
                  </div>

                  <input
                    type="number"
                    id="phone_number"
                    name="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    onBlur={onBlurField}
                    onFocus={(e) => setFocusField(e.target.name)}
                    className="outline-none focus:placeholder-transparent w-full"
                    placeholder="Phone Number"
                  />
                </div>

                {formik.errors.phone_number && formik.touched.phone_number ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.phone_number}
                  </span>
                ) : null}

                <div className="w-full lg:w-3/4 md:w-3/4 sm:w-full border-blue-400 border-2 rounded-full h-14 outline-none px-8 py-6 flex items-center relative mt-3">
                  <div
                    className={
                      "absolute -top-3.5 bg-white font-bold " +
                      (focusField === "gender" ||
                      formik.values.gender !== ""
                        ? ""
                        : "hidden")
                    }
                  >
                    <label htmlFor="gender">&nbsp; Gender &nbsp;</label>
                  </div>

                  <select
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={onBlurField}
                    onFocus={(e) => setFocusField(e.target.name)}
                    className="outline-none bg-white w-full"
                    style={{
                      color: formik.values.gender === "" ? "#A9AFB9" : null,
                    }}
                  >
                    <option value="" disabled={true} hidden>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {formik.errors.gender && formik.touched.gender ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.gender}
                  </span>
                ) : null}
                <div className="flex justify-center items-center w-full lg:w-3/4 md:w-3/4 sm:w-full pt-10">
                  <button
                    type="submit"
                    className="w-full py-4 text-center bg-blue-400 text-white rounded-full outline-none flex justify-center"
                    disabled={loading}
                  >
                    {loading ? <BiLoader className="animate-spin text-lg"/> : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:w-full hidden lg:flex md:hidden sm:hidden relative py-8">
            <div className="bg-blue-500 w-5/6 h-full rounded-3xl static self-center ml-auto flex justify-center flex-col">
              <div className="w-1/2 h-1/2 -mt-16 self-end mr-24">
                <h1 className="text-5xl text-white font-bold">Plugin</h1>
                <div className="mt-24">
                  <p className="text-2xl font-medium text-white">
                    Plugin is a linux <br /> organization located in <br />
                    Tegal
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -left-6 w-4/6 self-end h-4/6 bottom-16">
              <img
                src={
                  "https://res.cloudinary.com/dk4dgvu4w/image/upload/v1625500624/Saly-34_kguaag.png"
                }
                alt="hero-register"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
