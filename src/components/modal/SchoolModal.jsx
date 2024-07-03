import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
import { useRecoilState } from 'recoil';
import {
  GradeSetAtom,
  SchoolInfoSetAtom,
  SchoolSetAtom,
} from '../../lib/recoil/modalAtom';
import ModalHeader from './ModalHeader';
import GradeGraph from '../timeTable/Grade/GradeGraph';
import GradeTable from '../timeTable/Grade/GradeTable';
import SchoolListItem from '../AuthComponent/SchoolListItem';

const s = {
  content: styled.div`
    width: 90%;
    height: 100vh;
    padding-top: 90px;
    overflow-y: scroll;
    margin: 0 auto;
  `,
  inputDiv: styled.div`
    width: 100%;
    margin-bottom: 15px;
  `,
  title: styled.p`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
  `,
  input: styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    font-size: 13px;
    padding-left: 10px;
  `,
  Btn: styled.button`
    width: 70px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin: 10px auto;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.Gray};
  `,
};

const SchoolModal = ({ type, data }) => {
  const [open, setOpen] = useRecoilState(SchoolInfoSetAtom);
  const handleClose = () => {
    setOpen(!open);
  };

  const saveInfo = () => {
    if (type === 'add') {
      alert('저장');
      setOpen(!open);
    } else {
      alert('수정');
      setOpen(!open);
    }
  };

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={handleClose}
      className="SchoolInfoModal"
      overlayClassName="Overlay"
    >
      <ModalHeader text={'학교 정보'} setAtom={SchoolInfoSetAtom} />
      <s.content>
        <s.inputDiv>
          <s.title>학교명</s.title>
          <s.input
            type="text"
            placeholder="학교명을 입력하세요."
            defaultValue={data.name}
          />
        </s.inputDiv>
        <s.inputDiv>
          <s.title>주소</s.title>
          <s.input
            type="text"
            placeholder="주소를 입력하세요."
            defaultValue={data.addr}
          />
        </s.inputDiv>
        <s.inputDiv>
          <s.title>우편번호</s.title>
          <s.input
            type="text"
            placeholder="우편번호을 입력하세요."
            defaultValue={data.addrNumber}
          />
        </s.inputDiv>
        <s.Btn onClick={saveInfo}>저장</s.Btn>
      </s.content>
    </ReactModal>
  );
};

export default SchoolModal;
