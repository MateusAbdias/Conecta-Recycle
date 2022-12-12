import {Routes, Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import QuemSomos from './Pages/QuemSomos/QuemSomos';
import Home from "./Pages/Home/Home"
import Blog from "./Pages/Blog/Blog"
import Parceiros from "./Pages/Parcerias/Parcerias"
import FaleConosco from "./Pages/FaleConosco/FaleConosco"
import Pevs from "./Pages/Pevs/Pevs"


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