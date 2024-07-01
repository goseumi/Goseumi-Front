import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { gradeOptions } from '../../../util/options';
import { theme } from './../../../style/theme';

const s = {
  content: styled.div`
    width: 90%;
    height: auto;
    margin: 10px auto 30px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    padding: 5px;
  `,
  GradeTable: styled.table`
    width: 100%;
    font-size: 12px;
  `,
  Th: styled.th`
    font-weight: bold;
  `,
  Tr: styled.tr`
    :last-child {
      vertical-align: middle;
    }
  `,
  Td: styled.td`
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    height: 20px;
    vertical-align: middle;
    background-color: ${({ theme }) => theme.colors.Gray};
  `,
  TitleInput: styled.input`
    width: 100%;
    outline: none;
    padding-left: 10px;
    background-color: ${({ theme }) => theme.colors.Gray};
    accent-color: red;
  `,
  ScoreInput: styled.input`
    width: 100%;
    outline: none;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.Gray};
  `,
  Select: styled.select`
    width: 100%;
    height: 100%;
    text-align: center;
    appearance: none;
    background-color: ${({ theme }) => theme.colors.Gray};
    outline: none;
  `,
  Btn: styled.button`
    margin: 5px 10px 0 5px;
    color: ${(props) => (props.color === 'red' ? ({ theme }) => theme.colors.negative : 'black')};
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
  `,
};

const GradeTable = ({ datas, onSaveData }) => {
  const [length, setlength] = useState(10);
  const [gradeData, setGradeData] = useState(datas);
  const rows = Array.from({ length }, (_, index) => index);
  const handleAddRow = () => {
    setlength(length + 1);
  };
  const handleResetRow = () => {
    setlength(10);
  };

  const handleChangeData = (e, index) => {
    const { name, value } = e.target;
    setGradeData((prevGradeData) => {
      const updatedGradeData = [...prevGradeData]; // 이전 상태를 복사하여 새로운 배열 생성
      updatedGradeData[index] = {
        ...updatedGradeData[index], // 이전 객체의 속성들을 유지한 후
        [name]: value, // 새로운 값을 업데이트
      };
      return updatedGradeData; // 새로운 배열을 반환하여 상태 업데이트
    });
  };

  const handleSaveData = () => {
    onSaveData(gradeData);
  };

  useLayoutEffect(() => {
    setGradeData(datas);
    console.log('재설정');
  }, [datas]);

  return (
    <s.content>
      <s.GradeTable>
        <thead>
          <tr>
            <s.Th width="130">과목명</s.Th>
            <s.Th width="40">원점수</s.Th>
            <s.Th width="40">등급</s.Th>
            <s.Th width="50">주요 과목</s.Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((index) => (
            <s.Tr key={index}>
              <s.Td>
                <s.TitleInput
                  type="text"
                  name="name"
                  value={gradeData[index] !== undefined ? gradeData[index].name : ''}
                  onChange={(e) => handleChangeData(e, index)}
                />
              </s.Td>
              <s.Td align="center">
                <s.ScoreInput
                  type="text"
                  name="score"
                  value={gradeData[index] !== undefined ? gradeData[index].score : ''}
                  onChange={(e) => handleChangeData(e, index)}
                />
              </s.Td>
              <s.Td align="center">
                <s.Select
                  name="grade"
                  value={gradeData[index] !== undefined ? gradeData[index].grade : ''}
                  onChange={(e) => handleChangeData(e, index)}
                >
                  {gradeOptions.map((data, index) => (
                    <option key={index} value={data}>
                      {data}
                    </option>
                  ))}
                </s.Select>
              </s.Td>
              <s.Td>
                <s.TitleInput type="checkbox" />
              </s.Td>
            </s.Tr>
          ))}
        </tbody>
      </s.GradeTable>
      <s.Btn onClick={handleAddRow} color={'red'}>
        과목 추가
      </s.Btn>
      <s.Btn onClick={handleResetRow}>초기화</s.Btn>
    </s.content>
  );
};

export default GradeTable;
