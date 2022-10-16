import React from "react";
import { NavLink, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllProduct } from "../../store/product";



function ProductList() {

    const product = useSelector((state) => state.product)
    const allproducts = Object.values(product)
    const dispatch = useDispatch()
    console.log('allproducts=', allproducts)

    const categoryproducts=[allproducts[9], allproducts[35], allproducts[2], allproducts[12], allproducts[25], allproducts[30]]
    const topsix = allproducts.slice(0,6);
    console.log('topsix', topsix)
    //  console.log('categoryproducts', categoryproducts);
    // console.log('previeimage', categoryproducts[0].previewImage)
    useEffect(() => {
        dispatch(thunkGetAllProduct())
    }, [dispatch])
        // dispatch(thunkGetAllProduct());


    return (
        <div className='splash-container'>
            <div>
                {
                    topsix.map((product) =>(
                      <div key={product.id}>
                        <img src={product.previewImage} alt='product'/>
                      </div>
                    ))
                }
            </div>
            <div>
                {allproducts && allproducts.map((product) => (
                <div key={product.id}>
                    <div>
                    <NavLink to={`/products/${product.id}`}>
                    <img src={product.previewImage} alt="product" width="250" height="250"></img>
                    </NavLink>
                    </div>
                </div>
                ))}

            </div>
        </div>

    )
}

export default ProductList
