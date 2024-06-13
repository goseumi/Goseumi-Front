import React from 'react';
import styled from 'styled-components';
import MWrite from '../../components/message/MWrite';
import FormHeader from '../../components/common/FormHeader';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    flex-direction: column;
  `,
};

const MessageWritePage = () => {
  return (
    <>
      <s.Frame>
        <FormHeader text="쪽지보내기" type="send" />
        <MWrite />
      </s.Frame>
    </>
  );
};

export default MessageWritePage;
