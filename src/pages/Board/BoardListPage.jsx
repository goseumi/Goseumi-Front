import React from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/common/FormHeader';
import List from '../../components/Board/List';
import { ReactComponent as write } from '../../assets/img/writeBtn.svg';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
  padding-top: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Notice = styled.div`
  height: 60px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ShowList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

const WriteBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

function Icons({ icon: Icon }) {
  return <Icon width={20} height={20} fill="none" />;
}

function BoardListPage() {
  return (
    <>
      <FormHeader text="자유게시판" />
      <ListContainer>
        <Notice>공지사항입니다...</Notice>
        <ShowList>
          <Link to="/boardDetail">
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
            <List title={'제목'} content={'내용'} date={'23:29'} like={'7'} reply={'6'} />
          </Link>
          <Link to="/boardInput">
            <WriteBtn>
              <Icons icon={write} />
            </WriteBtn>
          </Link>
        </ShowList>
      </ListContainer>
    </>
  );
}

export default BoardListPage;
