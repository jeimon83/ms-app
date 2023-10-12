// axios-config.js

import axios from 'axios';
import baseUrl from './api_routes/base_url';

// Create an instance of Axios with your desired configuration
const instance = axios.create({
  baseURL: baseUrl(),
  // Other Axios configuration options
});

// Add a request interceptor to attach the token to every request
instance.interceptors.request.use(
  (config) => {
    // Get the token from wherever you store it (e.g., localStorage, Redux state, etc.)
    const token = localStorage.getItem('user'); // Change this to your token retrieval method

    // If a token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle any request errors here
    return Promise.reject(error);
  }
);

export default instance;
