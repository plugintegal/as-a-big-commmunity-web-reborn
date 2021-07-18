import React, { useState, useEffect } from "react";
import NavbarSort from "./NavbarSort";
import Search from "./SearchEvent";
import Sort from "./SortEvent";

import { fetchEvents } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";

const AllEventList = () => {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.eventReducers.events);
  console.log("EVENT ", events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <div>
      <section class="text-gray-600 body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24">
        <div class="container px-4 py-10 mx-auto">
          <h2 className="font-bold text-3xl mb-10">Event</h2>
          <NavbarSort />

          <Search />
          <div className="flex">
            <div className="flex flex-wrap">
              {events.map((event) => {
                return (
                  <div className="p-1 md:w-full mt-5">
                    <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center text-center sm:text-left">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-80 h-48 object-cover object-center sm:mb-0 mb-4"
                        src={ event.image_event }
                      />
                      <div className="flex-grow sm:pl-8 p-4">
                        <h2 className="title-font font-semibold mb-2 text-gray-900 text-2xl">
                          {event.event_name}
                        </h2>
                        <p className="font-light text-2xl">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="md:w-1/4">
              <div>
                <p className="ml-10 mt-5 flex-wrap">
                  Ornare condimentum in ac quis. Amet, proin faucibus
                  scelerisque scelerisque massa, donec fermentum.
                </p>
              </div>
              <Sort />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllEventList;
