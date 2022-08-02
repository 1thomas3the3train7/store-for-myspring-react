import React, {Component} from 'react';
import axios from "axios";
import {myurl} from "../MyAxios";
import ReactDOM from "react-dom/client";


class Example extends Component {
    constructor() {
        super();
        this.state = {
            products:"",
        }
    }
    componentDidMount() {
        axios.post(myurl + "api/product/getProductList1",{},{withCredentials:true})
            .then(res => this.setState({products:res.data}) )
    }

    render() {
        return (
            <div id={"myroot"}>
                {this.state.products ? this.state.products.map((m,index) => <div><h1>{m.name}</h1></div>) : <div>Load</div>}
                <button onClick={() => console.log(this.state.products)}>SDFASDASD</button>
            </div>
        );
    }
}

export default Example;