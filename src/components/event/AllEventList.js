import React from "react";
import { useSelector } from "react-redux";

const AllEventList = () => {
  const events = useSelector((state) => state.eventReducers.events);

  return (
    <div className="flex flex-wrap">
      {events.map((event) => {
        return (
          <div className="p-1 md:w-full mt-5">
            <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-80 h-48 object-cover object-center sm:mb-0 mb-4"
                src={event.image_event}
              />
              <div className="flex-grow sm:pl-8 p-4">
                <h2 className="title-font font-semibold mb-2 text-gray-900 text-2xl">
                  {event.event_name}
                </h2>
                <p className="font-light text-2xl">{event.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllEventList;
