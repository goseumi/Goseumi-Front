import React from "react";
import styled from "styled-components";
import TabHeader from "../components/common/TabHeader";
import NavBar from "../components/common/NavBar";


    const Container = styled.div`
    width: 368px;
    height: ${props => props.height || 'auto'};
    border-radius: 5px;
    border: 1px solid #000000;
    margin: 30px auto;
    
    `

    const List = styled.div`
    width: 330px;
    height: 50px;
    display: flex;
    border-Bottom: 1px solid #F0F0F0;
    align-items: center;
    margin: auto;
    `

function BoardPage(){
    return(
        <>
        <TabHeader text="게시판"></TabHeader>
        <Container height="180px">
            <List>내가 쓴 글</List>
            <List>댓글 단 글</List>
            <List>스크랩</List>
        </Container>
        <Container height="300px">
            <List>자유게시판</List>
            <List>자유게시판</List>
            <List>자유게시판</List>
            <List>자유게시판</List>
        </Container>
        <NavBar/>
        </>
    );
}

export default BoardPage;