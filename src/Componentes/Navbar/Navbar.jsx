import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    const user_icon = (
      <svg
        className="userIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg>
    );
    return (
      <div className="Navbar">
        <a className="logo" href="#">
          Logo
        </a>
        <ul className="MenuLista">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Avaliações</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        {user_icon}
      </div>
    );
  }
}

export default Navbar;
