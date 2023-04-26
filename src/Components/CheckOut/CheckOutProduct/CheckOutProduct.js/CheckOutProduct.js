import React from 'react'
import "./CheckOutProduct.css"
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../../../../CheckOutProductReducer'

function CheckOutProduct({ id, title, price, rating, image }) {
    const dispatch = useDispatch();
    const removeProductFromBasket = (id) => {
        dispatch(removeFromBasket({ id: id }));
    }

    return (
        <div className='checkoutProduct' >
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">{
                    Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i} >⭐</p>
                        ))
                }</div>
                <button onClick={() => removeProductFromBasket(id)} >Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckOutProduct