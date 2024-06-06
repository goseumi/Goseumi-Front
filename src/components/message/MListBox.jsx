import React from 'react';
import styled from 'styled-components';
import MList from './MList';
import { Mdata } from './Mdata';

const s = {
  content: styled.div`
    width: 90%;
    border: 3px solid red;
    margin: 10px auto 100px;
    flex: 1;
  `,
};

const MListBox = () => {
  return (
    <s.content>
      {Mdata.map((data, index) => (
        <MList key={index} data={data} />
      ))}
    </s.content>
  );
};

export default MListBox;
