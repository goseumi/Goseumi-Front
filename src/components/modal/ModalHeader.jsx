import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as icons1 } from '../../assets/img/close.svg';
import { useRecoilState } from 'recoil';

const s = {
  // header
  fixedMenu: styled.div`
    position: fixed;
    width: 100%;
    max-width: 428px;
    border: 1px solid red;
    background-color: #fff;
  `,
  Header: styled.header`
    max-width: 428px;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  title: styled.div`
    width: fit-content;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-weight: bold;
  `,

  pre: styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `,
  pre2: styled.div`
    width: 24px;
    height: 24px;
  `,
  //
  grade: styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
    margin: 0 auto 10px;
  `,
  gradeli: styled.div`
    width: 100px;
    border: 1px solid red;
    margin-right: 10px;
    font-size: 15px;
    font-weight: bold;
    cursor: grab;
    user-select: none;
  `,
};

const ModalHeader = ({ text, setAtom }) => {
  const [open, setOpen] = useRecoilState(setAtom);
  const handleClose = () => {
    setOpen(!open);
  };

  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragging, setDragging] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        const x = e.clientX - startX;
        scrollRef.current.scrollLeft = scrollLeft - x;
      }
    };

    const handleMouseUp = () => {
      if (dragging) {
        setDragging(false);
        scrollRef.current.style.cursor = 'grab';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, startX, scrollLeft]);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
    setDragging(true);
    scrollRef.current.style.cursor = 'grabbing';
  };
  // 드래그

  function Icons({ icon: Icon }) {
    return <Icon fill="none" />;
  }

  return (
    <>
      <s.fixedMenu>
        <s.Header>
          <s.title>{text}</s.title>
          <s.pre onClick={handleClose}>
            <Icons icon={icons1} />
          </s.pre>
        </s.Header>
        {text === '내신계산기' ? (
          <s.grade ref={scrollRef} onMouseDown={handleMouseDown}>
            <s.gradeli>1학년 1학기</s.gradeli>
            <s.gradeli>1학년 2학기</s.gradeli>
            <s.gradeli>2학년 1학기</s.gradeli>
            <s.gradeli>2학년 2학기</s.gradeli>
            <s.gradeli>3학년 1학기</s.gradeli>
            <s.gradeli>3학년 2학기</s.gradeli>
            <s.gradeli>3학년 2학기</s.gradeli>
            <s.gradeli>3학년 2학기</s.gradeli>
            <s.gradeli>3학년 2학기</s.gradeli>
            <s.gradeli>3학년 2학기</s.gradeli>
            <s.gradeli>3학년 2학기</s.gradeli>
          </s.grade>
        ) : null}
      </s.fixedMenu>
    </>
  );
};

export default ModalHeader;
