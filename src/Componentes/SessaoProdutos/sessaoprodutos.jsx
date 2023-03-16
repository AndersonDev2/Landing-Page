import React, { Component } from "react";
import "./sessaoprodutos.css";
import Produto from "./Produto.jsx";
import {
  FoneDeOuvidoImagem,
  LaptopImagem,
} from "../../images/imagemprodutos.jsx";

class SessaoProdutos extends Component {
  state = {};
  render() {
    return (
      <section className="SessaoProdutos">
        <h2>Produtos</h2>
        <section className="ListaProdutos">
          <Produto img={<FoneDeOuvidoImagem />} preco={"200,00"} />
          <Produto img={<FoneDeOuvidoImagem />} preco={"200,00"} />
          <Produto img={<FoneDeOuvidoImagem />} preco={"200,00"} />
        </section>
      </section>
    );
  }
}

export default SessaoProdutos;
