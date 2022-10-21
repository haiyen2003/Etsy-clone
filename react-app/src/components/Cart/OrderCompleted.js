import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, deleteCartThunk, deleteItemThunk, updateCartThunk, addItemThunk } from '../../store/cart';
import { useHistory } from "react-router-dom"
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { Link, NavLink } from 'react-router-dom';
import './Cart.css';

function OrderCompleted() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const items = Object.values(cartItems);
    const history = useHistory();
    useEffect(() => { dispatch(getCartThunk()) }, [dispatch, items.length])
    if (!items || !items.length) return (
        <div className="cart-empty">
            No items in the cart. Start selecting items to purchase.
        </div>
    );

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteCartThunk());
        history.push(`/`);
    }

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
        <div className='order-main'>
            <div className='order-container'>
                <div className='order-review-text'>Review your order</div>
                <div className='review-order'>
                    {
                        items && items.map(item => (
                            <div className='order-each-item'>

                                <div className='cart-left-container'>
                                    <div className="cart-image-container">
                                        <img className='cart-image' src={item?.product_details?.previewImage}></img></div>
                                    <div className='purchase-mid'>
                                        <div className='order-item-name'>{item?.product_details?.name}</div>
                                        <div className='cart-total-price'>$ {(item?.product_details?.price * item?.quantity).toFixed(2)}</div>
                                    </div>
                                </div>
                                <div className='cart-right-container'>
                                </div>
                            </div>
                        )
                        )
                    }

                </div>
                <div className = "purchase-button-container">
                <div className='cart-total-price'>Total Price: ${totalPrice()}</div>
                <form onSubmit={onSubmit}>
                    <button className='cart-complete-button' type="submit">Purchase</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default OrderCompleted;
