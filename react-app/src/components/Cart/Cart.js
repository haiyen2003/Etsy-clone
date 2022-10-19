import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, deleteCartThunk } from '../../store/cart';
import { useHistory } from "react-router-dom"
import { useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(getCartThunk())}, [dispatch])
  const cartItems = useSelector(state => state.cart);
  const items = Object.values(cartItems);
  const history = useHistory();
  console.log(items, "THIS ITEMS IN CART.JS")

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

  return (
    <div className="cart">
      <div>You have {items.length} in your cart</div>
      <ul>
        {items.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
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
