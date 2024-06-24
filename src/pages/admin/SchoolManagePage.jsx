import React, { useState } from 'react';
import styled from 'styled-components';
import FormHeader from './../../components/common/FormHeader';
import MyPageList from './../../components/myPage/MyPageList';
import NewUser from '../../components/admin/List';
import List from '../../components/admin/List';
import InputBox from '../../components/common/InputBox';
import SchoolListItem from '../../components/AuthComponent/SchoolListItem';
import ListTitle from '../../components/admin/ListTitle';
import { theme } from './../../style/theme';
import SchoolModal from '../../components/modal/SchoolModal';
import { useRecoilState } from 'recoil';
import { SchoolInfoSetAtom } from '../../lib/recoil/modalAtom';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    /* background-color: #f1f3f5; */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  content: styled.div`
    margin: 0 auto;
    padding: 70px 0 30px 0;
    display: flex;
    flex-direction: column;
  `,
  titleDiv: styled.div`
    width: 80%;
    margin: 0 auto;
  `,
  resultDiv: styled.div`
    width: 90%;
    height: 400px;
    margin: 0 auto;
    overflow-y: scroll;
  `,
  Btn: styled.button`
    width: 70px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin: 10px auto;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.Gray};
  `,
};

const SchoolManagePage = () => {
  const [open, setOpen] = useRecoilState(SchoolInfoSetAtom);
  const [type, setType] = useState('');
  const [shcool, setSchool] = useState({});

  const openModal = (mode, data) => {
    if (mode === 'add') {
      setType(mode);
      setSchool({});
      setOpen(!open);
    } else {
      setType(mode);
      setSchool(data);
      setOpen(!open);
    }
  };
  const schoolData = [
    {
      name: '세종고등학교',
      addr: '세종시 조치원읍',
      addrNumber: '1',
    },
    {
      name: '부석고등학교',
      addr: '충청남도 서산시',
      addrNumber: '2',
    },
    {
      name: '충주여자고등학교',
      addr: '충청북도 충주시',
      addrNumber: '3',
    },
    {
      name: '대전고등학교',
      addr: '대전광역시',
      addrNumber: '4',
    },
  ];
  const optData = [
    {
      name: '학교명',
      value: 'name',
    },
    {
      name: '우편번호',
      value: 'addressNumber',
    },
    {
      name: '주소',
      value: 'address',
    },
  ];
  return (
    <>
      <s.Frame>
        <FormHeader text="학교 관리" />
        <s.content>
          <InputBox optData={optData} />
          <s.titleDiv>
            <ListTitle title="지원하는 학교 수" count={`${optData.length}개`} />
          </s.titleDiv>
          <s.resultDiv>
            {schoolData.map((data, index) => (
              <SchoolListItem
                key={index}
                text={data.name}
                addr={data.addr}
                click={() => openModal('update', data)}
              />
            ))}
          </s.resultDiv>
          <s.Btn onClick={() => openModal('add')}>등록</s.Btn>
        </s.content>
        {/* <List type="user" t1="가입 대기중인 회원" t2="기존 회원" /> */}
      </s.Frame>
      <SchoolModal type={type} data={shcool} />
    </>
  );
};

export default SchoolManagePage;
