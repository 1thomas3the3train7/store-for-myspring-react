import React, {useState} from 'react';
import Product from "../pages/Product";
import ProductCart from "./Product-cart";
import {useSelector} from "react-redux";

function Likesfunc(props) {
    console.log(props)
    const isAuth = useSelector(state => state.auth)
    return (
        <div className={"container"} >
            <div className={"like-wrap"}>
                <h2 className={"like-h2"}>Мое избранное</h2>
                <div className={"like-wrap-flex"}>
                    {isAuth ? props.prod.map((m,index) => <ProductCart prod={m} key={index}/>) : <div>Войдите</div>}
                </div>

            </div>
        </div>
    );
}

export default Likesfunc;