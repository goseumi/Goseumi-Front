import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
import { useRecoilState } from 'recoil';
import { GradeSetAtom } from '../../lib/recoil/modalAtom';
import ModalHeader from './ModalHeader';
const s = {
  Rectangle: styled.div`
    width: 50px;
    height: 4px;
    background: #dbdbdb;
    border-radius: 5px;
    margin: 16px auto;
  `,
  content: styled.div`
    height: 500px;
    border: 1px solid red;
  `,
};

const GradeModal = () => {
  const [open, setOpen] = useRecoilState(GradeSetAtom);
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={handleClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <ModalHeader text={'내신계산기'} setAtom={GradeSetAtom} />
    </ReactModal>
  );
};

export default GradeModal;
