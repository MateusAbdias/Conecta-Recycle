import React from "react";
import logo from "./img/conectalogo.png"
import menu from "./img/menu.png"
import certificadoimg from "./img/certificadoimg.png"
import duvidaimg from "./img/duvidaimg.png"
import lixoimg from "./img/lixoimg.png"

import './BemVindo.css'



function Certificado() {
    return (
      <div className="principal">
        <img src={logo} className="logo" alt="logo" />          
        <img src={menu} className="menu" alt="menu" />
          <main className="main">
                <ul>
                <li className="titulo">
                    <p>Bem vindo, Mateus Abdias!</p>
                </li>

                </ul>
                <p className="paragrafo">O que você quer fazer hoje?</p>

                <ul className="blocos">
                  <li>Quero realizar um descarte
                  <img src={lixoimg} className="bvimg" alt="icon"/>
                  </li>
                  <li>Como realizar um descarte
                  <img src={duvidaimg} className="bvimg2" alt="icon"/>
                  </li>
                  <li>Certificado
                    <img src={certificadoimg} className="bvimg3" alt="icon"/>
                  </li>
                </ul>

          </main>
      </div>
    );
  }
  
  export default Certificado;