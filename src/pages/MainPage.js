import React, {Component} from 'react';
import Main from "./Main";
import axios from "axios";
import {myurl} from "../components/MyAxios";

class MainPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        axios.post(myurl + "api/product/getLeftSlaider")
            .then(res => this.setState({leftSlaider:res.data}))
        axios.post(myurl + "api/product/getRightSlaider")
            .then(res => this.setState({rightSlaider:res.data}))
    }

    render() {
        return (
            <div>
                {this.state.rightSlaider ? <Main leftsl={this.state.leftSlaider} rightsl={this.state.rightSlaider}/> : <div>Loading</div>}
            </div>
        );
    }
}

export default MainPage;