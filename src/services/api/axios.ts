import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig } from 'axios';

const BASE_URL = '/api'; // Remove the http://localhost:3000 prefix
interface FailedRequest {
  response: AxiosResponse;
  config: AxiosRequestConfig;
}

export const axiosPrivate: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// we can intercept the request to add the token to the request header, or pass any other headers options
axiosPrivate.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const con: InternalAxiosRequestConfig = config;
    return con;
  },
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 500) {
      return Promise.reject(new Error('Internal Server Error'));
    }
    return Promise.reject(error);
  }
);
