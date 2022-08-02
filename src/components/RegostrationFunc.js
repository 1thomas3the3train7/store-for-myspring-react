import React, {useState} from 'react';
import axios from "axios";
import {myurl} from "./MyAxios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

function RegostrationFunc(props) {
    /*https://react-store-mu-ashen.vercel.app/registration?token=f6d41f36-5e6a-4dde-9bbb-23fc03812383&email=mercyfirsov@gmail.com*/
    let x = window.location.href.replace("https://react-store-mu-ashen.vercel.app",
        "https://oraoraora.herokuapp.com/api/auth");
    const [err,setErr] = useState(<div></div>);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function sendToken(){
        axios.get(x,{},{withCredentials:true})
            .then(res => {if(res.data === "Email confirmed"){
                navigate("/login")
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