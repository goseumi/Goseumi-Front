import React from 'react';
import styled from 'styled-components';
import { ReactComponent as icons1 } from '../../assets/img/icons-1.svg';
import { ReactComponent as icons2 } from '../../assets/img/icons-2.svg';
import { ReactComponent as icons3 } from '../../assets/img/icons-3.svg';
import logo from '../../assets/img/HeadLogo.png';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const s = {
  fixedDiv: styled.div`
    width: 100%;
    max-width: 428px;
    position: fixed;
    background-color: #ffffff;
  `,
  MainHeaderContainer: styled.div`
    height: 60px;
    border-bottom: 1px solid #f0f0f0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  Logo: styled.div`
    width: 150px;
    height: 40px;
    /* border-radius: 50%; */
    /* background-color: #f0f0f0; */
    margin: 10px 0 0 20px;
    background-image: url(${logo});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    /* border: 1px solid red; */
  `,

  IconContainer: styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,

  Tab: styled.div`
    margin-right: 22px;
    cursor: pointer;
  `,
};

function Icons({ icon: Icon, path }) {
  const navigate = useNavigate();

  const movePage = (path) => {
    navigate(path);
  };
  return (
    <s.Tab
      onClick={(e) => {
        movePage(path);
      }}
    >
      <Icon width={24} height={24} fill="none" />
    </s.Tab>
  );
}

function MainHeader() {
  return (
    <s.fixedDiv>
      <s.MainHeaderContainer>
        <s.Logo />
        <s.IconContainer>
          <Icons icon={icons1} path="/" />
          <Icons icon={icons2} path="/" />
          <Icons icon={icons3} path="/mypage" />
        </s.IconContainer>
      </s.MainHeaderContainer>
    </s.fixedDiv>
  );
}

export default MainHeader;
