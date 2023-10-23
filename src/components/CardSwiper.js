import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import alienImg from "../images/alienNft.png";
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
            <Image
              layout="fill"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2929f534-3bc3-4cbd-b84c-80df863d5a38"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="fill"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b6f5eb64-887c-43b1-aaba-d52a4c59a379"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="fill"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e906353b-fde0-4518-9a03-16545c1161bd"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="fill"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fc21e481-e28a-41a8-9db3-3b62c1ddc17e"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout="fill" src={alienImg.src} />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="fill"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2ad44f5d-2215-4416-9c9b-2bae3be51a67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="fill"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/aa8fe914-741f-4bf4-ad4a-24f19d1f4178"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="fill"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d5f10b4f-7d34-45bd-bb5f-5f1530c2ac1c"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              layout="fill"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7cbac263-7c55-4428-908e-31018dc1bce3"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default CardSwiper;
