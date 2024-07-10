import React, { useEffect, useState } from 'react'
import "../Components/Productpage.css"
import Cart from '../Components/Cart';
import Header from '../Components/Header';

function Productpage(props) {
  const serverLocation = 'http://localhost/cktmart/circuitmartapi.php';

  
  const [productInfo, setProductInfo] = useState()
  const [productCounter, setProductCounter] = useState(1)
   
  useEffect( 
    function configure() {
        const queryParameters = new URLSearchParams(window.location.search)
          const type = queryParameters.get("id")
          console.log("Type is "+type);

          var c = {
            stype: "productInfo",
            id: type
          }

          fetch(serverLocation,{
            method: 'post',
            body: JSON.stringify(c)
          }).then(function(response) {
            return response.json()
          }).then((data)=>{
            setProductInfo(data[0])
          })        
    },[])

    function count(operation) {
      
      if (operation === 'add'){
        setProductCounter(c=>c+1)
      }

      else if(operation === 'sub'){
      if (productCounter > 1) {  
        setProductCounter(c=> c-1)
        }
      }
    }


    function addToCart(productInfo) {
      const cart  = localStorage.getItem('cart')
      const cart2 = JSON.parse(cart)
      productInfo.count = productCounter
      cart2.push(productInfo)


      console.log(cart2);
      localStorage.setItem('cart', JSON.stringify(cart2))
      alert(productInfo.device+"added to cart")    
      
      console.log(props.funval);
      props.setCartlen(c => c+1)
    }


  if (productInfo) {
    return (
    <>
      <div className="productContent">
        <div className="right">
          <img src={productInfo.imageurl} alt=""/>
        <span>

          <button className='productButtons'>Buy</button>
          <button className='productButtons' onClick={()=>{addToCart(productInfo)}}>Add to cart</button>
        </span>

        </div>
        <div className="productdetails">
          <h1>{productInfo.device}</h1>
          <p className="price large">
          &#8377; {productInfo.price}
          </p>

          <p className="description">
            {productInfo.description}

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officiis magni tenetur unde quibusdam sit beatae illum iusto incidunt eligendi ullam architecto voluptas aspernatur fugit odio quia, qui odit nemo veritatis excepturi repudiandae consequatur quam modi quisquam! Laudantium, delectus quaerat.
          </p>

          <div className="counter">
            <button className="dec" onClick={()=>{count('sub')}}>-</button>
            {productCounter}
            <button className="inc" onClick={()=>{count('add')}}>+</button>
          </div>
        </div>
      </div>

    </>
    )
    
  }

}

export default Productpage
