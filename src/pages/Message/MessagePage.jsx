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

const MessagePage = () => {
  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <>
      <s.Frame>
        <Mheader text="쪽 지" />
        {/* <MListBox /> */}
        <MRead />
        {/* 위의 컴포넌트를 중첩라우팅 생각 */}
        <NavBar />
      </s.Frame>
    </>
  );
};

export default MessagePage;
