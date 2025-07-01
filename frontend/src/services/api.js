import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // adapte selon ton backend
});

export default api;