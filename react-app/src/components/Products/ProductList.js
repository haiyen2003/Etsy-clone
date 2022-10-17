import React from "react";
import { NavLink, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllProduct } from "../../store/product";
import './ProductList.css'



function ProductList() {

    const product = useSelector((state) => state.product)
    const allproducts = Object.values(product)
    const dispatch = useDispatch()
    //console.log('before dispatch allproducts=', allproducts)

    const categoryproducts=[allproducts[33], allproducts[35], allproducts[40], allproducts[29], allproducts[25], allproducts[10]]
    console.log('categoryproducts', categoryproducts);
    // console.log('previeimage', categoryproducts[0].previewImage)
    useEffect(() => {
        dispatch(thunkGetAllProduct())
    }, [dispatch])
        // dispatch(thunkGetAllProduct());


    return (
        <div className='splash-container'>

            <div className='background-band'></div>

            <div className='categoryproducts'>
                {
                   categoryproducts?.map((product) =>(
                      <div  className='categorydiv' key={product?.id}>
                        <img k className='product_category_image' src={product?.previewImage} alt="product"></img>
                        <br></br>
                        <div className='product_category_name'>{product?.category} </div>
                      </div>
                    ))

                }

            </div>

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

export default ProductList
