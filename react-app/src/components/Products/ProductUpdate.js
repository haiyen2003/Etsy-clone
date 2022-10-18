import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetOneProduct, thunkUpdateProduct } from "../../store/product";
import "./ProductUpdate.css";

function ProductUpdate({product}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [highlight, setHighlight] = useState(product.highlight);
  const [previewImage, setPreviewImage] = useState(product.previewImage);
  const [submit, setSubmit] = useState(false);
  const [validations, setValidations] = useState([]);

  useEffect(() => {
    const errors = [];
    if (name?.length < 5) errors.push("Please enter a name");
    if (!description || description?.length < 20)
      errors.push("Please enter a description more than 20 characters");
    if (!price) errors.push("Please enter a valid price");
    if (!category?.length) errors.push("Please enter a category");
    if (!highlight || highlight?.length < 10)
      errors.push("Please enter a highlight more than 10 characters");
    if (
      (!previewImage.includes("jpg") &&
        !previewImage.includes("png") &&
        !previewImage.includes("jpeg") &&
        !previewImage.includes("svg")) ||
      (!previewImage.includes("https") && !previewImage.includes("http"))
    )
      errors.push("Please enter a valid url image");
    setValidations(errors);
  }, [name, description, price, category, highlight, previewImage]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmit(!submit);
    const payload = {
      id: product.id,
      name,
      description,
      price,
      category,
      highlight,
      previewImage,
    };

    let updatedProduct = await dispatch(thunkUpdateProduct(payload));

    // console.log(updatedProduct)

    //   await dispatch(thunkGetOneProduct(payload.id))
    
    if (updatedProduct) {
      history.push(`/products/${updatedProduct.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {validations.length > 0 && submit && (
          <div>
            <div>
              {validations.map((error, i) => (
                <div key={i}>{error}</div>
              ))}
            </div>
          </div>
        )}
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Description</label>
          <input
            type="text-area"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Highlight</label>
          <input
            type="text"
            name="highlight"
            value={highlight}
            onChange={(event) => setHighlight(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            name="previewImage"
            value={previewImage}
            onChange={(event) => setPreviewImage(event.target.value)}
          ></input>
        </div>
        <button type="submit" disabled={validations.length > 0 && submit}>
          Update Product
        </button>
      </form>
    </div>
  );
}

export default ProductUpdate;
