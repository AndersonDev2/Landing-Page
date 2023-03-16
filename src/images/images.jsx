import React from "react";
import shopIMG from "./shop.jpg";
import SobreNosIMG from "./SobreNos.png";
import FotoDePerfilIMG from "./foto de perfil.png";

function ShopImage() {
  /* font: https://br.freepik.com/vetores-gratis/pessoas-carregando-sacolas-de-compras-collectio_5096833.htm#query=buying&position=9&from_view=search&track=sph */
  return <img className="ShopImage" src={shopIMG} alt="shop imagem"></img>;
}
function SobreNosImage() {
  // font: https://br.freepik.com/vetores-gratis/conceito-de-trabalho-em-equipe-para-a-pagina-de-destino_5155720.htm#query=about%20us&position=0&from_view=search&track=ais
  return (
    <img
      className="SobreNosImage"
      src={SobreNosIMG}
      alt="Sobre Nós imagem"
    ></img>
  );
}

function FotoDePerfilImage() {
  // font: https://www.freepik.com/free-vector/hand-drawn-collection-different-profile-icons_17786264.htm#query=profile&position=43&from_view=search&track=sph
  return (
    <img
      className="FotoDePerfil"
      src={FotoDePerfilIMG}
      alt="Foto de perfil"
    ></img>
  );
}

export { ShopImage, SobreNosImage, FotoDePerfilImage };
