import React, { Children } from 'react';
import styled from 'styled-components';
import { theme } from './../../style/theme';

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
  border: 1px solid #d7d7d7;
  cursor: pointer;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Text = styled.div`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
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
