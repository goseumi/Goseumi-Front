import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as icon1 } from '../../assets/img/plus-square.svg';
import TableModal from '../modal/TableModal';
import { useRecoilState } from 'recoil';
import { timeSetAtom } from '../../lib/recoil/modalAtom';
import GradeModal from '../modal/GradeModal';
import { theme } from '../../style/theme';

const s = {
  content: styled.div`
    width: 95%;
    height: 360px;
    background-color: #fff;
    /* border: 1px solid ${({ theme }) => theme.colors.mainLine}; */
    border-radius: 10px;
    margin: 80px auto 0;
    padding-top: 5px;
  `,
  tableLayout: styled.div`
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  `,
  tableInfo: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `,
  tableDiv: styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  `,
  title: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
  //테이블
  table: styled.table`
    width: 100%;
    border: 1px solid #d3d3d3;
    font-size: 15px;
    height: 500px;
  `,
  thead: styled.thead`
    :first-child {
      :first-child {
        width: 30px;
      }
    }
  `,
  tbody: styled.tbody``,
  tr: styled.tr`
    border: 1px solid #d3d3d3;
  `,
  th: styled.th`
    border: 1px solid #d3d3d3;
  `,
  td: styled.td`
    border: 1px solid #d3d3d3;
  `,
  Icon: styled(icon1)`
    cursor: pointer;
  `,
};

const TableForm = () => {
  const [open, setOpen] = useRecoilState(timeSetAtom);
  const hourData = Array.from({ length: 9 }, (i, j) => j + 9);

  const handleModalOpen = () => {
    setOpen(!open);
  };

  return (
    <s.content>
      <s.tableLayout>
        <s.tableInfo>
          <s.title>2024학년 1학기</s.title>
          <s.Icon icon={icon1} onClick={handleModalOpen} />
        </s.tableInfo>
        <s.tableDiv>
          <s.table>
            <s.thead>
              <s.tr>
                <s.th></s.th>
                <s.th>월</s.th>
                <s.th>화</s.th>
                <s.th>수</s.th>
                <s.th>목</s.th>
                <s.th>금</s.th>
              </s.tr>
            </s.thead>
            <s.tbody>
              {hourData.map((time, index) => (
                <s.tr key={index}>
                  <s.td align="center">{`${time}`}</s.td>
                  <s.td></s.td>
                  <s.td></s.td>
                  <s.td></s.td>
                  <s.td></s.td>
                  <s.td></s.td>
                </s.tr>
              ))}
            </s.tbody>
          </s.table>
        </s.tableDiv>
      </s.tableLayout>
      <TableModal />
      <GradeModal />
    </s.content>
  );
};

export default TableForm;
