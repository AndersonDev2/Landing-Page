import React, { Component } from "react";
import "./avaliacao.css";
class Avaliacao extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Avaliacao">
        <section id="comentario">
          <p>
            "Eu tive uma experiência extremamente positiva com o site de vendas
            que visitei recentemente. Desde o início, fiquei impressionado com a
            facilidade de navegação e a ampla variedade de produtos disponíveis.
            A interface do site é intuitiva e amigável, permitindo-me encontrar
            rapidamente o que estava procurando. Além disso, a descrição
            detalhada dos produtos e as avaliações dos clientes ajudaram-me a
            tomar decisões informadas sobre minhas compras."
          </p>
        </section>

        <img src={this.props.img} alt="Imagem de perfil" />
        <p id="NomeDeUsuario">Nome de usuário</p>
      </div>
    );
  }
}

export default Avaliacao;
