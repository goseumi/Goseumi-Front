import React from 'react';
import styled from 'styled-components';
import { ReactComponent as icons1 } from '../../assets/img/headerPre.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const s = {
  // header
  fixedMenu: styled.div`
    position: fixed;
    width: 100%;
    max-width: 428px;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
  `,
  Header: styled.header`
    width: 100%;
    max-width: 428px;
    height: 60px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  title: styled.div`
    width: 100px;
    height: 24px;
    margin: 0 15%;
    text-align: center;
  `,

  pre: styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `,
  preImg: styled.img``,
  pre2: styled.div`
    width: 24px;
    height: 24px;
  `,
};

function Icons({ icon: Icon }) {
  return <Icon fill="none" />;
}

const FormHeader = ({ type }) => {
  //쿼리스트링으로 하면 좋을 듯?
  const navigate = useNavigate();
  const movePage = () => {
    navigate('/home');
  };
  return (
    <>
      <s.fixedMenu>
        <s.Header>
          <s.pre onClick={movePage}>
            <Icons icon={icons1} />
          </s.pre>
          <s.title>
            {type === 'regist'
              ? '회원가입'
              : type === 'find'
              ? '비밀번호 발급'
              : type === 'PwChange'
              ? '비밀번호 변경'
              : type === 'mypage'
              ? '마이페이지'
              : type === 'time'
              ? '시간표'
              : ''}
          </s.title>
          <s.pre2 />
        </s.Header>
      </s.fixedMenu>
    </>
  );
};

export default FormHeader;
