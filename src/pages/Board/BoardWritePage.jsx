import React from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/common/FormHeader';

const StyledInput = styled.input`
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  font-size: 16px;
  display: block;
  outline: none;
  border-bottom: 1px solid #f0f0f0;
`;

const StyledTextarea = styled.textarea`
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  font-size: 16px;
  display: block;
  resize: none;
  outline: none;
  border-bottom: 1px solid #f0f0f0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
`;

function BoardWritePage() {
  return (
    <>
      <FormHeader text="글쓰기" type="input" />
      <Container>
        <StyledInput type="text" placeholder="제목" />
        <StyledTextarea placeholder="내용을 입력하세요" rows="30" />
      </Container>
    </>
  );
}

export default BoardWritePage;
