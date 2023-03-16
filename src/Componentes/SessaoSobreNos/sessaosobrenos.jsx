import React, { Component } from "react";
import "./sessaosobrenos.css";
import { SobreNosImage } from "../../images/images.jsx";

class SobreNos extends Component {
  state = {};
  render() {
    return (
      <section className="SobreNos">
        <SobreNosImage />
        <section className="Texto">
          <h2>Sobre nós</h2>
          <p>
            Nós somos uma loja online especializada em vendas de produtos de
            qualidade, com preços acessíveis e entrega rápida. Estamos sempre
            atualizados com as tendências do mercado e em constante busca por
            novidades que possam satisfazer as necessidades dos nossos clientes.
            Temos uma equipe altamente qualificada e treinada para garantir um
            atendimento excepcional e eficiente. Acreditamos que a transparência
            é fundamental em qualquer relação comercial, por isso, prezamos pela
            honestidade e clareza em todas as etapas da compra. Aqui, o seu
            conforto e satisfação são a nossa principal prioridade.
          </p>
          <button>Ler mais</button>
        </section>
      </section>
    );
  }
}

export default SobreNos;
