import React, {useState} from 'react';
import axios from "axios";
import {myurl} from "./MyAxios";
import {set} from "mobx";

function Resetdfunc(props) {
    const [email,setEmail] = useState();
    const [count,setCount] = useState(0)
    const [x,setX] = useState(<div></div>)
    function sendEmail(){
        if(count === 0){
            setCount(1)
            axios.post(myurl + "api/auth/reset",{result:email},{withCredentials:true})
                .then(res => {
                    setX(<div>{res.data}</div>)
                    if(res.data === "user not found"){
                        setCount(0)
                    }
                })
        }
    }
    return (
        <div className={"reset-form"}>
            <div className="reset-form-toflex">
                <p className={"reset-p"}>
                    Введите ваш Email
                </p>
                <input type="text" className={"reset-input"} onChange={event => setEmail(event.target.value)}/>
                <p className={"reset-btn"} onClick={() => sendEmail()}>
                    Отправить письмо
                </p>
                {x}
            </div>
        </div>
    );
}

export default Resetdfunc;