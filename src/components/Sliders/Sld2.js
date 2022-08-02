import React, {Component} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCart from "../Product-cart";
import axios from "axios";
import {myurl} from "../MyAxios";


class Sld extends Component {
    constructor() {
        super();
        this.state = {
            products:"",
        }
        let x;
    }
    componentDidMount() {
        axios.post(myurl + "api/product/getProductList1",{},{withCredentials:true})
            .then(res => this.setState({products:res.data.teas}))
    }

    render() {
        return (
            <div className={"product-list-2"}>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}>
                    {this.state.products ? this.state.products.map((m,index) => <SwiperSlide key={index}>
                        <ProductCart prod={m}/>
                    </SwiperSlide>) : <div>Loading</div>}
                    {this.state.products ? this.state.products.map((m,index) => <SwiperSlide key={index}>
                        <ProductCart prod={m}/>
                    </SwiperSlide>) : <div>Loading</div>}
                </Swiper>

            </div>
        );
    }
}

export default Sld;