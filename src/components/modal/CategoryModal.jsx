import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
import { useRecoilState } from 'recoil';
import {
  CategorySetAtom,
  GradeSetAtom,
  SchoolSetAtom,
} from '../../lib/recoil/modalAtom';
import ModalHeader from './ModalHeader';
import GradeGraph from '../timeTable/Grade/GradeGraph';
import GradeTable from '../timeTable/Grade/GradeTable';
import SchoolListItem from '../AuthComponent/SchoolListItem';

const s = {
  content: styled.div`
    height: 100vh;
    padding-top: 70px;
    overflow-y: scroll;
  `,
  inputDiv: styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  `,
  CategoryInput: styled.input`
    width: 75%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    font-size: 13px;
    padding-left: 10px;
  `,
  Btn: styled.button`
    width: 20%;
    height: 30px;
    font-weight: bold;
    font-size: 12px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.Gray};
  `,
};

const CategoryModal = ({ text, category }) => {
  const [open, setOpen] = useRecoilState(CategorySetAtom);
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={handleClose}
      className="categoryModal"
      overlayClassName="Overlay"
    >
      <ModalHeader text={text} setAtom={CategorySetAtom} />
      <s.content>
        <s.inputDiv>
          <s.CategoryInput
            placeholder="카테고리명을 입력하세요."
            defaultValue={category}
          />
          <s.Btn>저장</s.Btn>
        </s.inputDiv>
      </s.content>
    </ReactModal>
  );
};

export default CategoryModal;
