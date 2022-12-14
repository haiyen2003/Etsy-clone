import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { thunkGetOneProduct } from "../../store/product";
import './ProductDetailPage.css'
import { thunkGetAllProductReview } from "../../store/review";
import ReviewCreateModal from "../Reviews/ReviewCreateModal";
import { Rating } from 'react-simple-star-rating'
import { FaStar } from 'react-icons/fa'
import { thunkGetAllProduct } from "../../store/product";

import { addItemThunk, getCartThunk } from '../../store/cart'


function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const product = useSelector((state) => state.product[id]);

  const user = useSelector((state) => state.session.user);
  // const productArr = Object.values(product);
  const review = useSelector((state) => state.review);

  // console.log('pr', productArr)
  const reviewArray = Object.values(review);
  const reviewCount = Object.values(review).length;

  // console.log("review array",reviewCount)


const avgStar = reviewArray.map((review) => review.stars);
let sum = 0;
avgStar.forEach((review) => {
  sum += review;
});

const realAvgStar = Math.round(sum / reviewCount);
// console.log(realAvgStar, 'realavgstar')


  const today = new Date();
  const tomorrow = new Date();
  const week = new Date();
  const nextweek = new Date();
  const nextday = new Date();

  nextday.setDate(nextday.getDate() + 1);

  tomorrow.setDate(tomorrow.getDate() + 5);
  week.setDate(week.getDate() + 7);
  nextweek.setDate(week.getDate() + 4);

  const options = {
    month: "short",
    day: "numeric",
  };

  const dayoptions = {
    day: "numeric",
  };

  useEffect(() => {
    dispatch(thunkGetOneProduct(id));
    dispatch(thunkGetAllProductReview(id));
    dispatch(addItemThunk(id));
    dispatch(thunkGetAllProduct());

  }, [dispatch, id]);




  const buyNow = () => {
    if (user) {alert(`Thank you for purchasing!`)} else{
      alert(`Please sign in to purchase.`)
    };
    history.push("/");
  };
  // console.log("product.userId-----", product, "user.id-----", user.id);
  // console.log("product.reviews-----", product?.reviews);
  const filteredreviewid = reviewArray.filter(
    (item) => item?.userId === user?.id
  );

  const addToCart = async () => {
   
    if (user){

    await dispatch(addItemThunk(id, { quantity }))
    history.push('/cart')

    }
    else{
      alert(`Please sign in to purchase.`)
    }

  };

  // const increasequantity = () =>{
  //   if (quantity ==='') setQuantity(1);
  //   else setQuantity(quantity+1);

  // }




  // console.log("filterereviewid------------", filteredreviewid);
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
            <div className="review_main_div">
              <div className="review_inner_line_div">
                <div>
                  <span style={{ fontSize: "25pt" }}>
                    {reviewCount} reviews&nbsp;
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  {realAvgStar === 1 && (
                    <div>
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="lightgrey" />
                      <FaStar size={20} color="lightgrey" />
                      <FaStar size={20} color="lightgrey" />
                      <FaStar size={20} color="lightgrey" />
                    </div>
                  )}
                  {realAvgStar === 2 && (
                    <div>
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="lightgrey" />
                      <FaStar size={20} color="lightgrey" />
                      <FaStar size={20} color="lightgrey" />
                    </div>
                  )}
                  {realAvgStar === 3 && (
                    <div>
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="lightgrey" />
                      <FaStar size={20} color="lightgrey" />
                    </div>
                  )}
                  {realAvgStar === 4 && (
                    <div>
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="lightgrey" />
                    </div>
                  )}
                  {realAvgStar === 5 && (
                    <div>
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                      <FaStar size={20} color="black" />
                    </div>
                  )}
                </div>
              </div>

              {!user ||
              product?.userId === user?.id ||
              filteredreviewid.length ? (
                <div></div>
              ) : (
                <div>
                  <ReviewCreateModal review={review} />
                </div>
              )}
            </div>
            {/* <div>{reviewCount} reviews</div>
              <div></div>
              <div>{wonder?.review}</div>
              <div>{wonder?.createdAt}</div> */}
            {reviewCount ? (
              reviewArray.map((review) => (
                <div className="main_review_container" key={review.id}>
                  {/* <div id='reviewowner'>{review.User ? review.User.firstName: 'Annoymous'}</div> */}
                  <div className="review_container">
                    <div className="review_stars_container">
                      {review.stars === 1 && (
                        <div>
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {review.stars === 2 && (
                        <div>
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {review.stars === 3 && (
                        <div>
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {review.stars === 4 && (
                        <div>
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {review.stars === 5 && (
                        <div>
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="review_container_text">
                        {review.review}
                      </div>
                      <div></div>
                    </div>
                    <div className="review_user_profile">
                      <i className="fa-regular fa-circle-user fa-2xl">&nbsp;</i>
                      <div>
                        {review.firstName}&nbsp;{review.lastName}&nbsp;
                      </div>
                      <div id="reviewdate">{review.createdAt.slice(0, 10)}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div> No Reviews. Would you like to leave a review?</div>
            )}
          </div>
        </div>
        <div className="productdetail">
          <div className="product_username_follow_text">
            <div className="productdetail_text">{product?.username}</div>
            {/* <div className="heart_follow_div">
              <i className="fa-regular fa-heart"></i>
              <div>&nbsp;Follow</div>
            </div> */}
          </div>
          <div className="productdetailname">{product?.name}</div>
          <div className="productdetailprice">{`$${new Intl.NumberFormat().format(product?.price)}`}</div>
          <select
            className="select_quantity_main"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="0">Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>


          {!user ? (<div className='nologintextlable' ><span >Please sign in to buy it</span></div>) :(
            <div style={{ padding: "5px" }}>
            <button onClick={buyNow} className="Buynow_button">
              Buy it now
            </button>
          </div>)}



          {! user ? (<div className='nologintextlable'><span> Please sign in to add to cart</span></div>) :(<div style={{ padding: "5px" }}>
            <button onClick={() => addToCart()}   className="Addtocart_button">
              Add to cart
            </button>

            {/* <button onClick={()=>increasequantity()}>Increase</button> */}
          </div>)}




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
              <span className="hooray_text">Hooray!&nbsp;</span>This item ships
              free to the US.
            </div>
          </div>
          <div className="productdetail_text">Details </div>
          <div className="productdetail_listtext">
            ???&nbsp;{`${product?.highlight}`}
          </div>
          <div className="productdetail_listtext">
            ???&nbsp;{product?.category}
          </div>
          <div className="productdetail_text"> Description</div>
          <div className="productdetail_text">{product?.description}</div>
          <div className="productdetail_text">Shipping and return policies</div>
          <div className="productdetail_text">Estimated arrival</div>
          <div className="shipping_info_icon">
            <div>
              <i className="fa-regular fa-hand"></i>
            </div>
            <div className="border-Line"></div>
            <div>
              <i className="fa-regular fa-paper-plane"></i>
            </div>
            <div className="border-Line"></div>
            <div>
              <i className="fa-solid fa-gifts"></i>
            </div>
          </div>
          <div className="shipping_info_detail">
            <div>
              <div className="date_string_text">{`${today.toLocaleDateString(
                undefined,
                options
              )}`}</div>
              <div className="shipping_text">Order placed</div>
            </div>
            <div>
              <div className="date_string_text">{`${nextday.toLocaleDateString(
                undefined,
                options
              )} - ${tomorrow.toLocaleDateString(undefined, dayoptions)}`}</div>
              <div className="shipping_text">Order ships</div>
            </div>
            <div>
              <div className="date_string_text">{`${week.toLocaleDateString(
                undefined,
                options
              )} - ${nextweek.toLocaleDateString(undefined, dayoptions)}`}</div>
              <div className="shipping_text">Delivered!</div>
            </div>
          </div>
          <div className="productdetail_text">Cost to ship</div>
          <div className="free_text">Free</div>
          <div className="green_bubble_text">
            Artsy offsets carbon emissions from shipping and packaging on this
            purchase.
          </div>
          <div className="return_exchange_div">
            <div>
              <div className="return_exchange_smalltext">
                Returns & exchanges
              </div>
              <div className="return_exchange_bigtext">Accepted</div>
              <div className="return_exchange_smalltext">
                Exceptions may apply
              </div>
            </div>
            <div>
              <div className="return_exchange_smalltext">
                Return & exchange window
              </div>
              <div className="return_exchange_bigtext">30 days</div>
              <div className="return_exchange_smalltext">
                from item delivery
              </div>
            </div>
          </div>
          <div className="purchase_protect_div">
            <i
              style={{ color: "blue" }}
              className="fa-regular fa-handshake fa-2xl"
            >
              &nbsp;
            </i>
            <div className="purchase_protect_text">
              {" "}
              <span style={{ fontWeight: "bold" }}>
                Artsy Purchase Protection:
              </span>{" "}
              Shop confidently on Artsy knowing if something goes wrong with an
              order, we've got your back for all eligible purchases{" "}
            </div>
          </div>
          <div className="productdetail_text">Ships from U.S.A.</div>
          <div className="productdetail_text">Meet the Seller</div>
          <div>
            <div className="meet_seller_div">
              <i className="fa-regular fa-user fa-2xl"></i>
              <div className="meet_seller_text">
                <div>
                  &nbsp;{product?.firstname}&nbsp;{product?.lastname}
                </div>
                <div>&nbsp;{product?.username}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="more_from_seller_div">
        <div>More from Seller</div>
        <div>Display seller's products here? Discuss with team</div>
      </div> */}
      <div className="group_info_div">
        <div>
          <div>Meet the developers</div>
        </div>
        <div>
          <div>Yen Nguyen</div>
          <div>
            <div>
              <i className="fa-brands fa-linkedin">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://www.linkedin.com/in/nguyen-yen-dsgn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div>
              <i className="fa-brands fa-square-github">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://github.com/haiyen2003"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>Lyn Chen</div>
          <div>
            <div>
              <i className="fa-brands fa-linkedin">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://www.linkedin.com/in/lyn-chen-385ab5b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div>
              <i className="fa-brands fa-square-github">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://github.com/linyangofmay"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>Jake Ye</div>
          <div>
            <div>
              <i className="fa-brands fa-linkedin">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://www.linkedin.com/in/jake-ye-a2365250/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div>
              <i className="fa-brands fa-square-github">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://github.com/jakeye25"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>Kevin Kim</div>
          <div>
            <div>
              <i className="fa-brands fa-linkedin">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://www.linkedin.com/in/kevin-kim-a88429150"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div>
              <i className="fa-brands fa-square-github">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://github.com/kevykim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="test">
          <div className="footer_main_div">
            <div className="footer_text_div">
              <i className="fa-solid fa-globe ">&nbsp;</i>
              <div>United States</div>
              <div>&nbsp;|&nbsp;</div>
              <div>English(US)</div>
              <div> &nbsp;| &nbsp;</div>
              <div> $(USD)</div>
            </div>
            <div className="footer_text_div">
              <div>&copy; 2022 Artsy, Inc.</div>
              <div>&nbsp;|&nbsp;</div>
              <a
                className="more_info_text"
                href="https://github.com/haiyen2003/Etsy-clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                For more info
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

              export default ProductDetailPage
