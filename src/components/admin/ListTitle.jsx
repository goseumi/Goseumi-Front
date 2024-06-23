import React from 'react';
import styled from 'styled-components';

const s = {
  titleDiv: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  `,
  title: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
  count: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
};

const ListTitle = ({ title, count }) => {
  return (
    <s.titleDiv>
      <s.title>{title}</s.title>
      <s.count>{count}</s.count>
    </s.titleDiv>
  );
};

export default ListTitle;
