import React from 'react';
import styled from 'styled-components';
import MList from './MList';
import { Mdata } from './Mdata';
import { Message } from './Message';

const s = {
  content: styled.div`
    width: 90%;
    border: 3px solid red;
    margin: 10px auto 100px;
    flex: 1;
  `,
  message: styled.div`
    border: 1px solid green;
    border-bottom: 2px solid gray;
    padding: 10px 0;
  `,
  messageInfo: styled.div`
    width: 100%;
    display: flex;
    border: 1px solid orange;
    justify-content: space-between;
  `,
  messageText: styled.div`
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

const MRead = () => {
  return (
    <s.content>
      {Message.map((data, index) => (
        <s.message>
          <s.messageInfo>
            <s.messageWriter>{data.type}</s.messageWriter>
            <s.messageDate>{data.date}</s.messageDate>
          </s.messageInfo>
          <s.messageText>{data.text}</s.messageText>
        </s.message>
      ))}
    </s.content>
  );
};

export default MRead;
