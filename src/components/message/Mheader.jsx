import React from 'react';
import styled from 'styled-components';
import { ReactComponent as icons1 } from '../../assets/img/headerPre.svg';
import { ReactComponent as icons2 } from '../../assets/img/sendMessage.svg';

const s = {
  // header
  Header: styled.header`
    max-width: 428px;
    height: 60px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  title: styled.div`
    width: 100px;
    height: 24px;
    margin: 0 15%;
    text-align: center;
  `,

  pre: styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `,
  pre2: styled.div`
    width: 24px;
    height: 24px;
  `,
};

function Icons({ icon: Icon }) {
  return <Icon fill="none" />;
}

const Mheader = ({ text }) => {
  return (
    <>
      <s.Header>
        <s.pre>
          <Icons icon={icons1} />
        </s.pre>
        <s.title>{text}</s.title>
        <s.pre>
          <Icons icon={icons2} />
        </s.pre>
      </s.Header>
    </>
  );
};

export default Mheader;