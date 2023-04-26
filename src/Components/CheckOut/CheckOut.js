import CheckOutProduct from './CheckOutProduct/CheckOutProduct.js/CheckOutProduct'
import Subtotal from './Subtotal/Subtotal'
import "./CheckOut.css"
import { useSelector } from 'react-redux'

function CheckOut() {
  let totalPrice = 0;
  const checkoutProducts = useSelector((state) => state.checkoutProducts);
  return (
    <div className='checkout' >
      <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <h2>Your Shopping Basket</h2>
        {
          checkoutProducts.map((product) => {
            totalPrice += Number(product.price);
            console.log(Number(product.price));
            return <CheckOutProduct key={product.id} id={product.id} title={product.title} price={product.price} rating={product.rating} image={product.image} />
          })
        }
      </div>
      <div className="checkout__right">
        <Subtotal totalPrice={totalPrice.toFixed(2)} />
      </div>
    </div>
  )
}

export default CheckOut