// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ProductCart from "../Product-cart";
import axios from "axios";
import {myurl} from "../MyAxios";

export default () => {
    const count = false
    let products = []
    function getPr(){
        if (count == false){
            axios.post(myurl + "api/product/getProductList1",{},{withCredentials:true})
                .then(res => products.push(res.data),console.log(products))
        }
    }
    getPr()
    let x ="";
    let cart;
    function caw(){
        if(products != null){
            products.map(m => console.log(x),
            x = x + <SwiperSlide>
                <ProductCart/>
            </SwiperSlide>)
        }
    }
    caw()
    console.log(x)
    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => x = null}
        >
            {x}
        </Swiper>
    );
};