import ImagemLogo from '../imgs/ImagemLogo.png'
import imggratuito from '../imgs/Gratuito.png'
import imgemial from '../imgs/Email.png'
import imgseguro from '../imgs/Imgseguro.png'
import imgrelogio from '../imgs/Relogio.png'
import fotoequipe from '../imgs/FotoEquipe.jpg'
import ImagemPraia from '../imgs/ImagemPraiaReciclagem.png'
import blocosInformativos from '../imgs/Blocos.png'
import nossosvalores from '../imgs/NossosValores.png'
import nossavisao from '../imgs/NossaVisao.png'
import nossamissao from '../imgs/NossaMissao.png'
import ImgGrafico from '../imgs/ImgGraficoQuemSomos.png'

import { TfiEmail } from 'react-icons/tfi'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiCodeView } from 'react-icons/ri'
import './QuemSomos.css'
import React from "react";
import Navbar from "../../components/Navbar";


import { IoLogoInstagram } from 'react-icons/io'
import { TbBrandLinkedin } from 'react-icons/tb'
import { CiYoutube } from 'react-icons/ci'
import imgquemsomos from '../imgs/imgquemsomos.jpg'

function SobreNos() {
    return (
        <div>
            <Navbar />
            <img src={imgquemsomos} className='ImgQuemSomosqs' />
            <h1 className='TituloSobreNosqs'>A Conecta Recycle</h1>
            <h2 className='SomosSoluçaoqs'>Somos a solução para os lixos eletrônicos<br />
                descartados incorretamente na Grande<br /> Recife!</h2>
            <a href='#'><button className='Botão01qs'>Acesse a nossa plataforma</button></a>
            <a href='#'><button className='Botão02qs'>Fale conosco</button></a>
            <TbBrandLinkedin className='Icon01qs' />
            <IoLogoInstagram className='Icon02qs' />
            <CiYoutube className='Icon03qs' />
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
            
            <div className='footerteste'>

             <h2 className='meunome'>Bruna</h2>
                <img src= {ImagemLogo} className='logofooterds'/>
                <h2 className='mapads'>Mapa do site</h2>
                <h2 className='contatods'>Contato</h2>
                <h2 className='blogds'>Blog</h2>
                <a href='#' className='linkhome'>Home</a>
                <a href='#' className='Nosso-blog'>Nosso blog</a>
                <a href='#' className='quem-somos'>Quem Somos</a>
                <a href='#' className='parceriasds'>Parcerias</a>
                <a href='#' className='fale-conosco'>Fale Conosco</a>
                <TfiEmail className='iconemailds'/>
                <a href='#' className='linkgmailds'>conectarecycle@gmail.com</a>
                <BsInstagram className='iconinstads'/>
                <a href='#' className='conecta-recycle'>Conecta Recycle</a>
                <AiOutlineLinkedin className='linkDinds'/>
                <a href='#' className='conectads'>Conecta Recycle</a>
                <AiOutlineGithub className='gitds'/>
                <a href='#' className='conectahubds'>Conecta Recycle</a>
                <RiCodeView className='devds'/>
                <a href='#' className='linkhubds'>Desenvolvedores</a>
                <p className='inscrevaseds'>Se inscreva agora em nosso blog</p>
                <input className='inputblog' type="text" placeholder="Digite seu e-mail"/>
                <button className='btnblog'>Inscrever</button>
                <button className='btnblog2'>Acesse o blog</button>
            </div>



        </div>

    )

}


export default SobreNos;