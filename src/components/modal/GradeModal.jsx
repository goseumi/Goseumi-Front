import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
import { useRecoilState } from 'recoil';
import { GradeSetAtom } from '../../lib/recoil/modalAtom';
import ModalHeader from './ModalHeader';
import GradeGraph from '../timeTable/Grade/GradeGraph';
import GradeTable from '../timeTable/Grade/GradeTable';
import { grade } from '../../util/TestData';

const s = {
  content: styled.div`
    height: 100vh;
    padding-top: 90px;
    /* border: 3px solid red; */
    overflow-y: scroll;
  `,
  info: styled.div`
    width: 90%;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  mainInfo: styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
  `,
  saveBtn: styled.button`
    width: 100px;
    height: 30px;
    border-radius: 15px;
    background-color: red;
    color: white;
    font-size: 15px;
    font-weight: bold;
  `,
  title: styled.div`
    font-weight: bold;
    margin-bottom: 5px;
  `,
  subtitle: styled.div`
    font-size: 12px;
    font-weight: bold;
  `,
  boldText: styled.span`
    font-size: 12px;
    margin-right: 10px;
    color: #ff6e65;
  `,
};

const GradeModal = () => {
  const [open, setOpen] = useRecoilState(GradeSetAtom);
  const handleClose = () => {
    setOpen(!open);
  };

  let report = [];
  let important = [];
  useLayoutEffect(() => {
    for (let i = 0; i < grade.length; i++) {
      let length = grade[i].length;
      let importLength = 0;
      let sum = 0;
      let importSum = 0;
      for (let j = 0; j < grade[i].length; j++) {
        if (grade[i][j].import) {
          importSum += grade[i][j].grade;
          importLength += 1;
        }
        sum += grade[i][j].grade;
      }
      report.push(sum === 0 ? 0 : Math.round((sum / length) * 100) / 100);
      important.push(importSum === 0 ? 0 : Math.round((importSum / importLength) * 10) / 10);
    }
    console.log('내신 : ' + report);
    console.log('주요 : ' + important);
  });

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={handleClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <ModalHeader text={'내신계산기'} setAtom={GradeSetAtom} />
      <s.content>
        <GradeGraph report={report} important={important} />
        <s.info>
          <s.mainInfo>
            <s.title>4학년 2학기</s.title>
            <s.subtitle>
              내신 <s.boldText>4.5</s.boldText> 주요 과목 <s.boldText>4.5</s.boldText>
            </s.subtitle>
          </s.mainInfo>
          <s.saveBtn>저장하기</s.saveBtn>
        </s.info>
        <GradeTable />
      </s.content>
    </ReactModal>
  );
};

export default GradeModal;
