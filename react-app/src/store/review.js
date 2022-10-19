// TYPES

const createReview = '/review/createReview'
const getAllProductReview = '/review/getAllProductReview'
const getCurrentReview = '/review/getCurrentReview'
const updateReview = '/review/updateReview'
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

const actionUpdateReview = (review) => {
    return {
        type: updateReview,
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
    const response = await fetch(`/api/reviews/products/${payload.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if(response.ok) {
        const data = await response.json()
        dispatch(actionCreateReview(data))
        return data
    }
}


export const thunkGetAllProductReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/products/${id}`, {
      method: "GET",
    });
    // console.log(id)

    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetAllProductReview(data))
    }
}


export const thunkGetCurrentReview = () => async dispatch => {
    const response = await fetch('/api/reviews/')

    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetCurrentReview(data))
    }
}


export const thunkUpdateReview = (payload) => async dispatch => {
    const response = await fetch(`/api/reviews/${payload.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    // console.log(payload)

    if (response.ok) {
        const data = await response.json()
        dispatch(actionUpdateReview(data))
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
            action.reviews.product_reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState
        case getCurrentReview:
            newState = {};
            action.reviews.user_reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState
        case updateReview:
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




