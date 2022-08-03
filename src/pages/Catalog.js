import React, {Component} from 'react';
import Search from "../components/Search";
import Leftmenu from "../components/Leftmenu";
import RightProd from "../components/RightProd";
import axios from "axios";
import {myurl} from "../components/MyAxios";

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price:"",
        }
    }
    componentDidMount() {
        axios.post(myurl + "api/product/getPriceInfo")
            .then(res => this.setState({maxprice:res.data.maxPrice,minprice:res.data.minPrice}))
        axios.post(myurl + "api/product/searchAll")
            .then(res => this.setState({defaultProd:res.data.content}))
    }

    render() {
        return (
            <div>
                {this.state.minprice ? this.state.defaultProd ? <Leftmenu minPrice={this.state.minprice} maxPrice={this.state.maxprice}
                        def={this.state.defaultProd} />
                : <div>Loading</div>
                : <div>Loading</div>}
            </div>
        );
    }
}

export default Catalog;