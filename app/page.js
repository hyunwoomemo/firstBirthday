"use client";
import Image from "next/image";
import logo from "../public/images/bibi9.jpg";
import text1 from "../public/images/text1.png";
import icon from "../public/images/icon.png";
import map from "../public/images/map.png";
import styled from "styled-components";
import TypeIt from "typeit-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaRegCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "./global.css";
import Carousel from "./components/Carousel";

export default function Home() {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      toast.success("주소가 복사되었습니다.");
    } catch (error) {}
  };
  //junjangsee.tistory.com/entry/React-리액트로-클립보드-복사-기능-만들어보기-feat-Custom-Hook [개발 여행:티스토리]

  출처: https: return (
    <Container className="container">
      <Toaster />
      <MainImageContainer>
        <StyleImage layout="responsive" objectFit="cover" src={logo} priority={true} quality={100} alt="logo" />
      </MainImageContainer>
      <ImageContainer>
        <StyleImage src={text1} quality={100} alt="text1" />
      </ImageContainer>
      <TextContainer>
        <FirstRowText>
          <Text style={{ letterSpacing: 8 }}>이지안첫생일</Text>
          <GrayText style={{ fontSize: 14 }}>2024년 1월 13일 (토)</GrayText>
        </FirstRowText>
        <SecondRowText>
          <GrayText style={{ fontSize: 14 }}>소중한 분들을 초대합니다.</GrayText>
          <GrayText style={{ fontSize: 14 }}>오후 5:00 올드밀 3층 A룸</GrayText>
        </SecondRowText>
      </TextContainer>
      <TextImageContainer style={{ marginTop: 100 }}>
        <TextImage src={icon} width={100} height={100} quality={100} alt="text3" />
      </TextImageContainer>
      <TextContainer>
        <SecondText>어느덧 1년, 우리 지안이가 벌써  첫 번째 생일을 맞이했습니다.</SecondText>
        <SecondText>소중한 자리에 소중한 분들을 모시고자 합니다.</SecondText>
        <SecondText>바쁘시더라도 참석해주시어 지안이를 축하해주시면</SecondText>
        <SecondText>정말 감사하겠습니다.</SecondText>
      </TextContainer>
      <ParentsContainer>
        <ParentsItem>
          <ParentsTitle>아빠</ParentsTitle>
          <ParentsName>이현우</ParentsName>
        </ParentsItem>
        <ParentsItem>
          <ParentsTitle>엄마</ParentsTitle>
          <ParentsName>조은비</ParentsName>
        </ParentsItem>
        <Text style={{ fontSize: 14 }}>올림</Text>
      </ParentsContainer>
      <Carousel />
      <TextImageContainer>
        <StyleImage src={map} quality={100} alt="map" style={{ margin: "1rem 0" }} />
      </TextImageContainer>
      <AddressContainer>
        <Text style={{ fontWeight: "bold" }}>주소</Text>
        <GrayText>충남 아산시 신정로 532 올드밀 3F 파티룸A</GrayText>
        <FaRegCopy onClick={() => handleCopyClipBoard("충남 아산시 신정로 532 올드밀 3F 파티룸A")} />
      </AddressContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 0;
  height: 100%;
  width: 100%;
`;

const Title = styled(TypeIt)`
  width: 90%;
  margin: 1rem auto;
  text-align: center;
`;

const MainImageContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  margin: 0 auto;
`;

const StyleImage = styled(Image)`
  width: 100%;
  height: fit-content;
`;

const Header = styled.div`
  width: 100%;
  background-color: red;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  /* height: 300px; */
`;

const TextContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem 0;
`;

const FirstRowText = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SecondRowText = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

const GrayText = styled(Text)`
  color: gray;
`;

const TextImageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const TextImage = styled(StyleImage)`
  width: 50px;
  height: fit-content;
`;

const SecondText = styled(GrayText)`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

const ParentsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;

const ParentsItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const ParentsTitle = styled.p`
  color: rgb(182, 153, 126);
  padding: 0;
  margin: 0;
`;
const ParentsName = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
`;

const AddressContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`;
