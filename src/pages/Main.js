import React, {useContext} from 'react';
import "../style/main.css";
import Slider from "../components/Sliders/Slider";
import Slider1 from "../components/Sliders/Slider1";
import ProductList1 from "../components/Product-list-1";
import ProductList2 from "../components/Product-list-2";
import ProductList3 from "../components/ProductList3";
import {Context} from "../index";
import Main2 from "../components/Main2";
import {$authHost} from "../components/MyAxios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function Main(props) {
    const bask = useSelector(state => state.basket)
    const navigate = useNavigate()
    if(bask === undefined){
        navigate("/main")
    }
    return (
        <div>
            <div className={"container"}>
                <div className={"for-sliders"}>
                    <div className={"for-slider"}>
                        <Slider slaider={props.leftsl}/>
                    </div>
                    <div className={"for-slider1"}>
                        <Slider1 name={"vlad"} slaider={props.rightsl}/>
                    </div>
                </div>
                <ProductList2/>
                <ProductList3/>
            </div>

        </div>
    );
}

export default Main;
