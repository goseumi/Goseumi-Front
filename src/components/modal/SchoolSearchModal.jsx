import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
import { useRecoilState } from 'recoil';
import { GradeSetAtom, SchoolSetAtom } from '../../lib/recoil/modalAtom';
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
};

const SchoolSearchModal = () => {
  const [open, setOpen] = useRecoilState(SchoolSetAtom);
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={handleClose}
      className="centerModal"
      overlayClassName="Overlay"
    >
      <ModalHeader text={'검색결과'} setAtom={SchoolSetAtom} />
      <s.content>
        <SchoolListItem text="세종고등학교" addr="세종시 조치원읍" />
        <SchoolListItem text="세종고등학교" addr="세종시 조치원읍" />
        <SchoolListItem text="세종고등학교" addr="세종시 조치원읍" />
        <SchoolListItem text="세종고등학교" addr="세종시 조치원읍" />
      </s.content>
    </ReactModal>
  );
};

export default SchoolSearchModal;
