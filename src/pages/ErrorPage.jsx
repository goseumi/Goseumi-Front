import React from 'react';
import styled from 'styled-components';
import Form from '../components/common/Form';
import FormHeader from '../components/common/FormHeader';
import FormButton from '../components/common/FormButton';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  content: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  title: styled.p`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  `,
  text: styled.p`
    font-size: 14px;
  `,
  btn: styled.button`
    width: 100%;
    height: 50px;
    background-color: #a7968e;
    border-radius: 10px;
    margin: 30px 0;
    color: white;
  `,
};

const ErrorPage = () => {
  return (
    <>
      <s.Frame>
        <s.content>
          <s.title>다시 확인해주세요!</s.title>
          <s.text>
            해당 경로는 잘못된 접근이거나 존재하지 않는 페이지 입니다.
          </s.text>
          <s.btn>홈 화면으로</s.btn>
        </s.content>
      </s.Frame>
    </>
  );
};

export default ErrorPage;
