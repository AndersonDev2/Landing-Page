import React, { Component } from "react";
import "./sessaocontato.css";

class SessaoContato extends Component {
  state = {};
  render() {
    return (
      <section className="SessaoContato">
        <h2>Contato</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label id="Nome">
            <input type="text" placeholder="Nome" />
          </label>
          <br />
          <label id="Telefone">
            <input type="text" placeholder="Telefone" />
          </label>
          <br />
          <label id="Email">
            <input type="email" placeholder="Email" />
          </label>
          <br />
          <label id="Mensagem">
            <textarea rows={3} placeholder="Mensagem" />
          </label>
          <br />
          <button type="Submit">Enviar</button>
        </form>
      </section>
    );
  }
}

export default SessaoContato;
