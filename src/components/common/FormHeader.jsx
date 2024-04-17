import React from 'react';
import styled from 'styled-components';
import preImg from '../../assets/img/Group 5.png';

const s = {
  // header
  Header: styled.header`
    max-width: 428px;
    height: 60px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  title: styled.div`
    width: 70px;
    height: 24px;
    margin: 0 15%;
  `,

  pre: styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `,
  preImg: styled.img``,
  pre2: styled.div`
    width: 24px;
    height: 24px;
  `,
};

const FormHeader = () => {
  return (
    <>
      <s.Header>
        <s.pre>
          <s.preImg src={preImg}></s.preImg>
        </s.pre>
        <s.title>회원가입</s.title>
        <s.pre2 />
      </s.Header>
    </>
  );
};

export default FormHeader;
