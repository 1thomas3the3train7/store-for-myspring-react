import React from 'react';
import Sld2 from "./Sliders/Sld2";

function ProductList2(props) {
    return (
        <div>
            <div className={"product-list-1"}>
                <p className={"text-1"}>
                    Новинки
                </p>
            </div>
            <div className={"product-list-2-wrap"}>
                <div className={"product-list-2"}>
                    <Sld2/>
                </div>
            </div>
        </div>
    );
}

export default ProductList2;