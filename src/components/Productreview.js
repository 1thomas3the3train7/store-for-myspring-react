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
/*
<div className={"pr-review"}>
    <div className="pr-review-wrap">
        <div className={"pr-review-img"}>
            <img src="" alt="aaaaaa"/>
            <div className={"pr-review-img-name"}>
                <p>Влад кирилов</p>
                <p style={{color:"gray"}}>21.07.2022</p>
            </div>
        </div>
        <div className={"pr-review-presence-wrap"}>
            <p>Оценка:</p>
            <div className={"pr-review-presence"}>
                <p>4</p>
            </div>
        </div>
        <div className={"pr-review-benef"}>
            <h5 className={"pr-review-h5"}>Плюсы</h5>
            <p className={"pr-review-p"}>Чай</p>
        </div>
        <div className={"pr-review-munises"}>
            <h5 className={"pr-review-h5"}>Минусы</h5>
            <p className={"pr-review-p"}>цена</p>
        </div>
        <div className="pr-review-comment">
            <h5 className={"pr-review-h5"}>Комментарий</h5>
            <p className={"pr-review-p"}>asjjjjjjjjjjjjjjjjjjjjjjjjj</p>
        </div>

    </div>
</div>*/
