import React from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/common/FormHeader';
import NavBar from '../../components/common/NavBar';
import ItemList from '../../components/storePage/ItemList';
import { useRecoilState } from 'recoil';
import { ItemSetAtom } from '../../lib/recoil/modalAtom';
import ItemModal from '../../components/modal/ItemModal';

const s = {
  Container: styled.div`
    height: 100%;
  `,
  MainArea: styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid red;
    padding: 65px 0 100px 0;
    overflow: auto;
  `,
  test: styled.div`
    background-color: red;
    height: 100%;
  `,
  WriteBtn: styled.div`
    width: 80px;
    height: 30px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 10px;
    border: 1px solid #d3d3d3;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -50px; /* width의 50% */
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  `,
};

const StorePage = () => {
  const [open, setOpen] = useRecoilState(ItemSetAtom);
  const handleModalOpen = () => {
    setOpen(!open);
  };
  return (
    <s.Container>
      <FormHeader text="문방구" color="white" />
      <s.MainArea>
        <ItemList
          isLike={true}
          isOnSale={true}
          itemId={1}
          itemLike={9}
          itemPrice={20000}
          itemName={'테스트'}
          onClick={handleModalOpen}
        />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
      </s.MainArea>
      <s.WriteBtn>물건팔기</s.WriteBtn>
      {/* <NavBar /> */}
      <ItemModal />
    </s.Container>
  );
};

export default StorePage;
