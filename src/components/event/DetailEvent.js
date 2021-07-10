import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEventDetail } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import moment from "moment";

class DetailEvent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchEventDetail(this.props.location.state.eventId);
  };

  render() {
    return (
      <div>
        <section class="body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24">
          <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto pt-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Detail Event
              </h1>
            </div>
            <div className="container px-5 pt-6 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-2/3 md:w-full">
                  <div className="flex flex-col px-4">
                    <div className="w-full h-full mb-6 items-center justify-center">
                      <img
                        src="/assets/img/event4.png"
                        className="w-full rounded-md"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-xl title-font font-medium my-3 lg:hidden">
                        {this.props.eventDetail.event_name}
                      </h2>
                      <h2 className="text-gray-900 text-lg title-font font-medium my-3 ">
                        Descriptions
                      </h2>
                      <p className="leading-relaxed text-base my-2">
                        {this.props.eventDetail.description}
                      </p>
                    </div>
                    {/* <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium my-3">
                        RunDown Acara
                      </h2>
                      <p className="leading-relaxed text-base mb-2 lg:mb-3 md:mb-3 ">
                        <span className="font-bold mr-2">19.00 - 19.10</span>
                        Pembukaan oleh moderator (Felix Yunianto Gunawan -
                        Google Associate Android Developer, Curriculum Developer
                        Plugin).
                      </p>
                      <p className="leading-relaxed text-base">
                        <span className="font-bold mr-2">19.10 - 20.00</span>
                        "Plugin Developer Coaching #01: Android | Pentingnya
                        Performa pada Aplikasi Android" akan dibawakan oleh
                        Khafidul Mualif (Google Associate Android Developer,
                        Code Reviewer Plugin).
                      </p>
                    </div> */}
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium my-3">
                        Schedule
                      </h2>
                      <p className="leading-relaxed text-base">
                        Start :{" "}
                        {moment(this.props.eventDetail.date_start).format(
                          "DD MMM YYYY hh:mm"
                        )}
                      </p>
                      <p className="leading-relaxed text-base">
                        Finish :{" "}
                        {moment(this.props.eventDetail.date_end).format(
                          "DD MMM YYYY hh:mm"
                        )}
                      </p>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium my-3">
                        location
                      </h2>
                      {this.props.eventDetail.status === "Online" ? (
                        <>
                          <p className="leading-relaxed text-base">
                            LIVE on {this.props.eventDetail.location}:
                          </p>
                          <p className="leading-relaxed text-base">
                          {this.props.eventDetail.online_link}
                          </p>
                          <p className="leading-relaxed text-base">{this.props.eventDetail.status}</p>
                        </>
                      ) : (
                        <>
                            <p className="leading-relaxed text-base">
                          {this.props.eventDetail.location}
                        </p>
                        <p className="leading-relaxed text-base">{this.props.eventDetail.status}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 md:w-full">
                  <div className="flex justify-center px-4 flex-col text-center lg:text-left">
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-xl title-font font-medium my-3 hidden lg:inline-block">
                        {this.props.eventDetail.event_name}
                      </h2>
                      <p className="leading-relaxed text-base my-2">
                        Pembicara
                      </p>
                      <p className="text-base text-gray-900 title-font font-medium my-2">
                        {this.props.eventDetail.speaker}
                      </p>
                      <p className="leading-relaxed text-base my-2">Waktu</p>
                      <p className="text-base text-gray-900 title-font font-medium my-2">
                        {moment(this.props.eventDetail.date_start).format(
                          "DD-MM-YYYY"
                        )}{" "}
                        |{" "}
                        <span className="text-gray-600">
                          {moment(this.props.eventDetail.date_start).format(
                            "hh:mm"
                          )}{" "}
                          WIB
                        </span>
                      </p>
                      <button className="text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                        Daftar Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    eventDetail: state.eventReducers.eventDetail,
  };
};

const mapDispatchToProps = () => {
  return {
    fetchEventDetail: (id) => fetchEventDetail(id),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(withRouter(DetailEvent));
