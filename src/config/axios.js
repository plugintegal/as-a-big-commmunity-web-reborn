import axios from "axios";
// import env from "env";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL
});
export const instanceMedium = axios.create({
  baseURL: process.env.REACT_APP_URL_BLOG_MEDIUM
})
  