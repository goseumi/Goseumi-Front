import { userAxios, adminAxios } from '../../util/axios-setting';

//작업중
const userCall = userAxios();
const adminCall = adminAxios();

export const postSchoolAuth = async (param, success, fail) => {
  await userCall.post(`/schoolAuth`, param).then(success).catch(fail);
};
export const patchSchoolAccess = async (param, success, fail) => {
  await adminCall.patch(`/member/schoolAuth/access`, param).then(success).catch(fail);
};
export const patchSchoolReject = async (param, success, fail) => {
  await adminCall.patch(`/member/schoolAuth/reject`, param).then(success).catch(fail);
};
