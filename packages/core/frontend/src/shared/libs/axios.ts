import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || BASE_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // TODO: add sentry
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);
