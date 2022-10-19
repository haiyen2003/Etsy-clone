import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllProduct } from "../../store/product";
import './ProductList.css'



function ProductList() {

    const product = useSelector((state) => state.product)
    const allproducts = Object.values(product)
    const dispatch = useDispatch()

    const user = useSelector((state) => state.session)
    // console.log('check main page user', user.user)
    // console.log('allproducts=', allproducts)

    // const categoryproducts=[allproducts[9], allproducts[35], allproducts[2], allproducts[12], allproducts[25], allproducts[30]]
    // console.log('categoryproducts', categoryproducts);
    // console.log('previeimage', categoryproducts[0].previewImage)
    useEffect(() => {
        dispatch(thunkGetAllProduct())
    }, [dispatch])
        // dispatch(thunkGetAllProduct());


    return (
        <>
            { user.user ? <div id = "welcome_msg"><h1 >Welcome back, {user.user? user.user.firstName: 'Annoymous'}!</h1></div> :
            <div id = "welcome_msg"><h1 id = "welcome_msg">Fresh finds fit for cozy season.</h1></div>}
        <div className='splash-container'>

            <div className='background-band'></div>

            <div className='categoryproducts'>
                {/* {
                   categoryproducts?.map((product) =>(
                      <div  className='categorydiv' key={product?.id}>
                        <img k className='product_category_image' src={product?.previewImage} alt="product"></img>
                        <br></br>
                        <div className='product_category_name'>{product?.category} </div>
                      </div>
                    ))

                } */}
                <NavLink to='/home&living' className='category_link'>
                    <img src='https://i.etsystatic.com/11407045/r/il/e768b9/1985856498/il_300x300.1985856498_98hg.jpg'
                    alt="img" className='category_img'></img>

                    <div className='category_name'>
                        <div style={{ fontweight: '700' }}>Home & Living</div>

                    </div>

                </NavLink>
                <NavLink to='/arts' className='category_link'>
                    <img src='https://i.etsystatic.com/6571804/r/il/c8d997/1833011844/il_340x270.1833011844_jq89.jpg'
                    alt="img" className='category_img'></img>

                    <div className='category_name'>
                        <div style={{ fontweight: '700' }}>Arts & Collectibles</div>

                    </div>

                </NavLink>
                <NavLink to='/jewelry' className='category_link'>
                    <img src='https://i.etsystatic.com/30233057/c/2250/2250/0/278/il/854c80/3970826709/il_300x300.3970826709_j41s.jpg'
                     alt="img" className='category_img'></img>

                    <div className='category_name'>
                        <div style={{ fontweight: '700' }}>Jewelry & Accessories</div>

                    </div>

                </NavLink>
                <NavLink to='/wedding' className='category_link'>
                    <img src='https://i.etsystatic.com/5929558/c/1024/813/0/56/il/8e84d8/1033701193/il_340x270.1033701193_iuif.jpg'
                    alt="img" className='category_img'></img>

                    <div className='category_name'>
                        <div style={{ fontweight: '700' }}>Wedding & Party</div>

                    </div>

                </NavLink>
                <NavLink to='/clothing' className='category_link'>
                    <img src='https://i.etsystatic.com/10022900/c/632/501/186/416/il/cd7a66/858622028/il_340x270.858622028_jskp.jpg'
                    alt="img" className='category_img'></img>

                    <div className='category_name'>
                        <div style={{ fontweight: '700' }}>Clothing & Shoes</div>

                    </div>

                </NavLink>
                <NavLink to='/gift' className='category_link'>
                    <img src='https://i.etsystatic.com/27025196/r/il/39e7d1/3119788484/il_300x300.3119788484_2idk.jpg'
                    alt="img" className='category_img'></img>

                    <div className='category_name'>
                        <div style={{ fontweight: '700' }}>Personalized Gift</div>

                    </div>

                </NavLink>
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
        </>
    )
}

export default ProductList
