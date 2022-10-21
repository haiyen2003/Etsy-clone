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
    const renderProductAbout =(text)=>{
        const segments= text.split(" ");
        if (segments.length <8){
            return segments.join(" ");
        } else {
            return `${segments.slice(0,7).join(" ")}...`
        }
    }
    useEffect(() => {
        dispatch(thunkGetAllProduct())
    }, [dispatch])
        // dispatch(thunkGetAllProduct());


    return (
      <>
        {user.user ? (
          <div id="welcome_msg">
            <h1>
              Welcome back, {user.user ? user.user.firstName : "Annoymous"}!
            </h1>
          </div>
        ) : (
          <div id="welcome_msg">
            <h1 id="welcome_msg">Fresh finds fit for cozy season.</h1>
          </div>
        )}
        <div className="splash-container">
          <div className="background-band"></div>

          <div className="categoryproducts">
            {/* {
                   categoryproducts?.map((product) =>(
                      <div  className='categorydiv' key={product?.id}>
                        <img k className='product_category_image' src={product?.previewImage} alt="product"></img>
                        <br></br>
                        <div className='product_category_name'>{product?.category} </div>
                      </div>
                    ))

                } */}
            <NavLink to="/home&living" className="category_link">
              <img
                src="https://i.etsystatic.com/11407045/r/il/e768b9/1985856498/il_300x300.1985856498_98hg.jpg"
                alt="img"
                className="category_img"
              ></img>

              <div className="category_name">
                <div style={{ fontweight: "700" }}>Home & Living</div>
              </div>
            </NavLink>
            <NavLink to="/arts" className="category_link">
              <img
                src="https://i.etsystatic.com/6571804/r/il/c8d997/1833011844/il_340x270.1833011844_jq89.jpg"
                alt="img"
                className="category_img"
              ></img>

              <div className="category_name">
                <div style={{ fontweight: "700" }}>Arts & Collectibles</div>
              </div>
            </NavLink>
            <NavLink to="/jewelry" className="category_link">
              <img
                src="https://i.etsystatic.com/30233057/c/2250/2250/0/278/il/854c80/3970826709/il_300x300.3970826709_j41s.jpg"
                alt="img"
                className="category_img"
              ></img>

              <div className="category_name">
                <div style={{ fontweight: "700" }}>Jewelry & Accessories</div>
              </div>
            </NavLink>
            <NavLink to="/wedding" className="category_link">
              <img
                src="https://i.etsystatic.com/5929558/c/1024/813/0/56/il/8e84d8/1033701193/il_340x270.1033701193_iuif.jpg"
                alt="img"
                className="category_img"
              ></img>

              <div className="category_name">
                <div style={{ fontweight: "700" }}>Wedding & Party</div>
              </div>
            </NavLink>
            <NavLink to="/clothing" className="category_link">
              <img
                src="https://i.etsystatic.com/10022900/c/632/501/186/416/il/cd7a66/858622028/il_340x270.858622028_jskp.jpg"
                alt="img"
                className="category_img"
              ></img>

              <div className="category_name">
                <div style={{ fontweight: "700" }}>Clothing & Shoes</div>
              </div>
            </NavLink>
            <NavLink to="/gift" className="category_link">
              <img
                src="https://i.etsystatic.com/27025196/r/il/39e7d1/3119788484/il_300x300.3119788484_2idk.jpg"
                alt="img"
                className="category_img"
              ></img>

              <div className="category_name">
                <div style={{ fontweight: "700" }}>Personalized Gift</div>
              </div>
            </NavLink>
          </div>

          <div className="product_header">
            <span className='product_header_content'>Popular gifts right now</span>
          </div>

          <div className="all_products_container">
            <div className="all_sub_products_container">
            {allproducts &&
              allproducts.map((product) => (
                <div key={product.id}>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="product_navlink"
                  >
                    <img
                      src={product.previewImage}
                      alt="product"
                      className="productlist_image"
                    ></img>

                    <div className="product_info">
                      <div style={{ fontweight: "700" }}>
                        {renderProductAbout(product.name)}
                      </div>
                    </div>
                    <div className="product_info">{`$${new Intl.NumberFormat().format(product?.price)}`}</div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div style={{height: "120px"}}></div>
        </div>
        <div className="group_info_div">
          <div>
            <div>Meet the developers</div>
          </div>
          <div>
            <div>Yen Nguyen</div>
            <div>
              <div>
                <i className="fa-brands fa-linkedin">&nbsp;</i>
                <a
                  className="more_info_text"
                  href="https://www.linkedin.com/in/nguyen-yen-dsgn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div>
                <i className="fa-brands fa-square-github">&nbsp;</i>
                <a
                  className="more_info_text"
                  href="https://github.com/haiyen2003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>Lyn Chen</div>
            <div>
              <div>
                <i className="fa-brands fa-linkedin">&nbsp;</i>
                <a
                  className="more_info_text"
                  href="https://www.linkedin.com/in/lyn-chen-385ab5b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div>
                <i className="fa-brands fa-square-github">&nbsp;</i>
                <a
                  className="more_info_text"
                  href="https://github.com/linyangofmay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>Jake Ye</div>
            <div>
              <div>
                <i className="fa-brands fa-linkedin">&nbsp;</i>
                <a
                  className="more_info_text"
                  href="https://www.linkedin.com/in/jake-ye-a2365250/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div>
                <i className="fa-brands fa-square-github">&nbsp;</i>
                <a
                  className="more_info_text"
                  href="https://github.com/jakeye25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>Kevin Kim</div>
            <div>
              <div>
                <i className="fa-brands fa-linkedin">&nbsp;</i>
                <a
                  className="more_info_text"
                  href="https://www.linkedin.com/in/kevin-kim-a88429150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div>
                <i className="fa-brands fa-square-github">&nbsp;</i>
                <a
                  className="more_info_text"
                  href="https://github.com/kevykim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="test">
            <div className="footer_main_div">
              <div className="footer_text_div">
                <i className="fa-solid fa-globe ">&nbsp;</i>
                <div>United States</div>
                <div>&nbsp;|&nbsp;</div>
                <div>English(US)</div>
                <div> &nbsp;| &nbsp;</div>
                <div> $(USD)</div>
              </div>
              <div className="footer_text_div">
                <div>&copy; 2022 Artsy, Inc.</div>
                <div>&nbsp;|&nbsp;</div>
                <a
                  className="more_info_text"
                  href="https://github.com/haiyen2003/Etsy-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For more info
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProductList
