import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isAdmin } from '../../lib/recoil/isLoginAtom';

const s = {
  ListItem: styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
  `,
  id: styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #d3d3d3;
  `,
};

const MyPageListItem = ({ text, permission, onclick }) => {
  const [isAdminCheck, setIsAdmin] = useRecoilState(isAdmin);
  return (
    <>
      {!isAdminCheck && (permission === 'user' || permission === 'all') ? (
        <s.ListItem onClick={onclick}>{text}</s.ListItem>
      ) : (
        ''
      )}
      {isAdminCheck && (permission === 'admin' || permission === 'all') ? (
        <s.ListItem onClick={onclick}>{text}</s.ListItem>
      ) : (
        ''
      )}
    </>
  );
};

export default MyPageListItem;
