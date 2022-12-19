import pevs from '../imagens/pevs.png'
import mapa from '../imagens/mapa.png'
import {BsArrowLeft} from "react-icons/bs"
import logo from '../imagens/logo.png'
import React from "react";
import "./DescarteStyle.css"

const Descarte = () => {
    return(
        <section className="descarte">
           <img src={logo} className='imglogo2'/>
           <div className="blococinza2">
                <div>
                    <BsArrowLeft className='arrow02'/>
                    <p className='ola'>Olá, Mateus Abdias!</p>
                    <h3 className='materialdescarte'>Tem material para descartar?</h3>
                    <p className='p2'>Digite um endereço e os materiais que você quer descartar,
                      e descubra<br></br>
                       um ponto de coleta próximo a sua localização.</p>
                       <p className='p3'>O que você vai descartar? </p>
                       <input  className='Inputdescarte01' />
                       <p className='p4'>Em qual estado se encontra o material?</p>
                       <input  className='Inputdescarte02' />
                       <p className='p5'>Digite onde você irá realizar o descarte:</p>
                       <input  className='Inputdescarte03' />
                       <button type='submit' className='botãozinho'>BUSCAR PEV</button>
                       <button type='submit' className='botãozinho2'>CANCELAR</button>
                       <p className='localização'>Sua localização</p>
                       <a href='https://goo.gl/maps/WBsazkPcs93UrQy37'>
                       <img src={mapa} className='imgmapa'/>
                       

                       </a>
                       <p className='pevsbeneficios'>PEVs com maiores benefícios</p>
                       <img src={pevs} className='imgpevs'/>
                       <p className='voucher1'>Voucher:</p>
                       <p className='reaisemtroca1'>22 reais em troca</p>
                       <p className='voucher2'>Voucher:</p>
                       <p className='reaisemtroca2'>20 reais em troca</p>
                </div>
                
              
           </div>
        </section>
    )
}

export default Descarte;