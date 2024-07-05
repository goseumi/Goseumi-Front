import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from './../../style/theme';

const s = {
  content: styled.div`
    border: 1px solid #d7d7d7;
    width: 100%;
    height: 50px;
    margin: 5px auto;
    cursor: pointer;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `,
  messageInfo: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  messageTitle: styled.div`
    font-size: 15px;
    line-height: 25px;
  `,
  messageWriter: styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
  `,
  messageDate: styled.div`
    color: #a6a6a6;
    font-size: 12px;
    line-height: 20px;
  `,
};

const MList = ({ data }) => {
  const navigate = useNavigate();

  const moveRead = (data, page) => {
    navigate(`read?title=${data}&page=${page}`); //쿼리스트링
  };
  return (
    <s.content
      onClick={() => {
        moveRead(data.writer, '1');
      }}
    >
      <s.messageInfo>
        <s.messageWriter>{data.writer}</s.messageWriter>
        <s.messageDate>{data.date}</s.messageDate>
      </s.messageInfo>
      <s.messageTitle>{data.title}</s.messageTitle>
    </s.content>
  );
};

export default MList;
