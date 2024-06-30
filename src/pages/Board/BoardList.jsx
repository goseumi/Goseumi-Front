import React from "react";
import styled from "styled-components";
import FormHeader from "../../components/common/FormHeader";
import List from "../../components/Board/List";
import { ReactComponent as write } from '../../assets/img/writeBtn.svg';
import { Link } from "react-router-dom";


const ListContainer = styled.div`
    margin-top: 60px;
    position: relative;
`

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

const WriteBtn = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: fixed;
    border: 1px solid #D3D3D3;
    background-color: #fff;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

function Icons({ icon: Icon }) {
    return (
            <Icon width={20} height={20} fill="none" />
    );
}

function BoardList(){
    return(<>
            <FormHeader text="자유게시판"/>
            <ListContainer>
                <Notice>공지사항입니다...</Notice>
                <ShowList>
                    <Link to="/boardDetail">
                        <List/>
                    </Link>
                    <Link to="/boardInput">
                        <WriteBtn> 
                            <Icons icon={write}/>
                        </WriteBtn>
                    </Link>
                </ShowList>
                
            </ListContainer>
        </>
    );
}

export default BoardList;