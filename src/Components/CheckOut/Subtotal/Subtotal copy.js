import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import "./Subtotal.css"
import { useSelector } from 'react-redux'

function Subtotal() {
    const checkoutProducts = useSelector((state) => state.checkoutProducts);
    const [totalCheckoutPrice, setTotalCheckoutPrice] = useState(0);
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={
                    (value) => (
                        <>
                            {/* Subtotal (0 items): <strong>$0</strong> */}
                            {
                                `Subtotal (${checkoutProducts.length} items) : `
                            }
                            <strong>{totalCheckoutPrice !== 0 ? `$${totalCheckoutPrice}` : ""}</strong>
                            <small className='subtotal__gift' >
                                <input type='checkbox' /> This order contains a gift
                            </small>
                        </>
                    )
                }
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}

            />
            <button  >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal