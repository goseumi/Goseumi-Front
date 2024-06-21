import React from 'react';
import styled from 'styled-components';
import FormHeader from './../../components/common/FormHeader';
import MyPageList from './../../components/myPage/MyPageList';
import NewUser from '../../components/admin/List';
import List from '../../components/admin/List';

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

const BoardCategoryPage = () => {
  return (
    <>
      <s.Frame>
        <FormHeader text="카테고리 관리" />
        <List type="category" t1="카테고리 목록" t2="제외된 카테고리" />
      </s.Frame>
    </>
  );
};

export default BoardCategoryPage;
