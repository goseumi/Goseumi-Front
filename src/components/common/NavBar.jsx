import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Nav1 } from '../../assets/img/bottomNav-1.svg';
import { ReactComponent as Nav2 } from '../../assets/img/bottomNav-2.svg';
import { ReactComponent as Nav3 } from '../../assets/img/bottomNav-3.svg';
import { ReactComponent as Nav4 } from '../../assets/img/bottomNav-4.svg';
import { ReactComponent as Nav5 } from '../../assets/img/bottomNav-5.svg';
import { useNavigate } from 'react-router-dom';

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 428px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #f0f0f0;
  background-color: white;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 94px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #a6a6a6;
  cursor: pointer;
`;

function Nav({ icon: Icon, text, path }) {
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
      {text}
    </Tab>
  );
}

function NavBar() {
  return (
    <NavContainer>
      <Nav icon={Nav1} text="홈" path="/home" />
      <Nav icon={Nav2} text="게시판" path="/commu" />
      <Nav icon={Nav3} text="시간표" path="/time" />
      <Nav icon={Nav4} text="DM" path="/dm" />
      <Nav icon={Nav5} text="문방구" path="/store" />
    </NavContainer>
  );
}

export default NavBar;
