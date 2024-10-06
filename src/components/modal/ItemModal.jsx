import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import '../../style/modal.css';
import { useRecoilState } from 'recoil';
import { ItemSetAtom } from '../../lib/recoil/modalAtom';
import ModalHeader from './ModalHeader';
import Button from './../common/Button';
import IconSvg from '../common/IconSvg';
import { ReactComponent as likeOn } from '../../assets/svg/likeOn.svg';
import { ReactComponent as likeOff } from '../../assets/svg/likeOff.svg';
import Image from '../common/Image';
import ImageCarousel from '../storePage/ImageCarousel';

const s = {
  content: styled.div`
    height: 100vh;
    padding-top: 70px;
    overflow-y: scroll;
  `,
  inputDiv: styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  `,
  CategoryInput: styled.input`
    width: 75%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    font-size: 13px;
    padding-left: 10px;
  `,
  Btn: styled.button`
    width: 20%;
    height: 30px;
    font-weight: bold;
    font-size: 12px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.Gray};
  `,
  //
  Container: styled.section`
    padding-top: 57px;
    height: 100%;
    background-color: ${(props) => props.theme.bgColor};
    overflow-y: auto;
  `,
  SellerInfo: styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  `,
  SellerName: styled.div`
    color: ${(props) => props.theme.textBasic1};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 7px;
    cursor: default;
  `,
  SellerInfoContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  CreatedAt: styled.div`
    color: ${(props) => props.theme.colors.textBasic1};
    font-size: 12px;
    font-weight: 400;
    cursor: default;
  `,
  LikeCnt: styled.div`
    color: ${(props) => props.theme.colors.textBasic1};
    font-size: 12px;
    font-weight: 500;
    margin-left: 7px;
    cursor: default;
  `,
  SellerNameArea: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    cursor: default;
  `,
  LikeArea: styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
  `,
  ButtonArea: styled.div`
    display: flex;
    margin-left: auto;
  `,
  ItemTitleArea: styled.div`
    margin: 20px 0;
    padding: 0 20px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  ItemName: styled.div`
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    font-weight: 500;
    cursor: default;
  `,
  ItemPrice: styled.div`
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    font-weight: 700;
    cursor: default;
  `,
  Horizon: styled.hr`
    margin: 0 20px;
    border-color: ${(props) => props.theme.subColor};
  `,
  ItemContent: styled.div`
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
    font-weight: 500;
    padding: 0 20px;
    margin: 20px 0;
    cursor: default;
  `,
  ActionButtons: styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
    gap: 10px;
  `,
  ItemStatus: styled.div`
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 600;
    text-align: right;
  `,
};

const ItemModal = ({}) => {
  const [open, setOpen] = useRecoilState(ItemSetAtom);
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={handleClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <ModalHeader text={'문방구 상세'} setAtom={ItemSetAtom} />
      <s.content>
        <ImageCarousel images={[]} />
        <s.SellerInfo>
          <s.SellerInfoContainer>
            <s.SellerNameArea>
              <s.SellerName>이름</s.SellerName>
              <s.CreatedAt>시간</s.CreatedAt>
            </s.SellerNameArea>
          </s.SellerInfoContainer>
          <s.ButtonArea>
            <s.LikeArea>
              <IconSvg width="23" height="23" Ico={true ? likeOn : likeOff} />
              <s.LikeCnt>7</s.LikeCnt>
            </s.LikeArea>
            <Button width="80px" height="30px" children="채팅하기" type="main" size="14px" bold="500" />
          </s.ButtonArea>
        </s.SellerInfo>
        <s.ItemStatus>판매완료</s.ItemStatus>
        <s.ItemTitleArea>
          <s.ItemName>물건 이름</s.ItemName>
          <s.ItemPrice>{Number(20000).toLocaleString()}원</s.ItemPrice>
        </s.ItemTitleArea>
        <s.Horizon />
        <s.ItemContent>물건 설명</s.ItemContent>
        <s.ActionButtons>
          <Button width="60px" height="30px" children="수정" type="main" size="14px" bold="500" />
          <Button width="60px" height="30px" children="삭제" type="danger" size="14px" bold="500" />
          <Button width="80px" height="30px" children="판매완료" type="main" size="14px" bold="500" />
        </s.ActionButtons>
      </s.content>
    </ReactModal>
  );
};

export default ItemModal;
