import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.rawg.io/api",
});

API.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: "",
  };
  return config;
});

export default API;
