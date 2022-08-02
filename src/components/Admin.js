import React, {useMemo, useState} from 'react';
import {$authHostx, baseurl, myheaders, myimage, myurl} from "./MyAxios";
import "../style/admin.css"
import axios from "axios";
import Select, {components} from "react-select";
import jwtDecode from "jwt-decode";
import AdminProdList from "./AdminProdList";


function Admin(props){
    const [options,setOptions] = useState();
    const [Tea,setTea] = useState([])
    const [mycategory,setMycategory] = useState();
    const [load1, setLoad1] = useState();
    const [resp,setResp] = useState()
    const [imageURI,setImageURI] = useState([])
    const [imageURI2,setImageURI2] = useState()
    let aw = []
    let formdata1 = new FormData();
    function a(file1){
        for(var i = 0;i < file1.length;i++){
            formdata1.append("files",file1.item(i))
        }
    }
    function sendR() {
        formdata1.append("tea",JSON.stringify(Tea))
        formdata1.append("result",JSON.stringify(load1))
        $authHostx.post(myurl + "api/product/save",formdata1,{withCredentials:true},myheaders)
            .then(res => {
                formdata1.delete("tea");formdata1.delete("result");setResp(<div>{res.data}</div>)
            })
            .catch(err => {console.log(err.request.status);if(err.request.status === 403){
                axios.post(myurl + "api/auth/token",{},{withCredentials:true})
                    .then(res => {sessionStorage.setItem("token",res.data.result);console.log(res.data);$authHostx.post(myurl + "api/product/save",formdata1,{withCredentials:true})
                        .then(res => {
                            formdata1.delete("tea");formdata1.delete("result");setResp(<div>{res.data}</div>)
                        }).catch(err => {if(err.request.status === 400 || err.request.status === 500){setResp(<div style={{maxWidth:"400px"}}>Перезагрузите страницу и заполните все поля заного
                            файлы должны быть не больше 10мб,файлы изображений обязательны</div>)}})})
            }if(err.request.status === 400 || err.request.status){setResp(<div style={{maxWidth:"400px"}}>Перезагрузите страницу и заполните все поля заного
                файлы должны быть не больше 10мб,файлы изображений обязательны</div>)}})
    }
    function saveProduct1(){
        let x = Number(Tea.price)
        if(!isNaN(x)){
            sendR()
        } else {setResp(<div>Введите числовые значения в поле цены</div>)}


    }
    function getMyCategory(){
        axios.post(myurl + "api/product/getCategory",{},{withCredentials:true})
            .then(res => loadCategory(res.data))
    }
    function loadCategory(res){
        let initial = []
        res.map(r => initial.push({value:r.name,label:r.name}))
        setOptions(initial)
    }
    function uploadCategory(){
        axios.post(myurl + "api/product/uploadcategory",mycategory,{withCredentials:true})
            .then(res => console.log(res.data))
    }
    function loadCategory1(e){
        let initial = []
        e.map(ev => initial.push({result:ev.value}))
        setLoad1(initial)
    }
    return (
        <div>
            <div className="container admn">
                <div className={"to-column"}>
                    <h2>Добавить товар</h2>
                    <input type="text" className="admn-input" placeholder={"Название"} style={{marginTop:'20px'}}
                           onChange={event => setTea({...Tea,name:event.target.value})}/>
                    <input type="text" className="admn-input" placeholder={"Надпись над названием в карточке товара"}
                           onChange={event => setTea({...Tea,subname:event.target.value})}/>
                    {/*<input type="text" className="admn-input" placeholder={"Страна производства"}
                           onChange={event => setTea({...Tea,madeCountry:event.target.value})}/>*/}
                    <input type="text" className="admn-input" placeholder={"Дополнительно"}
                           onChange={event => setTea({...Tea,about:event.target.value})}/>
                    <input type="text" className="admn-input" placeholder={"Цена"}
                           onChange={event => setTea({...Tea,price:event.target.value})}/>
                    <input type="text" className="admn-input" placeholder={"Цена без скидки"}
                           onChange={event => setTea({...Tea,oldPrice:event.target.value})}/>
                    <Select
                        defaultValue={null}
                        isMulti
                        name="colors"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={options}
                        onChange={event => loadCategory1(event)}
                        placeholder={"Категория"}
                        onFocus={() => getMyCategory()}
                    />
                    <h1>Главное изображение</h1>
                    <input type="file" className="admn-input" onChange={event =>
                        formdata1.append("filemain",event.target.files[0])}/>
                    <h1>Остальные изображения</h1>
                    <input type="file" className="admn-input" onChange={event => a(event.target.files)} multiple/>
                    <button onClick={() => saveProduct1()}>Добавить</button>
                    {resp}
                    <h3>Добавить категорию</h3>
                    <input type="text" className="admn-input" placeholder={"Категория"}
                           onChange={event => setMycategory({result:event.target.value})}/>
                    <button onClick={() => uploadCategory()}>Добавить категорию</button>
                    <AdminProdList/>
                </div>
            </div>
        </div>
    );
}

export default Admin;