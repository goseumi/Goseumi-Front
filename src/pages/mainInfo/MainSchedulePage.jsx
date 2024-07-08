import React from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/common/FormHeader';

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

const MainSchedulePage = () => {
  return (
    <>
      <s.Frame>
        <FormHeader text="학 사 일 정" />
      </s.Frame>
    </>
  );
};

export default MainSchedulePage;
