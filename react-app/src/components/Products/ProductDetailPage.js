import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetOneProduct } from "../../store/product";
import './ProductDetailPage.css'


function ProductDetailPage() {
    const {id} = useParams()
    const dispatch = useDispatch()

    const product = useSelector(state => state.product[id])
    // console.log(product)

    // const review = useSelector(state => state.review)
    // const reviewCounter = Object.values(review).length

    useEffect(() => {
        dispatch(thunkGetOneProduct(id))
        //dispatch for GET ALL REVIEWS
    },[dispatch, id])

    return (
      <div>
        <div className="productcontainer">
          <div>
            <img
              className="productdetailimage"
              src={product?.previewImage}
              alt="product"
            ></img>
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
              <i class="fa-solid fa-medal fa-2xl"></i>
              <div className="descriptiondetail_text">
                Star Seller. This seller consistently earned 5-star reviews,
                shipped on time, and replied quickly to any messages they
                received.
              </div>
            </div>
            <div className="descriptiondetail_cart">
              <i class="fa-solid fa-van-shuttle fa-2xl"></i>
              <div className="descriptiondetail_text">
                <span className="hooray_text">Hooray!&nbsp;</span>This item
                ships free to the US.
              </div>
            </div>
            <div>{product?.description}</div>
            <div>{product?.highlight}</div>
            <div>{product?.category}</div>
          </div>
        </div>
      </div>
    );
}

export default ProductDetailPage