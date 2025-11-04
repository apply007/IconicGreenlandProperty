// api.js
import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:8000",
  // baseURL: "https://api.iconicunityltd.com", // backend root//
  withCredentials: true, // cookie send হবে
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    // "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
