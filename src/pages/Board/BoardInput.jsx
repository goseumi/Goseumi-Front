import React from "react";
import styled from "styled-components";
import TabHeader from "../../components/common/TabHeader";

const StyledInput = styled.input`
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    font-size: 16px;
    display: block;
    border-Bottom: 1px solid #F0F0F0;
`;

const StyledTextarea = styled.textarea`
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    font-size: 16px;
    display: block;
    border-Bottom: 1px solid #F0F0F0;

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

function BoardInput(){
    return(
        <Container>
            <TabHeader text="글쓰기"/>
            <StyledInput
                type="text"
                placeholder="Title"
            />
            <StyledTextarea
                placeholder="Content"
                rows="30"
            />
        </Container>
    );
}

export default BoardInput;
