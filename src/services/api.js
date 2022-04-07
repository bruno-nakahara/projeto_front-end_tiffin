import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'http://xxxx:3000/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosAPI;
