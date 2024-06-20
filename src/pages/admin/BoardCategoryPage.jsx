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

const BoardCategoryPage = () => {
  return (
    <>
      <s.Frame>
        {/* 여기다가 이제 카테고리 페이지를 만들건데 유저 관리 페이지처럼 할거임
        위에는 전체 카테고리영역, 아래는 삭제된 카테고리 목록 등등 */}
        <FormHeader text="카테고리 관리" />
        <NewUser />
      </s.Frame>
    </>
  );
};

export default BoardCategoryPage;
