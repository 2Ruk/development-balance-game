import axios from "axios";

export const BASE_API_URL =
  process.env.NODE_ENV === "production"
    ? `https://api.itquiz.co.kr/`
    : "http://localhost:3030/";

const instance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  timeout: 1000,
});
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
//
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default instance;
