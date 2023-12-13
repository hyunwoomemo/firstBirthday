import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../public/images/bibi9.jpg";
// Import Swiper styles
import "swiper/css";
import image1 from "../../public/images/image1.png";
import image2 from "../../public/images/image2.png";
import image3 from "../../public/images/image3.png";
import image4 from "../../public/images/image4.png";
import styled from "styled-components";

const Carousel = () => {
  const swiperRef = useRef();
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
    <div style={{ padding: "0 1rem" }}>
      <Swiper spaceBetween={50} style={{ height: "auto" }} slidesPerView={2} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <ImageContainer>
            <Image alt="image" layout="responsive" style={{ borderRadius: 10, position: "absolute" }} objectFit="cover" src={image1} />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image alt="image" layout="responsive" width={"90%"} style={{ borderRadius: 10 }} objectFit="cover" src={image2} />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image alt="image" layout="responsive" width={"90%"} style={{ borderRadius: 10 }} objectFit="cover" src={image3} />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image alt="image" layout="responsive" width={"90%"} style={{ borderRadius: 10 }} objectFit="cover" src={image4} />
          </ImageContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

const ImageContainer = styled.div`
  width: 100;
  height: 100;
  border-radius: 10px;
`;
