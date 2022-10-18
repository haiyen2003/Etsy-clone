import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { thunkDeleteReview } from "../../store/review"

import './ReviewDelete.css'

function ReviewDelete({review}) {
    const history = useHistory()
    const dispatch = useDispatch()

    const onClick = async (event) => {
        await dispatch(thunkDeleteReview(review.id))
        alert('Review deleted')
        history.push('/')
    }

    return (
        <button className="review_delete_button" onClick={onClick}>Delete this review</button>
    )
}


export default ReviewDelete