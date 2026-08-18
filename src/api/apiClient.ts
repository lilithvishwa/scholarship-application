/**
 * Creates and exports a reusable Axios instance for making API requests.
 * Centralizes the base URL, default headers, and authentication settings
 * so all HTTP requests share the same configuration.
 */

import axios from "axios";
import { responseErrorInterceptor } from "./interceptors/response.interceptor";

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BACKEND}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => responseErrorInterceptor(error),
);

// export const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_API_BACKEND,
//   withCredentials: true,
//   headers: { "Content-Type": "application/json" },
// });
