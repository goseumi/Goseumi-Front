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
  `,
};

const ErrorPage = () => {
  return (
    <>
      <s.Frame>
        에러페이지
        <FormButton />
      </s.Frame>
    </>
  );
};

export default ErrorPage;
