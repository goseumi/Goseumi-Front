import React from "react";
import styled from "styled-components";
import FormHeader from "../../components/common/FormHeader";
import { useState } from "react";

const StyledInput = styled.input`
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    font-size: 16px;
    display: block;
    outline: none;
    border-Bottom: 1px solid #F0F0F0;
`;

const StyledTextarea = styled.textarea`
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    font-size: 16px;
    display: block;
    resize: none;
    outline: none;
    border-Bottom: 1px solid #F0F0F0;

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 40px;
`;

function BoardInput(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
            console.log('제목:', value);
        } else if (name === 'content') {
            setContent(value);
            console.log('내용:', value);
        }
      }
    return(<>
            <FormHeader text="글쓰기" type="input"/>
            <Container>
                <StyledInput
                    type="text"
                    name="title"
                    placeholder="제목"
                    value={title}
                    onChange={handleChange}
                />
                <StyledTextarea
                    name="content"
                    placeholder="내용을 입력하세요"
                    rows="30"
                    value={content}
                    onChange={handleChange}
                />
            </Container>
        </>
    );
}

export default BoardInput;
