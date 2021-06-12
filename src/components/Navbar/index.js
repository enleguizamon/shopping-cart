/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cart from "../../images/cart.png";

const NavBar = ({ totalCounters, total }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={cart} width="50" height="50" alt="Chango"></img>
        Shopping
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      <p>Importe total de la compra: $ {total}</p>
    </nav>
  );
};

export default NavBar;
