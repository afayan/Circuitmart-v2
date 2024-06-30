import React, { useEffect, useState } from 'react'
import "../Components/Productpage.css"

function Productpage(props) {
  const serverLocation = 'http://localhost/cktmart/circuitmartapi.php';

  
  const [productInfo, setProductInfo] = useState()
  
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
            console.log(data);
            setProductInfo(data[0])
          })        
    },[])


    function addToCart(prodInfo) {

       let myCart = localStorage.getItem('cart');

    if (myCart) {
      myCart = JSON.parse(myCart);
    } else {
      myCart = [];
    }

    myCart.push(prodInfo);

    localStorage.setItem('cart', JSON.stringify(myCart));

    console.log(localStorage.getItem('cart'));
      
    }


  if (productInfo) {
    return (
    <>
      <div className="productContent">
        <div className="right">
          <img src={productInfo.imageurl} alt="" />
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
        </div>
      </div>

    </>
    )
    
  }

}

export default Productpage
