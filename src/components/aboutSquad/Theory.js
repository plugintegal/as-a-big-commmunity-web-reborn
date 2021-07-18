import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBatch } from "../../redux/actions/userActions";

const Theory = () => {
  const [openTab, setOpenTab] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBatch());
  }, [dispatch]);

  const batchs = useSelector((state) => state.batchReducers.batch);
  console.log("ini batch", batchs);
  return (
    <div>
      <section className="container mx-auto px-5 py-5 text-gray-600 body-font">
        <h1 className="text-3xl font-bold text-black mb-0 sm:mb-0 md:mb-10 lg:mb-12">
          Timeline Web Dev
        </h1>
        <div className="flex flex-wrap mt-2">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none p-2 flex-wrap rounded-xl flex-row border-4 border-blue-400"
              role="tablist"
            >
              {batchs.map((batch, index) => {
                return (
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase my-1 px-1 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-0-5 lg:py-3 shadow-lg rounded-xl block leading-normal " +
                        (batch.id === openTab
                          ? "text-white bg-blue-400"
                          : "text-blue-400 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(batch.id);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      {batch.batch_name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
              <div className="px-4 py-5 flex-auto">
                {batchs.map((batch, index) => {
                  return (
                    <div
                      className={openTab === batch.id ? "block" : "hidden"}
                      id="link1"
                    >
                      {batch.theories.map((bath, index) => {
                        return (
                          <div class="flex flex-wrap">
                            <div class="flex relative pt-6">
                              <div class="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
                                <div class="flex-shrink-0 mr-24 text-blue-400 font-medium inline-flex text-2xl justify-center">
                                  <h1>Week {bath.gathering}</h1>
                                </div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                                    {bath.title}
                                  </h2>
                                  <p class="leading-relaxed">
                                    {bath.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Theory;
