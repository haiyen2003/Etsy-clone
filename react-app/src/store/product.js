// TYPES

const createProduct = '/product/createProduct'
const getAllProduct = '/product/getAllProduct'
const getCurrentProduct = '/product/getCurrentProduct'
const getOneProduct = '/product/getOneProduct'
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

const actionGetOneProduct = (product) => {
    return {
        type: getOneProduct,
        product
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
    const response = await fetch('/api/products/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionCreateProduct(data))
        return data
    }
}

export const thunkGetAllProduct = () => async dispatch => {
    const response = await fetch("/api/products/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    // console.log('getthunkallres', response)
    // test
    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetAllProduct(data))
        // console.log('thunkGETALLPRODUCT', data)
    }
}

// USE THIS THUNK FOR CURRENT USER PRODUCT PAGE
export const thunkGetCurrentProduct = () => async dispatch => {
    const response = await fetch('/api/products/current', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetCurrentProduct(data))
    }
}

export const thunkGetOneProduct = (id) => async dispatch => {
    const response = await fetch(`/api/products/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetOneProduct(data))
    }
}

export const thunkUpdateProduct = (payload) => async dispatch => {
    const response = await fetch(`/api/products/${payload.id}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
        const data = await response.json()
        dispatch(actionUpdateProduct(data))
        return data
    }
}

export const thunkDeleteProduct = (id) => async dispatch => {
    const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(actionDeleteProduct(id))
    }
}






const initialState = {}


const productReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
      case createProduct:
        newState[action.product.id] = action.product;
        return newState;
      case getAllProduct:
          newState = {};
          //console.log('REDUCERPRODUCT', action.products.products)
        action.products.products.forEach((product) => {
          newState[product.id] = product;
        });
        return newState;
      case getCurrentProduct:
        newState = {};
        action.products.products.forEach((product) => {
          newState[product.id] = product;
        });
        return newState;
       case getOneProduct:
         newState = {};
         newState[action.product.id] = action.product
         return newState
        case updateProduct:
            newState[action.product.id] = action.product
            return newState
        case deleteProduct:
            delete newState[action.id]
            return newState
      default:
        return state;
    }
}





export default productReducer
