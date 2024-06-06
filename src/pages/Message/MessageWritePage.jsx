import React from 'react';
import styled from 'styled-components';
import Form from '../../components/common/Form';
import Mheader from '../../components/message/Mheader';
import MListBox from '../../components/message/MListBox';
import MRead from '../../components/message/MRead';
import MWrite from '../../components/message/MWrite';
import NavBar from '../../components/common/NavBar';

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
  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <>
      <s.Frame>
        <Mheader text="쪽지보내기" />
        <MWrite />
      </s.Frame>
    </>
  );
};

export default MessageWritePage;
