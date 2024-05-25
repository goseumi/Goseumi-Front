import React from "react";
import { styled } from 'styled-components';
import {ReactComponent as Nav1} from "../../assets/img/bottomNav-1.svg";
import {ReactComponent as Nav2} from "../../assets/img/bottomNav-2.svg";
import {ReactComponent as Nav3} from "../../assets/img/bottomNav-3.svg";
import {ReactComponent as Nav4} from "../../assets/img/bottomNav-4.svg";
import {ReactComponent as Nav5} from "../../assets/img/bottomNav-5.svg";



const NavContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 428px;
    display: flex;
    justify-content: center;    
    border-top: 1px solid #F0F0F0;
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
    color: #A6A6A6;

`;

function Nav({ icon: Icon, text }) {
    return (
        <Tab>
            <Icon width={24} height={24} fill="none" />
            {text}
        </Tab>
    );
}

function NavBar() {
    return (
        <NavContainer>
            <Nav icon={Nav1} text="홈" />
            <Nav icon={Nav2} text="게시판" />
            <Nav icon={Nav3} text="시간표" />
            <Nav icon={Nav4} text="DM" />
            <Nav icon={Nav5} text="문방구" />
        </NavContainer>
    );
}

export default NavBar;
