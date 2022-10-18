// TYPES

const getAllProduct = '/product/getAllProduct'


// ACTION CREATORS


const actionGetAllProduct = (products) => {
    return {
        type: getAllProduct,
        products
    }
}



// THUNKS

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




const initialState = {}

const productReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {

      case getAllProduct:
          newState = {};
          //console.log('REDUCERPRODUCT', action.products.products)
        action.products.products.forEach((product) => {
          newState[product.id] = product;
        });
        return newState;

      default:
        return state;
    }
}



export default productReducer
