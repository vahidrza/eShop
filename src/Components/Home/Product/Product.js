import React from "react";
import "./Product.css";
import { addToBasket } from '../../../CheckOutProductReducer';
import { useDispatch } from 'react-redux';

function Product({id, title, image, price, rating}) {
    const dispatch = useDispatch();
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addToBasket({id,title, price, rating, image}));
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i} >⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={handleAdd} >Add to Basket</button>
        </div>
    )
}

export default Product
