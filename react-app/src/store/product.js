// TYPES

const createProduct = '/product/createProduct'
const getAllProduct = '/product/getAllProduct'
const getCurrentProduct = '/product/getCurrentProduct'
const updateProduct = '/product/updateProduct'
const deleteProduct = '/product/deleteProduct'



// ACTION CREATORS

const actionCreateProduct = (product) => {
    return {
        type: createProduct,
        product
    }
}

const actionGetAllProduct = (products) => {
    return {
        type: getAllProduct,
        products
    }
}

const actionGetCurrentProduct = (products) => {
    return {
        type: getCurrentProduct,
        products
    }
}

const actionUpdateProduct = (product) => {
    return {
        type: updateProduct,
        product
    }
}

const actionDeleteProduct = (id) => {
    return {
        type: deleteProduct,
        id
    }
}




// THUNKS
export const thunkCreateProduct = (payload) => async dispatch => {
    const response = await fetch('/api/products', {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionCreateProduct(data))
        return data
    }
}

export const thunkGetAllProduct = (payload) => async dispatch => {
    const response = await fetch("/api/products", {
      method: "GET",
      header: { "Content-Type": "application/json" },
    });
}






const initialState = {}


const productReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case createProduct:
            newState[action.product.id] = action.product
            return newState
        default:
            return state
    }
}





export default productReducer







