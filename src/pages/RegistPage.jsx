import React from 'react';
import styled from 'styled-components';
import preImg from '../assets/img/Group 5.png';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
  `,
  // header
  Header: styled.header`
    max-width: 428px;
    height: 60px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  title: styled.div`
    width: 70px;
    height: 24px;
    margin: 0 15%;
  `,

  pre: styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `,
  preImg: styled.img``,
  pre2: styled.div`
    width: 24px;
    height: 24px;
  `,
  //

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

const RegistPage = () => {
  return (
    <>
      <s.Frame>
        <s.Header>
          <s.pre>
            <s.preImg src={preImg}></s.preImg>
          </s.pre>
          <s.title>회원가입</s.title>
          <s.pre2 />
        </s.Header>
        <s.form>
          <s.lable for="nick">닉네임</s.lable>
          <s.input
            id="nick"
            name="nick"
            type="text"
            placeholder="닉네임을 입력해주세요"
          />

          <s.lable for="email">이메일</s.lable>
          <s.input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
          />

          <s.lable for="tel">전화번호</s.lable>
          <s.input
            id="tel"
            name="tel"
            type="text"
            placeholder="전화번호를 입력해주세요"
          />

          <s.lable for="pw">비밀번호</s.lable>
          <s.input
            id="pw"
            name="pw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />

          <s.lable for="check">비밀번호 확인</s.lable>
          <s.input
            id="check"
            name="check"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
          />
          <s.join>회원가입</s.join>
        </s.form>
      </s.Frame>
    </>
  );
};

export default RegistPage;
