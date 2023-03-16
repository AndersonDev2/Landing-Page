import "./App.css";
import Navbar from "./Componentes/Navbar/Navbar.jsx";
import BoasVindas from "./Componentes/SessaoBoasVindas/sessaoboasvindas.jsx";
import SobreNos from "./Componentes/SessaoSobreNos/sessaosobrenos.jsx";
import SessaoProdutos from "./Componentes/SessaoProdutos/sessaoprodutos.jsx";
import SessaoAvaliacao from "./Componentes/SessaoAvaliacao/sessaoavaliacao.jsx";
import SessaoContato from "./Componentes/SessaoContato/sessaocontato.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BoasVindas />
      <SobreNos />
      <SessaoProdutos />
      <SessaoAvaliacao />
      <SessaoContato />
    </div>
  );
}

export default App;
