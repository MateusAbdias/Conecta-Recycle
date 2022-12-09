import './CadastroUsuarioTelaUm.css'
import { ImFacebook2 } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc';
import { RxAccessibility } from 'react-icons/rx'

export default function CadastroUsuarioTelaUm() {
    return (

        <div className='conteiner-tela-cadastroUm'>

            <div className="banner-cadastroUm">
                <p className='paragrado-cadastro'>Cadastro</p>
            </div>

            <main className='conteiner-main'>

                <div className="titulo-cadastro-usuarioUm">
                    <h1>Cadastre-se na Plataforma Conecta Recycle</h1>
                    <p>Quero ser um Usuário</p>
                </div>

                <div className='div-input'>
                    <form className="conteiner-inputs-cadastro-usuario-telaUm">

                        <div className='input-nome-sobrenome'>

                            <div className='input-nome'>
                                <label htmlFor="nome">NOME</label>
                                <input type="text" placeholder="Digite o seu nome"  id='nome'/>
                            </div>

                            <div className='input-sobrenome'>
                                <label htmlFor="sobrenome">SOBRENOME</label>
                                <input type="text" placeholder="Digite o seu Sobrenome" id="sobrenome" />
                            </div>

                        </div>

                        <div className='input-email'>
                            <label className='label-email' htmlFor="email">E-MAIL</label>
                            <input id='email' type="email" placeholder="Digite o seu e-mail" />
                        </div>

                        <div className='input-senha'>
                            <label htmlFor="senha">SENHA</label>
                            <input type="password" placeholder="Digite sua senha" id='senha' />
                        </div>

                        <input id='botao-continuar-tl-cadastroUm' type="submit" value="CONTINUAR" />


                    </form>
                </div>

                <div className="conteiner-cadastro-app">
                    <p>Ou cadastre-se pelo Facebook ou pela conta Google</p>
                    <span className='span-icon'>

                        <a href='/'><ImFacebook2 className='icon-facebook' /></a>
                        <a href='/'> <FcGoogle className='icon-google' /></a>

                    </span>
                    <p>Já possui uma conta? <a href='/'>ENTRE AGORA</a> </p>
                </div>

            </main>

            <div className='icones-tl-cadastroUm'>

                <button className='icone-acessibilidade-tl-cadastroUm' > <RxAccessibility /> </button>


                <div> <a href='#' className='LinkSair-tl-cadastroUM'>x</a></div>

            </div>

        </div>

    )
}