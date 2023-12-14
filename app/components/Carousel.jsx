import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../public/images/bibi9.jpg";
// Import Swiper styles
import "swiper/css";
import image1 from "../../public/images/image1.png";
import image2 from "../../public/images/image2.png";
import image3 from "../../public/images/image3.png";
import image4 from "../../public/images/image4.png";
import styled from "styled-components";

const images = [image1, image2, image3, image4];

const Carousel = () => {
  console.log(window.scrollY);

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  });

  const swiperRef = useRef();
  const [active, setActive] = useState(false);
  const breakpoints = {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };
  return (
    <div style={{ padding: "3rem 1rem" }}>
      <Swiper spaceBetween={20} style={{ height: "auto" }} slidesPerView={2.5} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <ImageContainer>
            <Image alt="image" className="image" onClick={() => setActive({ ...active, image1: true })} layout="responsive" style={{ borderRadius: 10, position: "absolute" }} src={image1} />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image alt="image" layout="responsive" width={"90%"} style={{ borderRadius: 10 }} src={image2} />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image alt="image" layout="responsive" width={"90%"} style={{ borderRadius: 10 }} src={image3} />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image alt="image" layout="responsive" width={"90%"} style={{ borderRadius: 10 }} src={image4} />
          </ImageContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

const ImageContainer = styled.div`
  /* width: 100;
  height: 100; */
  border-radius: 10px;
  position: relative;
`;

const Modal = styled.div`
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 500px;
  background-color: red;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(120%);
  background-color: gray;
`;
