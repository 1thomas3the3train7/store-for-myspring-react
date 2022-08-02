import React, {useState} from 'react';
import {FreeMode, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Productreview from "../Productreview";
import {myurl} from "../MyAxios";

function Galleryslide(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className={"myswiper1x"}>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 my-swiper-img"
            >
                <SwiperSlide>
                    <img src={myurl + "api/product/getImage?filename=" + props.prod.mainLinkImage}
                    className={"my-swiper-img"}/>
                </SwiperSlide>
                {props.prod.teaImages.map((m,index) =>
                    <SwiperSlide key={index}>
                        <img src={myurl + "api/product/getImage?filename=" + m.linkImage}
                             className={"my-swiper-img"}/>
                    </SwiperSlide>
                )}

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper my-swiper-img-1"
            >
                <SwiperSlide>
                    <img src={myurl + "api/product/getImage?filename=" + props.prod.mainLinkImage}
                         className={"my-swiper-img-2"}/>
                </SwiperSlide>
                {props.prod.teaImages.map((m,index) =>
                    <SwiperSlide key={index}>
                        <img src={myurl + "api/product/getImage?filename=" + m.linkImage}
                             className={"my-swiper-img-2"}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default Galleryslide;