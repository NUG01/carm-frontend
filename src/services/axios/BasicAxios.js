import axios from "axios";
const BasicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

BasicAxios.defaults.withCredentials = true;

BasicAxios.interceptors.request.use(
  (config) => {
    // You can modify the request config here, if needed
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);
BasicAxios.interceptors.response.use(
  (response) => {
    // You can access the response message here if it exists
    const message = response.data && response.data.message;
    if (message) {
      ///redux logic here
      console.log("Response message:", message);
      // Do something with the message if needed
    }

    // Return the response
    return response;
  },
  (error) => {
    // Handle response error
    const message =
      error.response && error.response.data && error.response.data.message;
    if (message) {
      console.log(
        "Response error message:",
        document.querySelector("#message")
      );
      ///redux logic here
      // console.log("Response error message:", message);
      // Do something with the error message if needed
    }

    return Promise.reject(error);
  }
);
export default BasicAxios;
