import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { thunkGetCurrentReview } from "../../store/review"

import './MyReviews.css'
import ReviewDelete from "./ReviewDelete"
import ReviewUpdateModal from "./ReviewUpdateModal"




function MyReviews() {
    const dispatch = useDispatch()
    const history = useHistory()

    const currentUser = useSelector(state => state.session.user)

    if (!currentUser) {
        alert('Please log in first')
        history.push('/')
    }

    useEffect(() => {
        dispatch(thunkGetCurrentReview())
    },[dispatch])

    const myReviews = useSelector(state => state.review)
    const myReviewsArr = Object.values(myReviews)



    return (
      <div className="my_review_listing_div">
        <div className="my_review_listing_box">
          {myReviews &&
            myReviewsArr.map((review, i) => (
              <div key={i}>
                <div className="my_review_listing_innerbox">
                  <div className="my_review_listing_nav">
                    <div className="my_review_left">
                      <NavLink to={`/products/${review.productId}`}>
                        <img
                          src={review.productImg}
                          alt="review"
                          className="my_review_listing_img"
                        ></img>
                      </NavLink>
                      <div className="my_review_delete_div">
                        <ReviewDelete review={review} />
                      </div>
                    </div>
                    <div className="my_review_main_text">
                      <div className="my_review_listing_name">
                        {review.productname}
                      </div>
                      <div className="my_review_category_text">{`Category: ${review.productcategory}`}</div>
                      <div className="my_review_starbox">
                        <div className="my_review_star_text">{`Your Review ${review.stars}`}</div>
                        <div className="my_review_review_text">
                          {review.review}
                        </div>
                        <div>
                          <ReviewUpdateModal review={review} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}



export default MyReviews
