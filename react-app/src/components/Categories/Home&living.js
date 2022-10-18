import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../Products/ProductList.css'
import { thunkGetAllProduct } from "../../store/product";



function HomeLivingCategory() {

    const product = useSelector((state) => state.product)
    const allproducts = Object.values(product)
    const dispatch = useDispatch()
    console.log("allproduct in home category", allproducts)
    useEffect(() => {
        dispatch(thunkGetAllProduct())
    }, [dispatch])
        // dispatch(thunkGetAllProduct());


    return (
        <div className='splash-container'>

            <div className='background-band'></div>


            <div className='product_header'>
                Popular gifts right now
            </div>

            <div className='all_products_container'>

                {allproducts && allproducts.map((product) => (
                <div calssName= 'productdiv' key={product.id}>

                    <NavLink to={`/products/${product.id}`} className='product_navlink'>
                    <img src={product.previewImage} alt="product" className='productlist_image'></img>

                    <div className='product_info'>
                        <div style={{ fontweight: '700' }}>{product.name}</div>

                    </div>
                    <div className='product_info'>${product.price}</div>
                    </NavLink>

                </div>
                ))}

            </div>
        </div>

    )
}

export default HomeLivingCategory
