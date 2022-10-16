// TYPES

const createReview = '/review/createReview'
const getAllProductReview = '/review/getAllProductReview'
const getCurrentReview = '/review/getCurrentReview'
const editReview = '/review/editReview'
const deleteReview = '/review/deleteReview'


// ACTION CREATORS


const actionCreateReview = (review) => {
    return {
        type: createReview,
        review
    }
}

const actionGetAllProductReview = (reviews) => {
    return {
        type: getAllProductReview,
        reviews
    }
}









// THUNKS


export const thunkCreateReview = (payload) => async dispatch => {
    const response = await fetch(`/api/products/${payload.id}/reviews`, {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if(response.ok) {
        const data = await response.json()
        dispatch(actionCreateReview(data))
        return data
    }
}


export const thunkGetAllProductReview = (productId) => async dispatch => {
    const response = await fetch(`/api/products/${productId}/reviews`)
    
    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetAllProductReview(data))
    }
}












const initialState = {}


const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case createReview:
            newState[action.review.id] = action.review
            return newState
        default:
            return state
    }

}



export default reviewReducer




