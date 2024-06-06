import React from 'react';
import styled from 'styled-components';

const s = {
  content: styled.div`
    border: 2px solid blue;
    width: 100%;
    height: 50px;
    margin: 5px auto;
  `,
  messageInfo: styled.div`
    width: 100%;
    display: flex;
    border: 1px solid orange;
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
  return (
    <s.content>
      <s.messageInfo>
        <s.messageWriter>{data.writer}</s.messageWriter>
        <s.messageDate>{data.date}</s.messageDate>
      </s.messageInfo>
      <s.messageTitle>{data.title}</s.messageTitle>
    </s.content>
  );
};

export default MList;
