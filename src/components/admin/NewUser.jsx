import React from 'react';
import styled from 'styled-components';
import NewUserList from './NewUserListItem';
import { dummy } from './dummy';
import UserTitle from './UserTitle';

const s = {
  content: styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 70px;
  `,
  contentDiv: styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 260px;
    padding: 10px;
    margin-bottom: 10px;
  `,
  dataDiv: styled.div`
    width: 100%;
    height: 220px;
    overflow-y: scroll;
  `,
};

const NewUser = () => {
  return (
    <s.content>
      <s.contentDiv>
        <UserTitle title="가입 대기중인 회원" count={dummy.length} />
        <s.dataDiv>
          {dummy.map((data, index) => (
            <NewUserList key={index} data={data} type="new" />
          ))}
        </s.dataDiv>
      </s.contentDiv>
      <s.contentDiv>
        <UserTitle title="기존 회원" count={1} />
        <s.dataDiv>
          <NewUserList type="existing" data={dummy[0]} />
        </s.dataDiv>
      </s.contentDiv>
    </s.content>
  );
};

export default NewUser;
