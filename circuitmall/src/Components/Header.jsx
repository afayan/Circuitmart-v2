import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Cart from "./Cart";
import '../index.css'


function Header(props) {



  return (
    <div className="navbar">
      <div className="topNav">
        <p>Aumano</p>

        {/* <cartContext.Provider value={{cartlen, setCartlen}}>

        </cartContext.Provider> */}
        

        <span>
          <button className="navtopbuttons">Hello</button>
          <button className='navtopbuttons'>Cart</button>
          <div className="cartCount">{props.cartlen}</div>
        </span>
      </div>


      <div className="bottomNav">
        <Navbuttons title={"Home"} to={"/Home"} />
        <Navbuttons title={"About"} to={"/About"} />
        <Navbuttons title={"FIlter"} to={"/FIlter"} />
        <Navbuttons title={"Search"} to={"/Search"} />
      </div>
   
    </div>
  );
}

export default Header;

function Navbuttons({ title, to, ...props }) {
  const path = useResolvedPath(to);
  const isActive = useMatch(path.pathname, true);

  return (
    <Link to={to} className="link">
      <button className={isActive ? "pagebuttons active" : "pagebuttons"}>
        {title}
      </button>
    </Link>
  );
}
