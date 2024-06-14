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
    /* background-color: ${({ theme }) => theme.colors.Gray}; */
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,

  Tab: styled.div`
    position: relative;
    margin-right: 22px;
    cursor: pointer;
  `,
  icon: styled(icons2)``,
  push: styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    position: absolute;
    background-color: red;
    color: white;

    left: 10px;
    top: -10px;
  `,
};

const MainHeader = () => {
  const navigate = useNavigate();

  const movePage = (path) => {
    navigate(path);
  };
  const Icons = ({ icon: Icon, path, data }) => {
    return (
      <s.Tab onClick={() => movePage(path)}>
        <Icon width={24} height={24} fill="none" />
        {data !== undefined ? <s.push>{data}</s.push> : <></>}
      </s.Tab>
    );
  };
  return (
    <s.fixedDiv>
      <s.MainHeaderContainer>
        <s.Logo />
        <s.IconContainer>
          <Icons icon={icons1} path="/" />
          <Icons icon={icons2} path="/" data={'1'} />
          <Icons icon={icons3} path="/mypage" data={'1'} />
        </s.IconContainer>
      </s.MainHeaderContainer>
    </s.fixedDiv>
  );
};

export default MainHeader;
