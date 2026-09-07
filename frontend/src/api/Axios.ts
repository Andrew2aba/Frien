import axios from "axios";
import { getToken, clearToken } from "./token.ts";
// this is an axios instance that is used to make requests to the django backend
/* 
  axios is a promise-based HTTP client for the browser and node.js.
  It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
*/

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/", // django backend URL
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// runs before every request goes out
instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// runs on every response coming back
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
