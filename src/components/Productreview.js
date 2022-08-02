import React, {useContext, useState} from 'react';
import "../style/ProductReview.css"
import axios from "axios";
import {myurl} from "./MyAxios";
import ReviewCart from "./ReviewCart";

function Productreview(props) {
    const [reviews,setReviews] = useState(props.rev);

    return (
        <div className={"review-wrap"}>
            <div>
                <h2>Отзывы</h2>
            </div>
            {reviews ? <ReviewCart reviews={reviews}/> : <div>LOADING</div>}
        </div>
    );
}

export default Productreview;

