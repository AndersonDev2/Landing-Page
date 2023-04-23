import React, { Component } from "react";
import "./sessaoprodutos.css";
import Produto from "./Produto.jsx";
import {
  FoneDeOuvidoImagem,
  LaptopImagem,
} from "../../images/imagemprodutos.jsx";

class SessaoProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = { scroll: 0, target_scroll: 0 };
    this.listaProdutosRef = React.createRef();
    this.SessaoProdutosRef = React.createRef();
  }
  componentDidMount() {
    this.SessaoProdutosRef.current.addEventListener("scroll", (e) => {
      if (window.matchMedia("(max-width: 425px)").matches) {
        return;
      }
      if (
        this.SessaoProdutosRef.current.scrollLeft >
        (119 / 100) * this.SessaoProdutosRef.current.offsetWidth
      ) {
        this.SessaoProdutosRef.current.scrollLeft =
          (119 / 100) * this.SessaoProdutosRef.current.offsetWidth;
      }
    });
  }

  render() {
    return (
      <div className="SessaoProdutosDiv">
        <h2>Produtos</h2>
        <section className="SessaoProdutos" ref={this.SessaoProdutosRef}>
          <section className="ListaProdutos" ref={this.listaProdutosRef}>
            <Produto img={<FoneDeOuvidoImagem />} preco={"200,00"} />
            <Produto img={<FoneDeOuvidoImagem />} preco={"210,00"} />
            <Produto img={<FoneDeOuvidoImagem />} preco={"220,00"} />
          </section>
        </section>
      </div>
    );
  }
}

export default SessaoProdutos;
