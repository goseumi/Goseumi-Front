import React, { useState } from 'react';
import styled from 'styled-components';
import { gradeOption } from '../../../util/options';
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
  `,
  Btn: styled.button`
    margin: 5px 15px 0 0;
    color: ${(props) => (props.color === 'red' ? ({ theme }) => theme.colors.negative : 'black')};
    cursor: pointer;
  `,
};

const GradeTable = ({ data }) => {
  const [length, setlength] = useState(10);
  const rows = Array.from({ length }, (_, index) => index);
  const handleAddRow = () => {
    setlength(length + 1);
  };
  const handleResetRow = () => {
    setlength(10);
  };
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
                <s.TitleInput type="text" />
              </s.Td>
              <s.Td align="center">
                <s.ScoreInput type="text" />
              </s.Td>
              <s.Td align="center">
                <s.Select>
                  {gradeOption.map((data, index) => (
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
        <s.Btn onClick={handleAddRow} color={'red'}>
          과목 추가
        </s.Btn>
        <s.Btn onClick={handleResetRow}>초기화</s.Btn>
      </s.GradeTable>
    </s.content>
  );
};

export default GradeTable;
