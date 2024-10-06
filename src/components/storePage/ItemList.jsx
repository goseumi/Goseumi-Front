import React from 'react';
import styled from 'styled-components';
import Image from './../common/Image';
import IconSvg from './../common/IconSvg';
import test from '../../assets/img/Logo.png';

const s = {
  Container: styled.section`
    height: 70px;
    min-width: 250px;
    display: flex;
    padding: 0 15px;
    margin: 5px 0;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.mainLine};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `,
  ItemName: styled.div`
    color: ${(props) => props.theme.colors.textBasic1};
    font-size: 16px;
    font-weight: 600;
  `,
  ItemPrice: styled.div`
    color: ${(props) => props.theme.colors.textBasic1};
    font-size: 14px;
    font-weight: 500;
    align-items: center;
  `,
  Available: styled.div`
    color: ${(props) => props.theme.colors.main};
    font-size: 12px;
    font-weight: 600;
  `,
  Unavailable: styled.div`
    color: ${(props) => props.theme.colors.textBasic1};
    font-size: 12px;
    font-weight: 600;
  `,
  ItemLike: styled.div`
    color: ${(props) => props.theme.colors.textBasic1};
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
  `,
  ItemInfoArea: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
  `,
  ItemTopArea: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  `,
  ItemBottomArea: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ItemLikeArea: styled.div`
    display: flex;
    align-items: center;
  `,
  Horizon: styled.hr`
    margin: 0 15px;
    min-width: 250px;
    border-color: ${(props) => props.theme.colors.sub};
  `,
  ItemImage: styled.div`
    width: 70px;
    height: 70px;
    min-width: 70px;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
};

const ItemList = ({ itemId, itemImage, itemName, itemPrice, isOnSale, itemLike, isLike, onClick }) => {
  return (
    <s.Container onClick={onClick}>
      {/* <Image width="70px" height="70px" src={itemImage} type="rect" /> */}
      <s.ItemImage>
        <Image width="70px" height="70px" src={test} type="rect" />
      </s.ItemImage>
      <s.ItemInfoArea>
        <s.ItemTopArea>
          <s.ItemName>{itemName}</s.ItemName>
          {isOnSale === true ? <s.Available>판매중</s.Available> : <s.Unavailable>판매완료 </s.Unavailable>}
        </s.ItemTopArea>
        <s.ItemBottomArea>
          <s.ItemPrice>{Number(itemPrice).toLocaleString()}원</s.ItemPrice>
          <s.ItemLikeArea>
            {/* {like === 1 ? (
              <IconSvg width="23" height="23" Ico={likeOn} />
            ) : (
              <IconSvg width="23" height="23" Ico={likeOff} />
            )} */}
            {/* <IconSvg width="23" height="23" Ico={test} /> */}
            <s.ItemLike>{itemLike}</s.ItemLike>
          </s.ItemLikeArea>
        </s.ItemBottomArea>
      </s.ItemInfoArea>
    </s.Container>
  );
};

export default ItemList;
