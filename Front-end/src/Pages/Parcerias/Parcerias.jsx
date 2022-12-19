import React from "react";
import headerimg from "./img/parceiroimg.png"
import logosenac from "./img/logos/logosenac.png"
import proalogo from "./img/logos/proalogo.png"
import wolklogo from "./img/logos/wolklogo.png"
import greenlogo from "./img/logos/greenlogo.png"
import festlogo from "./img/logos/festlogo.png"
import grid1 from "./img/grid1.png"
import grid2 from "./img/grid2.png"
import pevrecife from "./img/logoPevs/pevrecife.png"
import pevbotanical from "./img/logoPevs/pevbotanical.png"
import pevcandle from "./img/logoPevs/pevcandle.png"
import pevculture from "./img/logoPevs/pevculture.png"
import pevelegance from "./img/logoPevs/pevelegancy.png"
import pevgeometric from "./img/logoPevs/pevgeometric.png"
import pevgestone from "./img/logoPevs/pevgestone.png"
import pevjuice from "./img/logoPevs/pevjuice.png"
import pevmonogram from "./img/logoPevs/pevmonogram.png"
import pevsanta from "./img/logoPevs/pevsanta.png"
import pevnautico from "./img/logoPevs/pevnautico.png"
import pevsenac from "./img/logoPevs/pevsenac.png"
import pevsport from "./img/logoPevs/pevsport.png"
import pevwedo from "./img/logoPevs/pevwedo.png"
import logocity from "./img/logocoletores/logocity.png"
import logocaminho from "./img/logocoletores/logocaminho.png"
import logolove from "./img/logocoletores/logolove.png"
import logonature from "./img/logocoletores/logonature.png"
import logoorange from "./img/logocoletores/logoorange.png"
import logopatrocinador from "./img/logoparceiros/logopatrocinador.png"
import logocoletor from "./img/logoparceiros/logocoletor.png"
import logocoleta from "./img/logoparceiros/logocoleta.png"
import "./Parcerias.css"
import FooterPeca from "../../components/ComponenteFooter";



const Parceirias = () => {
    return(
        <div>
        <nav>
            <img className="headerimg" src={headerimg} alt="imagem-parcerias"/>
        </nav>
        <p className="titulo1">Patrocinadores</p>      
        <section>
            <div className="logosparceiros">
                <div className="senaclogo">
                <img src={logosenac} alt="logo-senac"/>                    
                </div>

                <div className="proalogo">
                <img src={proalogo} alt="logo-proa"/>                    
                </div>

                <div className="wolklogo">
                <img src={wolklogo} alt="logo-volkswagen"/>                    
                </div>

                <div className="greenlogo">
                <img src={greenlogo} alt="logo-green-city"/>                    
                </div>

                <div className="festlogo"> 
                <img src={festlogo} alt="logo-culturefest"/>                    
                </div>

                

            </div>
            <div className="buttons1">
            <button className="button1"> Quero patrocinar</button>                
            </div>

        </section> 

        <p className="titulo2">Benefícios de se tornar uma PEV da Conecta Recycle</p>
        <div className="container">
            <img src={grid1} alt="grid"/>
        </div>
        <div className="buttons2">
        <button className="button2"> Quero me tornar um parceiro</button>
        <button className="button3"> Saiba mais sobre a parceria</button>          
        </div>
        <p className="titulo3">Nossas PEVs</p>

                <div className="logosparceiros">
                <div className="pevrecife">
                <img src={pevrecife} alt="logo-recife"/>                    
                </div>

                <div className="pevgeometric">
                <img src={pevgeometric} alt="logo-geometric"/>                    
                </div>

                <div className="pevgestone">
                <img src={pevgestone} alt="logo-gestone"/>                    
                </div>

                <div className="pevjuice">
                <img src={pevjuice} alt="logo-juice"/>                    
                </div>

                <div className="pevmonogram"> 
                <img src={pevmonogram} alt="logo-monogram"/>                    
                </div>

                <div className="pevsanta"> 
                <img src={pevsanta} alt="logo-santa"/>                    
                </div>

                <div className="pevnautico"> 
                <img src={pevnautico} alt="logo-nautico"/>                    
                </div>

                

            </div>  

            <div className="logosparceiros">
                <div className="pevsenac">
                <img src={pevsenac} alt="logo-senac"/>                    
                </div>

                <div className="pevsport">
                <img src={pevsport} alt="logo-proa"/>                    
                </div>

                <div className="pevwedo">
                <img src={pevwedo} alt="logo-wedo"/>                    
                </div>

                <div className="pevbotanical">
                <img src={pevbotanical} alt="logo-botanic"/>                    
                </div>

                <div className="pevcandle"> 
                <img src={pevcandle} alt="logo-candle"/>                    
                </div>

                <div className="pevculture"> 
                <img src={pevculture} alt="logo-culturefest"/>                    
                </div>

                <div className="pevelegance"> 
                <img src={pevelegance} alt="logo-elegance"/>                    
                </div>
            </div>  

            <p className="titulo3">Nossos Coletores</p>


            <div className="logosparceiros">
                <div className="logocity">
                <img src={logocity} alt="logo-city"/>                    
                </div>

                <div className="logocaminho">
                <img src={logocaminho} alt="logo-caminho"/>                    
                </div>

                <div className="logolove">
                <img src={logolove} alt="logo-love"/>                    
                </div>

                <div className="logonature">
                <img src={logonature} alt="logo-nature"/>                    
                </div>

                <div className="logoorange"> 
                <img src={logoorange} alt="logo-orange"/>                    
                </div>              
            </div>

            <p className="titulo3">Benefícios de ser um dos nossos Coletores</p>

            <div className="container">
            <img src={grid2} alt="grid"/>
        </div>

        <p className="titulo3">Seja um de nossos Parceiros</p>
        <div className="parceiros">
        <div className="logocoleta">
                <img src={logocoleta} alt="logo-coleta"/>                    
                </div>

                <div className="logocoletor">
                <img src={logocoletor} alt="logo-coletor"/>                    
                </div>

                <div className="logopatrocinador"> 
                <img src={logopatrocinador} alt="logo-patrocinador"/>                    
                </div>         
        </div>

        <div className="underfooter">
            <p>Seja um de nossos parceiros</p>
            <button className="contato">ENTRE EM CONTATO</button>
            
        </div>
         
        </div>

    )
}

export default Parceirias