import React from "react";
import styled from "styled-components";
import NavBar from "../components/common/NavBar";
import SiteTab from "../components/common/SiteTab";
import MainHeader from "../components/common/MainHeader";
import HalfBoard from "../components/common/HalfBoard";
import MainBoard from "../components/common/MainBoard";

const SiteContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const BoardContainer = styled.div`
    display:flex;
    padding: 20px;
`;

const SubTitleFont = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #A7968E;
`;



function SchoolName({ text }) {
    return (
        <Name>{text}</Name>
    );
}

function SubTitle({ text }) {
    return (
        <SubTitleFont>{text}</SubTitleFont>
    );
}


function MainPage() {
    return(
    <> 
        <MainHeader/>
        <SchoolName text="공주고등학교"/>
        <SiteContainer>
            <SiteTab 
                href="http://www.kongjugo.cnehs.kr/main.do"
                text="홈페이지"/>
            <SiteTab 
                href="https://www.neis.go.kr/nxuiPortal/index.html"
                text="나이스"/>
            <SiteTab 
                href="https://www.jinhak.com/"
                text="진학사"/>
            <SiteTab 
                href="https://www.ebsi.co.kr/ebs/pot/poti/main.ebs"
                text="EBS"/>
        </SiteContainer>
        <BoardContainer>
            <HalfBoard>
            <SubTitle text="4월 중식"/>
            </HalfBoard>
            <HalfBoard>
                <SubTitle text="학사일정"/>
            </HalfBoard>
        </BoardContainer>
        <MainBoard/>
        <NavBar/>
    </>);
}

export default MainPage;
