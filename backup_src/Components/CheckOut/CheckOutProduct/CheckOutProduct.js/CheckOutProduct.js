import React from 'react'
import "./CheckOutProduct.css"

function CheckOutProduct({ id, title, price, rating, image }) {
    return (
        <div className='checkoutProduct' >
            <img className='checkoutProduct__image' src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className="checkoutProduct__rating">
                ⭐⭐⭐
                </div>
                <button>Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckOutProduct