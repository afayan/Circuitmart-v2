import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <Link to={'/Productpage?id='+props.deviceid}>
    
    <div className='card'>
      <img src={props.image} alt="image"/>
      <p className="cardbottom">
        <p className="devicename">{props.name}</p> 
        <p className="cardprice">&#8377; {props.price}</p>
      </p>
    </div>
    </Link>
  )
}

export default Card
