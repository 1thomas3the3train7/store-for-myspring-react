import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../style/pagenotfound.css"

class PageNotFound extends Component {
    render() {
        return (
            <div className={"pagenot-wrap"}>
                <h1>Страница не найдена</h1>
                <div className={"pagenot-p"}>
                    <Link to={"/main"} >Вернуться на главную</Link>
                </div>
            </div>
        );
    }
}

export default PageNotFound;