import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

const AllEventGrid = (props) => {
  const history = useHistory();

  const handleMoveDetailEvent = (id) => {
    history.push("/detail-event", {
      eventId: id,
    });
  };

  return (
    <div className="flex flex-wrap -mx-4">
      {props.events.length > 0 ? (
        props.events.map((event, index) => {
          return (
            <div
              key={index}
              className="p-4 md:w-1/2 cursor-pointer"
              onClick={() => handleMoveDetailEvent(event.id)}
            >
              <div className="rounded-lg h-72 overflow-hidden shadow">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={event.image_event}
                />
              </div>
              <div className="bg-white rounded-md   h-52 shadow-lg">
                <p className="mt-2 text-xs ml-2 mb-2 border-2 content-center border-black w-20  justify-items-center p-2 pl-3 rounded-lg ">
                  {event.category_event.category_name}
                </p>
                <div className="inline-flex">
                  <div className="inline-flex ">
                    <div className=" ml-2 mr-4 text-red-100 bg-blue-600 rounded-xl px-7 py-4 text-xl mb-4  block text-center">
                      {moment(event.date).format("D")}{" "}
                      <span className="block text-center">
                        {moment(event.date).format("MMM")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow inline ">
                    <h2 className="text-gray-900 text-xl title-font font-medium">
                      {event.event_name}
                    </h2>
                    <p className="leading-relaxed text-base">{event.speaker}</p>
                  </div>
                </div>
                <div className="flex mt-7 w-full justify-end">
                  <span className="block w-52 text-center text-red-100 bg-blue-600 rounded-br-lg rounded-tl-lg px-6 py-1">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(event.price)}
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full h-40 m-4 mt-5 shadow rounded-xl border border-gray-200 cursor-pointer flex justify-center items-center">
          <h2 className="title-font font-semibold mb-2 text-gray-700 text-2xl">
            Event not available
          </h2>
        </div>
      )}
    </div>
  );
};

export default AllEventGrid;
