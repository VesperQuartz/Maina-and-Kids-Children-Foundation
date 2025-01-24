import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import images
import port1 from "/assets/images/port1.jpg";
import port2 from "/assets/images/port2.jpg";
import port3 from "/assets/images/port3.jpg";
import port4 from "/assets/images/port4.jpg";
import port5 from "/assets/images/port5.jpg";
import port6 from "/assets/images/port6.jpg";
import port7 from "/assets/images/port7.jpg";
import port8 from "/assets/images/port8.jpg";
import port9 from "/assets/images/port9.jpg";
import port10 from "/assets/images/port10.jpg";
import port11 from "/assets/images/port11.jpg";
import port12 from "/assets/images/port12.jpg";
import port13 from "/assets/images/port13.jpg";
import port14 from "/assets/images/port14.jpg";
import port15 from "/assets/images/port15.jpg";
import port16 from "/assets/images/port16.jpg";
import port17 from "/assets/images/port17.jpg";
import port18 from "/assets/images/port18.jpg";
import port19 from "/assets/images/port19.jpg";
import port20 from "/assets/images/port20.jpg";
import port21 from "/assets/images/port21.jpg";
import port22 from "/assets/images/port22.jpg";
import port23 from "/assets/images/port23.jpg";
import port24 from "/assets/images/port24.jpg";
import port25 from "/assets/images/port25.jpg";
import port26 from "/assets/images/port26.jpg";
import port27 from "/assets/images/port27.jpg";
import port28 from "/assets/images/port28.jpg";
import port29 from "/assets/images/port29.jpg";
import port30 from "/assets/images/port30.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

const SwiperComponent = () => {
  const [images] = React.useState([
    port10,
    port11,
    port12,
    port13,
    port14,
    port15,
    port16,
    port17,
    port18,
    port19,
    port1,
    port20,
    port21,
    port22,
    port23,
    port24,
    port25,
    port26,
    port27,
    port28,
    port29,
    port2,
    port30,
    port3,
    port4,
    port5,
    port6,
    port7,
    port8,
    port9,
  ]);

  // State to keep track of the current image index

  return (
    <div className="h-full w-[450px] justify-center flex items-center">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full h-full" // Added dimensions
      >
        {images.map((image) => {
          return (
            <SwiperSlide
              key={crypto.randomUUID()}
              className="flex items-center justify-center"
            >
              <img
                className="w-full h-[500px] object-cover md:h-[600px] lg:h-[700px]"
                src={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
