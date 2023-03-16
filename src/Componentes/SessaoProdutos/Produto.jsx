import React, { useState } from "react";
import "./Produto.css";

function Produto(props) {
  const [MudarStyle, setMudarStyle] = useState(0);
  const [PrecoStyle_h3, setPrecoStyle_h3] = useState({
    position: "relative",
    left: "40%",
    top: "8%",
    color: "#181823",
    fontSize: "105%",
    transition: "0.1s",
  });
  const [PrecoStyle_p, setPrecoStyle_p] = useState({
    position: "relative",
    left: "32%",
    top: "5%",
    color: "#181823",
    fontSize: "98%",
    fontWeight: "bold",
    transition: "0.1s",
  });
  const divMouseEnter = (e) => {
    setPrecoStyle_h3({ ...PrecoStyle_h3, color: "#e9f8f9" });
    setPrecoStyle_p({ ...PrecoStyle_p, color: "#e9f8f9" });
  };
  const divMouseLeave = (e) => {
    setPrecoStyle_h3({ ...PrecoStyle_h3, color: "#181823" });
    setPrecoStyle_p({ ...PrecoStyle_p, color: "#181823" });
  };
  return (
    <div
      className="Produto"
      onMouseEnter={divMouseEnter}
      onMouseLeave={divMouseLeave}
    >
      {props.img}
      <section>
        <h3 style={PrecoStyle_h3}>Preço</h3>
        <p className="Preco" id="Preco" style={PrecoStyle_p}>
          R$: {props.preco}
        </p>
      </section>
    </div>
  );
}

export default Produto;
