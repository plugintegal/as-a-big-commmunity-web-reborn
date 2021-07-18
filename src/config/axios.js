import axios from "axios";

const instance = axios.create({
  baseURL: "https://as-a-big-community-back-end.herokuapp.com/",
});

export default instance;
