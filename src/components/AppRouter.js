import React, {useContext} from 'react';
import {Route, BrowserRouter as Router, Routes, Link, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";
import Main from "../pages/Main";
import Header from "./Header";
import Auth from "../pages/Auth";
import {Context} from "../index";
import Myauth from "./Myauth";

function AppRouter(props) {
    function loging(x){
        if(x == true){
            return
                authRoutes.map(({path,Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>)
                publicRoutes.map(({path,Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/> )
        } else {
            return
                publicRoutes.map(({path,Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/> )

        }
    }
    return (
        <div>

                <Routes>
                    { authRoutes.map(({path,Component}) =>
                        <Route key={path} path={path} element={<Component/>} exact/>)}
                    {publicRoutes.map(({path,Component}) =>
                        <Route key={path} path={path} element={<Component/>} exact/> )}
                    <Route path={"*"} element={<Myauth/>}/>
                </Routes>

        </div>
    );
}

export default AppRouter;