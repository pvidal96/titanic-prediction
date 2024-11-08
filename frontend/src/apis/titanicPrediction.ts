import axios from 'axios';

// Default axios client
export default axios.create({
  baseURL: 'http://localhost:4000/',
});
