import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
const s = {
  Rectangle: styled.div`
    width: 50px;
    height: 4px;
    background: #dbdbdb;
    border-radius: 5px;
    margin: 16px auto;
  `,
};

const TableModal = ({ open, onClose }) => {
  const [flag, setFlag] = useState(open);
  const handleClose = () => {
    setFlag(!flag);
    // onClose();
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
    </ReactModal>
  );
};

export default TableModal;
