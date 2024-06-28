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
//         <LoginPage/>
//       </S.Frame>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { ThemeProvider, styled } from 'styled-components';
import './App.css';
import GlobalStyle from './style/GlobalStyle';
import './pages/LoginPage';
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';
import BoardPage from './pages/BoardPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage/MyPage';
import RegistPage from './pages/RegistPage';
import TimeTablePage from './pages/TimeTablePage';
import MessagePage from './pages/Message/MessagePage';
import MessageWritePage from './pages/Message/MessageWritePage';
import MListBox from './components/message/MListBox';
import MRead from './components/message/MRead';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import BoardList from './pages/Board/BoardList';
import BoardInput from './pages/Board/BoardInput';
import ErrorPage from './pages/ErrorPage';
import IsLoginPage, { AdminRoute, PrivateRoute, PublicRoute } from './pages/Route/IsLoginPage';
import { useRecoilValue } from 'recoil';
import { isLogin } from './lib/recoil/isLoginAtom';
import UserManagePage from './pages/admin/UserManagePage';
import { theme } from './style/theme';
import SchoolAuthPage from './pages/MyPage/SchoolAuthPage';
import BoardCategoryPage from './pages/admin/BoardCategoryPage';
import SchoolManagePage from './pages/admin/SchoolManagePage';
import MyPageList from './components/myPage/MyPageList';

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
  const checkLogin = useRecoilValue(isLogin);
  console.log(checkLogin);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <S.Background />
        <S.Frame>
          <BrowserRouter>
            <Routes>
              <Route element={<PublicRoute />}>
                <Route path="/" element={<SplashPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/regist" element={<RegistPage />} />
                <Route path="/school" element={<SchoolAuthPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/home" element={<MainPage />} />
                <Route path="/commu" element={<BoardPage />} />
                <Route path="/time" element={<TimeTablePage />} />
                <Route path="/mypage" element={<MyPage />}>
                  <Route path="/mypage" element={<MyPageList />} />
                </Route>
                <Route path="/dm" element={<MessagePage />}>
                  <Route path="/dm" element={<MListBox />} />
                  <Route path="read" element={<MRead />} />
                  <Route path="send" element={<MessageWritePage />} />
                </Route>
                <Route path="/boardInput" element={<BoardList />} />
                <Route path="/boardPage" element={<BoardInput />} />
                <Route element={<AdminRoute />}>
                  <Route path="/admin" element={<MyPage />}>
                    <Route path="/admin" element={<MyPageList />} />
                    <Route path="user" element={<UserManagePage />} />
                    <Route path="school" element={<SchoolManagePage />} />
                    <Route path="category" element={<BoardCategoryPage />} />
                  </Route>
                </Route>
              </Route>
              <Route path="/*" element={<ErrorPage />} />
              {/* <Route path="/admin" element={<UserManagePage />} /> */}
            </Routes>
          </BrowserRouter>
          {/* 아래는 옛날방식인데 이러면 라우팅은 잘 되나, 로그인을 안했을 때와
        토큰만료로 로그인을 다시해야하는 경우 로그인 페이지로 유도하지 못함
        위의 방식을 어떻게든 수정해서 써야함 */}
          {/* <BrowserRouter>
          <Routes>
            {checkLogin ? (
              <>
                <Route path="/home" element={<MainPage />} />
                <Route path="/commu" element={<BoardPage />} />
                <Route path="/time" element={<TimeTablePage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/dm" element={<MessagePage />}>
                  <Route path="/dm" element={<MListBox />} />
                  <Route path="Read" element={<MRead />} />
                </Route>
                <Route path="/dm/send" element={<MessageWritePage />} />
                <Route path="/boardInput" element={<BoardList />} />
                <Route path="/boardPage" element={<BoardInput />} />
                <Route path="/*" element={<ErrorPage />} />
              </>
            ) : (
              <>
                <Route path="/" element={<SplashPage />} />
                <Route path="/home" element={<LoginPage />} />
                <Route path="/regist" element={<RegistPage />} />
                <Route path="/*" element={<ErrorPage />} />
              </>
            )}
          </Routes>
        </BrowserRouter> */}
        </S.Frame>
      </ThemeProvider>
    </>
  );
}

export default App;
