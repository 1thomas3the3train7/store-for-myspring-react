import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";
import {myurl} from "./MyAxios";
import "../style/auth.css"
import {useDispatch, useSelector} from "react-redux";

const Myauth2 = observer((props) => {
    const navigate = useNavigate()
    const [myemail,setMyemail] = useState()
    const [mypassword,setMypassword] = useState()
    const [myresponse,setMyresponse] = useState("1");
    const [myer,setMyer] = useState("");
    let isAuth = useSelector(state => state.auth)
    const dispath = useDispatch()
    function setAuth(){
        dispath({type:"set_auth",auth:true})
    }
    function authh(){
        axios.post(myurl + "api/auth/login",{email:myemail,password:mypassword},{withCredentials:true})
            .then(res => {if(res.data.accessToken == null){
                setMyer("Неправильный логин или пароль")
            } else {setMyer(""); setMyresponse(res.data.accessToken);sessionStorage.setItem("auth","true");
                sessionStorage.setItem("token",res.data.accessToken);setAuth();navigate("/main");}})
    }
    return(
        <div className={"form_auth_wrap"}>
            <div className="form_auth_block">
                <div className="form_auth_block_content">
                    <p className="form_auth_block_head_text">Авторизация</p>
                    <div className="form_auth_style"><label>Введите Ваш Email</label>
                        <input type="email" name="auth_email" placeholder="Введите Ваш Email" required
                               onChange={event => setMyemail(event.target.value)}/>
                        <label>Введите Ваш пароль</label>
                        <input type="password" name="auth_pass" placeholder="Введите пароль" required
                               onChange={event => setMypassword(event.target.value)}/>
                        <button className="form_auth_button"  name="form_auth_submit" onClick={() => authh()}>Войти</button></div>
                    {myer ? <div className={"form_err"}>
                        <p>{myer}</p>
                    </div> : <div></div>}
                    <div className={"form-reset"}>
                        <p className={"form-reset-p"}>
                            <Link to={"/reset"}>Забыли пароль?</Link>
                        </p>
                    </div>
                    <div className={"form-reg"}>
                        <p className={"form-reg-p"}>Нет аккаунта?
                            <Link to={"/register"} className={"form-reg-link"}>Зарегистрируйся</Link>
                        </p>
                    </div>
                    <div style={{display:"flex",flexDirection:"column", alignItems:"center",marginTop:"10px"}}>
                        <p>Готовый аккаунт</p>
                        <p>Email: email</p>
                        <p>Пароль: password</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Myauth2;