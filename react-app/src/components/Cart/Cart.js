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
  console.log(items, 'THIS IS ITEMS ======')

  useEffect(() => { dispatch(getCartThunk()) }, [dispatch, items.length])
  // useEffect(() => { dispatch(updateCartThunk()) }, [dispatch])
  if (!items || !items.length) return (
    <div className="cart-empty">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${items.map(item => `${item.quantity} of ${item.product_details.name}`).join('\n')}`
    );
    dispatch(deleteCartThunk());
    history.push(`/order-completed`);
  }

  const sum = items.reduce((accumulator, object) => {
    return accumulator + object.quantity;
  }, 0);

  function totalPrice() {
    if (items) {
      let total = [];
      for (let i = 0; i < items.length; i++) {
        let t = items[i]?.quantity * items[i]?.product_details?.price
        total.push(t);
      }
      return total.reduce((accumulator, i) => {
        return accumulator + i;
      }, 0)
    }
  }

  return (
    <div className="cart">
      <div className="cart-top-div">
        <div className="cart-item-num">You have {items.length} items in your cart</div>
        <div className="cart-keep-shopping"><button className="cart-home-link" to={`/`}>Keep Shopping</button></div>
      </div>

      <div className="cart-middle-div">
        <div className="cart-left-div">
          {
            items && items.map(item => (
              <div className='cart-each-item'>
                <div className='cart-left-container'>
                  <div className="cart-image-container">
                    <img className='cart-image' src={item?.product_details?.previewImage}></img></div>

                  <div className='cart-product-name'><NavLink className = 'product-link' to={`/products/${item?.product_details?.id}`}> {item?.product_details?.name}</NavLink></div>
                  <CartItem key={item.id} item={item} />

                </div>
                <div className='cart-right-container'>
                  <div className='cart-total-price'>$ {(item?.product_details?.price * item?.quantity).toFixed(2)}</div>
                  <div className='cart-product-highlight'>{item.product_details?.highlight}</div>
                  <button className="cart-item-button"
                    onClick={async () => await dispatch(deleteItemThunk(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
            )
          }
        </div>
        <div className="cart-right-div">
          <div className = "cart-purchase-container">
          <div className="cart-item-total">
            <div className='cart-total'>Items Total &nbsp; </div>
            <div className='cart-total-price'> ${totalPrice()}</div>
          </div>
          <form onSubmit={onSubmit}>
            <button className='cart-purchase-button' type="submit">Purchase</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
