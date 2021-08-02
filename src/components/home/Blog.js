import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Blog = () => {
  const blogs = useSelector((state) => state.blogReducers.blogs);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 mx-auto">
        <div className="mb-3">
          <h4 className="font-bold text-3xl">Blog</h4>
        </div>
        {blogs.slice(0, 2).map((blog) => {
          return (
            <div className="py-5">
              <div className=" w-full lg:max-w-full lg:flex rounded-lg">
                
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-l-lg p-4 flex flex-col justify-between leading-normal border-t-2 border-l-2 border-b-2 w-full">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      Medium
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {blog.title}
                    </div>
                    <p className="text-gray-700 text-base">{blog.author}</p>
                  </div>
                </div>
                <div className="h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-r-lg text-center overflow-hidden">
                  <img
                    alt="thumbnail"
                    src={blog.thumbnail}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div className="p-3 w-full">
          <Link to="/blog">
            <button className="flex mx-auto text-white bg-biru font-bold border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
              Lihat Berita Lainya
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Blog;
