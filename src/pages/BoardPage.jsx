import React from 'react';
import styled from 'styled-components';
import TabHeader from '../components/common/TabHeader';
import NavBar from '../components/common/NavBar';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 90%;
  height: ${(props) => props.height || 'auto'};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.mainLine};
  margin: 30px auto;
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const List = styled.div`
  width: 90%;
  height: 40px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  margin: auto;
`;

function BoardPage() {
  return (
    <>
      <TabHeader text="게시판"></TabHeader>
      <Container height="180px">
        <List>내가 쓴 글</List>
        <List>댓글 단 글</List>
        <List>스크랩</List>
      </Container>
      <Container height="300px" marginBottom="100px">
        <Link to="/boardPage">
          <List>자유게시판</List>
        </Link>
        <List>자유게시판</List>
        <List>자유게시판</List>
        <List>자유게시판</List>
      </Container>
      <NavBar />
    </>
  );
}

export default BoardPage;
