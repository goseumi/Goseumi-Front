import React from 'react';
import styled from 'styled-components';
import Form from '../components/common/Form';
import FormHeader from '../components/common/FormHeader';
import MyPageList from '../components/myPage/MyPageList';

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
  return (
    <>
      <s.Frame>
        <FormHeader text="마이페이지" />
        <MyPageList />
      </s.Frame>
    </>
  );
};

export default MyPage;
