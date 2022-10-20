import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemThunk, updateCartThunk } from '../../store/cart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);
    useEffect(() => {
        setQuantity(item.quantity)
    }, [item.quantity]);

    useEffect(() => { dispatch(updateCartThunk()) }, [dispatch])
    return (
        <li className="cart-item">
            <div className="cart-item-header">{item.cart}</div>
            <div className="cart-item-menu">
                <div className="cart-item-quantity">{item.quantity}</div>
                {/* <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    onBlur={() => dispatch(updateCartThunk(Number(item.id), Number(quantity)))}
                /> */}
                <select
                    className='cart-dropdown-quantity'
                    value={quantity}
                    onChange={e => {setQuantity(e.target.value);
                    }}
                    onBlur={() => dispatch(updateCartThunk(Number(item.id), Number(quantity)))}
                >
                    <option className='dropdown-option' value={1}>1</option>
                    <option className='dropdown-option' value={2}>2</option>
                    <option className='dropdown-option' value={3}>3</option>
                    <option className='dropdown-option' value={4}>4</option>
                    <option className='dropdown-option' value={5}>5</option>
                    <option className='dropdown-option' value={6}>6</option>
                </select>
                {/* <button
                    className="cart-item-button"
                    onClick={() => dispatch(updateCartThunk(Number(item.id), Number(item.quantity) + 1))}
                >
                    +
                </button>
                <button
                    className="cart-item-button"
                    onClick={() => dispatch(updateCartThunk(Number(item.id), Number(item.quantity) - 1))}
                >
                    -
                </button> */}
            </div>
        </li>
    );
}

export default CartItem;
