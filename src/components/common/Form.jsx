import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormButton from './FormButton';

const s = {
  // form
  form: styled.div`
    width: 100%;
    padding: 0 20px;
  `,
  input: styled.input`
    width: 100%;
    height: 50px;
    padding-left: 15px;
    background-color: #f0f0f0;
  `,
  lable: styled.label`
    height: 24px;
    font-weight: 700;
    display: block;
    margin: 30px 0 5px;
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
    if (type === 'regist') {
      if (
        !!data.nickname &&
        !!data.email &&
        !!data.phone &&
        data.password.length > 5 &&
        data.passwordCheck.length > 5
      ) {
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
            <s.lable for="nick">닉네임</s.lable>
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
            <s.lable for="email">이메일</s.lable>
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
            <s.lable for="tel">전화번호</s.lable>
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
            <s.lable for="pw">비밀번호</s.lable>
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
            <s.lable for="check">비밀번호 확인</s.lable>
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
