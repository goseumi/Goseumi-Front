import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import SiteTab from '../components/common/SiteTab';
import MainHeader from '../components/common/MainHeader';
import HalfBoard from '../components/common/HalfBoard';
import MainBoard from '../components/common/MainBoard';
import { useLocation } from 'react-router-dom';
import icon0 from '../assets/img/mainLogo.png';
import icon1 from '../assets/img/neis.png';
import icon2 from '../assets/img/jinhak.jpg';
import icon3 from '../assets/img/ebs.png';

const s = {
  MainContent: styled.main`
    width: 100%;
    padding-top: 60px;
  `,
  SiteContainer: styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 20px;
  `,

  SchoolName: styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  `,

  BoardContainer: styled.div`
    display: flex;
    padding: 20px;
  `,
};

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <s.MainContent>
        <s.SchoolName>공주고등학교</s.SchoolName>
        <s.SiteContainer>
          <SiteTab
            icon={icon0}
            href="http://www.kongjugo.cnehs.kr/main.do"
            text="홈페이지"
          />
          <SiteTab
            icon={icon1}
            href="https://www.neis.go.kr/nxuiPortal/index.html"
            text="나이스"
          />
          <SiteTab icon={icon2} href="https://www.jinhak.com/" text="진학사" />
          <SiteTab
            icon={icon3}
            href="https://www.ebsi.co.kr/ebs/pot/poti/main.ebs"
            text="EBS"
          />
        </s.SiteContainer>
        <s.BoardContainer>
          <HalfBoard text="오늘의 급식" />
          <HalfBoard text="학사 일정" />
        </s.BoardContainer>
        <MainBoard text="커뮤니티 목록" />
      </s.MainContent>

      <NavBar />
    </>
  );
};

export default MainPage;
