import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "../Newest car fleet/NewestCarCard.css";
import SliderImg1 from "../Newest car fleet/Slider Img 1.jpeg";
import SliderImg2 from "../Newest car fleet/Slider Img 2.jpeg";
import SliderImg3 from "../Newest car fleet/Slider Img 3.jpeg";
import SliderImg4 from "../Newest car fleet/Slider Img 4.jpeg";

export default function NewestCarCard() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2000, // Slide every 2 seconds
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={SliderImg1} alt="Car 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SliderImg2} alt="Car 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SliderImg3} alt="Car 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SliderImg4} alt="Car 4" />
      </SwiperSlide>
    </Swiper>
  );
}
