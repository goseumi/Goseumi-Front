import { userAxios } from '../../util/axios-setting';

//작업중
const userCall = userAxios();

export const addBoard = async (param, success, fail) => {
  await userCall.post(`/boards`, param).then(success).catch(fail);
};
export const delBoard = async (param, success, fail) => {
  await userCall.delete(`/boards`, param).then(success).catch(fail);
};
export const updateBoard = async (param, success, fail) => {
  await userCall.put(`/boards`, param).then(success).catch(fail);
};
export const readBoard = async (param, success, fail) => {
  await userCall.get(`/boards`, param).then(success).catch(fail);
};
