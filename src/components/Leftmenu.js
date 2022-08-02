import React, {useState} from 'react';
import "../style/Left-menu.css"
import RangeSlider from "./Sliders/LeftSlide";
import RightProd from "./RightProd";
import ProductCart from "./Product-cart";
import Select from "react-select";
import axios from "axios";
import {myurl} from "./MyAxios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {Pagination} from "@mui/material";


function Leftmenu(props) {
    const [xx,setXx] = useState(props.def);
    const [options,setOptions] = useState()
    const [value, setValue] = React.useState([props.minPrice, props.maxPrice]);
    const [selectvalue,setselectvalue] = useState(null);
    const [namee,setNamee] = useState("");
    const [filter,setFilter] = useState({name:namee,minPrice:value[0],maxPrice:value[1],categoryDTOS:selectvalue});
    const [page,setPage] = useState(1)
    const [count,setCount] = useState(1);
    const handleChange = (event, newValue) => {
        setFilter({...filter,pageable:page})
        setValue(newValue);
        setFilter({...filter,name:namee,minPrice:newValue[0],maxPrice:newValue[1],categoryDTOS:selectvalue})
    };
    let x = {id:2,name:"name"}
    function getMyCategory(){
        setFilter({...filter,pageable:page})
        axios.post(myurl + "api/product/getCategory",{},{withCredentials:true})
            .then(res => loadCategory(res.data))
    }
    function loadCategory(res){
        setFilter({...filter,pageable:page})
        let initial = []
        res.map(r => initial.push({value:r.name,label:r.name}))
        setOptions(initial)
    }
    function addCat(e){
        setFilter({...filter,pageable:page})
        let initial = []
        e.map(m => initial.push(m.value))
        setselectvalue(initial)
        setFilter({...filter,name:namee,minPrice:value[0],maxPrice:value[1],categoryDTOS:initial})
    }
    function addName(e){
        setFilter({...filter,pageable:page})
        setNamee(e)
        setFilter({...filter,name:e,minPrice:value[0],maxPrice:value[1],categoryDTOS:selectvalue})
    }
    function sendSearch(){
        setPage(1)
        setFilter({...filter,pageable:page})
        console.log(filter)
        axios.post(myurl + "api/product/search",{...filter,pageable:1},{withCredentials:true})
            .then(res => {setXx(res.data.teaDTOS);setCount(res.data.count)})
    }
    const handleChange1 = (event, value) => {
        console.log(value)
        wd(value)
    };
    function wd(valuex){
        setPage(valuex);
        setFilter({...filter,pageable:valuex})
        console.log(filter)
        axios.post(myurl + "api/product/search",{
            name:filter.name,
            minPrice:filter.minPrice,
            maxPrice:filter.maxPrice,
            categoryDTOS:filter.categoryDTOS,
            pageable:valuex
        },{withCredentials:true})
            .then(res => {setXx(res.data.teaDTOS);setCount(res.data.count)})
    }
    console.log(page)
    return (
        <div  className={"containercatalog leftmenu-toflex"}>
            <div className={"leftmenu-mainwrap"}>
                <div className={"catalog-input-toflex"}>
                    <label className={"catalog-input-label"}>Поиск</label>
                    <input type="text" className={"catalog-input"} placeholder={"Введите название"}
                    onChange={event => addName(event.target.value)} />
                </div>
                <div className={"leftmenu-slide-wrap"}>
                    <h5 className={"leftmenu-h5"}>Цена</h5>
                    <div className={"leftmenu-brd"}>
                        <p className={"leftmenu-brd-p"}>
                            От : <p className="leftmenu-brd-p-p">{value[0]}</p>
                        </p>
                        <p className={"leftmenu-brd-p"}>
                            До : <p className={"leftmenu-brd-p-p"} >{value[1]}</p>
                        </p>
                    </div>
                    <div>
                        <Box sx={{ width: 335 }}>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                max={props.maxPrice}
                                min={props.minPrice}
                            />
                        </Box>
                    </div>
                </div>
                <div className={"catalog-select"}>
                    <Select
                        defaultValue={null}
                        isMulti
                        name="colors"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={options}
                        placeholder={"Категории"}
                        onFocus={() => getMyCategory()}
                        onChange={event => addCat(event)}
                    />
                </div>
                <div className={"catalog-tea-button-wrap"}>
                    <p className={"catalog-tea-button"} onClick={() => sendSearch()}>Применить</p>
                </div>
                {/*<div style={{marginTop:"30px"}}>
                    <p style={{color:"gray"}}>Пагинация работает с задержкой. Например изначально страница 1 при клике на 3 загрузится
                        все равно 1 при клике на 5 загрузится 3. Я без понятия почему, устанавливается setPage(x)
                    после setFilter(...filter,pageable:page) но запрос все равно отправляется с page которая была до setPage(x)</p>
                </div>*/}
            </div>
            <div className={"catalog-pageable"}>
                <div className={"catalog-tea-toflex"}>
                    <div className={"catalog-tea"}>
                        {xx ? xx.map((m,index) => <ProductCart prod={m} key={index}/>) : <div>Loading</div>}
                    </div>
                </div>
                <Pagination count={count} onChange={handleChange1} size={"large"} page={page}/>
            </div>
        </div>
    );
}

export default Leftmenu;