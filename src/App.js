import React from 'react';
import { styled } from 'styled-components';
import './App.css';
import GlobalStyle from './style/GlobalStyle';

const S = {
  Frame: styled.div`
    max-width: 400px;
    height: 100vh;
    display: flex;
    position: relative;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: -5px -5px 30px 5px black;
    flex-direction: column;
  `,

  Background: styled.div`
    width: 100vw;
    height: 100%;
    background: #f7f7f7;
    position: absolute;
    font-size: 80px;
    line-height: 70px;
  `,
  Test: styled.div`
    //테스트코드
    max-width: 400px;
    height: 100vh;
    border: 1px solid red;
    background: #ffffff;
    display: flex;
    position: relative;
  `,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Background />
      <S.Frame>
        <S.Test>ff</S.Test>
      </S.Frame>
    </>
  );
}

export default App;
