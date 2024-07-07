import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import mainLogo from '../assets/img/mainLogo.png';
import { useNavigate } from 'react-router-dom';

const BgContainer = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 100%;
  position: absolute;
  top: 116px;
`;

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, []);

  return (
    <>
      <BgContainer>
        <LogoImage src={mainLogo} />
      </BgContainer>
    </>
  );
}

export default SplashPage;
