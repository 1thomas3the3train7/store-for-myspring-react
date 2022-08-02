import React, {useState} from 'react';
import "../style/Register.css"
import axios from "axios";
import {myurl} from "./MyAxios";
import {useNavigate} from "react-router-dom";

function ResetPassword(props) {
    let x = window.location.href.replace("http://localhost:3000/resetpassword?token=","")
    let token = x.split("&")[0]
    let email = x.split("&email=")[1]
    const [password,setPassword] = useState();
    const [count,setCount] = useState(0);
    const [y,setX] = useState(<div></div>)
    const navigate = useNavigate()
    function sendPassword(){
        if(count === 0){
            axios.post(myurl + "api/auth/confirmreset",{email:email,token:token,password:password},{withCredentials:true})
                .then(res => {
                    setCount(1)
                    setX(<div>{res.data}</div>)
                    navigate("/login")
                })
                .catch(err => {
                    setX(<div>Произошла ошибка</div>)
                    setCount(1)
                });
        }
    }
    return (
        <div className={"resetpassword-wrap"}>
            <div className={"resetpassword"}>
                <p className={"resetpassword-p"}>
                  Введите новый пароль
                </p>
                <input type="text" className={"resetpassword-input"} onChange={event => setPassword(event.target.value)}/>
                <p className={"resetpassword-btn"} onClick={() => sendPassword()}>Сохранить пароль</p>
                {y}
            </div>
        </div>
    );
}

export default ResetPassword;