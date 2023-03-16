import React, { Component } from "react";
import Avaliacao from "./avaliacao.jsx";
import ImagemPerfil from "../../images/foto de perfil.png";
import "./sessaoavaliacao.css";

class SessaoAvaliacao extends Component {
  render() {
    return (
      <section className="SessaoAvaliacao">
        <h2> Avaliações De Clientes </h2>
        <Avaliacao img={ImagemPerfil} />
      </section>
    );
  }
}

export default SessaoAvaliacao;
