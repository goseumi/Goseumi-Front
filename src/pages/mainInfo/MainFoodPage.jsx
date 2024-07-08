import React, { useState } from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/common/FormHeader';
import { theme } from './../../style/theme';
import { Food } from '../../util/SchoolFood';
import useFoodReplace from '../../hook/useFoodReplace';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  foodDataArea: styled.div`
    width: 90%;
    padding: 60px 0 0 0;
    margin: 0 auto;
    border: 1px solid red;
  `,
  dayBtnArea: styled.div`
    width: 100%;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
  `,
  dayBtn: styled.button`
    width: 45px;
    height: 25px;
    border-radius: 15px;
    color: #000;
    font-size: 13px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.Gray};
  `,
  foodArea: styled.div`
    width: 90%;
    height: 150px;
    border: 1px solid #d7d7d7;
    background-color: #fff;
    margin: 15px auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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

const MainFoodPage = () => {
  let text = Food[1].DDISH_NM; //'고르곤졸라피자 (1.2.5.6.10.12.13.15.16)<br/>도토리묵채국* (5.6.7.9.13.18)<br/>돈육주꾸미덮밥 (5.6.10.13)<br/>배추김치 (9)<br/>애플키위주스 (13)<br/>오렌지야채샐러드 (5.6.11)'
  // <br/> 태그를 개행 문자로 변환하여 줄바꿈이 이루어지도록 함
  text = text.replace(/<br\s*\/?>/g, '\n');

  // 괄호와 괄호 안의 내용을 제거
  text = text.replace(/\([^)]*\)/g, '');

  // * 문자 제거
  text = text.replace(/[*@]/g, '');
  return (
    <>
      <s.Frame>
        <FormHeader text="오늘의 급식" />
        <s.foodDataArea>
          <s.dayBtnArea>
            <s.dayBtn>일</s.dayBtn>
            <s.dayBtn>월</s.dayBtn>
            <s.dayBtn>화</s.dayBtn>
            <s.dayBtn>수</s.dayBtn>
            <s.dayBtn>목</s.dayBtn>
            <s.dayBtn>금</s.dayBtn>
            <s.dayBtn>토</s.dayBtn>
          </s.dayBtnArea>
          <s.foodArea>
            <s.foodTitle>아침</s.foodTitle>
            <s.foodText>{text}</s.foodText>
          </s.foodArea>
          <s.foodArea>
            <s.foodTitle>점심</s.foodTitle>
            <s.foodText>{text}</s.foodText>
          </s.foodArea>
          <s.foodArea>
            <s.foodTitle>저녁</s.foodTitle>
            <s.foodText>{text}</s.foodText>
          </s.foodArea>
        </s.foodDataArea>
      </s.Frame>
    </>
  );
};

export default MainFoodPage;
