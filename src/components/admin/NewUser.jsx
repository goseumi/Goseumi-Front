import React from 'react';
import styled from 'styled-components';
import NewUserList from './NewUserListItem';
import { dummy } from './dummy';

const s = {
  content: styled.section`
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    padding-top: 70px;
  `,
  contentDiv: styled.div`
    width: 100%;
    border: 1px solid #a6a6a6;
    border-radius: 5px;
    height: 260px;
    padding: 10px;
    margin-bottom: 10px;
    overflow-y: scroll;
  `,
  titleDiv: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  `,
  title: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
  count: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
};

const NewUser = () => {
  return (
    <s.content>
      <s.titleDiv>
        <s.title>가입 대기중인 회원</s.title>
        <s.count>{dummy.length} 명</s.count>
      </s.titleDiv>
      <s.contentDiv>
        {dummy.map((data, index) => (
          <NewUserList key={index} data={data} type="new" />
        ))}

        {/* <NewUserList name="wlsdud6221" />
        <NewUserList name="wlsdud6221" /> */}
      </s.contentDiv>
      <s.titleDiv>
        <s.title>기존 회원</s.title>
        <s.count>0 명</s.count>
      </s.titleDiv>
      <s.contentDiv>
        <NewUserList type="existing" data={dummy[0]} />
      </s.contentDiv>
    </s.content>
  );
};

export default NewUser;
