import React, { useEffect } from "react";
import AllBlog from "../components/blog/AllBlog";
import Navbar from "../components/Navbar";
import { fetchBlogs } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const Blog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <>
      <Navbar />
      <AllBlog />
    </>
  );
};

export default Blog;
