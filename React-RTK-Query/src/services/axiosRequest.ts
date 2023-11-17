import axios, { AxiosInstance } from 'axios';

/**
 * You can import these if there's a need to create Axios instances to make anonymous apis
 */

export const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en-US',
    Accept: 'application/json',
  },
});
