import React from 'react';
import styled from 'styled-components';

const s = {
  Container: styled.div`
    width: 90%;
    margin: 0 auto;
    border: 1px solid blue;
  `,
};

const Schedule = () => {
  return <s.Container></s.Container>;
};

export default Schedule;
