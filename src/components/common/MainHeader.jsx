import React from "react";
import styled from "styled-components";
import {ReactComponent as icons1} from "../../assets/img/icons-1.svg";
import {ReactComponent as icons2} from "../../assets/img/icons-2.svg";
import {ReactComponent as icons3} from "../../assets/img/icons-3.svg";
import NavBar from "./NavBar";


const MainHeaderContainer = styled.div`
    height: 60px;
    border-Bottom: 1px solid #F0F0F0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const Logo = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #F0F0F0;
    margin-left: 30px;
`;

const IconContainer = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;

const Tab = styled.div`
    
    margin-right: 22px;
`;

function Icons({ icon: Icon }) {
    return (
        <Tab>
            <Icon width={24} height={24} fill="none" />
        </Tab>
    );
}


function MainHeader() {

    return(
        <>
        <MainHeaderContainer>
        <Logo/>
        <IconContainer>
            <Icons icon={icons1}/>
            <Icons icon={icons2}/>
            <Icons icon={icons3}/>
        </IconContainer>
        </MainHeaderContainer>
        </>
    );
}

export default MainHeader;