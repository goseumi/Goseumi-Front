import React from 'react';
import styled from 'styled-components';
import { ReactComponent as heart } from '../../assets/img/heart.svg';
import { ReactComponent as comment } from '../../assets/img/comment.svg';

const ListContainer = styled.div`
  width: 95%;
  height: 80px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 0 10px 0 10px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #d3d3d3;
  display: flex;
  border-radius: 5px;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 5px;
  margin-top: 5px;
`;
const Title = styled.div`
  display: flex;
  font-weight: 600;
  padding: 5px;
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  padding-left: 5px;
  margin-top: 2px;
  font-size: 16px;
`;

const Count = styled.div`
  font-size: 14px;
  margin-left: 2px;
  margin-right: 10px;
`;

const TimeStamp = styled.div`
  font-size: 14px;
  margin-left: 2px;
  margin-right: 10px;
  color: #757575;
`;

function Icons({ icon: Icon }) {
  return <Icon width={15} height={15} fill="none" />;
}

function List({ title, content, like, reply, date }) {
  return (
    <>
      <ListContainer>
        <ContentsContainer>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <IconContainer>
            <Icons icon={heart} />
            <Count>{like}</Count>
            <Icons icon={comment} />
            <Count>{reply}</Count>
            <TimeStamp>{date}</TimeStamp>
          </IconContainer>
        </ContentsContainer>
        <Image />
      </ListContainer>
    </>
  );
}

export default List;
