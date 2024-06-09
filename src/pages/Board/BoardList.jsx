import React from "react";
import styled from "styled-components";
import TabHeader from "../../components/common/TabHeader";
import List from "../../components/Board/List";

const Notice = styled.div`
    height: 60px;
    border-Bottom: 1px solid #F0F0F0;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 10px;
`

const ShowList = styled.div`
    display: flex;
    flex-direction: column-reverse;

`

function BoardList(){
    return(
        <>
        <TabHeader text="자유게시판"/>
        <Notice>공지사항입니다...</Notice>
        <ShowList>
            <List/>
            <List/>
        </ShowList>
        </>
    );
}

export default BoardList;