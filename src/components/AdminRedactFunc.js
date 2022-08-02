import React, {useState} from 'react';
import Select from "react-select";
import axios from "axios";
import {$authHostx, myheaders, myurl} from "./MyAxios";

function AdminRedactFunc(props) {
    const [options,setOptions] = useState();
    const [Tea,setTea] = useState({name:props.prod.name,madeCountry:props.prod.madeCountry,
    about:props.prod.about,fermentation:props.prod.fermentation,price:props.prod.price,id:props.prod.id,
    oldPrice:props.prod.oldPrice})
    const [mycategory,setMycategory] = useState();
    const [load1, setLoad1] = useState();
    const [imageURI,setImageURI] = useState();
    const [cat,setCat] = useState();
    const [img, setImg] = useState();
    const [resp,setResp] = useState()
    let formdata1 = new FormData();
    function a(file1){
        for(var i = 0;i < file1.length;i++){
            formdata1.append("files",file1.item(i))
        }
    }
    function saveProduct1(){
        formdata1.append("tea",JSON.stringify(Tea))
        if(load1 !== null && load1 !== undefined){
            formdata1.append("result",JSON.stringify(load1))
        }
        $authHostx.post(myurl + "api/product/upload",formdata1,{withCredentials:true},myheaders)
            .then(res => {
                formdata1.delete("tea");formdata1.delete("result");setResp(<div>{res.data}</div>)
            })
            .catch(err => {console.log(err.request.status);if(err.request.status === 403){
                axios.post(myurl + "api/auth/token",{},{withCredentials:true})
                    .then(res => {sessionStorage.setItem("token",res.data.result);console.log(res.data);$authHostx.post(myurl + "api/product/save",formdata1,{withCredentials:true})
                        .then(res => {
                            formdata1.delete("tea");formdata1.delete("result");setResp(<div>{res.data}</div>)
                        })})
            }})

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
        <div className={"container admn"}>
            <div>
                <div className={"to-column"}>
                    <input type="text" className="admn-input" placeholder={"Название"} style={{marginTop:'20px'}}
                           onChange={event => setTea({...Tea,name:event.target.value})} value={Tea.name}/>
                    <input type="text" className="admn-input" placeholder={"Надпись над названием"}
                           onChange={event => setTea({...Tea,subname:event.target.value})} value={Tea.subname}/>
                    {/*<input type="text" className="admn-input" placeholder={"Страна производства"}
                           onChange={event => setTea({...Tea,madeCountry:event.target.value})} value={Tea.madeCountry}/>*/}
                    <input type="text" className="admn-input" placeholder={"Дополнительно"}
                           onChange={event => setTea({...Tea,about:event.target.value})} value={Tea.about}/>
                    <input type="text" className="admn-input" placeholder={"Цена"}
                           onChange={event => setTea({...Tea,price:event.target.value})} value={Tea.price}/>
                    <input type="text" className="admn-input" placeholder={"Цена без скидки"}
                           onChange={event => setTea({...Tea,oldPrice:event.target.value})} value={Tea.oldPrice}/>
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
                    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                        <h2>Главное изображение</h2>
                        <input type="file" className="admn-input" onChange={event => formdata1.append("filemain",event.target.files[0])}/>
                        <h2>Остальные изображения</h2>
                        <input type="file" className="admn-input" onChange={event => a(event.target.files)} multiple/>
                    </div>

                    <button onClick={() => saveProduct1()}>Сохранить</button>
                    {resp}
                    <h3>Добавить категорию</h3>
                    <input type="text" className="admn-input" placeholder={"Категория"}
                           onChange={event => setMycategory({result:event.target.value})}/>
                    <button onClick={() => uploadCategory()}>Добавить категорию</button>
                </div>
            </div>
        </div>
    );
}

export default AdminRedactFunc;