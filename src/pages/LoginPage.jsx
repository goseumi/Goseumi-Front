import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { isLoginAtom } from './../lib/recoil/isLoginAtom';
import mainLogo from '../assets/img/mainLogo.png';

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoArea = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const LoginInput = styled.input`
  width: 368px;
  height: 54px;
  font-size: 16px;
  outline: none;
  background: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
  margin: 10px auto 0;
`;

const LoginButton = styled.button`
  width: 368px;
  height: 54px;
  border-radius: 8px;
  background: #a7968e;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 10px auto;
`;

const LoginP = styled.p`
  width: 360px;
  height: 24px;
  font-size: 15px;
  top: 724px;
  text-align: center;
  margin: 10px auto 0;
  font-weight: bold;
`;

const LoginLink = styled.span`
  color: #3f8cff;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

function LoginPage() {
  const setToken = useSetRecoilState(isLoginAtom); //test
  const navigate = useNavigate();
  const movePage = () => {
    navigate('/regist');
  };
  const handleLogin = () => {
    //로그인 axios 입력.. 지금은 테스트
    setToken('test');
    navigate('/home');
  };
  return (
    <>
      <LoginContainer>
        <LogoArea>
          <LogoImage src={mainLogo} />
        </LogoArea>
        <LoginInput type="email" placeholder="이메일을 입력해주세요" />
        <LoginInput type="password" placeholder="비밀번호를 입력해주세요" />
        <LoginButton onClick={handleLogin}>로 그 인</LoginButton>
        <LoginP>
          회원이 아니시면 가입 후 서비스를 이용해보세요!
          <LoginLink onClick={movePage}> 회원가입</LoginLink>
        </LoginP>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
