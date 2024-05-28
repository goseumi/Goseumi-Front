import { localAxios, registAxios } from '../../util/axios-setting';

const local = localAxios();
const join = registAxios();

export const login = async (param, success, fail) => {
  await local.post(`/member/signup`, param).then(success).catch(fail);
};
export const regist = async (param, success, fail) => {
  await join.post(`/login`, param).then(success).catch(fail);
};
