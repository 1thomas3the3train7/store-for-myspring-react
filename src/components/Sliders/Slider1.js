// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {myurl} from "../MyAxios";

export default (props) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}

        >
            {props.slaider ? props.slaider.map((m,index) => <SwiperSlide key={index}>
                <div className={"products-day"}>
                    <img src={myurl + "api/product/getImage?filename=" + m.name}
                         style={{width:"324px",height:"400px"}} alt=""/>
                </div>
            </SwiperSlide>) : <div>Loading</div>}

        </Swiper>
    );
};
