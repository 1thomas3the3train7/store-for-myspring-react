import React, {useState} from 'react';
import axios from "axios";
import {myurl} from "./MyAxios";
import Select from "react-select";

function Regfunc(props) {
    const [count,setCount] = useState(0)
    const [reg,setReg] = useState({});
    const [role,setRole] = useState()
    const [options,setOptions] = useState([{value:"user",label:"USER"},
        {value:"admin",label:"ADMIN"}])
    const [x,setX] = useState();
    function sendReg(){
        console.log(reg.email)
        if(isValidEmail(reg.email) && count === 0){
            setX(<div></div>)
            setCount(1)
            axios.post(myurl + "api/auth/register",reg,{withCredentials:true})
                .then(res => {if(res.data.result === "saved"){
                    setCount(2)
                    setX(<div className={"regfunc-suc"}>
                        <p>
                            Проверьте вашу электронную почту
                        </p>
                    </div>)
                }}).catch(err => {
                    setX(<div className={"regfunc-err"}>
                        <p>
                            Произошла ошибка
                        </p>
                    </div>)
            })
        } else { if(count === 2){
            setX(<div className={"regfunc-suc"}>
                <p>
                    Проверьте вашу электронную почту
                </p>
            </div>)
        }else {
            setX(
                <div className={"regfunc-err"}>
                    <p>
                        Неправильный Email
                    </p>
                </div>
            )
        }}
    }
    function isValidEmail(email){
        return /\S+@\S+\.\S+/.test(email)
    }
    return (
        <div className={"container rrr"}>
            <div className={"reg-form-toflex"}>
                <div className={"reg-form-1"}>
                    <p className={"reg-form-p"}>Введите email</p>
                    <input type="text" className={"reg-form-input"} onChange={event => setReg({...reg,email:event.target.value})}/>
                </div>
                <div className={"reg-from-2"}>
                    <p className={"reg-form-p"}>Введите пароль</p>
                    <input type="password" className={"reg-form-input"} onChange={event => setReg({...reg,password:event.target.value})}/>
                </div>
                <div className={"reg-form-1"} style={{width:"250px"}}>
                    <p className={"reg-form-p"} style={{paddingBottom:"15px"}}>Роль</p>
                    <Select
                        defaultValue={options[0]}
                        name="colors"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={options}
                        onChange={event => setReg({...reg,role:event.value})}
                        placeholder={""}
                    />
                </div>
                <div className={"reg-form-3"}>
                    <p className={"reg-form-p"}>Введите имя</p>
                    <input type="text" className={"reg-form-input"} onChange={event => setReg({...reg,username:event.target.value})}/>
                </div>
                <div className={"reg-form-btnwrap"}>
                    <p className={"reg-form-btn"} onClick={() => sendReg() }>Зарегистрироваться</p>
                </div>
                {x ? x : <div></div>}
            </div>
        </div>
    );
}

export default Regfunc;