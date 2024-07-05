import React from 'react';
import styled from 'styled-components';
import MList from './MList';
import { Mdata } from './Mdata';
import { Message } from './Message';
import { useLocation, useSearchParams } from 'react-router-dom';

const s = {
  content: styled.div`
    width: 90%;
    padding-top: 60px;
    margin: 10px auto 100px;
    flex: 1;
  `,
  message: styled.div`
    border: 1px solid #d7d7d7;
    margin: 5px auto;
    border-radius: 5px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `,
  messageInfo: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  messageText: styled.div`
    font-size: 12px;
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
  const [searchParam, setSearchParam] = useSearchParams();
  const title = searchParam.get('title');
  const page = searchParam.get('page');

  console.log(title + ' ' + page);
  return (
    <s.content>
      {Message.map((data, index) => (
        <s.message key={index}>
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
