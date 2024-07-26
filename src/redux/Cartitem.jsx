import React from 'react'
import CartChanger from './CartChanger'
import {useSelector} from 'react-redux'
import Student from './Student'
import StudentForm from './StudentForm'
const Cartitem = () => {
    const data = useSelector(store=>store.cart)
    // we need to specify which data we are using from store, so we are using .cart since store has multiple data stored in form  of object
  return (
    <>
    <h2 className="text-success text-center">
        The number of cart is {data.cartCount}
    </h2>
    <CartChanger/>
    <Student/>
    <StudentForm/>
    </>
  )
}

export default Cartitem