"use client";
import Image from "next/image";
import logo from "../public/images/jian.png";
import map from "../public/images/map.jpeg";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <StyleImage src={logo} alt="logo" />
      <StyleImage src={map} alt="map" />
    </div>
  );
}

const StyleImage = styled(Image)`
  width: 100%;
  height: fit-content;
`;

const Header = styled.div`
  width: 100%;
  background-color: red;
`;
