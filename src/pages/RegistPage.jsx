import React from 'react';
import styled from 'styled-components';
import Form from '../components/common/Form';
import FormHeader from '../components/common/FormHeader';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
  `,
};

const RegistPage = () => {
  const handleRegister = () => {};

  const Info = {
    email: '',
    password: '',
    phone: '',
    passwordCheck: '',
    nickname: '',
  };

  return (
    <>
      <s.Frame>
        <FormHeader />
        <Form type="regist" onSubmit={handleRegister} />
      </s.Frame>
    </>
  );
};

export default RegistPage;
