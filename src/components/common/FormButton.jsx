import React from 'react';
import styled, { css } from 'styled-components';

const s = {
  join: styled.button`
    display: block;
    width: 100%;
    height: 50px;
    color: white;
    background-color: #a7968e;
    border-radius: 8px;
    margin: 30px 0 20px;
    ${(props) =>
      props.active === false &&
      css`
        background-color: #f7f7f7;
        color: #000;
        :hover {
        }
        pointer-events: none;
      `}
  `,
};

const FormButton = ({ type, onClick, active }) => {
  return (
    <s.join active={active} onClick={onClick}>
      {type === 'regist'
        ? '회원가입'
        : type === 'find'
        ? '임시 비밀번호 발송'
        : type === 'PwChange'
        ? '비밀번호 변경'
        : ''}
    </s.join>
  );
};

export default FormButton;
