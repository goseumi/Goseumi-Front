import React from "react";
import styled from "styled-components";
import {ReactComponent as heart} from "../../assets/img/heart.svg";
import {ReactComponent as comment} from "../../assets/img/comment.svg";

const ListContainer = styled.div`
    width: 95%;
    height: 80px;
    border-Bottom: 1px solid #D3D3D3;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
`

const Image = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid #D3D3D3;
    display: flex;
    border-radius: 5px;


`
const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const IconContainer = styled.div`
    display: flex;
    padding: 5px;
    margin-top: 5px;

`
const Title = styled.div`
    display: flex;
    font-weight: 600;
    padding: 5px;
    font-size: 16px;
`

const Content = styled.div`
    display: flex;
    padding-left: 5px;
    margin-top: 2px;
    font-size: 16px;

`

const Count = styled.div`
    font-size: 14px;
    margin-left: 2px;
    margin-right: 10px;
`

const TimeStamp = styled.div`
    font-size: 14px;
    margin-left: 2px;
    margin-right: 10px;
    color: #757575;
`

function Icons({ icon: Icon }) {
    return (
            <Icon width={15} height={15} fill="none" />
    );
}

function List(){
    return(
        <>
        <ListContainer>
            <ContentsContainer>
                <Title>제목</Title>
                <Content>내용을 어쩌구 저쩌구...</Content>
                <IconContainer>
                    <Icons icon={heart}/>
                    <Count>0</Count>
                    <Icons icon={comment}/>
                    <Count>0</Count>
                    <TimeStamp>지금막</TimeStamp>
                </IconContainer>
            </ContentsContainer>
            <Image/>
        </ListContainer>
        </>
    );
}

export default List;