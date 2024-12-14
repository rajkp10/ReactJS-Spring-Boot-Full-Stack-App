import axios from "axios";

// axios instance for making requests
const axiosInstance = axios.create({
  baseURL: `http://project-alb-485653766.us-east-1.elb.amazonaws.com:8080`,
});

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  config.headers["Authorization"] = localStorage.getItem("token");
  return config;
});

export default axiosInstance;
