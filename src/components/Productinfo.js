import React, {useState} from 'react';
import {Rating} from 'react-simple-star-rating'
import {Link} from "react-router-dom";
import axios from "axios";
import {$authHostx, myurl} from "./MyAxios";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";


function Productinfo(props) {
    const [rating, setRating] = useState(50)
    const [pcount,setPcount] = useState(50);
    const [pprice,setPprice] = useState(1)
    const [price,setPrice] = useState();
    const [review,setReview] = useState({})
    const [like,setLike] = useState([])
    const [err, setErr] = useState(<div></div>);
    const [adLike,setAdLike] = useState( <p className={"pr-add-like"} onClick={() => addLike()}>Добавить в избранное</p>);
    const [adReview,setAdReview] = useState(<div></div>)
    const bask = useSelector(state => state.basket)
    const disp = useDispatch()
    const [options,setOptions] = useState([
        {value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5}
    ])
    const [grade,setGrade] = useState();
    const [as,setAs] = useState("none");
    if(Array.isArray(props.likes)){props.likes.map(m => like.push(m.id))}
    const isAuth = useSelector(state => state.auth)
    let btn = 0;
    function checl(){
        if(btn = 0){
            if(props.likes === "false"){
                setAdLike(<p className={"pr-add-like"} onClick={() => addLike()}>Добавить в избранное</p>)

            } else {
                setAdLike(<p className={"pr-add-like"} onClick={() => addLike()}>Добавленно в избранное</p>)

            }
            btn = 1
        }
    }
    checl()
    let fradmin;
    function foradmin(){
        if(props.admin){
            fradmin = <div className={"red-prod"}>
                <Link to={"/admin/edit?prod=" + props.prod.id}>Редактировать (id = {props.prod.id})</Link>
            </div>
        }
    }
    foradmin()
    function minus(){
        if(pcount > 50){
            setPcount(pcount - 50)
            setPprice(pprice - 1)
        }
    }
    function plus(){
        setPcount(pcount + 50)
        setPprice(pprice + 1)
    }
    function sendReview(){
        $authHostx.post("api/product/savereview",{...review,id:props.prod.id},{withCredentials:true})
            .then(res => {window.location.reload()})
    }
    function addLike(){
        if(isAuth){
            $authHostx.post("api/product/addLike",{result:props.prod.id},{withCredentials:true})
                .then(res => {if(res.data.result === "add")
                {setAdLike(<p className={"pr-add-like"} style={{backgroundColor:"gray"}}>Добавленно в избранное</p>);}})
        } else {
             setErr(<div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                <p>Войдите в аккаунт</p>
            </div>)
        }
    }
    function addRevieww(){
        if(isAuth){
            setAs("flex")
            setAdReview(
                <div>

                </div>
            )
        } else {
            setAs("none")
            setAdReview(<div style={{display:"flex",justifyContent:"center",marginTop:"-25px",fontSize:"25px",marginBottom:"20px"}}>
                <p>Войдите в аккаунт</p>
            </div>)
        }
    }
    return (
        <div className={"p_info"}>
            <h1 className={"p_h1"}>{props.prod.name}</h1>
            {fradmin}
            <div className={"p_pflex"}>
                <div>
                    <p className={"pr-toflex-2"}>Оценки : {props.prod.grade ?
                        <p className={"pr-presence"}>{props.prod.grade}</p> : <p>Оценок нету</p>}</p>
                </div>
                <div>
                    {adLike}
                    {err}
                </div>
            </div>
            <div className={"pr-toflex-1"}>
                <div>
                    <p className={"pr-price"} onLoad={() => checl()}>Цена</p>
                    <h1>{props.prod.price * pprice} Р</h1>
                </div>
                <div>
                    <p className={"pr-text-c"}>Количество</p>
                    <div className={"pr-toflex"}>
                        <div className={"pr-b"}>
                            <p className={"pr-text-1"} onClick={() => minus()}>-</p>
                            <p className={"pr-text-2"}>{pcount} г</p>
                            <p className={"pr-text-1"} onClick={() => plus()}>+</p>
                        </div>
                            {bask ?
                                bask.includes(props.prod.id) ?
                                    <div className={"pr-btn"} style={{backgroundColor:"gray"}}
                                         onClick={() => disp({type:"del_basket",id:props.prod.id})}>
                                        В Корзине</div> : <div className={"pr-btn"}
                                                               onClick={() => disp({type:"add_basket",id:props.prod.id})}>В Корзину</div>
                                : <div>Перезагрузите страницу</div>}
                    </div>
                </div>
            </div>
            <div className={"pr-about"}>
                <h1>О товаре:</h1>
                <div>
                    <h3>Категории</h3>
                    {props.prod.categoryDTOList ? props.prod.categoryDTOList.map((m,index) => <div key={index} style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                        <p style={{fontSize:"19px",paddingTop:"10px",textTransform:"capitalize"}}>{m.name}</p>
                    </div>) : <div>Категорий не отмечено</div>}
                    <h3>Описание:</h3>
                    <p style={{fontSize:"19px"}}>{props.prod.about}</p>
                </div>
                <div>
                    <p className={"review-btn"} onClick={() => addRevieww()}>
                        Написать отзыв
                    </p>
                    {adReview}
                    <div className={"add-review"} style={{display:as}}>
                        <label className={"add-review-label"}>Оценка</label>
                        {/*<input type="text" onChange={event => setReview({...review,grade:event.target.value})}
                               className={"add-review-input"}/>*/}
                        <div style={{width:"100%"}}>
                            <Select
                                defaultValue={null}
                                name="colors"
                                className="basic-multi-select"
                                classNamePrefix="select"
                                options={options}
                                onChange={event => setReview({...review,grade:event.value})}
                                placeholder={""}
                            />
                        </div>
                        <label className={"add-review-label"}>Плюсы</label>
                        <input type="text" onChange={event => setReview({...review,pluses:event.target.value})}
                               className={"add-review-input"}/>
                        <label className={"add-review-label"}>Минусы</label>
                        <input type="text" onChange={event => setReview({...review,minuses:event.target.value})}
                               className={"add-review-input"}/>
                        <label className={"add-review-label"}>Комментарий</label>
                        <input type="text" onChange={event => setReview({...review,comment:event.target.value})}
                               className={"add-review-input"}/>
                        <button onClick={() => sendReview()} className={"add-review-button"}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productinfo;