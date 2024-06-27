import React from 'react';
import styled from 'styled-components';
import FormHeader from './../../components/common/FormHeader';
import MyPageList from './../../components/myPage/MyPageList';
import { theme } from './../../style/theme';
import { useRecoilValue } from 'recoil';
import { isAdmin } from '../../lib/recoil/isLoginAtom';
import { Outlet } from 'react-router-dom';

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

const MyPage = () => {
  const isAdminCheck = useRecoilValue(isAdmin);

  return (
    <>
      <s.Frame>
        <FormHeader
          text={isAdminCheck ? `관리자 메뉴` : '마이페이지'}
          color="white"
        />
        <Outlet />
        {/* <MyPageList /> */}
      </s.Frame>
    </>
  );
};

export default MyPage;
