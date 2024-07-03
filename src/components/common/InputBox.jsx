import React from 'react';
import styled from 'styled-components';
import { ReactComponent as search } from '../../assets/img/icons-1.svg';

const s = {
  content: styled.div`
    width: 80%;
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  `,
  input: styled.input`
    width: 70%;
    height: 30px;
    padding-left: 15px;
    background-color: #fff;
    font-size: 13px;
    outline-style: none;
  `,
  button: styled.button`
    width: 20%;
  `,
  select: styled.select`
    width: 20%;
    font-size: 13px;
    text-align: center;
  `,
  sIcon: styled(search)`
    width: 30px;
    display: inline;
    cursor: pointer;
  `,
};

const InputBox = ({ optData, clickEvent }) => {
  return (
    <s.content>
      <s.select defaultValue={''}>
        <option value="" disabled={true}>
          검색조건
        </option>
        {optData.map((data, index) => (
          <option key={index} value={data.value}>
            {data.name}
          </option>
        ))}
      </s.select>
      <s.input placeholder="검색어를 입력하세요." />
      <s.sIcon width={24} height={24} fill="none" onClick={clickEvent} />
    </s.content>
  );
};

export default InputBox;
