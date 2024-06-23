import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { SchoolSetAtom } from '../../lib/recoil/modalAtom';

const s = {
  Frame: styled.section`
    width: 95%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    border-radius: 5px;
    margin: 5px auto;
    padding: 5px;
    cursor: pointer;
  `,
  content: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0;
    height: 100%;
  `,
  name: styled.p`
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    /* margin-bottom: 5px; */
  `,
  addr: styled.p`
    width: 100%;
    font-size: 10px;
  `,
};

const SchoolListItem = ({ text, addr, click }) => {
  const [open, setOpen] = useRecoilState(SchoolSetAtom);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const toggleDetail = (index) => {
    if (index === visibleIndex) {
      setVisibleIndex(null);
    } else {
      setVisibleIndex(index);
    }
  };
  return (
    <>
      <s.Frame onClick={click}>
        <s.content>
          <s.name>{text}</s.name>
          <s.addr>{addr}</s.addr>
        </s.content>
      </s.Frame>
    </>
  );
};

export default SchoolListItem;
