import React from "react";
import styled from "styled-components";
import {ReactComponent as heart} from "../../assets/img/heart.svg";
import {ReactComponent as comment} from "../../assets/img/comment.svg";

const ListContainer = styled.div`
    width: 95%;
    height: 80px;
    border-Bottom: 1px solid #000000;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
`

const Image = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid #000000;
    display: flex;

`
const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const IconContainer = styled.div`
    display: flex;
    padding: 8px;

`
const Title = styled.div`
    display: flex;
    font-weight: 600;
    padding: 5px;
`

const Content = styled.div`
    display: flex;
    padding-left: 8px;
    font-size: 16px;


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
                <Icons icon={comment}/>
            </IconContainer>
            </ContentsContainer>
            <Image/>
        </ListContainer>
        </>
    );
}

export default List;