import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Filter from "./Pages/Filter";
import About from "./Pages/About";
import "./index.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Productpage from "./Pages/Productpage";
import { useEffect, useState } from "react";
import { useContext, createContext } from "react";
import Cart from "./Components/Cart";

function App() {

  const [cartlen, setCartlen] = useState(0)

  useEffect(function () {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart);

    if (cart) {
      setCartlen(cart.length)
    }

    else{
      setCartlen(9)
      localStorage.setItem('cart', JSON.stringify([]))
    }
  })


  return (
    <>
  {/* <CartContext.Provider> */}
      <Header cartlen = {cartlen} setCartlen = {setCartlen}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cart" element={<Cart setCartlen = {setCartlen}/>}/>
          <Route path="/Productpage" element={<Productpage setCartlen = {setCartlen} funval = {9}/>} />
        </Routes>
   {/* </CartContext.Provider> */}
    </>
  );
}

export default App;

