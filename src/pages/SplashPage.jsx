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
import React from 'react';
import { styled } from 'styled-components';
import mainLogo from '../assets/img/mainLogo.png';

const BgContainer = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 90%;
  position: absolute;
  top: 100px;
`;

function SplashPage() {
  return (
    <>
      <BgContainer>
        <LogoImage src={mainLogo} />
      </BgContainer>
    </>
  );
}

export default SplashPage;
