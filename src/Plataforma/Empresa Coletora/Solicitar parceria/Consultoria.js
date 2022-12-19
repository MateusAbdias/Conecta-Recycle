import {BsArrowLeft} from 'react-icons/bs'
import React from "react";
import "./ConsultoriaStyle.css"
import logo from '../imagens/logo.png'

const Consultoria = () => {
    return(
        <section className="consultoria">
           <div>
                <img src={logo} className='imglogo'/>
                <div className="quadradocinza">
                    <BsArrowLeft className='arrow' color=''/>
                    <p className='solicitar'>Solicitar uma consultoria</p>

                    <p className='paragrafoseloverde'>Nossa consultorias de selo verde são realizadas no Google meet <br></br>
                    (reunião online) sempre no horário da manhã. Para verificar e marcar um <br></br>
                    horário para sua empresa, acesse o site calendly.com/conectarecycle ou <br></br>
                    clique nesse botão a baixo que você será redirecionado para lá.</p>

                    <button className='botãocalendly'>Acesse o Calendly</button>
                     <p className='Prg02'>Para mais informações nos envie um e-mail para: consultoria@conectarecycle.com<br></br>
                        Ou entre em contato pelo nosso whatsapp (81)99956-8871</p>
                     </div>    
                     
              
           </div>
        </section>
    )
}

export default Consultoria;
