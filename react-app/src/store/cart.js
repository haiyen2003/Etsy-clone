const GET_CART = 'cart/GET_ITEM';
const ADD_ITEM = 'cart/ADD_ITEM';
const UPDATE_COUNT = 'cart/UPDATE_COUNT';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const RESET = 'cart/RESET';

/* ----- ACTIONS ------ */

export const getCart = (items) => {
    return {
        type: GET_CART,
        items
    }
}

export const addItem = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId
    };
};

export const updateItem = (itemId, quantity) => {
    if (quantity < 1 || !quantity) return removeItem(itemId);
    return {
        type: UPDATE_COUNT,
        itemId,
        quantity
    };
};

export const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId
    };
};

export const reset = () => {
    return {
        type: RESET
    };
};

export const getCartThunk = () => async dispatch => {
    const res = await fetch('/api/cartItems/current');
    if (res.ok) {
        const items = await res.json();
        dispatch(getCart(items))
        return items;
    }
}

export const addItemThunk = (id, quantity) => async dispatch => {
    const res = await fetch(`/api/products/${id}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quantity)
    })

    if (res.ok) {
        const item = await res.json();
        dispatch(addItem(item))
        return item;
    }
    else {
        const response = await res.json()
        return response.errors
    }
}

export const updateCartThunk = (id, quantity) => async dispatch => {
    const res = await fetch(`/api/cartItems/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity })
    });

    if (res.ok) {
        const item = await res.json()
        dispatch(updateItem(id, quantity))
        return item;
    }
    else {
        const response = await res.json()
        return response.errors
    }
}

export const deleteItemThunk = (id) => async dispatch => {
    const res = await fetch(`/api/cartItems/${id}`, {
        method: 'DELETE',
    });

    if (res.ok) {
        const removedItem = await res.json()
        dispatch(removeItem(id))
        return removedItem;
    }
    else {
        const response = await res.json()
        return response.errors
    }
}

export const deleteCartThunk = () => async dispatch => {
    const res = await fetch(`/api/cartItems/current`, {
        method: 'DELETE',
    });

    if (res.ok) {
        const removedCart = await res.json()
        dispatch(reset())
        return removedCart;
    }
    else {
        const response = await res.json()
        return response.errors
    }
}

const initialState = {}

export default function cartReducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case GET_CART: {
            const newState = {};
            action.items.cart_details.forEach(item => {
                newState[item.id] = item
            });
            console.log(action.items);
            return newState;
        }

        case ADD_ITEM: {
            const newState = { ...state }
            newState[action.itemId.id] = action.itemId
            return newState
        }

        case UPDATE_COUNT: {
            const newState = { ...state }
            newState[action.id].quantity = action.quantity
            return newState
        }

        case REMOVE_ITEM: {
            const newState = { ...state, items: { ...state.items } };
            delete newState.items[action.itemId];
            // newState.order = newState.order.filter(id => id !== action.itemId);
            return newState;
        }

        case RESET: {
            return initialState;
        }
        default:
            return state;
    }
}
