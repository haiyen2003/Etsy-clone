import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetOneProduct } from "../../store/product";
import './ProductDetailPage.css'
import { thunkGetAllProductReview } from "../../store/review";


function ProductDetailPage() {
    const {id} = useParams()
    const dispatch = useDispatch()

    const product = useSelector(state => state.product[id])


    const review = useSelector(state => state.review)
    const test = Object.values(review)
    const wonder = test[0]
    const reviewCount = Object.values(review).length
    // console.log(reviewCount)

    const today = new Date()
    const tomorrow = new Date()
    const week = new Date()
    const nextweek = new Date()
    const nextday = new Date()

    nextday.setDate(nextday.getDate() + 1);

    tomorrow.setDate(tomorrow.getDate() + 5);
    week.setDate(week.getDate() + 7)
    nextweek.setDate(week.getDate() + 4);

    const options = {
        month: "short",
        day: "numeric"
    };

    const dayoptions = {
        day: "numeric"
    }

    useEffect(() => {
        dispatch(thunkGetOneProduct(id))
        dispatch(thunkGetAllProductReview(id))
    },[dispatch, id])

    return (
      <div className="mainproduct_container">
        <div className="productcontainer">
          <div>
            <img
              className="productdetailimage"
              src={product?.previewImage}
              alt="product"
            ></img>
            <div className="reviewdetail_div">
              <div>{reviewCount} reviews</div>
              <div></div>
              <div>{wonder?.review}</div>
              <div>{wonder?.createdAt}</div>
            </div>
          </div>
          <div className="productdetail">
            <div>USERNAME WILL GO HERE</div>
            <div className="productdetailname">{product?.name}</div>
            <div className="productdetailprice">{`$${product?.price}`}</div>
            <div>QUANTITY WILL GO HERE</div>
            <div style={{ padding: "5px" }}>
              <button className="Buynow_button">Buy it now</button>
            </div>
            <div style={{ padding: "5px" }}>
              <button className="Addtocart_button">Add to cart</button>
            </div>
            <div className="descriptiondetail_cart">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
              <div className="descriptiondetail_text">
                Other people want this. Over 10 people have this in their carts
                right now.
              </div>
            </div>
            <div className="descriptiondetail_medal">
              <i className="fa-solid fa-medal fa-2xl"></i>
              <div className="descriptiondetail_text">
                Star Seller. This seller consistently earned 5-star reviews,
                shipped on time, and replied quickly to any messages they
                received.
              </div>
            </div>
            <div className="descriptiondetail_cart">
              <i className="fa-solid fa-van-shuttle fa-2xl"></i>
              <div className="descriptiondetail_text">
                <span className="hooray_text">Hooray!&nbsp;</span>This item
                ships free to the US.
              </div>
            </div>
            <div className="productdetail_text">Details </div>
            <div className="productdetail_listtext">
              •&nbsp;{`${product?.highlight}`}
            </div>
            <div className="productdetail_listtext">
              •&nbsp;{product?.category}
            </div>
            <div className="productdetail_text"> Description</div>
            <div className="productdetail_text">{product?.description}</div>
            <div className="productdetail_text">
              Shipping and return policies
            </div>
            <div className="productdetail_text">Estimated arrival</div>
            <div className="shipping_info_detail">
                <div>
                <i className="fa-regular fa-hand"></i>
            <div className="date_string_text">{`${today.toLocaleDateString(undefined, options)}`}</div>
                </div>
                <div>
                    <i className="fa-regular fa-paper-plane"></i>
            <div className="date_string_text">{`${nextday.toLocaleDateString(undefined, options)} - ${tomorrow.toLocaleDateString(undefined, dayoptions)}`}</div>
                </div>
                <div>
                <i className="fa-solid fa-gifts"></i>
            <div className="date_string_text">{`${week.toLocaleDateString(undefined, options)} - ${nextweek.toLocaleDateString(undefined, dayoptions)}`}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductDetailPage