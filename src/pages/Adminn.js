import React, {Component} from 'react';
import Admin from "../components/Admin";
import axios from "axios";
import {myheaders, myurl} from "../components/MyAxios";
import AdminProdList from "../components/AdminProdList";

class Adminn extends Component {
    constructor() {
        super();
        this.state = {
            ct:"",
            x:false,
            aut:false
        };
    }
    componentDidMount() {
        if(sessionStorage.getItem("auth") === "true") {
            this.setState({aut: true})
        }
    }


    render() {

        return (
            <div>
                {this.state.aut ? <Admin/> : <div><h1>Войдите в аккаунт</h1></div>}
            </div>
        );
    }
}

export default Adminn;