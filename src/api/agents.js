import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api';

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

const People = {
  list: () => axios.get('/people').then(responseBody),
};

const agent = {
  People,
};

export default agent;
