import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemThunk, getCartThunk, addItemThunk, updateCartThunk } from '../../store/cart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    return (
        <li className="cart-item">
            <div className="cart-item-header">{item.name}</div>
            <div className="cart-item-menu">
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    onBlur={() => dispatch(updateCartThunk(item.id, Number(quantity)))}
                />
                <button
                    className="cart-item-button"
                    onClick={() => dispatch(updateCartThunk(item.id, item.quantity + 1))}
                >
                    +
                </button>
                <button
                    className="cart-item-button"
                    onClick={() => dispatch(updateCartThunk(item.id, item.quantity - 1))}
                >
                    -
                </button>
                <button
                    className="cart-item-button"
                    onClick={() => dispatch(deleteItemThunk(item.id))}
                >
                    Remove
                </button>
            </div>
        </li>
    );
}

export default CartItem;
