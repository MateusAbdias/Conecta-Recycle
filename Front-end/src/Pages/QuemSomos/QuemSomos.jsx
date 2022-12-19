import './QuemSomos.css'
import React from "react";
import Navbar from "../../components/Navbar";
import imggratuito from '../imagens/Gratuito.png'
import imgemial from '../imagens/Email.png'
import imgseguro from '../imagens/Imgseguro.png'
import imgrelogio from '../imagens/Relogio.png'
import fotoequipe from '../imagens/FotoEquipe.jpg'
import ImagemPraia from '../imagens/ImagemPraiaReciclagem.png'
import blocosInformativos from '../imagens/Blocos.png'
import nossosvalores from '../imagens/NossosValores.png'
import nossavisao from '../imagens/NossaVisao.png'
import nossamissao from '../imagens/NossaMissao.png'
import ImgGrafico from '../imagens/ImgGraficoQuemSomos.png'
import { IoLogoInstagram } from 'react-icons/io'
import { TbBrandLinkedin } from 'react-icons/tb'
import { CiYoutube } from 'react-icons/ci'
import banersobrenos from '../imagens/imgquemsomos.jpg'

 function SobreNos() {
    return (
        <div>
            <Navbar/>
            <img src={banersobrenos} className='ImgQuemSomosqs' />
            <h1 className='TituloSobreNosqs'>A Conecta Recycle</h1>
            <h2 className='SomosSoluçaoqs'>Somos a solução para os lixos eletrônicos<br />
            descartados incorretamente na Grande<br /> Recife!</h2>
            <a href='#'><button className='Botão01qs'>Acesse a nossa plataforma</button></a>
            <a href='#'><button className='Botão02qs'>Fale conosco</button></a>
            <TbBrandLinkedin className='Icon01qs' />
            <IoLogoInstagram className='Icon02qs' />
            <CiYoutube className='Icon03qs'/>
            <a href='https://www.linkedin.com/in/conecta-recycle-3a5390256/' className='LinkLinqs'>ConectaRecycle</a>
            <a href='https://www.instagram.com/conectarecycle/' className='LinkInstaqs'>ConectaRecycle</a>'
            <a href='#' className='LinkYouTubeqs'>ConectaRecycle</a>
            <img src={ImgGrafico} className='ImgGraficoQuemSomosqs' />
            <img src={nossamissao} className='quemsomosqs' />
            <img src={nossavisao} className='visaoqs' />
            <img src={nossosvalores} className='valoresqs' />
            <h1 className='TituloNosMotiva'>O que nos motiva?</h1>
            <img src={blocosInformativos} className='blocosqs' />
            <img src={ImagemPraia} className='ImgPraiaqs' />
            <h1 className='NossosProjetosqs'>Nossos Projetos</h1>
            <button className='botãoSaibaMaiaqs'>SAIBA MAIS</button>
            <div className='ContainerConheçaqs'>
            <img src={fotoequipe} className='ImgEquipeqs' />
            <h1 className='ConheçaEquipeqs'>Conheça a nossa Equipe</h1>
            <p className='ParagrafoEquipeqs'>Somos uma equipe multidisciplinar formada por 7 estudantes do SENAC em Recife-PE através<br />
            de bolsas concedidas pelo Instituto PROA.</p>
            <button className='botãocontainerqs'>Saiba mais sobre nosso time</button>
           

            


            </div>


            <div className='blocoverdeqs'>
            <h1 className='tituloBlocoqs'>Conheça nosso blog</h1>
            <p className='ParagrafoBlocoVerdeqs'>
                    A Conecta Recycle possui um blog sobre informações a respeito de<br />
                    tecnologia, reciclagem e meio ambiente. Prezamos sempre pela<br />
                    veracidade dos dados e trazemos sempre novidades dessas áreas<br />
                    para você!
                </p>

            <h2 className='T2BlocoVerdeqs'>Se inscreva agora no nosso Blog</h2>
            <input placeholder='Digite seu e-mail para receber as notícias' className='Input01' id='Input01' />
            
            <button type='submit' className='BotãoBlocoVerde' id='BotãoPreto'>INSCREVER</button>
             <div className='bloquinho01qs'>
                <p className='rapidoqs'>Rápido</p>
                <img src={imgrelogio} className='imgrlg' />
             </div>

             <div className='Quadrado2qs'>
                <p className='Seguroooqs'>Seguro</p>
                <img src={imgseguro} className='imgseguroo' />
             </div>

             <div className='Quadrado3qs'>
                <p className='Emailqs'>Via e-mail</p>
                <img src={imgemial} className='imgsegurooqs' />



            </div>

            <div className='Quadrado4qs'>
                <p className='Gratuitooqs'>Gratuito</p>
                <img src={imggratuito} className='imggratuito' />



            </div>
             </div>


            </div>
    )

 }

 export default SobreNos;