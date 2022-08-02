import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useSwiper } from 'swiper/react';
import 'swiper/css';

export default (prop) => {
    const swiper = useSwiper();
    console.log(prop.slaider)
    return (

        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}

        >
            {prop.slaider ? prop.slaider.map((m,index) => <SwiperSlide key={index}>
                <div className={"slide-img"}>
                    <img src={"http://localhost:8080/api/product/getImage?filename=" + m.name} style={{width:"1012px",height:"400px"}} alt=""/>
                </div>
            </SwiperSlide>) : <div>Loading</div>}

        </Swiper>
    );
};