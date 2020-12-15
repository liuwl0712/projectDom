import axios from "axios";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 50000,
});
service.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return Promise.resolve(res);
  },
  (error) => {
    console.log("err" + error);
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
export default service;
