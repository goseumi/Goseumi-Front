import React, { Children } from 'react';
import styled from 'styled-components';

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const ImgDiv = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  border: 1px solid #a7968e;
  cursor: pointer;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Text = styled.div`
  margin-top: 15px;
  font-size: 14px;
  weight: 400;
  text-align: center;
`;

function SiteTab({ icon, href, text }) {
  const linkPage = () => {
    window.open(href, '_blank');
  };
  return (
    <SiteContainer>
      <ImgDiv icon={icon} onClick={linkPage}></ImgDiv>
      <Text>{text}</Text>
    </SiteContainer>
  );
}

export default SiteTab;
