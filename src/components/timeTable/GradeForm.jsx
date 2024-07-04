import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as icon1 } from '../../assets/img/edit.svg';
import { useRecoilState } from 'recoil';
import { GradeSetAtom } from '../../lib/recoil/modalAtom';
import GradeModal from '../modal/GradeModal';

const s = {
  content: styled.div`
    width: 95%;
    height: 100px;
    margin: 15px auto 100px;
    padding: 20px;
    overflow: scroll;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    border-radius: 10px;
  `,
  tableInfo: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    /* border: 1px solid red; */
  `,
  title: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
  scoreInfo: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    /* border: 1px solid red; */
  `,
  curScore: styled.span`
    font-size: 15px;
    font-weight: bold;
    color: #ff6e65;
  `,
  Icon: styled(icon1)`
    cursor: pointer;
  `,
};
const GradeForm = () => {
  const [open, setOpen] = useRecoilState(GradeSetAtom);
  const [report, setReport] = useState(0);
  const [important, setImportant] = useState(0);
  const handleModalOpen = () => {
    setOpen(!open);
  };
  return (
    <s.content>
      <s.tableInfo>
        <s.title>등급 계산기</s.title>
        <s.Icon icon={icon1} onClick={handleModalOpen} />
      </s.tableInfo>
      <s.scoreInfo>
        <s.title>
          평균 내신 <s.curScore>{report}</s.curScore> / 9.0
        </s.title>
        <s.title>
          주요 과목 평균 <s.curScore>{important}</s.curScore> / 9.0
        </s.title>
      </s.scoreInfo>
      <GradeModal setReport={setReport} setImportant={setImportant} />
    </s.content>
  );
};

export default GradeForm;
