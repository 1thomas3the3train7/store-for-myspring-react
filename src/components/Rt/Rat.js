import React from 'react'
import { Rating } from 'semantic-ui-react'

const RatingExampleSize = () => (

    <div>
        <Rating maxRating={5} defaultRating={3} icon='star' size='massive' onRate={event => console.log(event.target)}/>
    </div>
)
export default RatingExampleSize