import React, { useState } from "react";
import "./Carousel.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



function Carousel() {
  const [carouselCount, setCarouselCount] = useState(0);
  const [carouselData, setCarD] = useState([
    {
        deviceid : 0,
        img: "http://localhost/cktmart/images/carousel/vivo%20phone.png",
        devicename: "Vivo V15",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique."
    },

    {
        deviceid : 1,
        img: "http://localhost/cktmart/images/carousel/dej9wdlotfhitexttgi1.webp",
        devicename: "Iphone 15 Pro",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique."
    },
    {
        deviceid : 2,
        img: "http://localhost/cktmart/images/carousel/latop1-removebg-preview.png",
        devicename: "Asus a15",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique."
    },
    {
        deviceid : 3,
        img: "http://localhost/cktmart/images/carousel/JB-N15-700x700.png",
        devicename: "Aerophones",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique."
    },
    {
        deviceid : 4,
        img: "http://localhost/cktmart/images/carousel/111851_sp880-airpods-Pro-2nd-gen.png",
        devicename: "Airpods Pro",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique."
    },
 
  ])

  function handleNext() {

    const d = carouselData[0];

    carouselData.shift()

    carouselData.push(d)

    setCarouselCount((c) => c + 1);
    console.log(carouselCount);
  }

  function handlePrev() {

    const d = carouselData.pop()
    
    carouselData.unshift(d)
    setCarouselCount((c) => c - 1);
    console.log(carouselCount);
  }

  return (
    <div>

      <div className="carbg">

      </div>
      <button className="cnavbuttons" id="next" onClick={() => handleNext()}>
        <GrNext/>
      </button>

      <div className="carousel">
        {carouselData.map((data)=>{
            return <CarouselComponent key={data.deviceid} index = {data.deviceid} image = {data.img}
            devicename = {data.devicename}
            description = {data.description}
            
            />
        })}
      </div>

      <button className="cnavbuttons" id="prev" onClick={() => handlePrev()}>
        <GrPrevious/>
      </button>
    </div>
  );
}

export default Carousel;

function CarouselComponent(props) {
  
      return (
        <>
        
        <div className="citems">
          <img
            src ={props.image}
            alt=""
            className="cimage"
          />
      
          <p className="cname">{props.devicename}</p>
          <p className="cdetails">{props.description}</p>
        </div>

        </>
       
      );




      
  
}
