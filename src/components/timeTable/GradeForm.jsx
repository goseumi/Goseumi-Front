import React from 'react';
import styled from 'styled-components';
import { ReactComponent as icon1 } from '../../assets/img/edit.svg';
import { useRecoilState } from 'recoil';
import { GradeSetAtom } from '../../lib/recoil/modalAtom';

const s = {
  content: styled.div`
    width: 95%;
    height: 15vh;
    margin: 1vh auto 0;
    padding: 20px;
    overflow: scroll;
    border: 1px solid #d3d3d3;
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
          평균 내신 <s.curScore>4.5</s.curScore> / 9.0
        </s.title>
        <s.title>
          국 영 수 평균 <s.curScore>4.5</s.curScore> / 9.0
        </s.title>
      </s.scoreInfo>
    </s.content>
  );
};

export default GradeForm;
