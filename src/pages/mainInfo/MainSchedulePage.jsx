import React from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/common/FormHeader';
import Schedule from '../../components/MainInfo/Schedule';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  SchedyleArea: styled.div`
    width: 90%;
    padding: 80px 0 0 0;
    margin: 0 auto;
    border: 1px solid red;
  `,
};

const MainSchedulePage = () => {
  return (
    <>
      <s.Frame>
        <FormHeader text="학 사 일 정" />
        <s.SchedyleArea>
          <Schedule />
        </s.SchedyleArea>
      </s.Frame>
    </>
  );
};

export default MainSchedulePage;
