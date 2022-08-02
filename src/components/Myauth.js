import React, {useContext, useState} from 'react';
import "../style/auth.css"
import axios from "axios";
import {myurl} from "./MyAxios";
import {useNavigate} from "react-router-dom";

function Myauth(props) {
    const navigate = useNavigate()
    const [myemail,setMyemail] = useState()
    const [mypassword,setMypassword] = useState()
    const [myresponse,setMyresponse] = useState("1");
    const [myer,setMyer] = useState("");
    function authh(){
        axios.post(myurl + "api/auth/login",{email:myemail,password:mypassword},{withCredentials:true})
            .then(res => {if(res.data.accessToken == null){
                setMyer("Неправильный логин или пароль")
            } else {setMyer(""); setMyresponse(res.data.accessToken);/*navigate("/main");*/}})

    }

    return (
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

                </div>
            </div>
        </div>
    );
}

export default Myauth;