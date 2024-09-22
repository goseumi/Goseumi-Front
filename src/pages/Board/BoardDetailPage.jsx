import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as heart } from '../../assets/img/heart.svg';
import { ReactComponent as comment } from '../../assets/img/comment.svg';
import FormHeader from '../../components/common/FormHeader';

const DetailContainer = styled.div`
  margin-top: 60px;
`;

const Title = styled.div`
  padding: 20px;
  font-size: 22px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid #d3d3d3;
`;

const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const Name = styled.div`
  font-size: 16px;
`;

const Time = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #757575;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 5px;
`;

const Count = styled.div`
  font-size: 14px;
  margin-left: 2px;
  margin-right: 10px;
  color: #757575;
`;

const Context = styled.div`
  border: 1px solid red;
  margin-top: 30px;
  padding-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 16px;
  border-bottom: 1px solid #d3d3d3;
`;

function Icons({ icon: Icon }) {
  return <Icon width={15} height={15} fill="none" />;
}

function BoardDetailPage() {
  return (
    <>
      <FormHeader text="자유게시판" type="board" />
      <DetailContainer>
        <Title>제목입니다 비가 그만 오면 좋겠어요</Title>
        <InfoContainer>
          <Profile />
          <Info>
            <Name>익명</Name>
            <Time>07/02 00:00</Time>
          </Info>
          <IconContainer>
            <Icons icon={heart} />
            <Count>0</Count>
            <Icons icon={comment} />
            <Count>0</Count>
          </IconContainer>
        </InfoContainer>
        <Context>내용.....</Context>
      </DetailContainer>
    </>
  );
}

export default BoardDetailPage;
