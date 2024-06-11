// import React from "react";
// import { styled } from 'styled-components';

// const BgContainer = styled.div`
//     display: flex;
//     background: #A7968E;
//     width: 100%;
//     height: 100%;
//     justify-content: center;
//     `;

// const LogoImage = styled.img`
//     position: absolute;
//     top: 215px;
// `;

// function SplashPage(){
//     return(
//         <>
//         <BgContainer>
//             <LogoImage src= {process.env.PUBLIC_URL + 'mstile-150x150.png'}/>
//         </BgContainer>
//         </>
//     );
// }

// export default SplashPage;
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
  top: 250px;
`;

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
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
