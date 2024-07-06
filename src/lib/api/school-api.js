import { userAxios, adminAxios } from '../../util/axios-setting';

//작업중
const userCall = userAxios();
const adminCall = adminAxios();

export const getSchoolList = async (param, success, fail) => {
  await userCall
    .get(`/school?page={num}&id={id}&name={name}&addressNumber={num}&address={address}`, param)
    .then(success)
    .catch(fail);
};
export const patchSchool = async (param, success, fail) => {
  await adminCall.patch(`/school/info`, param).then(success).catch(fail);
};
export const postSchool = async (param, success, fail) => {
  await adminCall.post(`/school`, param).then(success).catch(fail);
};
