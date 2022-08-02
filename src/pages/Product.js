
import React, {Component, useContext, useState} from 'react';
import axios from "axios";
import {$authHostx, myurl} from "../components/MyAxios";
import "../style/main.css"
import Galleryslide from "../components/Sliders/Galleryslide";
import Productinfo from "../components/Productinfo";
import "../style/Product.css"
import Productreview from "../components/Productreview";
import {useSelector} from "react-redux";
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom";

class Product extends Component {
    constructor() {
        super();
        this.state = {
            product:"",
            c:50,
            reviews:"",
            likes:"",
            admin:false
        }
    }
    componentDidMount() {
        function sele(){
            if(sessionStorage.getItem("auth")==="true"){return true}else{return false}
        }
        let ur = window.location.href.replace(myurl + "product?id=","")
        ur = ur.split("&")[0];
        let c = window.location.href.split("&c=").pop();
        this.setState({c:c})

        axios.post(myurl + "api/product/getproductbyid",{result:ur},
            {withCredentials:true}).then(res => {
            this.setState({product: res.data});
            $authHostx.post(myurl + "api/product/getLikes", {}, {withCredentials: true})
                .then(lik => {
                    let my = []
                    lik.data.map(m => my.push(m.id))
                    if(my.includes(this.state.product.id)){
                        this.setState({likes:"true"})
                    } else {
                        this.setState({likes:"false"})
                    }
                    console.log(this.state.product.id)
                    console.log(my)
                }).catch(err => {
                if(err.request.status === 403){
                    axios.post(myurl + "api/auth/token",{},{withCredentials:true})
                        .then(res => {sessionStorage.setItem("token",res.data.result);$authHostx.post(myurl + "api/product/getLikes", {}, {withCredentials: true})
                            .then(lik => {
                                let my = []
                                lik.data.map(m => my.push(m.id))
                                if(my.includes(this.state.product.id)){
                                    this.setState({likes:"true"})
                                } else {
                                    this.setState({likes:"false"})
                                }
                                console.log(this.state.product.id)
                                console.log(my)
                            }).catch(err => this.setState({likes:"false"}))})
                }})
        })
        try {
            const token = sessionStorage.getItem("token")
            let decoded = jwtDecode(token)
            if (decoded.roles.includes("ROLE_ADMIN")){
                this.setState({admin:true})
            }} catch (Exception){
            console.log(Exception)
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className={" p_myflex"}>
                        <div>
                            {this.state.product.mainLinkImage ? <Galleryslide prod={this.state.product}/> : <div>LOADING</div>}
                            {this.state.product ? <Productreview rev={this.state.product.reviewsDTOList}/> : <div>LOADING</div>}
                        </div>
                        {this.state.product && this.state.likes ?
                            <Productinfo prod={this.state.product}
                                         count={this.state.c} likes={this.state.likes} admin={this.state.admin}/> : <div>LOADING</div>}

                    </div>
                </div>
            </div>
        );
    }
}

export default Product;