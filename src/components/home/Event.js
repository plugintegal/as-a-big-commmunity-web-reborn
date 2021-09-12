import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";
import './Event.css'

const Event = () => {
  const events = useSelector((state) => state.eventReducers.events);
  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  const history = useHistory();
  const handleMoveDetailEvent = (id) => {
    history.push("/detail-event", {
      eventId: id,
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-24 mx-auto">
        <div>
          <h4 className="font-bold text-3xl">Event</h4>
        </div>
        <div className="flex flex-wrap">
          <div className="md:w-8/12 sm:w-full">
            <Slider {...settings}>
              {events.map((event, index) => {
                return (
                  <div className="cursor-pointer lg:w-6/12 md:w-full sm:w-full sm:mb-0 mb-6 py-3 px-2 mt-8" key={index} onClick={() => handleMoveDetailEvent(event.id)}>
                    <div className="rounded-lg h-60 lg:w-96 shadow-event md:w-full sm:w-full overflow-hidden z-20 -mb-3">
                      <img
                        alt="content"
                        className="object-fill object-center h-full w-full"
                        src={event.image_event}
                      />
                    </div>
                    <div className="bg-white rounded-b-md lg:w-96 md:w-full sm:w-full shadow-event z-0">
                      <div className="inline-flex">
                        <div className="inline-flex">
                          <div className="ml-2 mr-4 text-red-100 bg-biru rounded-xl px-6 py-2 mb-4 mt-6 text-center">
                            <p className="text-2xl font-bold text-white">{moment(event.date).format("D")}{" "}</p>
                            <span className="block text-white font-medium text-center">
                              {moment(event.date).format("MMM")}
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow inline mt-6">
                          <h2 className="text-gray-900 text-xl title-font font-medium">
                            {event.event_name}
                          </h2>
                          <p className="leading-relaxed text-lg">
                            {event.speaker}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <span className="text-white ml-auto block w-40 text-center bg-biru rounded-br-lg rounded-tl-lg px-6 py-1 font-medium">
                          Rp. &nbsp;
                          {new Intl.NumberFormat("id-ID", {
                            currency: "IDR",
                          }).format(event.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="px-4 pl-12 md:w-4/12 sm:mb-0 mb-6 mt-8">
            <p className="font-medium text-xl">
              Ikuti Event yang kami selenggarakan.
            </p>
            <div className="w-full mt-12">
              <Link to="/event">
                <button className="flex text-white bg-biru border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg shadow-event">
                  Lihat Semua Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
