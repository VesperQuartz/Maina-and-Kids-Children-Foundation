import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import images
import hero1 from "/assets/hero1.jpg";
import hero2 from "/assets/hero2.jpg";
import hero3 from "/assets/hero3.jpg";
import hero4 from "/assets/hero4.jpg";
import hero5 from "/assets/hero5.jpg";
import hero6 from "/assets/hero6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export const HeroSwipper = () => {
  const [images] = React.useState([hero1, hero2, hero3, hero4, hero5, hero6]);

  // State to keep track of the current image index

  return (
    <div className="justify-center flex items-center h-[520px]">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-full" // Added dimensions
      >
        {images.map((image) => {
          return (
            <SwiperSlide
              key={crypto.randomUUID()}
              className="flex items-center justify-center relative"
            >
              <img
                className="object-center object-cover w-full h-full brightness-50"
                src={image}
                alt={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
