import React from 'react';
import styled from 'styled-components';
import { ReactComponent as icons1 } from '../../assets/img/icons-1.svg';
import { ReactComponent as icons2 } from '../../assets/img/icons-2.svg';
import { ReactComponent as icons3 } from '../../assets/img/icons-3.svg';
import logo from '../../assets/img/mainLogo2.png';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const MainHeaderContainer = styled.div`
  height: 60px;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 150px;
  height: 34px;
  /* border-radius: 50%; */
  /* background-color: #f0f0f0; */
  margin-left: 30px;
  background-image: url(${logo});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const IconContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Tab = styled.div`
  margin-right: 22px;
  cursor: pointer;
`;

function Icons({ icon: Icon, path }) {
  const navigate = useNavigate();

  const movePage = (path) => {
    navigate(path);
  };
  return (
    <Tab
      onClick={(e) => {
        movePage(path);
      }}
    >
      <Icon width={24} height={24} fill="none" />
    </Tab>
  );
}

function MainHeader() {
  return (
    <>
      <MainHeaderContainer>
        <Logo />
        <IconContainer>
          <Icons icon={icons1} path="/" />
          <Icons icon={icons2} path="/" />
          <Icons icon={icons3} path="/mypage" />
        </IconContainer>
      </MainHeaderContainer>
    </>
  );
}

export default MainHeader;
