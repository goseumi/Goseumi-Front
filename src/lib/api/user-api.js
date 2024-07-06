import { localAxios, userAxios } from '../../util/axios-setting';

const loginCall = localAxios();
const registCall = userAxios();

export const login = async (param, success, fail) => {
  await loginCall.post(`/login`, param).then(success).catch(fail);
};
export const regist = async (param, success, fail) => {
  await registCall.post(`/member/signup`, param).then(success).catch(fail);
};
