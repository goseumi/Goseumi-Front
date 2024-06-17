import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as icon } from '../../assets/img/Logo.svg';
import { ReactComponent as search } from '../../assets/img/icons-1.svg';
import FormHeader from './../../components/common/FormHeader';
import MyPageList from './../../components/myPage/MyPageList';
import { theme } from './../../style/theme';
import SchoolSearchModal from '../../components/modal/SchoolSearchModal';
import { useRecoilState } from 'recoil';
import { SchoolSetAtom } from '../../lib/recoil/modalAtom';
import FormButton from './../../components/common/FormButton';
import Icon1 from '../../assets/img/imgUpload_icon.png';

const s = {
  Frame: styled.div`
    max-width: 428px;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  content: styled.div`
    width: 100%;
    /* height: 70vh; */
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  BoldTitle: styled.p`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  `,
  BoldText: styled.p`
    width: 95%;
    font-size: 12px;
    font-weight: bold;
  `,
  Text: styled.p`
    width: 95%;
    font-size: 14px;
    margin: 20px 0;
  `,
  searchDiv: styled.div`
    width: 80%;
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  `,
  condition: styled.select`
    width: 20%;
    font-size: 13px;
  `,
  input: styled.input`
    width: 70%;
    height: 30px;
    padding-left: 15px;
    background-color: #fff;
    font-size: 13px;
    outline-style: none;
  `,
  sLogo: styled(icon)``,
  sIcon: styled(search)`
    width: 30px;
    display: inline;
    cursor: pointer;
  `,
  btnDiv: styled.div`
    width: 90%;
  `,
  //이미지
  ImgBox: styled.div`
    width: 90%;
    height: 200px;
    border: 1px solid ${({ theme }) => theme.colors.mainLine};
    margin: 0 auto;
    cursor: pointer;
  `,
  ImgIcon: styled.img`
    width: 100%;
    height: 200px;
  `,
};

const SchoolAuthPage = () => {
  const [open, setOpen] = useRecoilState(SchoolSetAtom);
  const [selectedImage, setSelectedImage] = useState();
  const [imgFile, setImgFile] = useState('');
  const fileInputRef = useRef(null); // useRef를 생성
  const search = () => {
    setOpen(!open);
  };

  // 이미지 선택 시 호출되는 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
    if (file) {
      // 선택한 파일을 미리보기로 표시
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // const getDamage = async () => {
  //   // 이미지 서버로 보내는 작업
  //   try {
  //     const response = await ImgUploadApi(imgFile, DamageSelect);
  //     setData(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
      <s.Frame>
        <s.content>
          <s.sLogo width={100} height={100} fill="none" />
          <s.BoldTitle>잠깐!!</s.BoldTitle>
          <s.Text>
            고슴이는 회원님의 학교 인증 및 승인이 있어야 이용 가능합니다. <br />
            아래 검색창에서 회원님의 학교를 선택하시고 인증수단을 첨부해주세요.
          </s.Text>
          <s.BoldText>
            인증은 학생증, 입학증, 나이스 문서 등 한가지만 이용가능
            <br />
            인증 시 개인정보 수집 허용에 동의하며 수집된 정보는 학교 인증 후
            일괄 파기됩니다.
          </s.BoldText>
          <s.searchDiv>
            <s.condition defaultValue={''}>
              <option value="" disabled={true}>
                검색조건
              </option>
              <option value="school">학교명</option>
              <option value="addr">주소</option>
            </s.condition>
            <s.input
              id="nick"
              name="nickname"
              type="text"
              placeholder="검색어를 입력하세요."
            />
            <s.sIcon width={24} height={24} fill="none" onClick={search} />
          </s.searchDiv>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            ref={fileInputRef} // ref를 useRef로 연결
          />
          <s.ImgBox onClick={() => fileInputRef.current.click()}>
            {imgFile === '' ? (
              <s.ImgIcon
                style={{ width: '200px', margin: '0 auto' }}
                src={Icon1}
              />
            ) : (
              <s.ImgIcon src={selectedImage} />
            )}
          </s.ImgBox>
          <s.btnDiv>
            <FormButton type="add" onClick={() => alert('등록')} />
          </s.btnDiv>
        </s.content>
        <SchoolSearchModal />
      </s.Frame>
    </>
  );
};

export default SchoolAuthPage;
