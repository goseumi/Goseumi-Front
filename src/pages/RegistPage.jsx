import React from 'react';
import styled from 'styled-components';
import Form from '../components/common/Form';
import FormHeader from '../components/common/FormHeader';
import { regist } from '../lib/api/user-api';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

const RegistPage = () => {
  const handleRegister = (data) => {
    regist(
      data,
      (resp) => {
        console.log(resp.data);
      },
      (error) => {
        console.log('회원가입 실패');
        console.log(error);
      },
    );
    console.log(data);
  };

  return (
    <>
      <s.Frame>
        <FormHeader text="회 원 가 입" />
        <Form type="regist" onSubmit={handleRegister} />
      </s.Frame>
    </>
  );
};

export default RegistPage;
