import React from "react";
import styled from "styled-components";

const Header = styled.div`
    height: 60px;
    width: 100%;
    border-Bottom: 1px solid #F0F0F0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    `

function TabHeader({text}){
    return(
        <>
        <Header>{text}</Header>
        </>
    );
}

export default TabHeader;