import React, { Component } from "react";
import "./sessaoboasvindas.css";
import { ShopImage } from "../../images/images.jsx";

class BoasVindas extends Component {
  state = {};
  render() {
    return (
      <section className="BoasVindas" id="BoasVindas">
        <p>
          Bem-vindo(a) à nossa loja de vendas! Estamos muito felizes em
          recebê-lo(a) e esperamos que você encontre aqui tudo o que precisa
          para satisfazer suas necessidades e desejos.
        </p>
        <button>Entrar</button>
        <ShopImage />
      </section>
    );
  }
}

export default BoasVindas;
