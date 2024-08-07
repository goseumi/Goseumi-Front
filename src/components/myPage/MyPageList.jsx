import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isAdmin } from '../../lib/recoil/isLoginAtom';
import MyPageListItem from './MyPageListItem';
import { useNavigate } from 'react-router-dom';

const s = {
  content: styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 60px;
    margin: 0 auto;
    overflow: scroll;
  `,
  List: styled.div`
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #d3d3d3;
  `,
  ListTitme: styled.div`
    font-weight: bold;
    font-size: 15px;
    margin: 20px 0 10px 0;
  `,
  ListItem: styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
  `,
  ListItemId: styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-bottom: 10px;
    justify-content: space-between;
    cursor: default;
  `,
  id: styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #d3d3d3;
  `,
};

const MyPageList = ({ data }) => {
  const navigate = useNavigate();
  const handleMovePage = (path) => {
    navigate(path);
  };
  return (
    // <s.content>
    //   <s.List>
    //     <s.ListTitme>계정</s.ListTitme>
    //     <s.ListItemId>
    //       아이디
    //       <s.id>아이디</s.id>
    //     </s.ListItemId>
    //     <s.ListItem>비밀번호 변경</s.ListItem>
    //     <s.ListItem>학교정보 변경</s.ListItem>
    //   </s.List>
    //   <s.List>
    //     <s.ListTitme>커뮤니티 & 쪽지</s.ListTitme>
    //     <s.ListItem>이용제한 내역</s.ListItem>
    //     <s.ListItem>쪽지 설정</s.ListItem>
    //   </s.List>
    //   <s.List>
    //     <s.ListTitme>이용안내</s.ListTitme>
    //     <s.ListItemId>
    //       앱 버전
    //       <s.id>0.0.1</s.id>
    //     </s.ListItemId>
    //     <s.ListItem>문의하기</s.ListItem>
    //     <s.ListItem>테스트</s.ListItem>
    //   </s.List>
    //   <s.List>
    //     <s.ListTitme>기타</s.ListTitme>
    //     <s.ListItem>회원 탈퇴</s.ListItem>
    //     <s.ListItem>로그아웃</s.ListItem>
    //   </s.List>
    // </s.content>
    <s.content>
      <s.List>
        <s.ListTitme>계정</s.ListTitme>
        <s.ListItemId>
          아이디
          <s.id>아이디</s.id>
        </s.ListItemId>
        <MyPageListItem text="비밀번호 변경" permission="user" />
        <MyPageListItem text="학교정보 변경" permission="user" />
        <MyPageListItem text="메일 인증" permission="user" />
        <MyPageListItem
          text="회원 관리"
          permission="admin"
          onclick={() => handleMovePage('user')}
        />
        <MyPageListItem
          text="학교 관리"
          permission="admin"
          onclick={() => handleMovePage('school')}
        />
        <MyPageListItem text="신고접수 내역" permission="admin" />
      </s.List>
      <s.List>
        <s.ListTitme>커뮤니티 & 쪽지</s.ListTitme>
        <MyPageListItem
          text="카테고리 관리"
          permission="admin"
          onclick={() => handleMovePage('category')}
        />
        <MyPageListItem text="이용제한 내역" permission="user" />
        <MyPageListItem text="쪽지 설정" permission="all" />
      </s.List>
      <s.List>
        <s.ListTitme>이용안내</s.ListTitme>
        <s.ListItemId>
          앱 버전
          <s.id>0.0.1</s.id>
        </s.ListItemId>
        <MyPageListItem text="문의하기" permission="user" />
        <MyPageListItem text="테스트" permission="user" />
      </s.List>
      <s.List>
        <s.ListTitme>기타</s.ListTitme>
        <MyPageListItem text="회원 탈퇴" permission="user" />
        <MyPageListItem text="로그아웃" permission="all" />
      </s.List>
    </s.content>
  );
};

export default MyPageList;
