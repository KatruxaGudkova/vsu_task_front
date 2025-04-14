import axios from 'axios';
import { CONFIG } from '../config';
// import {User} from "../types";

// const axiosInstanceUser = axios.create({
//   withCredentials: true,
//   baseURL: CONFIG.apiUser,
//   timeout: CONFIG.apiTimeout,
// });

const axiosInstance = axios.create({
  baseURL: CONFIG.apiBaseUrlAnalyzeText,
  timeout: CONFIG.apiTimeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstanceDB.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem(
//     "accessToken"
//   )}`;
//   return config;
// });

// axiosInstanceDB.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       (error.response.status == 401 || error.response.status == 403) &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axiosInstanceUser.get<User.IUserResponse>(
//           `/refresh`,
//           {withCredentials: true}
//         );
//         localStorage.setItem("accessToken", response.data.accessToken);
//         return axiosInstanceDB.request(originalRequest);
//       } catch (e) {
//         console.log("НЕ АВТОРИЗОВАН");
//       }
//     }
//     throw error;
//   }
// );

export { axiosInstance };
