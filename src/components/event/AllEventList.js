import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

const AllEventList = (props) => {
  const history = useHistory();

  const handleMoveDetailEvent = (id) => {
    history.push("/detail-event", {
      eventId: id,
    });
  };

  return (
    <div className="flex flex-wrap">
      {props.events.length > 0 ? (
        props.events.map((event) => {
          return (
            <div
              className="md:w-full mt-5 shadow rounded-xl border border-gray-200 cursor-pointer"
              onClick={() => handleMoveDetailEvent(event.id)}
            >
              <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-96 h-60 object-fill object-center sm:mb-0 mb-4"
                  src={event.image_event}
                />
                <div className="flex w-6/12 sm:pl-8 pl-4 items-center">
                  <div className="flex flex-col justify-between">
                    <h2 className="title-font font-semibold mb-2 text-gray-900 text-2xl">
                      {event.event_name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <p className="mt-2 text-xs ml-2 mb-2 border-2 content-center border-black w-20  justify-items-center p-2 pl-3 rounded-lg ">
                        {event.category_event.category_name}
                      </p>
                      <p className="text-lg font-medium">{event.speaker}</p>
                    </div>
                    <div className="inline-flex mt-5">
                      <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-7 py-4 text-xl block text-center">
                        {moment(event.date).format("D")}{" "}
                        <span className="block text-center">
                          {moment(event.date).format("MMM")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-4/12 flex justify-end">
                  <div className="flex mt-auto w-full justify-end">
                    <span className="block w-40 text-center text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(event.price)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full h-40 mt-5 shadow rounded-xl border border-gray-200 cursor-pointer flex justify-center items-center">
          <h2 className="title-font font-semibold mb-2 text-gray-700 text-2xl">
            Event not available
          </h2>
        </div>
      )}
    </div>
  );
};

export default AllEventList;
