import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '01d9b5c42b5388963e32b24f9cb4247d',
    language: 'es-ES',
  },
});

export default movieDB;
