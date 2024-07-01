import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
import { useRecoilState } from 'recoil';
import { GradeDataState, GradeSetAtom } from '../../lib/recoil/modalAtom';
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

const GradeModal = (props) => {
  const [open, setOpen] = useRecoilState(GradeSetAtom);
  const [report, setReport] = useState([]);
  const [important, setImportant] = useState([]);
  const [grades, setGrades] = useState({
    grade: '1학년 1학기',
    idx: 0,
  });
  const handleClose = () => {
    setOpen(!open);
    setGrades({ ...grade, grade: '1학년 1학기', idx: 0 });
  };

  const handleGrade = (data) => {
    setGrades({
      ...grades,
      grade: data.grade,
      idx: data.idx,
    });
    console.log(grades.idx);
    console.log(report[grades.idx]);
  };

  const myRef = useRef();

  const CalReport = [];
  const CalImportant = [];
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
      CalReport.push(sum === 0 ? 0 : Math.round((sum / length) * 100) / 100);
      CalImportant.push(importSum === 0 ? 0 : Math.round((importSum / importLength) * 10) / 10);
    }
    setReport(CalReport);
    setImportant(CalImportant);

    const filterReport = CalReport.filter((n) => n !== 0);
    const filterImport = CalImportant.filter((n) => n !== 0);

    const avgReport =
      filterReport.length > 0 ? filterReport.reduce((acc, curr) => acc + curr, 0) / filterReport.length : 0;
    const avgImport =
      filterImport.length > 0 ? filterImport.reduce((acc, curr) => acc + curr, 0) / filterImport.length : 0;

    console.log('평균 내신:', Math.round(avgReport * 10) / 10);
    console.log('평균 주요:', Math.round(avgImport * 10) / 10);
    console.log('내신 : ' + report);
    console.log('주요 : ' + important);

    props.setReport(Math.round(avgReport * 10) / 10);
    props.setImportant(Math.round(avgImport * 10) / 10);
  }, []);

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={handleClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <ModalHeader text={'내신계산기'} setAtom={GradeSetAtom} onGrade={handleGrade} />
      <s.content>
        <GradeGraph report={report} important={important} />
        <s.info>
          <s.mainInfo>
            <s.title>{grades.grade}</s.title>
            <s.subtitle>
              내신 : <s.boldText>{report[grades.idx]} 등급</s.boldText>
              주요 과목 : <s.boldText>{important[grades.idx]} 등급</s.boldText>
            </s.subtitle>
          </s.mainInfo>
          <s.saveBtn onClick={() => myRef.current.handleChildSaveData()}>저장하기</s.saveBtn>
        </s.info>
        <GradeTable datas={grade[grades.idx]} ref={myRef} />
      </s.content>
    </ReactModal>
  );
};

export default GradeModal;
