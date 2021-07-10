import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const AllEventGrid = () => {
  const events = useSelector((state) => state.eventReducers.events);

  return (
    <div className="flex flex-wrap -mx-4">
      {events.map((event) => {
        return (
          <div className="p-4 md:w-1/2">
            <div className="rounded-lg h-72  overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-auto"
                src={event.image_event}
              />
            </div>
            <div className="bg-white rounded-md   h-52 shadow-lg">
              <p className="mt-2 text-xs ml-2 mb-2 border-2 content-center border-black w-20  justify-items-center p-2 pl-3 rounded-lg ">
                Workshop
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
                <div class="flex-grow inline ">
                  <h2 class="text-gray-900 text-xl title-font font-medium">
                    {event.event_name}
                  </h2>
                  <p class="leading-relaxed text-base">PLUG-IN</p>
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
      })}
    </div>
  );
};

export default AllEventGrid;
