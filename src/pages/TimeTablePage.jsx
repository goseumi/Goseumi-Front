import React from 'react';
import styled from 'styled-components';
import Form from '../components/common/Form';
import FormHeader from '../components/common/FormHeader';
import MyPageList from '../components/myPage/MyPageList';
import NavBar from '../components/common/NavBar';
import TableForm from '../components/timeTable/TableForm';
import TestScore from '../components/timeTable/TestScore';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

const TimeTablePage = () => {
  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <>
      <s.Frame>
        <FormHeader type="time" />
        <TableForm />
        <TestScore />
        <NavBar />
      </s.Frame>
    </>
  );
};

export default TimeTablePage;
