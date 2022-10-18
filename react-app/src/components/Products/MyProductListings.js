import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { thunkGetCurrentProduct } from "../../store/product";
import { NavLink } from "react-router-dom";
import ProductUpdate from "./ProductUpdate";
import ProductDelete from "./ProductDelete";


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
        <div>
            <div>My Shop</div>
            <div>
                {currentProductArr.map((product, i) => (
                    <div key={i}>
                        <div>
                            <NavLink to={`/products/${product?.i}`}>
                                <img alt="product" src={product?.previewImage} width={200}>
                                </img>
                            </NavLink>
                        </div>
                        <div>{product.name}</div>
                        <div>
                            <ProductUpdate product={product}/>
                            <ProductDelete product={product}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default MyProductListings;
