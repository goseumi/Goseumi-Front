import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormButton from './FormButton';
import { theme } from './../../style/theme';

const s = {
  form: styled.div`
    width: 100%;
    padding: 60px 20px 0;
  `,
  input: styled.input`
    width: 100%;
    height: 50px;
    padding: 15px;
    font-size: 15px;
    background-color: #f0f0f0;
  `,
  lable: styled.label`
    height: 24px;
    font-weight: bold;
    display: block;
    font-size: 20px;
    margin: 20px 0 5px;
  `,
  warning: styled.span`
    color: ${({ theme }) => theme.colors.negative};
    font-size: 10px;
  `,
};

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    phone: '',
    passwordCheck: '',
    nickname: '',
  });
  const [nick, setNick] = useState('한글,영문,숫자 포함 2~12자이어야 합니다.');
  const [pw, setPw] = useState('영문,숫자,특수문자 포함 6~16자이어야 합니다.');
  const [pw2, setPw2] = useState('비밀번호가 일치하지 않습니다.');
  const [tel, setTel] = useState('8자 이상 11자 이하의 숫자만 입력해주세요.');
  const [email, setEmail] = useState('이메일은 비어있을 수 없습니다.');
  const [OnOff, setOnOff] = useState(false);

  useEffect(() => {
    btnOnOff();
  }, [data]);

  const InputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const btnOnOff = () => {
    const nicknamePattern = /^[a-zA-Z0-9가-힣]{2,12}$/;
    const phonePattern = /^\d{8,11}$/;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()\-_=+\\|[\]{};:'",.<>?/]).{6,16}$/;
    const emailPattern = /^[^ㄱ-ㅎㅏ-ㅣ가-힣]+@[a-zA-Z0-9.]+\.[A-Za-z]+$/;

    if (type === 'regist') {
      let flag = true;
      // if (
      //   !!data.nickname &&
      //   !!data.email &&
      //   !!data.phone &&
      //   data.password.length > 5 &&
      //   data.passwordCheck.length > 5
      // ) {
      //   setOnOff(true);
      // } else {
      //   setOnOff(false);
      // }
      if (nicknamePattern.test(data.nickname)) {
        //닉네임 검사
        setNick('');
      } else {
        setNick('한글,영문,숫자 포함 2~12자이어야 합니다.');
        flag = false;
      }
      if (phonePattern.test(data.phone)) {
        //번호 검사
        setTel('');
      } else {
        setTel('8자 이상 11자 이하의 숫자만 입력해주세요.');
        flag = false;
      }
      if (passwordPattern.test(data.password)) {
        //비밀번호 검사
        setPw('');
      } else {
        setPw('영문,숫자,특수문자 포함 6~16자이어야 합니다.');
        flag = false;
      }
      if (data.password === data.passwordCheck) {
        //비밀번호 체크 검사
        setPw2('');
      } else {
        setPw2('비밀번호가 일치하지 않습니다.');
        flag = false;
      }
      if (emailPattern.test(data.email)) {
        //이메일검사
        setEmail('');
      } else {
        setEmail('이메일은 비어있을 수 없습니다.');
        flag = false;
      }
      if (flag) {
        setOnOff(true);
      } else {
        setOnOff(false);
      }
    }
  };

  const btnSumit = async (e) => {
    if (OnOff) {
      onSubmit(data);
    }
  };

  return (
    <>
      <s.form>
        {['regist'].includes(type) && (
          <>
            <s.lable for="nick">
              닉네임 <s.warning>{nick}</s.warning>
            </s.lable>
            <s.input
              id="nick"
              name="nickname"
              value={data.nickname}
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={InputChange}
            />
          </>
        )}

        {['regist'].includes(type) && (
          <>
            <s.lable for="email">
              이메일 <s.warning>{email}</s.warning>
            </s.lable>
            <s.input
              id="email"
              name="email"
              value={data.email}
              type="email"
              placeholder="이메일을 입력해주세요"
              onChange={InputChange}
            />
          </>
        )}

        {['regist'].includes(type) && (
          <>
            <s.lable for="tel">
              전화번호 <s.warning>{tel}</s.warning>
            </s.lable>
            <s.input
              id="tel"
              name="phone"
              value={data.phone}
              type="text"
              placeholder="전화번호를 입력해주세요"
              onChange={InputChange}
            />
          </>
        )}

        {['regist'].includes(type) && (
          <>
            <s.lable for="pw">
              비밀번호 <s.warning>{pw}</s.warning>
            </s.lable>
            <s.input
              id="pw"
              name="password"
              value={data.password}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={InputChange}
            />
          </>
        )}

        {['regist'].includes(type) && (
          <>
            <s.lable for="check">
              비밀번호 확인 <s.warning>{pw2}</s.warning>
            </s.lable>
            <s.input
              id="check"
              name="passwordCheck"
              value={data.passwordCheck}
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              onChange={InputChange}
            />
          </>
        )}
        <FormButton type="regist" active={OnOff} onClick={btnSumit} />
      </s.form>
    </>
  );
};

export default Form;
