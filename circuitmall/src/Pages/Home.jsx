import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card';
import { Link, json } from 'react-router-dom';
import Carousel from '../Components/Carousel';

function Home() {
  const serverLocation = 'http://localhost/cktmart/circuitmartapi.php';
  const [dataToShow, setData] = useState([])

useEffect(()=>{
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

})

  
  
  useEffect(
    function getData() {

     

      

      fetch(serverLocation,
        {
          method: 'post',
          body: JSON.stringify({stype: "getProducts"})
        }
      ).then(function(response){
        return response.json()
      }).then(function(data){
        // console.log(data)
        setData(data)
      })
    }
    
    ,[dataToShow])


  return (
   
<>
    <Carousel/>
    
      <div className='cardcontainer'>
      {
        dataToShow.map((element) => {
         return <Card key = {element.deviceid} image = {element.imageurl} name = {element.device} deviceid = {element.deviceid}
         price = {element.price}
         />
        }
        )
      }
      </div>
    

</>

  )
}

export default Home
