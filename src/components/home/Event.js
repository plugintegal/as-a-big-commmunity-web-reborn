import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";

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
        breakpoint: 640,
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
    <section class="text-gray-600 body-font">
      <div class="container px-4 py-24 mx-auto">
        <div>
          <h4 className="font-bold text-3xl">Event</h4>
        </div>
        <div className="flex flex-wrap">
          <div className="md:w-7/12 sm:w-full">
            <Slider {...settings}>
              {events.map((event, index) => {
                return (
                  <div className="cursor-pointer lg:w-1/3 md:w-full sm:w-full p-4 sm:mb-0 mb-6" key={index} onClick={() => handleMoveDetailEvent(event.id)}>
                    <div className="rounded-lg h-60 lg:w-80 md:w-full sm:w-full overflow-hidden">
                      <img
                        alt="content"
                        className="object-cover object-center h-full w-full shadow"
                        src={event.image_event}
                      />
                    </div>
                    <div className="bg-white rounded-md lg:w-80 md:w-full sm:w-full shadow-lg">
                      <div className="inline-flex ">
                        <div className="inline-flex ">
                          <div className=" ml-2 mr-4 text-red-100 bg-biru rounded-xl px-6 py-4 mb-4 mt-4 block text-center">
                            {moment(event.date).format("D")}{" "}
                            <span className="block text-center">
                              {moment(event.date).format("MMM")}
                            </span>
                          </div>
                        </div>
                        <div class="flex-grow inline mt-6">
                          <h2 class="text-gray-900 text-lg title-font font-medium">
                            {event.event_name}
                          </h2>
                          <p class="leading-relaxed text-base">
                            {event.speaker}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <span className="ml-auto block w-40 text-center text-red-100 bg-biru rounded-br-lg rounded-tl-lg px-6 py-1">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
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
          <div className="px-4 pl-12 pt-8 md:w-1/3 sm:mb-0 mb-6">
            <p className="font-medium text-2xl items-center  justify-center">
              Ikuti Event yang kami selenggarakan, dapatkan ilmu yang bermanfaat
              dan tentunya pengalaman
            </p>
            <div class="p-2 w-full mt-5">
              <Link to="/event">
                <button class="flex  text-white bg-biru font-bold border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
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
