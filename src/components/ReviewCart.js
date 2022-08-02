import React from 'react';

function ReviewCart(props) {
    return (
        <div className={"wrap-reviewss"}>
            {props.reviews.map((m,index) =>
                <div className={"pr-review"} key={index}>
                    <div className="pr-review-wrap">
                        <div className={"pr-review-img"}>
                            <div className={"pr-review-img-name"}>
                                <p style={{fontSize:"20px"}}>{m.username}</p>
                            </div>
                        </div>
                        <div className={"pr-review-presence-wrap"}>
                            <p>Оценка:</p>
                            <div className={"pr-review-presence"}>
                                <p>{m.grade}</p>
                            </div>
                        </div>
                        <div className={"pr-review-benef"}>
                            <h5 className={"pr-review-h5"}>Плюсы</h5>
                            <p className={"pr-review-p"}>{m.pluses}</p>
                        </div>
                        <div className={"pr-review-munises"}>
                            <h5 className={"pr-review-h5"}>Минусы</h5>
                            <p className={"pr-review-p"}>{m.minuses}</p>
                        </div>
                        <div className="pr-review-comment">
                            <h5 className={"pr-review-h5"}>Комментарий</h5>
                            <p className={"pr-review-p"}>{m.comment}</p>
                        </div>

                    </div>
                </div>)}
        </div>
    );
}

export default ReviewCart;