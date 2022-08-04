import React, {useState} from 'react';
import "../style/product-cart.css"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {$authHostx, myurl, thisUrl} from "./MyAxios";
import axios from "axios";

function ProductCart(props) {
    const [count,setCount] = useState(50);
    const [btnbask,setBtnbask] = useState()
    const bask = useSelector(state => state.basket)
    const disp = useDispatch()
    const [delLike,setDelLike] = useState()
    const navigate = useNavigate()
    let loc = window.location.href
    let bol;
    let stl;
    let url= thisUrl +"favourites"
    if(loc ===  url || bol ){
        stl =
        bol = <div>
            <p className={"product-cart-del"} onClick={() => delLikee()}>
                Удалить из избранного
            </p>
        </div>
    }
    function delLikee(){
        $authHostx.post(myurl + "api/product/delLike",{result:props.prod.id},{withCredentials:true})
            .then(res => window.location.reload())
            .catch(err => {if(err.request.status === 403){
            axios.post(myurl + "api/auth/token",{},{withCredentials:true})
                .then(res => {sessionStorage.setItem("token",res.data.result);$authHostx.post(myurl + "api/product/delLike",{result:props.prod.id},{withCredentials:true})
                    .then(res => {
                        console.log(res.data);navigate("/favourites")
                    })})
        }})
    }
    function change(a){
        if(a == false && count > 50){
            setCount(count - 50);
        }
        if(a == true){
            setCount(count + 50);
        }
    }

    return (

        <div>
            <div className={"product-cart"} style={{height:"fit-content"}}>
                <Link to={"/product?id=" + props.prod.id + "&c=" + count}>
                <div className={"product-cart-img"}>
                    <img src={myurl + "api/product/getImage?filename=" + props.prod.mainLinkImage} alt="" className={"product-cart-img-m"}/>
                </div>
                </Link>
                <div className={"product-cart-wrap"} >
                    <div className={"product-cart-name"}>
                        <div className={"for-del"}>
                            <p className={"product-cart-name-1"}>
                                {props.prod.subname}
                            </p>
                            <p className={"product-cart-name-2"}>
                                <Link to={"/product?id=" + props.prod.id + "&c=" + count}>{props.prod.name}</Link>
                            </p>
                        </div>
                        {bol}
                    </div>
                    <div className={"product-cart-review"}>
                        <p>Оценки :  {props.prod.grade>0 ? props.prod.grade : "Оценок нету"}</p>
                    </div>
                    <div className={"product-cart-price"}>
                        <p className={"product-cart-price-1"}>
                            {props.prod.price * count/50} Р
                        </p>
                        {props.prod.oldPrice ? <p className={"product-cart-price-sub"}>
                            {props.prod.oldPrice * count/50} Р
                        </p> : <div></div>}
                    </div>
                    <div className={"product-cart-count"} >
                        <div className={"product-cart-count-1"}>
                            <div className={"product-cart-count-1-1"} >
                                <p className={"product-cart-count-1-1-1"} onClick={() => change(false)}>-</p>
                            </div>
                            <div className={"product-cart-count-1-2"}>
                                <p className={"product-cart-count-1-2-1"}>{count}</p>
                                <p className={"product-cart-count-1-2-2"} >г</p>
                            </div>
                            <div className={"product-cart-count-1-3"}>
                                <p className={"product-cart-count-1-3-1"} onClick={() => change(true)}>+</p>
                            </div>
                        </div>
                        <div>
                            {bask ?
                                bask.includes(props.prod.id) ?
                                        <div className={"product-cart-basket"} style={{backgroundColor:"gray"}}
                                             onClick={() => disp({type:"del_basket",id:props.prod.id})}>
                                            В Корзине</div> : <div className={"product-cart-basket"}
                                                                   onClick={() => disp({type:"add_basket",id:props.prod.id})}>В Корзину</div>
                            : window.location.reload()}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductCart;