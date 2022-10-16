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

const actionGetCurrentReview = (reviews) => {
    return {
        type: getCurrentReview,
        reviews
    }
}

const actionEditReview = (review) => {
    return {
        type: editReview,
        review
    }
}

const actionDeleteReview = (id) => {
    return {
        type: deleteReview,
        id
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


export const thunkGetAllProductReview = (id) => async dispatch => {
    const response = await fetch(`/api/products/${id}/reviews`)
    console.log(id)
    console.log(response)
    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetAllProductReview(data))
    }
}


export const thunkGetCurrentReview = () => async dispatch => {
    const response = await fetch('/api/reviews')

    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetCurrentReview(data))
    }
}


export const thunkEditReview = (payload) => async dispatch => {
    const response = await fetch(`/api/reviews/${payload.reviewId}`, {
      method: "PUT",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
        const data = await response.json()
        dispatch(actionEditReview(data))
        return data
    }
}


export const thunkDeleteReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(actionDeleteReview(id))
    }
}




const initialState = {}


const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case createReview:
            newState[action.review.id] = action.review
            return newState
        case getAllProductReview:
            newState = {};
            action.reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState
        case getCurrentReview:
            newState = {};
            action.reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState
        case editReview:
            newState[action.review.id] = action.review
            return newState
        case deleteReview:
            delete newState[action.id]
            return newState
        default:
            return state
    }

}



export default reviewReducer




