import React from 'react';
import styled from 'styled-components';
import Write from './../Board/Write';
import { theme } from './../../style/theme';

const s = {
  HBContainer: styled.div`
    width: 174px;
    height: 196px;
    border-radius: 10px;
    border: 1px solid #d7d7d7;
    background-color: #fff;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `,
  topDiv: styled.div`
    display: flex;
    justify-content: space-between;
    :last-child {
      color: gray;
      text-decoration: underline;
      cursor: pointer;
    }
  `,
  SubTitleFont: styled.div`
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  dataDiv: styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #d7d7d7;
    overflow-y: scroll;
  `,
};

const HalfBoard = ({ text }) => {
  return (
    <>
      <s.HBContainer>
        <s.topDiv>
          <s.SubTitleFont>{text}</s.SubTitleFont>
          <s.SubTitleFont>전체보기</s.SubTitleFont>
        </s.topDiv>
        <s.dataDiv>
          wer Writewer wer ew e e rwerwer wer wer werrrrnr r r registerh htttttththth thhh thth thth ththwer Writewer
          wer ew e e rwerwer wer wer werrrrnr r r registerh htttttththth thhh thth thth ththwer Writewer wer ew e e
          rwerwer wer wer werrrrnr r r registerh htttttththth thhh thth thth ththwer Writewer wer ew e e rwerwer wer wer
          werrrrnr r r registerh htttttththth thhh thth thth thth
        </s.dataDiv>
      </s.HBContainer>
    </>
  );
};

export default HalfBoard;
