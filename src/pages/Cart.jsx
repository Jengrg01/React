import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from "react-icons/fa";
const Cart = () => {
    const[product,setProducts]=useState([])
    useEffect(()=>{
        const cartData = JSON.parse(localStorage.getItem('cartData'))
        if (cartData){
            setProducts(cartData)
        }
        else{
            setProducts([])
        }
    })
    const increaseQty = id =>{
        const updateProduct = product.map(item=>{
            if (item.id ==id){
                return {...item, quantity:item.quantity+1}
            }
            return item
        })
        setProducts(updateProduct)
        localStorage.setItem('cartData', JSON.stringify(updateProduct))
    }
     const decreaseQty = id =>{
        const updateProduct = product.map(item=>{
            if (item.id ==id && item.quantity>1){
                return {...item, quantity:item.quantity-1}
            }
            return item
        })
        setProducts(updateProduct)
        localStorage.setItem('cartData', JSON.stringify(updateProduct))
    }
    const removeCart =(id,title)=>{
        const confirmed = window.confirm('Are you sure you want to delete the item ?')
        if(confirmed){
            const cartFilter =product.filter(item =>item.id!==id)
            setProducts(cartFilter)
            localStorage.setItem('cartData', JSON.stringify(cartFilter))
            toast.success(`${title} has been removed from the cart`)
        }
    }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container">
        <div className="row d-flex justify-content-between my-5">
            {product.length==0 ?
            <h2 className="mt-2 text-center text-danger">
                Your cart is empty
            </h2>
            :(
                <>
               
                <div className="col-md-8">
                     <h2 className="text-center">
                    Cart Items
                    </h2>
                
                    {product.map((item,i)=>(
                        <div key ={i}>
                            <hr/>
                            <div className="row d-flex align-items-center">
                                 <div className="col-2">
                                <img src={item.image} alt={item.title} width={'50'} />
                            </div>

                            <div className="col-3"><strong>
                                {item.title}</strong></div>
                                <div className="col-2 text-warning">
                                    <strong>
                                        $ {item.price}
                                    </strong>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-primary" onClick={()=>increaseQty(item.id)}>+</button>
                                    &nbsp;
                                    <span>{item.quantity}</span>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={()=>decreaseQty(item.id)}>-</button>
                                </div>
                                <div className="col-1">
                                    <button className="btn btn-danger" onClick={()=>removeCart(item.id,item.title)}><FaTrashAlt/></button>
                                </div>
                            </div>
                           
                        </div>
                        

                    ))}
                    
            

                </div>
                <div className="col-md-3">
               <div className="shadow p-2">
                <h5 className="text-center">Cart Summary</h5>
                <hr />
                <p><strong>Unit : </strong>{product.reduce((ac, item) => ac+Number(item.quantity), 0)}</p>
                <p><strong>Total : </strong>${product.reduce((ac, item) => ac+ item.quantity*item.price, 0).toFixed(2)}</p>
                <div className="mt-2">
                    <button className="btn btn-warning">Check out</button>
                </div>
               </div>
            </div>
                

                </>
            )
        }
        </div>
    </div>
    </>
  )
}

export default Cart