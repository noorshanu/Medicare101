
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <>
      <Swiper navigation={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay,Navigation]} className="mySwiper">
        <SwiperSlide>  <img src=" images/hero.webp" alt=""  className=" rounded-lg" /></SwiperSlide>
        <SwiperSlide><img src=" images/slider1.jpg" alt=""  className=" rounded-lg" /></SwiperSlide>
        <SwiperSlide><img src=" images/slider2.jpg" alt=""  className=" rounded-lg" /></SwiperSlide>
    
      </Swiper>
    </>
  );
}
