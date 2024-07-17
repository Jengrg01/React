import React, {useState,useEffect} from "react";
// useState, useEffect, any keyword starting with use is hooks
import axios from "axios";
import Card from "../component/Card";
const Productpage = () => {
  // server bata aunne data lai assign garnu parxa, tyo chai convert garera chalaune 
  const [product, setProduct] = useState([])//initial state
  // to change the state we take out data from database in server side
  // useEffect is used to retrieve the data and the changes are stored in useState
  useEffect(()=>{
    // axios acts as fetch
  axios.get(`https://fakestoreapi.com/products`)
  // if successful it works on .then
  .then(res=>setProduct(res.data))
  // when error is found, .catch is used
  .catch(err=>console.log(err))
  },[]
  // aek chuti matra data fetch hoss vanera we use [] 
  )
  return (
    // hooks is always kept at top
    // to send the data on Card 
     <div className="container my-3">
      <div className="row row-cols-1 row-cols-md-4 g-4">
      {product.map(item=> <Card data={item}/>)}
      {/* props pathairako xa, component bata data */}
      </div>
      </div>
  
  );
};

export default Productpage;
