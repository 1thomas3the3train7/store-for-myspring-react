import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCart from "./Product-cart";
import axios from "axios";
import {myurl} from "./MyAxios";
import {dividerClasses} from "@mui/material";


function BasketFunc(props) {
    const dispatch = useDispatch()
    const bask = useSelector(state => state.basket)
    const [product,setProduct] = useState()
    const [mainprod,setMainprod] = useState()
    const [price,setPrice] = useState();
    const [count,setCount] = useState()
    let q = []
    const [c,setC] = useState();
    const sa = () => {
        console.log("asd")
        setProduct(1)
        if(bask.length > 0){
            let x = 0
            bask.map(m => axios.post(myurl + "api/product/getproductbyid",{result:m},{withCredentials:true})
                .then(res => {q.push(res.data)
                x = x + 1
                if(x === bask.length){
                    setC(1)
                    setMainprod(q)
                }
                setC(1);
                }))
        }
    }
    if(product !== 1){
        sa()
    }
    function addprice(event){
        setPrice(event)
    }
    return (
        <div className={"container basket-wrap"}>
            <h2 className={"basket-h2"}>
                Моя корзина
            </h2>
            <div className={"basket-countandprod"}>
                <div className={"basket-prod"}>
                    {mainprod ? mainprod.map((m,index) => <ProductCart prod={m} key={index} />) : <div>Loading</div>}
                </div>
                {/*<div className={"basket-count"}>
                    <div className={"basket-count1"}>
                        <p>1 товар</p>
                        <p>22323</p>
                    </div>
                    <div className={"basket-count2"}>
                        <p>Скидка</p>
                        <p>200</p>
                    </div>
                    <div className={"basket-count3"}>
                        <p>Итог</p>
                        <p>asd</p>
                    </div>
                </div>*/}
            </div>
        </div>
    );
}

export default BasketFunc;