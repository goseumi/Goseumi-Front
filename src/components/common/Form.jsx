import React from 'react';
import styled from 'styled-components';

const s = {
  // form
  form: styled.form`
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

  join: styled.button`
    display: block;
    width: 100%;
    height: 50px;
    color: white;
    background-color: #a7968e;
    border-radius: 8px;
    margin: 30px 0 20px;
  `,
};

const Form = ({ type, onSubmit }) => {
  return (
    <>
      <s.form>
        {['regist'].includes(type) && (
          <>
            <s.lable for="nick">닉네임</s.lable>
            <s.input
              id="nick"
              name="nick"
              type="text"
              placeholder="닉네임을 입력해주세요"
            />
          </>
        )}

        {['regist'].includes(type) && (
          <>
            <s.lable for="email">이메일</s.lable>
            <s.input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요"
            />
          </>
        )}

        {['regist'].includes(type) && (
          <>
            <s.lable for="tel">전화번호</s.lable>
            <s.input
              id="tel"
              name="tel"
              type="text"
              placeholder="전화번호를 입력해주세요"
            />
          </>
        )}

        {['regist'].includes(type) && (
          <>
            <s.lable for="pw">비밀번호</s.lable>
            <s.input
              id="pw"
              name="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </>
        )}

        {['regist'].includes(type) && (
          <>
            <s.lable for="check">비밀번호 확인</s.lable>
            <s.input
              id="check"
              name="check"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
            />
          </>
        )}

        <s.join>
          {type === 'regist'
            ? '회원가입'
            : type === 'login'
            ? '로그인'
            : type === 'find'
            ? '임시 비밀번호 발송'
            : type === 'PwChange'
            ? '비밀번호 변경'
            : ''}
        </s.join>
      </s.form>
    </>
  );
};

export default Form;
