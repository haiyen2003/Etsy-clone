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
        <div className='splash-container'>




            <div className='all_products_container'>

                {categoryproducts && categoryproducts?.map((product) => (
                <div  key={product.id}>

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

export default ArtCategory
