import React, {Component} from 'react';
import Likesfunc from "../components/Likesfunc";
import "../style/Like.css"
import axios from "axios";
import {$authHostx, myurl} from "../components/MyAxios";

class Like extends Component {
    constructor() {
        super();
        this.state = {
            products:"",
        }
    }
    componentDidMount() {
        $authHostx.post(myurl + "api/product/getLikes",{},{withCredentials:true})
            .then(res => this.setState({products:res.data,auth:true})).catch(err => {this.setState({auth:false});
            if(err.request.status === 403){
                axios.post(myurl + "api/auth/token",{},{withCredentials:true})
                    .then(res => {sessionStorage.setItem("token",res.data.result);$authHostx.post(myurl + "api/product/getLikes", {}, {withCredentials: true})
                        .then(lik => {
                            this.setState({products:lik.data,auth:true})
                        }).catch(err => this.setState({auth:false}))})}
            })
    }
    render() {
        return (
            <div>
                {this.state.auth ? this.state.products ? <Likesfunc prod={this.state.products}/> :
                    <div>LOADING</div> : <div className={"container"}>
                    <h2>
                        Войдите/Перезайдите в аккаунт
                    </h2>
                </div>}
            </div>
        );
    }
}

export default Like;