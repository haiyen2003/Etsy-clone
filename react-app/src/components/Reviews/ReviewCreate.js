import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FaStar} from 'react-icons/fa'
import { useHistory, useParams } from "react-router-dom";

import { thunkCreateReview } from "../../store/review";


import "./ReviewCreate.css";

function ReviewCreate({ setShowModal, review }) {
  const dispatch = useDispatch();
  const {id} = useParams()
  const history = useHistory()

  const user = useSelector(state => state.session.user)
  // console.log(user)




  const [createdStar, setCreatedStar] = useState('');
  const [createdReview, setCreatedReview] = useState('');
  // const [createdReviewImg, setcreatedReviewImg] = useState(review.reviewImg)
  const [submit, setSubmit] = useState(false);
  const [validations, setValidations] = useState(false);




  useEffect(() => {
    const errors = [];
    if (createdStar <= 0 || createdStar > 5)
      errors.push("Stars must be greater than 0 and less than 5");
    if (createdReview.length < 20)
      errors.push("Please add a review more than 20 characters long");
    // if (
    //   (!createdReviewImg?.includes("jpg") &&
    //     !createdReviewImg?.includes("png") &&
    //     !createdReviewImg?.includes("jpeg") &&
    //     !createdReviewImg?.includes("gif") &&
    //     !createdReviewImg?.includes("svg")) ||
    //   (!createdReviewImg?.includes("https") &&
    //     !createdReviewImg?.includes("http"))
    // )
    //   errors.push("Please enter a valid url image");
    setValidations(errors);
  }, [createdStar, createdReview]);

  const onClick = (event) => {
    setShowModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmit(!submit);
    const payload = {
      productId: id,
      stars: createdStar,
      review: createdReview,
      // createdReviewImg
    };

    let created = await dispatch(thunkCreateReview(payload))



    if (created) {
        history.push(`/products/${payload.productId}`)
        setShowModal(false)
    }
  };

  return (
    <div className="create_review_main">
      <div className="create_review_div">
        <form className="create_review_form" onSubmit={onSubmit}>
          <div className="create_review_header">My review</div>

          {/* <div>
            <input
              type="number"
              name="stars"
              value={createdStar}
              className="create_review_input_inner"
              onChange={(event) => setCreatedStar(event.target.value)}
            ></input>
          </div> */}

          <div style={{display: 'flex'}}>
            {["star1", "star2", "sta3r", "star4", "star5"].map((star, index) => {
              let starValue = index + 1;
              return (
                <div>
                  <label style={{ cursor: "pointer" }}>
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      name="star"
                      value={starValue}
                      onClick={() => setCreatedStar(starValue)}
                    ></input>
                    <FaStar color={createdStar >= starValue ? "black" : "lightgrey"} size={25} />
                  </label>
                </div>
              );
            })}
          </div>

          <div>
            {/* <input

            type='checkbox'
            name='stars'
            value={1}
            checked={+stars >=1 ? true: false}
            onChange={(e)=>setStars(e.target.value)}
            className='star_click'
            id='s1'


          />
          <label htmlFor='s1'><i className="fas fa-thin fa-star" ></i></label>
          <input

            type='checkbox'
            name='stars'
            value={2}
            checked={+stars >=2 ? true: false}
            onChange={(e)=>setStars(e.target.value)}
            className='star_click'
            id='s2'


          />
          <label htmlFor='s2'><i className="fas fa-thin fa-star" ></i></label> */}

            {/* <input
             type='checkbox'




          /> */}

            {/* <label><i className="fas fa-solid fa-star" id='s2'></i></label>
          <label><i className="fas fa-solid fa-star" id='s3'></i></label>
          <label><i className="fas fa-solid fa-star" id='s4'></i></label>
          <label><i className="fas fa-solid fa-star" id='s5'></i></label> */}
          </div>

          <div>
            <div className="create_review_feedback">
              Help others by sharing your feedback
            </div>
            <div className="create_review_question">
              What do you like about this? Did it ship on time? Describe your
              experience with this shop.
            </div>
            <textarea
              type="text-area"
              name="review"
              value={createdReview}
              className="create_review_input_inner_reviews"
              onChange={(event) => setCreatedReview(event.target.value)}
            ></textarea>
          </div>

          {/* <div>
              <div className="create_review_photo">
                Add a photo{" "}
                <span className="create_review_optional">(optional)</span>
              </div>
              <input
                type="text"
                name="reviewImg"
                value={createdReviewImg}
                className="create_review_input_inner"
                onChange={(event) => setcreatedReviewImg(event.target.value)}
              ></input>
            </div> */}

          <div className="create_review_profile_div">
            <i className="fa-regular fa-face-grin-wide fa-2xl"></i>
            <div className="create_review_reviewby_text">
              <div>Reviewed by</div>
              <div>{user?.firstName}</div>
            </div>
          </div>
          {validations.length > 0 && submit ? (
            <div className="create_review_empty">
              <div className="create_review_error">
                {validations.map((error, i) => (
                  <div key={i}>{error}</div>
                ))}
              </div>
            </div>
          ) : (
            <div className="create_review_empty"></div>
          )}
          <div className="create_review_buttons">
            <div>
              <button onClick={onClick} className="create_review_cancel">
                Cancel
              </button>
            </div>
            <div>
              <button
                disabled={validations.length > 0 && submit}
                type="submit"
                className="create_review_post"
              >
                Create Your Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewCreate;
