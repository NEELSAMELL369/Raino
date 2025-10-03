// src/Services/AxiosInstance.js
import axios from 'axios';
import { BASEURL } from './ApiPaths';

const AxiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
