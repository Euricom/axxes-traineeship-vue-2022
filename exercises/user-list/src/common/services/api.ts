import axios from 'axios';

const root = axios.create({
  baseURL: 'https://euricom-test-api.herokuapp.com/api',
});

export default root;
