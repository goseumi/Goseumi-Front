import axios from 'axios';

export const localAxios = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
  });

  instance.defaults.headers.common['Authorization'] = '';
  instance.defaults.headers.post['Content-Type'] = 'application/json';
  instance.defaults.headers.patch['Content-Type'] = 'application/json';
  return instance;
};

export const userAxios = () => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
    withCredentials: true,
  });

  instance.defaults.headers.common['Authorization'] = '';
  instance.defaults.headers.post['Content-Type'] = 'application/json';
  instance.defaults.headers.patch['Content-Type'] = 'application/json';
  return instance;
};

export const adminAxios = () => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/api/admin`,
    withCredentials: true,
  });

  instance.defaults.headers.common['Authorization'] = '';
  instance.defaults.headers.post['Content-Type'] = 'application/json';
  instance.defaults.headers.patch['Content-Type'] = 'application/json';
  return instance;
};
