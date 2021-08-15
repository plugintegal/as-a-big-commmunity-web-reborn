import React, {useState} from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false)

  const changeNavbarColor = () => {
    if(window.scrollY <= 80){
      setNavbarColor(false)
    }else{
      setNavbarColor(true)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div>
      <header className={"body-font fixed w-screen z-30 top-0 " + (navbarColor ? "bg-biru text-white" : "bg-white text-grey-300")}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="/assets/img/Logo.png"
              alt=""
              style={{ width: "56px", height: "40px" }}
            />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <p className="mr-5 hover:text-gray-900 hover:font-bold">WiyataOs</p> */}
            <Link to="/blog" className="mr-5 hover:text-gray-900">Blog</Link>
            <Link to="/event" className="mr-5 hover:text-gray-900 ">Event</Link>
            {/* <p className="mr-5 hover:text-gray-900">Achivment</p> */}
            {/* <Link to="/registration-member" className=" hover:text-gray-900">Registration Member</Link> */}
          </nav>
        </div>
      </header>
    </div>
  );
}


export default Navbar