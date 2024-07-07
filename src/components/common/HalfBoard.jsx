import React from 'react';
import styled from 'styled-components';
import Write from './../Board/Write';
import { theme } from './../../style/theme';
import { Food } from '../../util/SchoolFood';

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
  dataArea: styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #d7d7d7;
    overflow-y: scroll;
  `,
  foodData: styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
  `,
  foodTitle: styled.p`
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.mainLine};
    margin-bottom: 5px;
  `,
  foodText: styled.p`
    white-space: pre-line;
    font-size: 12px;
    line-height: 16px;
    padding-left: 10px;
    border-left: 5px solid ${({ theme }) => theme.colors.main};
  `,
};

const HalfBoard = ({ type, title }) => {
  // 커스텀훅으로 빼기
  let text = Food[1].DDISH_NM; //'고르곤졸라피자 (1.2.5.6.10.12.13.15.16)<br/>도토리묵채국* (5.6.7.9.13.18)<br/>돈육주꾸미덮밥 (5.6.10.13)<br/>배추김치 (9)<br/>애플키위주스 (13)<br/>오렌지야채샐러드 (5.6.11)'
  // <br/> 태그를 개행 문자로 변환하여 줄바꿈이 이루어지도록 함
  text = text.replace(/<br\s*\/?>/g, '\n');

  // 괄호와 괄호 안의 내용을 제거
  text = text.replace(/\([^)]*\)/g, '');

  // * 문자 제거
  text = text.replace(/[*@]/g, '');
  return (
    <>
      <s.HBContainer>
        <s.topDiv>
          <s.SubTitleFont>{title}</s.SubTitleFont>
          <s.SubTitleFont>전체보기</s.SubTitleFont>
        </s.topDiv>
        {type === 'food' ? (
          <s.dataArea>
            <s.foodData>
              <s.foodTitle>아침</s.foodTitle>
              <s.foodText>{text.trim()}</s.foodText>
            </s.foodData>
            <s.foodData>
              <s.foodTitle>점심</s.foodTitle>
              <s.foodText>{text.trim()}</s.foodText>
            </s.foodData>
            <s.foodData>
              <s.foodTitle>저녁</s.foodTitle>
              <s.foodText>{text.trim()}</s.foodText>
            </s.foodData>
          </s.dataArea>
        ) : (
          <s.dataArea></s.dataArea>
        )}
      </s.HBContainer>
    </>
  );
};

export default HalfBoard;
