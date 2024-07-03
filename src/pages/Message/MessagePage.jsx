import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
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

const MessagePage = () => {
  const pathName = useLocation().pathname;
  return (
    <>
      <s.Frame>
        {pathName === '/dm' ? <FormHeader text="쪽 지" /> : <FormHeader text="쪽 지" type="dm" />}
        <Outlet />
        {/* <MListBox /> */}
        {/* <MRead /> */}
        {/* 위의 컴포넌트를 중첩라우팅 생각 */}
        {pathName === '/dm/send' ? '' : <NavBar />}
      </s.Frame>
    </>
  );
};

export default MessagePage;
