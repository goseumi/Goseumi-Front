import React from 'react';
import styled from 'styled-components';
import MList from './MList';
import { Mdata } from './Mdata';
import { Message } from './Message';

const s = {
  content: styled.div`
    width: 90%;
    border: 3px solid red;
    margin: 10px auto;
    padding-top: 60px;
    flex: 1;
  `,
  sendText: styled.textarea`
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    font-size: 15px;
    outline: none;
    resize: none;
  `,
};

const MWrite = () => {
  return (
    <s.content>
      <s.sendText placeholder="내용을 입력하세요." />
    </s.content>
  );
};

export default MWrite;
