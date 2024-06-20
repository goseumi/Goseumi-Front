import React, { useState } from 'react';
import styled from 'styled-components';

const s = {
  Frame: styled.section`
    width: 100%;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    border-radius: 5px;
    margin: 5px auto;
    padding: 5px;
    cursor: default;
  `,
  content: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding: 0 10px 0;
  `,
  id: styled.p`
    width: 100%;
    font-size: 14px;
    font-weight: bold;
  `,
  btnDiv: styled.div`
    width: 55%;
    display: flex;
    justify-content: space-between;
    height: 100%;
  `,
  Btn: styled.button`
    width: 35px;
    background-color: #000;
    color: white;
    font-size: 12px;
  `,
  okBtn: styled.button`
    width: 35px;
    background-color: ${({ theme }) => theme.colors.positive};
    color: white;
    font-size: 12px;
  `,
  noBtn: styled.button`
    width: 35px;
    background-color: ${({ theme }) => theme.colors.negative};
    color: white;
    font-size: 12px;
  `,
  Detatil: styled.div`
    width: 100%;
    height: 200px;
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
      <s.Frame>
        <s.content>
          <s.id>{data.name}</s.id>
          <s.btnDiv>
            <s.Btn
              style={type !== 'new' ? { visibility: 'hidden' } : {}}
              onClick={() => toggleDetail(data.idx)}
            >
              상세
            </s.Btn>
            <s.okBtn>{type === 'new' ? '수락' : '내역'}</s.okBtn>
            <s.noBtn onClick={reject}>
              {type === 'new' ? '거부' : '제재'}
            </s.noBtn>
          </s.btnDiv>
        </s.content>
        {type === 'new' && data.idx === visibleIndex ? (
          <s.Detatil>
            <s.id>신청 학교 : {data.school}</s.id>
            <s.ImgDiv />
          </s.Detatil>
        ) : null}
      </s.Frame>
    </>
  );
};

export default NewUserListItem;
