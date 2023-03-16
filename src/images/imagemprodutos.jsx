import React from "react";
import FoneDeOuvido from "./Fone de ouvido.jpg";

function FoneDeOuvidoImagem() {
  // font: https://br.freepik.com/fotos-gratis/fone-de-ouvido-preto-dispositivo-digital_13300463.htm#query=headphone&position=3&from_view=search&track=sph
  return (
    <img
      className="FoneDeOuvidoImagem"
      src={FoneDeOuvido}
      alt="Fone de ouvido"
    ></img>
  );
}

export { FoneDeOuvidoImagem };
