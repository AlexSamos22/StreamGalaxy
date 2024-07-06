// src/api.js
import axios from 'axios';

const API_KEY = '9662c8c72fd81827cd039a340e4a306d';  // Reemplaza TU_API_KEY con tu API Key de TMDb
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default api;
