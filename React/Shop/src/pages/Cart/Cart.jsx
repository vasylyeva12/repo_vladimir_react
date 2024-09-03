import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import "./Cart.scss"

const Cart = () => {
  return (
    <div className="cart">
      <div className='container'>

        <div className="content">
          <table className='table'>
            <thead>
              <tr>
                <th colSpan={2}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
            <tr className='cart-item'>
              <td className='table-w-10'>
                <div className='cart-item__image'>
                  <img src="../../images/products/product-1.png" alt="" />
                </div>
              </td>
              <td className='table-w-30'>
                <div className='cart-item__block'>
                  <h2 className='cart-item__title'>Spiced Mint Candleaf®</h2>
                  <button className='btn'>Remove</button>
                </div>
              </td>
              <td>$ 9.99</td>

              <td className='cart-item__actions'>
                <div className='quantity'>
                  <button><FaMinus className='quantity__icon' /></button>
                  <span>{0}</span>
                  <button><FaPlus className='quantity__icon' /></button>
                </div>
              </td>

              <td className='cart-item__total'>$ 9.99</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart