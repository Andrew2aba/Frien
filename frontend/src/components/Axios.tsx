import axios from 'axios';

// this is an axios instance that is used to make requests to the django backend
/* 
  axios is a promise-based HTTP client for the browser and node.js.
  It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
*/

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // django backend URL
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',

  },
});

export default instance;