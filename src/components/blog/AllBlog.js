import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const AllBlog = () => {
  const blogs = useSelector((state) => state.blogReducers.blogs);
  console.log(blogs);
  return (
    <div>
      <section className="text-gray-600 body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24">
        <div className="container flex mx-auto px-5 py-5 md:flex-row flex-col justify-end">
          <div className="lg:flex-grow md:w-1/2 flex-col md:text-left mb-4 lg:mb-16 md:mb-0 sm:mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-bold text-gray-900">
              Blog
            </h1>
          </div>
          <div className="lg:flex-grow md:w-1/2 flex-col md:text-left mb-4 lg:mb-16 md:mb-0 sm:mb-16 items-center text-center">
            <div className="flex justify-center sm:justify-center md:justify-end lg:justify-end">
              <input
                className="lg:w-44 md:w-36 sm:w-full p-2 border-b-2 text-center"
                type="text"
                placeholder="Cari Article"
              />
              <button className="bg-white w-auto flex justify-end items-center">
                <img
                  src="/assets/img/ic_round-search.png"
                  className="w-5 h-5"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {blogs.map((blog, index) => {
            return (
              <a
                href={blog.link}
                target="_blank"
                className="rounded-lg overflow-hidden shadow-lg"
                key={index}
              >
                <img
                  className="w-full object-fit object-center h-64"
                  src={blog.thumbnail}
                  alt={blog.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-l mb-2">{blog.title}</div>
                  <p className="text-gray-700 text-base font-bold">
                    {blog.author}
                  </p>
                  <p className="text-gray-700 text-sm">
                    Publish on {moment(blog.pubDate).format("D MMM YYYY")}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {blog.categories.map((category) => {
                    return (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{category}
                      </span>
                    );
                  })}
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AllBlog;
