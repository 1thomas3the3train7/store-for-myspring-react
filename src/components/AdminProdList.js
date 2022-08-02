import React, {useState} from 'react';
import {$authHostx, myurl} from "./MyAxios";

function AdminProdList(props) {
    let formdata1 = new FormData()
    let formdata2 = new FormData()
    const [id,setId] = useState()
    const [idd,setIdd] = useState()
    const [id2,setId2] = useState()
    const [idd2,setIdd2] = useState()
    const [idr,setIdr] = useState()
    const [iddr,setIddr] = useState()
    const [id2r,setId2r] = useState()
    const [idd2r,setIdd2r] = useState()
    const [sld1,setSld1] = useState()
    const [sld2,setSld2] = useState();
    function add(){
        $authHostx.post(myurl + "api/product/addinList1",{result:id},{withCredentials:true})
            .then(res => setIdr(<p>{res.data}</p>))
    }
    function del(){
        $authHostx.post(myurl + "api/product/delinList1",{result:idd},{withCredentials:true})
            .then(res => setIdd(<p>{res.data}</p>))
    }
    function add2(){
        $authHostx.post(myurl + "api/product/addinList2",{result:id2},{withCredentials:true})
            .then(res => setId2r(<p>{res.data}</p>))
    }
    function del2(){
        $authHostx.post(myurl + "api/product/delinList2",{result:idd2},{withCredentials:true})
            .then(res => setIdd2r(<p>{res.data}</p>))
    }
    function a(file1){
        formdata1.delete("files")
        for(var i = 0;i < file1.length;i++){
            formdata1.append("files",file1.item(i))
        }
    }
    function b(file1){
        for(var i = 0;i < file1.length;i++){
            formdata2.append("files",file1.item(i))
        }
    }
    function leftslaider(){
        $authHostx.post(myurl + "api/product/leftSlaider",formdata1,{withCredentials:true})
            .then(res => setSld1(res.data))
            .catch(err => {if(err.request.status === 400){setSld1("Ошибка. Выберите файл заного")}})
    }
    function leftslaiderD(){
        $authHostx.post(myurl + "api/product/leftSlaiderD",formdata1,{withCredentials:true})
            .then(res => setSld1(res.data))
            .catch(err => {if(err.request.status === 400){setSld1("Ошибка. Выберите файл заного")}})
    }
    function righttslaider(){
        $authHostx.post(myurl + "api/product/rightSlaider",formdata2,{withCredentials:true})
            .then(res => setSld2(res.data))
            .catch(err => {if(err.request.status === 400){setSld2("Ошибка. Выберите файл заного")}})
    }
    function righttslaiderD(){
        $authHostx.post(myurl + "api/product/rightSlaiderD",formdata2,{withCredentials:true})
            .then(res => setSld2(res.data))
            .catch(err => {if(err.request.status === 400){setSld2("Ошибка. Выберите файл заного")}})
    }
    return (
        <div className={"to-column"}>
            <h3>Слайдер новинок</h3>
            <p>
                Добавить по id
            </p>
            <input type="text" onChange={event => setId(event.target.value)}/>
            <button onClick={() => add()}>Добавить</button>
            {idr}
            <p>
                Убрать по id
            </p>
            <input type="text" onChange={event => setIdd(event.target.value)}/>
            <button onClick={() => del()}>Убрать</button>
            {iddr}
            <h3>Слайдер скидок</h3>
            <p>
                Добавить по id
            </p>
            <input type="text" onChange={event => setId2(event.target.value)}/>
            <button onClick={() => add2()}>Добавить</button>
            {id2r}
            <p>
                Убрать по id
            </p>
            <input type="text" onChange={event => setIdd2(event.target.value)}/>
            <button onClick={() => del2()}>Убрать</button>
            {idd2r}
            <h3>Левый слайдер</h3>
            <input type="file" className="admn-input" onChange={event => a(event.target.files)} multiple/>
            <button onClick={() => leftslaiderD()}>Обновить</button>
            <button onClick={() => leftslaider()}>Добавить к существующим</button>
            {sld1}
            <h3>Правый слайдер</h3>
            <input type="file" className="admn-input" onChange={event => b(event.target.files)} multiple/>
            <button onClick={() => righttslaiderD()}>Обновить</button>
            <button onClick={() => righttslaider()}>Добавить к существующим</button>
            {sld2}
            <div style={{marginTop:"20px"}}></div>
        </div>
    );
}

export default AdminProdList;