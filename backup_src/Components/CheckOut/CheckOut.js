import React from 'react'
import CheckOutProduct from './CheckOutProduct/CheckOutProduct.js/CheckOutProduct'
import Subtotal from './Subtotal/Subtotal'
import "./CheckOut.css"

function CheckOut() {
  return (
    <div className='checkout' >
        <div className="checkout__left">
            <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            <h2>Your Shopping Basket</h2>
            <CheckOutProduct />
            <CheckOutProduct />
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default CheckOut