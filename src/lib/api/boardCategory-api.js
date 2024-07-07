import { adminAxios } from '../../util/axios-setting';

const adminCall = adminAxios();

export const postCategory = async (param, success, fail) => {
  await adminCall.post(`/board-category/new`, param).then(success).catch(fail);
};
export const patchCategory = async (param, success, fail) => {
  await adminCall.patch(`/board-category/rename/{id}`, param).then(success).catch(fail);
};
export const deleteCategory = async (param, success, fail) => {
  await adminCall.delete(`/board-category/remove/{id}`, param).then(success).catch(fail);
};
export const patchRecycleCategory = async (param, success, fail) => {
  await adminCall.patch(`/board-category/active/{id}`, param).then(success).catch(fail);
};
export const getCategoryList = async (param, success, fail) => {
  await adminCall.get(`/board-category?page={num}`, param).then(success).catch(fail);
};
