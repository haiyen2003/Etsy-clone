import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { thunkDeleteProduct } from "../../store/product"

import './ProductDelete.css'

function ProductDelete({product}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const onClick = async (event) => {
        await dispatch(thunkDeleteProduct(product.id))
        alert('Sucessfully deleted.')
        history.push('/')
    }

    return (
        <button className="delete_product_button" onClick={onClick}>Delete Product</button>
    )
}


export default ProductDelete