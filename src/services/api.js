import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'http://192.168.0.10:3000/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosAPI;
