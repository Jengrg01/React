import React from "react";
import {useDispatch} from 'react-redux'
const CartChanger = () => {
    const dispatch = useDispatch()
    const add = () =>{
        dispatch({type:'ADD_TO_CART'})
    }
    const sub = () => {
       dispatch({ type: "SUB_TO_CART" });
     };
  return (
    <>
      <div className="container d-flex row">
        <div className="col-4">
          <button className="btn btn-success" onClick={add}>+</button>
        </div>
        <div className="col-4">
          <button className="btn btn-danger" onClick={sub}>-</button>
        </div>
      </div>
    </>
  );
};

export default CartChanger;
