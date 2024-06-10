import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 168px;
`;

const LoginInput = styled.input`
  width: 368px;
  height: 54px;
  background: #f0f0f0;
  border-radius: 8px;
  position: absolute;
  padding: 15px;
`;

const LoginButton = styled.button`
  width: 368px;
  height: 54px;
  border-radius: 8px;
  position: absolute;
  background: #a7968e;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const LoginP = styled.p`
  width: 260px;
  height: 24px;
  position: absolute;
  font-size: 18px;
  top: 724px;
  text-align: center;
`;

const LoginLink = styled.span`
  color: #3f8cff;
  font-size: 18px;
  cursor: pointer;
`;

function LoginPage() {
  const navigate = useNavigate();
  const movePage = () => {
    navigate('/regist');
  };
  const handleLogin = () => {
    //로그인 axios 입력
    navigate('/home');
  };
  return (
    <>
      <LoginContainer>
        <LogoImage src={process.env.PUBLIC_URL + 'mstile-150x150.png'} />
        <LoginInput
          type="email"
          placeholder="이메일을 입력해주세요"
          style={{ top: '472px' }}
        />
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          style={{ top: '536px' }}
        />
        <LoginButton style={{ top: '610px' }} onClick={handleLogin}>
          로그인하기
        </LoginButton>
        <LoginP>
          회원이 아니신가요?
          <LoginLink onClick={movePage}>회원가입하기 {'>'}</LoginLink>
        </LoginP>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
