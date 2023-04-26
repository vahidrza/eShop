// import React, { useEffect, useState } from 'react'
// import CurrencyFormat from 'react-currency-format'
import "./Subtotal.css"
import { useSelector } from 'react-redux'

function Subtotal({totalPrice}) {
    const checkoutProducts = useSelector((state) => state.checkoutProducts);
    return (
       
        <div className='subtotal'>

            {
                `Subtotal (${checkoutProducts.length} items) : `
            }
            <strong>${totalPrice}</strong>
            <small className='subtotal__gift' >
                <input type='checkbox' /> This order contains a gift
            </small>

            <button >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal