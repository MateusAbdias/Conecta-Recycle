import {Routes, Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import QuemSomos from './components/pages/quemsomos/QuemSomos';
import Home from "./components/pages/home/Home"
import Blog from "./components/pages/blog/Blog"
import Parceiros from "./components/pages/parcerias/Parcerias"
import FaleConosco from "./components/pages/faleconosco/FaleConosco"
import Pevs from "./components/pages/Pevs/Pevs"


function App () {
    return(

        <div className='App'>
        <Navbar/>
  
        <Routes>
          <Route path="/quemsomos" element={<QuemSomos/>}/>
          <Route path="/nossaspevs" element={<Pevs/>}/>
          <Route path="" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/parceiros" element={<Parceiros/>}/>
          <Route path="/faleconosco" element={<FaleConosco/>}/>
        </Routes>
      </div>
    )
}

export default App