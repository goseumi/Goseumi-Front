import { localAxios } from '../../util/axios-setting';

const local = localAxios();

export const addCategory = async (param, success, fail) => {
  await local
    .post(`/admin/board-category/new`, param)
    .then(success)
    .catch(fail);
};
export const updateCategory = async (param, success, fail) => {
  await local
    .patch(`/admin/board-category/rename/{id}`, param)
    .then(success)
    .catch(fail);
};
export const delCategory = async (param, success, fail) => {
  await local
    .delete(`/admin/board-category/remove/{id}`, param)
    .then(success)
    .catch(fail);
};
export const recycleCategory = async (param, success, fail) => {
  await local
    .patch(`/admin/board-category/active/{id}`, param)
    .then(success)
    .catch(fail);
};
