import React from 'react';
import styled from 'styled-components';
import { ReactComponent as icons1 } from '../../assets/img/headerPre.svg';
import { ReactComponent as icons2 } from '../../assets/img/sendMessage.svg';
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

  uploadBtn: styled.button`
    width: 50px;
    height: 30px;
    border-radius: 20%;
    background-color: #0000000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    
  `
};

function Icons({ icon: Icon }) {
  return <Icon fill="none" />;
}

const FormHeader = ({ text, type }) => {
  //쿼리스트링으로 하면 좋을 듯?
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(path);
  };
  const sendMessage = () => {
    alert('보내기');
  };
  const upload = () => {
    alert('업로드');
  };
  return (
    <>
      <s.fixedMenu>
        <s.Header>
          <s.pre
            onClick={() => {
              if (type === 'board') {
                movePage('/boardPage');
              } else {
                movePage('/home');
              }
            }}
          >
            <Icons icon={icons1} />
          </s.pre>
          <s.title>{text}</s.title>
          {/* <s.pre2 /> */}
          {type !== undefined ? (
            type === 'dm' ? (
              <s.pre
                onClick={() => {
                  movePage('send');
                }}
              >
                <Icons icon={icons2} />
              </s.pre>
            ) : type === 'board' ? (
              <s.uploadBtn
                onClick={() => {
                  upload();
                }}
              >
                완료
              </s.uploadBtn>
            ) : (
              <s.pre
                onClick={() => {
                  sendMessage();
                }}
              >
                <Icons icon={icons2} />
              </s.pre>
            )
          ) : (
            <s.pre2 />
          )}
        </s.Header>
      </s.fixedMenu>
    </>
  );
};

export default FormHeader;
