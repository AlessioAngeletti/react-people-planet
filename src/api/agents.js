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

const Planet = {
  details: (id) => axios.get(`/planets/${id}/`).then(responseBody),
};

const agent = {
  People,
  Planet,
};

export default agent;
