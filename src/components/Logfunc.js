import React from 'react';
import {myurl} from "./MyAxios";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function Logfunc(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function sendLogout(){
        axios.post(myurl + "api/auth/logout",{},{withCredentials:true})
            .then(res => {dispatch({type:"del_auth",auth:false});sessionStorage.setItem("auth","false");sessionStorage.setItem("token","");
            navigate("/login")})
    }
    return (
        <div className={"container logout-form-toflex"}>
            <div className={"logout-form"}>
                <p className={"logout-form-text"} onClick={() => sendLogout()}>
                    Выйти из аккаунта ?
                </p>
            </div>
        </div>
    );
}

export default Logfunc;