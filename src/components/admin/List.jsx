import React from 'react';
import styled from 'styled-components';
import NewUserList from './TopListItem';
import { dummy } from './dummy';
import { dummy2 } from './dummy2';
import UserTitle from './ListTitle';
import ListItem from './TopListItem';
import TopListItem from './TopListItem';
import BottomListItem from './BottomListItem';

const s = {
  content: styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 70px;
  `,
  contentDiv: styled.div`
    width: 100%;
    /* background-color: #fff; */
    background-color: #f1f3f5;
    /* border: 1px solid ${({ theme }) => theme.colors.mainLine}; */
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

const List = ({ type, t1, t2 }) => {
  return (
    <s.content>
      <s.contentDiv>
        <UserTitle title={t1} count={dummy.length} />
        <s.dataDiv>
          {type === 'user'
            ? dummy.map((data, index) => (
                <TopListItem key={index} data={data} type={type} />
              ))
            : dummy2.map((data, index) => (
                <TopListItem key={index} data={data} type={type} />
              ))}
        </s.dataDiv>
      </s.contentDiv>
      <s.contentDiv>
        <UserTitle title={t2} count={1} />
        <s.dataDiv>
          <BottomListItem type={type} data={dummy[0]} />
        </s.dataDiv>
      </s.contentDiv>
    </s.content>
  );
};

export default List;
