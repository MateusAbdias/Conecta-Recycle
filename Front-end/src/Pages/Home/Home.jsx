import React from "react";
<<<<<<< HEAD:Front-end/src/components/pages/home/Home.jsx
import "./home.css";
import { useState, useEffect, useRef } from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FiInstagram } from 'react-icons/Fi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { motion } from 'framer-motion';
=======
import "./home.css"
>>>>>>> 37bd1cad9309b0cf51efde7f72794423153441e5:Front-end/src/Pages/Home/Home.jsx

const Home = () => {
    /* Aplicando efeitos nas imagens iniciais da homepage */
    const carrossel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carrossel.current?.scrollWidth, carrossel.ofsetWidth)
        setWidth(carrossel.current?.scrollWidth - carrossel.ofsetWidth)
    }, [])

    return (
        <div className="home">
            <motion.div ref={carrossel} className="carrossel" whileTap={{ cursor: "grabbing" }}>
                <motion.div className="slides"
                    drag="x"
                    dragConstraints={{}}>

                    <img className="scrollimg"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/26db4198-1f4c-4110-bd3f-6a5e036e28e7.png?raw=true"
                        alt="Os pilares da Conecta Recycle">
                    </img>
                    <img className="scrollimg"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/3fa9718b-57ce-48cf-a76f-b3584b2f1e6a.png?raw=true"
                        alt="Os pilares da Conecta Recycle">
                    </img>
                    <img className="scrollimg"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/38d2c7f0-148d-415e-911c-7ab8b9294544.png?raw=true"
                        alt="Os pilares da Conecta Recycle">
                    </img>
                </motion.div>
            </motion.div>
            <h2 className="title"> Solução para os<br></br> lixos eletrônicos<br></br> na Grande Recife!</h2>
            <button className="acesso">
                <font color="#01113d"> Acesse a nossa plataforma </font>
            </button>
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/Yg-cPYYn9F0" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            <div>

                <a href="https://www.linkedin.com/in/conecta-recycle-3a5390256/">
                    <p className="linkedin">
                        <CiLinkedin className="iconlinkedin" />
                        <font color="#01113d"> Conecta Recycle </font></p></a>

                <a href="https://www.youtube.com/channel/UCEK9tTRNCrHGKAhUngffXkA">
                    <p className="youtube">
                        <AiOutlineYoutube className="iconyoutube" />
                        <font color="#01113d"> Conecta Recycle </font></p></a>

                <a href="https://www.instagram.com/conectarecycle/">
                    <p className="instagram">
                        <FiInstagram className="iconinstagram" />
                        <font color="#01113d"> @conectarecycle </font></p></a>

            </div>

            <div className="comofunciona">
                <h1> Como a Conecta Recycle funciona? </h1>
            </div>

            <div className="conteiner">
                <div className="primeiropasso">
                    <p> Primeiro passo: </p>
                    <br></br>
                    <h3> Cadastre-se na plataforma </h3>
                </div>
                    <img className="passo" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/a5680015-03bb-4c4f-8b8d-209a581cbd61.png?raw=true">
                    </img>
                <div className="segundopasso">
                    <p> Segundo passo: </p>
                    <br></br>
                    <h3>Conheça nossas PEVs</h3>
                </div>
                    <img className="passo2" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/a5680015-03bb-4c4f-8b8d-209a581cbd61.png?raw=true">
                        </img>
                <div className="terceiropasso">
                    <p> Terceiro passo: </p>
                    <br></br>
                    <h3>Descarte seu eletrônico e ganhe benefícios</h3>
                </div>
                <img className="passo3" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/a5680015-03bb-4c4f-8b8d-209a581cbd61.png?raw=true">
                    </img>
                <div className="quartopasso">
                    <p> Quarto passo: </p>
                    <br></br>
                    <h3>Compartilhe com seus amigos</h3>
                </div>
                <div>
                    <button className="btncadastro">
                        <font color="#01113d"> Cadastre-se </font>
                    </button>
                </div>

                <div>
                    <img className="logistica"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/1463c70e-8fa9-442e-8761-5e91b8bedeb9.png?raw=true"
                        alt="Logística Reversa">
                    </img>
                </div>
                   
                <div className="comodescartar">
                    <h2 className="topico">Saiba como descartar seus resíduos eletrônicos </h2>
                    <p className="descarte"> Que objeto você vai descartar? </p>
                    <select className="option" required>
                        <option value="Selecione"> Selecione um objeto </option>
                        <option value="pilhas"> Pilhas </option>
                        <option value="celular"> Celular </option>
                    </select>

                    <p className="condição"> Em qual condição está esse material? </p>
                    <select className="opçõescondição" required>
                        <option value="Selecione"> Selecione a condição atual do objeto </option>
                        <option value="Pouco" > Pouco danificado </option>
                        <option value="Muito" > Muito danificado </option>
                    </select>

                    <p className="cepdescrition">Insira seu CEP:</p>
                    <input className="cep" type="number" placeholder="_____-__"></input>

                    <p className="email"> Insira o seu email</p>
                    <input className="email" type="email" placeholder="Digite seu email"></input>

                    <input type="checkbox" className="check"></input>
                    <p className="confirmaremail"> Concorda em receber informações pelo email? </p>

                    <button className="btn"> Saber como descartar </button>
                </div>
                <div>
                    <img className="curiosidades" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/db19baf8-aa83-416a-a7f9-2dcb654cc90d.png?raw=true"
                        alt="curiosidades o avanço do lixo no Brasil">
                    </img>
                    <img className="curiosidades" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/0216dd22-e7b0-4375-a22e-2b5a86fe62cc.png?raw=true"
                        alt="curiosidades sobre pilhas">
                    </img>
                    <img className="curiosidades" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/9756bfb0-0078-4783-907d-be1031b921b2.png?raw=true"
                        alt="curiosidades sobre o lixo eletrônico">
                    </img>
                </div>
                <div>
                    <img className="plataforma" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/3d2d3f23-0853-4245-91e0-62501dbfd44f.png?raw=true"
                        alt="sobre a plataforma">
                    </img>
                </div>
                <div>
                    <button className="entrar"> <font color="#01113d"> Acessar a nossa plataforma </font></button>
                </div>
                <div className="usuários">
                    <h1><font color="#F15701"> Para quem a Conecta Recycle é feita? </font></h1>
                    <p className="paraquem"><font color="#ffffff"> A plataforma Conecta Recycle é feita para três tipos de usuários:</font> </p>
                    <div>
                        <div className="voce">
                            <h4> Para você </h4>
                            <p> Que quer realizar o descarte consciente de seus eletrônicos. </p>
                        </div>
                        <div className="estabelecimentos">
                            <h4> Para estabelecimentos </h4>
                            <p> Que desejam ser um dos nossos pontos de coleta.</p>
                        </div>
                        <div className="empresas">
                            <h4> Para empresas </h4>
                            <p> Que trabalham com o reaproveitamento e reciclagem de eletrônicos.</p>
                        </div>
                        <div className="botton">
                            <button className="btnbeneficios"> Veja os benefícios </button>
                            <button className="btnfaleconosco"><font color="#F15701"> Fale Conosco </font></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog"> 
                <h1> Conheça nosso blog</h1>
                    <p> A Conecta Recycle possui um blog com informações a respeito de<br></br>
                    tecnologia, reciclagem e meio ambiente. Prezamos sempre pela<br></br> 
                    veracidade dos dados e trazemos novidades dessas áreas para você.</p>
                <img className="iconrapido" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/blog/1903ba26-ba7c-4cf2-9abb-17a64032302a.png?raw=true"
                    alt="velocidade de entrega">
                </img>
                <img className="iconseguro" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/blog/5232c423-283e-4ae6-994d-250a10211cf8.png?raw=true"
                    alt="segurança para você">
                </img>
                <img className="iconemail" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/blog/1ba91849-d67a-4cf3-8f35-2d76c9dde891.png?raw=true"
                    alt="mensagens no seu email">
                </img>
                <img className="icongratuito" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/blog/a01bf02a-5288-4262-80de-9debf35d64ff.png?raw=true"
                    alt="gratuidade">
                </img>
                <h2> Se inscreva agora no nosso blog </h2>
                    <input className="inputemail" type="email" placeholder="Digite seu email para receber notícias"></input>
                <button><font color="#ffffff"> INSCREVER-SE </font></button>
                <input className="checkemail" type="email"></input>
                <p className="termo"> Concordo em receber atualizações em meu email.</p>
            </div>

            <div> 
                <h1 className="topicocomentarios"> Comentários dos nossos clientes </h1>
                <img className="comentarios" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/home/71adc65e-16a7-45a9-abe5-a1a17e00585e.png?raw=true" 
                    alt="Comentários dos nossos clientes">
                </img>
                <h3 className="final"> E você, está esperando o que? Se conecte hoje! </h3>
                    <p className="subfinal">Não perca mais tempo, cadastre-se hoje na Conecta Recycle. </p>
                        <button className="cadastrarnosite"><font color="#01113d">CADASTRAR-SE </font></button>
                        <button className="classcontato"><font color="#01113d"> Fale conosco </font></button>
            </div>
        </div>

    )
}

export default Home