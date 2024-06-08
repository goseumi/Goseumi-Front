import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
import { useRecoilState } from 'recoil';
import { timeSetAtom } from '../../lib/recoil/modalAtom';
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

const TableModal = () => {
  const [open, setOpen] = useRecoilState(timeSetAtom);
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
      <s.Rectangle></s.Rectangle>
      <s.content>시간표</s.content>
    </ReactModal>
  );
};

export default TableModal;
