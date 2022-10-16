// TYPES

const createReview = '/review/createReview'
const getAllReview = '/review/getAllReview'
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




