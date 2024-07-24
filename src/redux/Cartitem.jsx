import React from 'react'
import CartChanger from './CartChanger'
import {useSelector} from 'react-redux'
const Cartitem = () => {
    const data = useSelector(store=>store)
  return (
    <>
    <h2 className="text-success text-center">
        The number of cart is {data.cartCount}
    </h2>
    <CartChanger/>
    </>
  )
}

export default Cartitem