import React, { Component } from "react";

var sectionStyle = {
  width: "600px",
  marginRight: "-20px",
  height: "650px",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "600px",
  backgroundPositionY: "-100px",
  backgroundImage:
    "url(https://res.cloudinary.com/dk4dgvu4w/image/upload/v1625500624/Saly-7_cl8hzv.png)",
  backgroundSize: "cover",
  zIndex: "999",
};

export default class Login extends Component {
  render() {
    return (
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="md:w-2/3 -mt-20">
              <div className="bg-blue-400 " style={{ height: "580px" }}>
                <div style={sectionStyle}>
                  <h3 className="mx-auto  lg:text-4xl md:text-2xl sm:text-xl font-bold lg:mt-16  sm:mt-8">
                    Plugin
                  </h3>
                  <p className="lg:text-xl md:text-lg lg:mt-16 md:mt-8 sm:text-base sm:mt-6">
                    Enter your personal details and start journey with us
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"></div>
          </div>
        </section>
      </div>
    );
  }
}
