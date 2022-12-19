import { Routes, Route } from "react-router-dom";

import "./App.css";
import QuemSomos from "./Pages/QuemSomos/QuemSomos";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Parceiros from "./Pages/Parcerias/Parcerias";
import FaleConosco from "./Pages/FaleConosco/FaleConosco";
import Pevs from "./Pages/Pevs/Pevs";
import Cadastro from "./Plataforma/Cadastro/Cadastro"
<<<<<<< HEAD
import Login from "./Plataforma/login/LoginRecycle"
=======
>>>>>>> 113b5d356283e0143494f33ada632f8d17afda3f

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
        <Route path="/login" element={<Login/>} />
        
      </Routes>
<<<<<<< HEAD
=======
      
>>>>>>> 113b5d356283e0143494f33ada632f8d17afda3f
    </div>
  );
}

export default App;
