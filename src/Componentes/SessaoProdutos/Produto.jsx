import React, { useEffect, useState } from "react";
import "./Produto.css";

function Produto(props) {
  const precoH3_ref = React.createRef();
  const precoP_ref = React.createRef();
  const divMouseEnter = (e) => {
    precoH3_ref.current.style["color"] = "#e9f8f9";
    precoP_ref.current.style["color"] = "#e9f8f9";
  };
  const divMouseLeave = (e) => {
    precoH3_ref.current.style["color"] = "#181823";
    precoP_ref.current.style["color"] = "#181823";
  };

  return (
    <div
      className="Produto"
      onMouseEnter={divMouseEnter}
      onMouseLeave={divMouseLeave}
    >
      {props.img}
      <section>
        <h3 ref={precoH3_ref}>Preço</h3>
        <p ref={precoP_ref} className="Preco" id="Preco">
          R$: {props.preco}
        </p>
      </section>
    </div>
  );
}

export default Produto;
