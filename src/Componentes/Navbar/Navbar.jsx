import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { expand_navbar: false };
    this.handleButton = this.handleButton.bind(this);
    this.menuListaRef = React.createRef();
  }
  handleButton() {
    let min_height = 0;
    let max_height = 0;
    if (window.matchMedia("(max-width): 675px")) {
      min_height = 50;
      max_height = (660 / 100) * min_height;
    }
    if (!this.state["expand_navbar"]) {
      this.setState({ expand_navbar: true }, () => {
        this.menuListaRef.current.style["height"] = `${max_height}px`;
      });
    } else {
      this.setState({ expand_navbar: false }, () => {
        this.menuListaRef.current.style["height"] = `${min_height}px`;
      });
    }
  }
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
    const menu_icon = (
      <svg
        className="MenuIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    );
    return (
      <div className="Navbar" ref={this.menuListaRef}>
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
          <li href="#" id="MeuPerfil">
            <a href="#">Meu Perfil</a>
          </li>
        </ul>
        {user_icon}
        <button className="MenuButton" onClick={this.handleButton}>
          {menu_icon}
        </button>
      </div>
    );
  }
}

export default Navbar;
