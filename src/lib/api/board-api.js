import { localAxios } from '../../util/axios-setting';

//작업중
const local = localAxios();

export const addBoard = async (param, success, fail) => {
  await local.post(`/boards`, param).then(success).catch(fail);
};
export const delBoard = async (param, success, fail) => {
  await local.delete(`/boards`, param).then(success).catch(fail);
};
export const updateBoard = async (param, success, fail) => {
  await local.put(`/boards`, param).then(success).catch(fail);
};
export const readBoard = async (param, success, fail) => {
  await local.get(`/boards`, param).then(success).catch(fail);
};
