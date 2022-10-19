import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { thunkGetCurrentProduct } from "../../store/product";
import { NavLink } from "react-router-dom";
import ProductUpdate from "./ProductUpdate";
import ProductDelete from "./ProductDelete";

import './MyProductListing.css'


function MyProductListings() {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)
    // console.log(user)

    useEffect(() => {
        dispatch(thunkGetCurrentProduct())
    }, [dispatch])

    const currentProduct = useSelector(state => state.product)
    // console.log('current', currentProduct)
    const currentProductArr = Object.values(currentProduct)

    if (!user) history.push('/')

  return (
    <div className="my_product_listing_div">
      <h1>{`${user.firstName}'s Shop`}</h1>
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
            <div className="my_product_listing_name">{product.name}</div>
            </div>
            <div>
              <ProductUpdate product={product} />
              <ProductDelete product={product} />
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProductListings;
