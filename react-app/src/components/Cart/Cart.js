import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, deleteCartThunk, deleteItemThunk, updateCartThunk, addItemThunk } from '../../store/cart';
import { useHistory } from "react-router-dom"
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { Link, NavLink } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const items = Object.values(cartItems);
  const history = useHistory();
  useEffect(() => {dispatch(getCartThunk())}, [dispatch, items.length])

  if (!items || !items.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${items.map(item => `${item.quantity} of ${item.name}`).join('\n')}`
    );
    dispatch(deleteCartThunk());
    history.push(`/order-completed`);
  }

  const handleDelete = async item => {
    const thisDelete = await dispatch(deleteItemThunk(item));
    await dispatch(getCartThunk());
    history.push(`/cart`);
}

  return (
    <div className="cart">
      <div className = "cart-top-div">
        <div className = "cart-item-num">You have {items.length} in your cart</div>
        <div className = "cart-keep-shopping"><NavLink className="cart-home-link " to={`/`}>Keep Shopping</NavLink></div>
        </div>

      <div className = "cart-middle-div">
        <div className = "cart-left-div">
        <div>
        {
          items.map(item => ( item &&
            <div className = 'cart-product-detail'>
              <img className='cart-image' src={item.product_details?.previewImage}></img>
              <div className= 'cart-product-name'>{item.product_details?.name}</div>
              <div className='cart-product-price'>${item.product_details?.price}</div>
              <div className ='cart-product-highlight'>{item.product_details?.highlight}</div>
              <button
                    className="cart-item-button"
                     onClick={async () => await dispatch(deleteItemThunk(item.id))}
                >
                    Remove
                </button>
              </div>)
            )
        }
      </div>
          <div className = "cart-product-detail">
            <div className = "cart-product-image">
            </div>
          </div>
        </div>
      </div>
      <div>
      <div>
        {/* {
          items.map(item => (
            <div className = 'cart-product-detail'>
              <div>{item.product_details?.name}</div>
              </div>)
            )
        } */}
      </div>
      </div>
      {/* <ul>
        {items.map(item => <CartItem key={item.id} item={item} />)}
      </ul> */}
      <ul>

      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;
