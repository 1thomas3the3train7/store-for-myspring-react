import React, {useState} from 'react';
import axios from "axios";
import {myurl} from "./MyAxios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

function RegostrationFunc(props) {
    let x = window.location.href.replace("3000","8080/api/auth");
    const [err,setErr] = useState(<div></div>);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function sendToken(){
        axios.get(x,{},{withCredentials:true})
            .then(res => {if(res.data === "Email confirmed"){
                dispatch({type:"set_auth",auth:true})
                navigate("/main")
            } else {
                setErr(<div style={{marginTop:"15px",textAlign:"center"}}>
                    <p>
                        Устаревший токен. Попробуйте заного
                    </p>
                </div>)
            }})
    }
    return (
        <div className={"container"} style={{display:"flex",justifyContent:"center",marginTop:"150px"}}>
            <div>
                <p className={"regtn-wrap"} onClick={() => sendToken()}>Подтвердить email</p>
                {err}
            </div>
        </div>
    );
}

export default RegostrationFunc;