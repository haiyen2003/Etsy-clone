import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemThunk, updateCartThunk } from '../../store/cart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);
    useEffect(() => {
        setQuantity(item.quantity)
    }, [item.quantity]);

    const handleChange = (e) => {
        dispatch(updateCartThunk(Number(item.id), Number(quantity)))
        setQuantity(e.target.value)
    }
    
    // useEffect(() => { dispatch(updateCartThunk()) }, [dispatch]) don't put useEffect when you don't use it
    return (
        <div className="cart-item">
            <div className="cart-item-header">{item.cart}</div>
            <div className="cart-item-menu">

                <select
                    className='cart-dropdown-quantity'
                    value={quantity}
                    onChange={(e)=> setQuantity(e.target.value)}
                    onBlur={()=>  dispatch(updateCartThunk(Number(item.id), Number(quantity)))}
                >
                    <option className='dropdown-option' value={1}>1</option>
                    <option className='dropdown-option' value={2}>2</option>
                    <option className='dropdown-option' value={3}>3</option>
                    <option className='dropdown-option' value={4}>4</option>
                    <option className='dropdown-option' value={5}>5</option>
                    <option className='dropdown-option' value={6}>6</option>
                </select>
            </div>
        </div>
    );
}

export default CartItem;
