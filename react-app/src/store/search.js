const GET_SEARCH = 'search/GET_SEARCH';

const getSearchAction = payload => ({
  type: GET_SEARCH,
  payload
})

export const thunkgetSearch = payload => async dispatch => {
  const res = await fetch(`api/search/${payload}`);


  if (res.ok) {
    const data = await res.json();
    dispatch(getSearchAction(data));
    return data;
  }
}

export default function searchReducer(state={}, action){
  switch(action.type){
    case GET_SEARCH:{
      const newState={};
      action.data.products.forEach(product =>{
        newState[product.id] =product
      });
      return newState;
    }
    default:
      return state;
  }
}
