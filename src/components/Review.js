import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import UserReview from "./UserReview";

export default function Review() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        breakpoints={{
            // when window width is >= 320px
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            960: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1500: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="reviewCard">
        
        <UserReview 
                name="Georgia Boy aka brukks"
                url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU"
                review="I got a custom tool done today with them. They video chatted with me to figure out what I want - 2 days later I got the algo. Quick and easy. Great people!"
                
                
                />
        
        </div>

        </SwiperSlide>
        <SwiperSlide><div className="reviewCard">

             
                    <UserReview 
                name="Abdul Jamal"
                url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_R4DcAbsOh0xF603H_GTvZSgv1obSkwQ0V3k5FYmSj79GFyUcCGop_abdzNDlspt8UI&usqp=CAU"
                review="It's disneyland for traders lol"
                
                
                />
            </div>
        </SwiperSlide>
        <SwiperSlide><div className="reviewCard">
                <UserReview 
                name="Hailey117"
                url="https://artbreeder.b-cdn.net/imgs/81fff20bbbb4a176a018.jpeg?width=256"
                review="I bought 4 indicators at J-JO. Everyone has been suuuper helpful. They got tools for traders from all levels. I will definitely be stopping here again for a custom algo soon."
                
                
                />
            </div>
        </SwiperSlide>
        <SwiperSlide><div className="reviewCard">
        <UserReview 
                name="Miguel Zharkov"
                url="https://i.insider.com/5023d09aeab8eac14f000000?width=600&format=jpeg&auto=webp"
                review="My favorite trading discord"
                
                
                />
            </div>
        </SwiperSlide>
        <SwiperSlide><div className="reviewCard">
    
                        <UserReview 

name="Anakin Skywalker"
url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9m_tz5_8aOG8sGbvII4tNokPIN9B2dMqlsw&usqp=CAU"
review="The trading system helped me increase my winrate. It's simple and takes all the pressure off of me. I don't get faked out easily anymore" 
 />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
