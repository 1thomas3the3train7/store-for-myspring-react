import React, {Component} from 'react';
import AdminRedactFunc from "../components/AdminRedactFunc";
import "../style/admin.css"
import axios from "axios";
import {myurl} from "../components/MyAxios";

class AdminRedact extends Component {
    constructor() {
        super();
        this.state = {
            product:null,
        }
    }
    componentDidMount() {
        let id = window.location.href.split("prod=")[1]
        axios.post(myurl + "api/product/getproductbyid",{result:id},{withCredentials:true})
            .then(res => this.setState({product:res.data}))
    }

    render() {
        return (
            <div>
                {this.state.product ? <AdminRedactFunc prod={this.state.product}/> : <div>Loading</div>}
            </div>
        );
    }
}

export default AdminRedact;