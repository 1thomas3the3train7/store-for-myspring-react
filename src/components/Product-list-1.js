import React from 'react';
import {Link} from "react-router-dom";
import Sld from "./Sliders/sld";
import Example from "./Sliders/Example";


function ProductList1(props) {
    return (
        <div>
            <div className={"product-list-1"}>
                <p className={"text-1"}>
                    Лидеры продаж
                </p>
                <Link to={"/"} className={"link btn-1"}>Все товары</Link>
            </div>
            <div className={"product-list-2-wrap"}>
                <div className={"product-list-2"}>
                    <Sld/>
                </div>
            </div>
        </div>
    );
}

export default ProductList1;