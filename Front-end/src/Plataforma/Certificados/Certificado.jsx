import React from "react";
import logo from "./img/conectalogo.png"
import seta from "./img/seta.png"
import certificado from "./img/certificado1.png"
import certificado2 from "./img/certificado2.png"
import menu from "./img/menu.png"
import './Certificado.css'



function Certificado() {
    return (
      <div className="principal">
        <img src={logo} className="logo" alt="logo" />          
        <img src={menu} className="menu" alt="menu" />
          <main className="main">
                <ul>
                <li className="titulo">
                    <img src={seta} className="seta_icon" alt="seta_icon" />
                    <p>Olá, Mateus Abdias!</p>
                </li>

                </ul>
                <p className="seus">Seus Certificados</p>
                <p className="descricao">Você consegue pontos ao descartar os eletrônicos e mostrar seu QR code em nossas PEVs</p>            
                <ul>
                    <li className="certificados">
                    <img src={certificado2} className="certificado" alt="certificado" />
                    <img src={certificado} className="certificado" alt="certificado" />
                    <img src={certificado} className="certificado" alt="certificado" />
                    </li>

                </ul>
                <ul>
                  <li className="inferior">
                    <button className="baixar">Baixar certificado</button>
                    <input type="range" value="68" min="0" max="100" /> 
                  </li>
                </ul>

                <ul className="pontuacao">
                  <li>75% concluído</li>
                  <li className="consiga">Consiga mais pontos</li>
                </ul>
         
          </main>
      </div>
    );
  }
  
  export default Certificado;