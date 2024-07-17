import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const{image,title,price,id} = props.data
  // this is object destruction through which we can directly assign image, title etc without requiring to write props.data.image 
  return (
    <>
    {/* to make it dynamic we will use mapping and loop */}
        <div className="col">
          <div className="card">
            <div className="card-img">
               <img src={props.data.image} className="card-img-top" alt={props.data.title} />
            </div>
           
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
              ${props.data.price}
              </p>
              <div className="mt-2">
                <Link to = {`/productdetails/${id}`}> <input type="submit" value="View Detail" className="btn btn-primary" /></Link>
              </div>
            </div>
          </div>
        </div>
       
     
    </>
  )
}

export default Card