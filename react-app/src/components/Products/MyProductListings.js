import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { thunkGetAllProduct, thunkGetCurrentProduct } from "../../store/product";
import { NavLink } from "react-router-dom";
import ProductUpdate from "./ProductUpdate";
import ProductDelete from "./ProductDelete";

import './MyProductListing.css'


function MyProductListings() {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)
    // console.log(user)
    const currentProduct = useSelector(state => state.product)
    // console.log('current', currentProduct)
    const currentProductArr = Object.values(currentProduct)
    console.log('product in my product listing', currentProductArr)

    useEffect(() => {
        dispatch(thunkGetCurrentProduct())
        dispatch(thunkGetAllProduct())
    }, [dispatch])

    if (!user) history.push('/')

  return (
    <div className="my_product_listing_div">
      { currentProductArr.length===0 ? (<h1>You have no products to sell so far</h1>): (
        <div>

        <h1>{`${user?.firstName}'s Shop`}</h1>

      <div className="my_product_listing_box">
        {currentProductArr.map((product, i) => (
          <div  key={i}>
            <div className="my_product_listing_innerbox">
            <div className="my_product_listing_nav">
              <NavLink to={`/products/${product?.id}`}>
                <img
                  alt="product"
                  src={product?.previewImage}
                  className="my_product_listing_img"
                ></img>
              </NavLink>
            <div className="my_product_listing_name">{product?.name}</div>
            </div>
            <div className = "my_product_listing_desbox">
              <div className="my_product_listing_description">{product?.description}</div>
              <div className="my_product_listing_category">Category: {product?.category}</div>
              <div className="my_product_listing_category">Highlight: {product?.highlight}</div>
            </div>

            <div id= "my_product_listing_btn_container">
            <Link id="userproducteditbtn" to={`/products/${product?.id}/edit`}>
                      Edit Product
            </Link>
              <ProductDelete product={product} />
            </div>
          </div>
          </div>
        ))}
      </div>  </div>)}
    </div>
  );
}

export default MyProductListings;
