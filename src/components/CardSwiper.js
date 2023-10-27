import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Nft1 from "../images/Nft-1.png";
import Nft2 from "../images/Nft-2.png";
import Nft3 from "../images/Nft-3.png";
import Nft4 from "../images/Nft-4.png";
import Nft5 from "../images/Nft-5.png";
import Nft6 from "../images/Nft-6.png";
import Nft7 from "../images/Nft-7.png";
import Nft8 from "../images/Nft-8.png";
import { Box } from "@mui/material";

const CardSwiper = () => {
  return (
    <>
      <Box
        sx={{
          mt: { xs: "100px", lg: "0" },
          mb: { xs: "100px", lg: "0" },
          "@media screen and (max-width: 600px)": {
            overflow: "hidden",
          },
          "& .swiper": {
            "@media screen and (max-width: 600px)": {
              width: "274px",
              height: "410px",
            },
          },
        }}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          centeredSlides={true}
          initialSlide={4}
          loop={true}
          mousewheel={{ invert: false }}
        >
          <SwiperSlide>
            <Image layout="fill" src={Nft1.src} />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout="fill" src={Nft2.src} />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout="fill" src={Nft3.src} />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout="fill" src={Nft4.src} />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout="fill" src={Nft5.src} />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout="fill" src={Nft6.src} />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout="fill" src={Nft7.src} />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout="fill" src={Nft8.src} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default CardSwiper;
