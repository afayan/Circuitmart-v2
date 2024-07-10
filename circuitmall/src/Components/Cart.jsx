import React, { useState } from 'react'
import '../index.css'
import '../Components/Header.jsx'
import Header from '../Components/Header.jsx'

function Cart(props) {

  // const cart = JSON.parse(localStorage.getItem('cart'))
  const [cart, setcart] = useState(JSON.parse(localStorage.getItem('cart')))


  console.log("cart accessed");

  function saveChanges() {
    props.setCartlen(cart.length)
    localStorage.setItem('cart', JSON.stringify(cart))
  }


  return (
   <span className="cartContainer">
    <h1>Cart</h1>
    <span className='cartHeader'>
      <div className="cartbuttons">
        <p></p>
        <p>Product</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>
    </span>
  
    {cart.map((element)=>{
      return <CartButtons element = {element} key = {Math.random()}
      setcart = {setcart}
      />
    })}
   
   <button onClick={()=>{saveChanges()}}>Save changes</button>
  </span>
  )
}

export default Cart

function CartButtons(props) {

  const [count, setcount] = useState(props.element.count)

  console.log(props.element);

  return <>
  <div className="cartbuttons">
    <img src= {props.element.imageurl} alt="" />
    <p> {props.element.device} </p> 
    <p>{count}</p>
    <p>{props.element.price}</p>
    <button onClick={()=>{
      props.setcart(c => c.filter(
        (element)=>{
          return element.device != props.element.device
        }
      ))

    }}>Delete</button>
  </div>
  </>

}

