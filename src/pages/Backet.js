import React, {Component} from 'react';
import BasketFunc from "../components/BasketFunc";
import "../style/Basket.css"

class Backet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basket:null,
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <BasketFunc/>
            </div>
        );
    }
}

export default Backet;