import React from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/common/FormHeader';
import NavBar from '../../components/common/NavBar';
import ItemList from '../../components/storePage/ItemList';

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
};

const StorePage = () => {
  return (
    <s.Container>
      <FormHeader text="문방구" color="white" />
      <s.MainArea>
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
        <ItemList isLike={true} isOnSale={true} itemId={1} itemLike={9} itemPrice={20000} itemName={'테스트'} />
      </s.MainArea>
      <NavBar />
    </s.Container>
  );
};

export default StorePage;
