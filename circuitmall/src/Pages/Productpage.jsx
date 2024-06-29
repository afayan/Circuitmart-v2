import React, { useEffect, useState } from 'react'

function Productpage() {
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


  if (productInfo) {
    return (
      <div>
        {console.log(productInfo)}
       <img src={productInfo.imageurl} alt="" />
       <p>{productInfo.device}</p>
      </div>
    )
    
  }

}

export default Productpage
