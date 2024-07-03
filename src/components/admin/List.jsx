import React, { useState } from 'react';
import styled from 'styled-components';
import NewUserList from './TopListItem';
import { dummy } from './dummy';
import { dummy2 } from './dummy2';
import ListItem from './TopListItem';
import TopListItem from './TopListItem';
import BottomListItem from './BottomListItem';
import { theme } from './../../style/theme';
import { useRecoilState } from 'recoil';
import { CategorySetAtom } from '../../lib/recoil/modalAtom';
import CategoryModal from '../modal/CategoryModal';
import ListTitle from './ListTitle';

const s = {
  content: styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 70px;
  `,
  contentDiv: styled.div`
    width: 100%;
    /* background-color: #fff; */
    background-color: #f1f3f5;
    /* border: 1px solid ${({ theme }) => theme.colors.mainLine}; */
    border-radius: 10px;
    height: 260px;
    padding: 10px;
    margin-bottom: 10px;
    clear: both;
  `,
  dataDiv: styled.div`
    width: 100%;
    height: 220px;
    overflow-y: scroll;
  `,
  modalBtn: styled.button`
    width: 80px;
    height: 30px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 10px;
    float: right;
    border: 1px solid ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.Gray};
  `,
};

const List = ({ type, t1, t2 }) => {
  const [open, setOpen] = useRecoilState(CategorySetAtom);
  const [modalText, setModalText] = useState('카테고리 등록');
  const [category, setCategory] = useState('');
  const handleModalOpen = (text, categoryText) => {
    setCategory(categoryText);
    setModalText(text);
    setOpen(!open);
  };

  return (
    <s.content>
      {type === 'category' && (
        <s.modalBtn onClick={() => handleModalOpen('카테고리 등록', '')}>
          카테고리 등록
        </s.modalBtn>
      )}
      <s.contentDiv>
        <ListTitle title={t1} count={`${dummy.length}명`} />
        <s.dataDiv>
          {type === 'user'
            ? dummy.map((data, index) => (
                <TopListItem key={index} data={data} type={type} />
              ))
            : dummy2.map((data, index) => (
                <TopListItem
                  key={index}
                  data={data}
                  type={type}
                  modal={handleModalOpen}
                />
              ))}
        </s.dataDiv>
      </s.contentDiv>
      <s.contentDiv>
        <ListTitle title={t2} count={`${1}명`} />
        <s.dataDiv>
          <BottomListItem type={type} data={dummy[0]} />
        </s.dataDiv>
      </s.contentDiv>
      <CategoryModal text={modalText} category={category} />
    </s.content>
  );
};

export default List;
