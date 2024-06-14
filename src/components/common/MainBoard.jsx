import React from 'react';
import styled from 'styled-components';
import { theme } from './../../style/theme';

const s = {
  BContainer: styled.div`
    width: 368px;
    height: 150px;
    border-radius: 10px;
    /* border: 1px solid #a7968e; */
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    /* background-color: #fff; */
    margin: 0 auto 110px;
    padding: 10px;
    display: flex;
    flex-direction: column;
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
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  dataDiv: styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  `,
  board: styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
    margin-bottom: 5px;
  `,
  dataTitle: styled.div`
    width: 25%;
    font-size: 13px;
    font-weight: bold;
    height: 20px;
    display: flex;
    align-items: center;
  `,
  data: styled.div`
    width: 75%;
    height: 20px;
    display: flex;
    align-items: center;
  `,
  Text: styled.p`
    width: 100%;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
};

const MainBoard = ({ text }) => {
  return (
    <s.BContainer>
      <s.topDiv>
        <s.SubTitleFont>{text}</s.SubTitleFont>
        <s.SubTitleFont>전체보기</s.SubTitleFont>
      </s.topDiv>
      <s.dataDiv>
        <s.board>
          <s.dataTitle>자유게시판</s.dataTitle>
          <s.data>
            <s.Text>
              등록한 게시글입니다. 등록되지않으면 표시되지 않습니다.
            </s.Text>
          </s.data>
        </s.board>
        <s.board>
          <s.dataTitle>자유게시판</s.dataTitle>
          <s.data>
            <s.Text>
              등록한 게시글입니다. 등록되지않으면 표시되지 않습니다.
            </s.Text>
          </s.data>
        </s.board>
      </s.dataDiv>
    </s.BContainer>
  );
};

export default MainBoard;
