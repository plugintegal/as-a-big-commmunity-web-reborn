import axios from "axios";

export const instance = axios.create({
  baseURL: "https://as-a-big-community-back-end.herokuapp.com/",
});

export const instanceMedium = axios.create({
  baseURL: "https://api.rss2json.com/v1/"
})
