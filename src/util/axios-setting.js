import axios from 'axios';

export const localAxios = () => {
  const instance = axios.create({
    baseURL: '',
  });

  instance.defaults.headers.common['Authorization'] = '';
  instance.defaults.headers.post['Content-Type'] = 'application/json';
  instance.defaults.headers.patch['Content-Type'] = 'application/json';
  return instance;
};

export const registAxios = () => {
  //api단이 빠짐
  const instance = axios.create({
    baseURL: '',
  });

  instance.defaults.headers.common['Authorization'] = '';
  instance.defaults.headers.post['Content-Type'] = 'application/json';
  instance.defaults.headers.patch['Content-Type'] = 'application/json';
  return instance;
};
