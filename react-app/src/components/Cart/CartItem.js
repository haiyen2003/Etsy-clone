import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemThunk, updateCartThunk} from '../../store/cart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);


    useEffect(() => {
        setQuantity(item.quantity)
    }, [item.quantity]);

    useEffect(() => {dispatch(updateCartThunk())}, [dispatch])
    return (
        <li className="cart-item">
            <div className="cart-item-header">{item.cart}</div>
            <div className="cart-item-menu">
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    onBlur={() => dispatch(updateCartThunk(item.id, Number(quantity)))}
                />
                <button
                    className="cart-item-button"
                    onClick={e => setQuantity(e.target.value)}
                >
                    +
                </button>
                <button
                    className="cart-item-button"
                    onClick={() => dispatch(updateCartThunk(item.id, item.quantity - 1))}
                >
                    -
                </button>
                {/* <button
                    className="cart-item-button"
                    onClick={async () => await dispatch(deleteItemThunk(item.id))}
                >
                    Remove
                </button> */}
            </div>
        </li>
    );
}

export default CartItem;
