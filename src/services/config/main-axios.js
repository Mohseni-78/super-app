import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Accept-Language": "*",
  Accept: "application/json",
};

const Api_V1 = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers,
});

Api_V1.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Api_V1.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export { Api_V1 };
