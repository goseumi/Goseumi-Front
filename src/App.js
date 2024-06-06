// import React from 'react';
// import { styled } from 'styled-components';
// import './App.css';
// import GlobalStyle from './style/GlobalStyle';
// import './pages/LoginPage';
// import LoginPage from './pages/LoginPage';
// import SplashPage from './pages/SplashPage';

// const S = {
//   Frame: styled.div`
//     max-width: 428px;
//     height: 100vh;
//     position: relative;
//     margin: 0 auto;
//     background-color: #ffffff;
//     box-shadow: -5px -5px 30px 5px black;
//     overflow: auto;
//   `,

//   Background: styled.div`
//     width: 100vw;
//     height: 100%;
//     background: #f7f7f7;
//     position: absolute;
//     font-size: 80px;
//     line-height: 70px;
//   `,
//   Test: styled.div`
//     //테스트코드
//     max-width: 428px;
//     height: 100vh;
//     border: 1px solid red;
//     background: #ffffff;
//     display: flex;
//     position: relative;
//   `,
// };

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <S.Background />
//       <S.Frame>
//         <LoginPage />
//       </S.Frame>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { styled } from 'styled-components';
import './App.css';
import GlobalStyle from './style/GlobalStyle';
import './pages/LoginPage';
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';
import RegistPage from './pages/RegistPage';
import MyPage from './pages/MyPage';
import MessagePage from './pages/Message/MessagePage';

const S = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    position: relative;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: -5px -5px 30px 5px black;
    overflow: auto;
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
    max-width: 428px;
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
        {/* <MyPage /> */}
        <MessagePage />
      </S.Frame>
    </>
  );
}

export default App;
