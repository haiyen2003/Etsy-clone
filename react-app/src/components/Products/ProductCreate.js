
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateProduct, thunkGetCurrentProduct } from "../../store/product";
import './ProductCreate.css'


function ProductCreate() {
    const history = useHistory()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [category, setCategory] = useState('')
    const [highlight, setHighlight] = useState('')
    const [previewImage, setPreviewImage] = useState('')
    const [submit, setSubmit] = useState(false)
    const [validations, setValidations] = useState([])

    useEffect(() => {
        const errors = []
        if (name.length < 5) errors.push('Please enter a name')
        if (!description.length || description.length < 20) errors.push('Please enter a description more than 20 characters')
        if (!price) errors.push('Please enter a valid price')
        if (!category.length) errors.push('Please enter a category')
        if (!highlight.length || !highlight.length < 10) errors.push('Please enter a highlight more than 10 characters')
        if (
          (!previewImage.includes("jpg") &&
            !previewImage.includes("png") &&
            !previewImage.includes("jpeg") &&
            !previewImage.includes("svg")) ||
          (!previewImage.includes("https") && !previewImage.includes("http"))
        ) 
          errors.push("Please enter a valid url image");
        setValidations(errors)
    }, [name, description, price, category, highlight, previewImage])



    const onSubmit = async (event) => {
        event.preventDefault()
        setSubmit(!submit)
        const payload = {
            name,
            description,
            price,
            category,
            highlight,
            previewImage
        }

        let createdProduct = await dispatch(thunkCreateProduct(payload))

        if (createdProduct) {
            history.push(`/products/${createdProduct.id}`)
        }
    }


    return (
      <div className="create_product_main">
        <div className="create_product_div">
          <h1>Create a listing</h1>
          <form className="create_product_form" onSubmit={onSubmit}>
            <div className="create_product_detailtext">
              <div>Listing details</div>
              <div className="create_product_small_text">
                Tell the world all about your item and why they'll buy it.
              </div>
            </div>
            <div className="create_product_input">
              <div className="create_product_text_box">
                <div>Name</div>
                <div className="create_product_small_text">
                  Include keywords that would attract buyers
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="create_product_input_inner"
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="create_product_input">
              <div className="create_product_text_box">
                <div>Description</div>
                <div className="create_product_small_text">
                  Start with a brief summary that describes your product's
                  features.
                </div>
              </div>
              <div>
                <input
                  type="text-area"
                  name="description"
                  value={description}
                  className="create_product_input_inner_descript"
                  onChange={(event) => setDescription(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="create_product_input">
              <div className="create_product_text_box">
                <div>Price</div>
                <div className="create_product_small_text">
                  Remember to factor in labor, cost of material, etc. Shipping
                  is free to all customers.
                </div>
              </div>
              <div>
                <input
                  type="number"
                  name="price"
                  value={price}
                  className="create_product_input_inner"
                  onChange={(event) => setPrice(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="create_product_input">
              <div className="create_product_text_box">
                <div>Category</div>
                <div className="create_product_small_text">
                  Type a two word description to get category suggestions that
                  will help buyers find when they want.
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="category"
                  value={category}
                  placeholder="Art & Collectibles, Home & Living, Wedding & Party, etc."
                  className="create_product_input_inner"
                  onChange={(event) => setCategory(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="create_product_input">
              <div className="create_product_text_box">
                <div>Highlight</div>
                <div className="create_product_small_text">
                  One word that represents the best feature of the product.
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="highlight"
                  value={highlight}
                  className="create_product_input_inner"
                  onChange={(event) => setHighlight(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="create_product_input">
              <div className="create_product_text_box">
                <div>Image</div>
                <div className="create_product_small_text">
                  Add a url photo so buyers can see the product
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="previewImage"
                  value={previewImage}
                  className="create_product_input_inner"
                  onChange={(event) => setPreviewImage(event.target.value)}
                ></input>
              </div>
            </div>
            {validations.length > 0 && submit ? (
              <div className="create_product_empty">
                <div className="create_product_error">
                  {validations.map((error, i) => (
                    <div key={i}>{error}</div>
                  ))}
                </div>
              </div>
            ) : (<div className="create_product_empty"></div>)}
            <div className="create_product_footer">
              <div className="create_product_footer2">
                <div>
                  <button
                    className="create_product_cancel"
                    onClick={(event) => history.push("/")}
                  >
                    Cancel
                  </button>
                </div>
                <div className="create_product_cancel_text">
                  <span className="create_product_cancel_bold">
                    This listing isn't active yet.
                  </span>{" "}
                  It will be available to shoppers once you open your shop.
                </div>
              </div>
              <div className="create_product_rightside">
                <button
                  className="create_product_button"
                  type="submit"
                  disabled={validations.length > 0 && submit}
                >
                  Create Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}


export default ProductCreate