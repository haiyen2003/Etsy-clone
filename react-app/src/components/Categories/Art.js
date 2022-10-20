import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Category_page.css'
import { thunkGetAllProduct } from "../../store/product";



function ArtCategory() {

    const product = useSelector((state) => state.product)
    const allproducts = Object.values(product)
    const dispatch = useDispatch()
    // console.log("allproduct in home category", allproducts)

    // for(let i = 0; i <allproducts.length, i++) {
    //     homeproducts=[]
    //     if (allproducts[i].category == "Home & Living"){
    //         homeproducts.push(allproducts[i])
    //     }
    //     return homeproducts
    //
    let categoryproducts = allproducts.filter(product => product?.category == "Art & Collectibles")
    // console.log("after loop", homeproducts)
    // homecategoryproducts = allproducts.filter()
    useEffect(() => {
        dispatch(thunkGetAllProduct())
    }, [dispatch])
    // dispatch(thunkGetAllProduct());


    return (
        <div className='category-container'>
            <div>
                <h1 className="category-container-header">Find something you love in Art & Collectibles</h1>
            </div>
            <div className='category_products_container'>
                {categoryproducts && categoryproducts?.map((product) => (
                    <div calssName='category_product' key={product.id}>

                        <NavLink to={`/products/${product.id}`} className='category_product_navlink'>
                            <img src={product.previewImage} alt="product" className='category_product_image'></img>

                            <div className='category_productinfo'>
                                <div style={{ fontweight: '700' }}>{product.name}</div>

                            </div>
                            <div className='category_productinfo'>${product.price}</div>
                        </NavLink>

                    </div>
                ))}

            </div>
        </div>

    )
}

export default ArtCategory
