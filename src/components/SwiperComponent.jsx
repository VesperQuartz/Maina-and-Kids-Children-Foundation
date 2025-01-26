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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

const SwiperComponent = () => {
  const [images] = React.useState([
    port10,
    port11,
    port12,
    port1,
    port2,
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
