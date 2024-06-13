import React, { useState } from 'react';
import styled from 'styled-components';

const s = {
  content: styled.section`
    width: 100%;
    border: 1px solid #a6a6a6;
    border-radius: 5px;
    height: 30px;
    margin: 5px auto;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: default;
  `,
  id: styled.p`
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
  `,
  btnDiv: styled.div`
    width: 55%;
    display: flex;
    justify-content: space-between;
    height: 100%;
  `,
  Btn: styled.button`
    width: 35px;
    background-color: red;
    color: white;
    font-size: 12px;
  `,
  okBtn: styled.button`
    width: 35px;
    background-color: red;
    color: white;
    font-size: 12px;
  `,
  noBtn: styled.button`
    width: 35px;
    background-color: black;
    color: white;
    font-size: 12px;
  `,
  Detatil: styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid #a6a6a6;
    border-radius: 5px;
    padding: 10px;
  `,
  ImgDiv: styled.div`
    width: 100%;
    height: 150px;
    background-color: red;
    margin: 10px auto;
  `,
};

const NewUserListItem = ({ type, data }) => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const toggleDetail = (index) => {
    if (index === visibleIndex) {
      setVisibleIndex(null);
    } else {
      setVisibleIndex(index);
    }
  };
  const reject = () => {
    const message = prompt('가입 반려사유를 입력해주세요.', '');
    message !== null && alert(message);
  };
  return (
    <>
      <s.content>
        <s.id>{data.name}</s.id>
        <s.btnDiv>
          <s.Btn
            style={type !== 'new' ? { visibility: 'hidden' } : {}}
            onClick={() => toggleDetail(data.idx)}
          >
            상세
          </s.Btn>
          <s.okBtn>수락</s.okBtn>
          <s.noBtn onClick={reject}>거부</s.noBtn>
        </s.btnDiv>
      </s.content>
      {type === 'new' && data.idx === visibleIndex ? (
        <s.Detatil>
          <s.id>신청 학교 : {data.school}</s.id>
          <s.ImgDiv />
        </s.Detatil>
      ) : null}
    </>
  );
};

export default NewUserListItem;
