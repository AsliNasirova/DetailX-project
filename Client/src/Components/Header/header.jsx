import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './header.scss'

import { Pagination, Navigation } from 'swiper/modules';

export default function Header() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="header">
                <div className="imageHeader">
                <img src="https://wallpapercave.com/wp/wp5333507.jpg" alt="" />
                </div>
                <div className="textHeader">

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="header">
                <div className="imageHeader">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltm1oEctoafQ0QNnc5uNBeRFzYVfobU3sLEK_9UkvygcBMJZHwDik7W9LQsaOIFsV09c&usqp=CAU" alt="" />
                </div>
                <div className="textHeader">

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="header">
                <div className="imageHeader">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYTxuO8Ute34GOG3-q5X_9JUDtSHmBno0J9p7S4lPvP7UswzjMJuZZiYuxJwq_U7SsQU&usqp=CAU" alt="" />
                </div>
                <div className="textHeader">

                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}