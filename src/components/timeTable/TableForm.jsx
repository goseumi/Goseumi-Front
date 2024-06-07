import React from 'react';
import styled from 'styled-components';
import { ReactComponent as icon1 } from '../../assets/img/plus-square.svg';

const s = {
  content: styled.div`
    width: 100%;
    height: 70vh;
    padding-top: 80px;
    /* padding-bottom: 100px; */
    margin: 0 auto;
    overflow: scroll;
    /* border: 3px solid red; */
  `,
  tableLayout: styled.div`
    width: 95%;
    /* border: 1px solid red; */
    margin: 0 auto;
  `,
  tableInfo: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
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
  const hourData = Array.from({ length: 9 }, (i, j) => j + 9);

  return (
    <s.content>
      <s.tableLayout>
        <s.tableInfo>
          <s.title>2024학년 1학기</s.title>
          <s.Icon icon={icon1} />
        </s.tableInfo>
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
      </s.tableLayout>
    </s.content>
  );
};

export default TableForm;
