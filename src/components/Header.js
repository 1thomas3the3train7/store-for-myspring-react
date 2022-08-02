import React, {useMemo, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import jwtDecode from "jwt-decode";

function Header(props) {
    let bool;
    let adm;
    const IsAuth = useSelector(state => state.auth)
    if(IsAuth === false){bool = <Link to={"/login"} className={"link btn"}>Войти</Link>} else {bool =
        <Link to={"/logout"} className={"link btn"}>Выйти</Link>}
    const token = sessionStorage.getItem("token")
    try {
        let decoded = jwtDecode(token)
        console.log(decoded.roles)
        if(decoded.roles.includes("ROLE_ADMIN")){

            adm = <Link to={"admin"} className={"link btn"}>Админ</Link>}
    } catch (Exception){

    }
    return (
        <div>
            <header className={"header"}>
                <div className={"nav"}>


                </div>
                <div className={"nav-btm"}>
                    <div className={"list-left"}>
                        <Link to={"/main"} className={"link btn link-1"}>Главная</Link>
                        <Link to={"/catalog"} className={"link btn link-1"}>Каталог</Link>
                        <Link to={"/basket"} className={"link btn link-1"} >Корзина</Link>
                        {bool}
                        <Link to={"/favourites"} className={"link btn"}>Избранное</Link>
                        {adm}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;