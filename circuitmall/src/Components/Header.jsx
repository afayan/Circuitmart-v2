import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="topNav">
        <p>Aumano</p>

        <span>
          <button className="navtopbuttons">Hello</button>

          <button className="navtopbuttons">cart</button>
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
