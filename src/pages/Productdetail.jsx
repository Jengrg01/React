import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Productdetail = () => {
    const[product,setProduct]=useState({})
    //[] is used in case of multiple data for array, {} is used for recieving object
    const params = useParams()
    const id = params.productId
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        // using ${id} instead of number such as 1, 2 because only one will be recieved specifically otherwise
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[])
    const addtoCart =()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartData')) || []
        const cartData = {
            id:product.id,
            title: product.title,
            price: product.price,
            category:product.category,
            description: product.description,
            image: product.image,
            quantity: 1
        }
        const existingItems = cartItems.find(item=> item.id == product.id)
        // using toastify npm 
        if (existingItems){
            toast.error("Product is already present in cart")
        }
        else{
            cartItems.push(cartData)
            localStorage.setItem('cartData',JSON.stringify(cartItems))
            toast.success(`${product.title} is added to cart successfully`)
        }
    }
    // database m store hunne bela string ma hunnu parxa
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container">
        <div className="d-flex row justify-content-around my-3">
            <div className="col-md-3">
                <img src={product.image} alt={product.title} width={200} />
            </div>
            <div className="col-md-6">
                <h5>{product.title}</h5>
                <h5>$ {product.price}</h5>
                <p>{product.description}</p>
                <p className='text-info'><strong>Category</strong> : {product.category}</p>
                <div className="my-2">
                    <Link to={'/cart'}><button className='btn btn-warning' onClick={addtoCart}>Add to Cart</button></Link>
                     
                  
                </div>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Productdetail