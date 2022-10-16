import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetOneProduct } from "../../store/product";


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
            <h1>Product DETAIL PAGE</h1>
        <div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.highlight}</div>
            <div>{product.category}</div>
            <img src={product.previewImage} alt='product' width={250} height={250}></img>
        </div>
        </div>
        
    )
}

export default ProductDetailPage