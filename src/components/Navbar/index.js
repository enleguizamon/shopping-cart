import React from "react";
import cart from '../../images/cart.png';

// stateless functional component
// snippet sfc
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={cart} width="50" height="50" alt="Chango"></img>
        Shopping
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;