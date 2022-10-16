import React from "react";
import { NavLink, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllProduct } from "../../store/product";



function ProductList() {

    const product = useSelector((state) => state.product)
    const allproducts = Object.values(product)
    const dispatch = useDispatch()
    // console.log(allproducts)

    useEffect(() => {
        dispatch(thunkGetAllProduct())
    }, [dispatch])
        // dispatch(thunkGetAllProduct());

    
    return (
        <div>
            <h1>HOMEPAGE</h1>
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