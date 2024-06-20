import React from 'react';
import styled from 'styled-components';
import FormHeader from './../../components/common/FormHeader';
import MyPageList from './../../components/myPage/MyPageList';
import NewUser from '../../components/admin/NewUser';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    /* background-color: #f1f3f5; */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

const UserManagePage = () => {
  return (
    <>
      <s.Frame>
        <FormHeader text="회원 관리" />
        <NewUser />
      </s.Frame>
    </>
  );
};

export default UserManagePage;
