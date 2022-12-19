import { Routes, Route } from "react-router-dom";

import "./App.css";
import QuemSomos from "./Pages/QuemSomos/QuemSomos";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Parceiros from "./Pages/Parcerias/Parcerias";
import FaleConosco from "./Pages/FaleConosco/FaleConosco";
import Pevs from "./Pages/Pevs/Pevs";
import Cadastro from "./Plataforma/Cadastro/Cadastro"
import Login from "./Plataforma/Cadastro/Cadastro"

import FooterPeca from "./components/ComponenteFooter";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/nossaspevs" element={<Pevs />} />
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <div className="footer"><FooterPeca/></div>
    </div>
  );
}

export default App;
