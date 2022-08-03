import React from 'react';
import Sld3 from "./Sliders/Sld3";
import axios from "axios";
import {myurl} from "./MyAxios";

function ProductList3(props) {
    return (
        <div>
            <div className={"product-list-1"}>
                <p className={"text-1"}>
                    Скидки
                </p>
            </div>
            <div className={"product-list-2-wrap"}>
                <div className={"product-list-2"}>
                    <Sld3/>
                </div>
            </div>
        </div>
    );
}

export default ProductList3;