import './CadastroUsuarioTelaDois.css'
import { RxAccessibility } from 'react-icons/rx'

export default function CadastroUsuarioTelaDois() {
    return (

        <div className='conteiner-tela-cadastroDois'>

            <div className="banner-cadastroDois">
                <p className='paragrado-cadastro'>Cadastro</p>
            </div>

            <main className='conteiner-main'>

                <div className="titulo-cadastro-usuarioDois">
                    <h1>Cadastre-se na Plataforma Conecta Recycle</h1>
                    <p>Quero ser um Usuário</p>
                </div>

                <div className='div-input'>
                    <form className="conteiner-inputs-cadastro-usuario-telaDois">

                        <div className='input-nome-sobrenome'>

                            <div className='input-nome'>
                                <label htmlFor="CPF">CPF</label>
                                <input type="text" placeholder="Digite o seu CPF"  id='nome'/>
                            </div>

                            <div className='input-sobrenome'>
                                <label htmlFor="sobrenome">DATA DE NASCIMENTO</label>
                                <input type="text" placeholder="Digite o seu CEP" id="sobrenome" />
                            </div>

                        </div>

                        <div className='input-email'>
                            <label className='label-email' htmlFor="email">CEP</label>
                            <input id='email' type="email" placeholder="Digite o seu e-mail" />
                        </div>

                        <div className='input-senha'>
                            <label htmlFor="senha">TELEFONE</label>
                            <input type="password" placeholder="Digite sua senha" id='senha' />
                        </div>

                        <div className='notificacao-email'>
                            <input className='checkbox' type="checkbox" name='notificacao-email' value='notificacao-email' />
                            <label id='notificacao-email'>Concordo em receber informações pelo e-mail</label>
                        </div>

                        <div className='politica-privacidade'>
                            <input className='checkbox' type="checkbox" name='politica-privacidade' value='politica-privacidade' />
                            <label id='politica-privacidade'>Concordo com os <a href='/' className='termo-servico'>termos de serviços</a> e políticas de <a href='https://docs.google.com/document/d/16DxER9vOppLZ2zObH-awW6v6Bz0PIVZc0givrhT3MJM/edit?usp=sharing'  target="_blank" className='privacidade'>privacidade</a></label>
                        </div>

                        <input id='botao-continuar-tl-cadastroDois' type="submit" value="CADASTRAR" />


                    </form>
                </div>

                <div className="conteiner-cadastro-app">
                    
                    <p>Já possui uma conta? <a href='/'>ENTRE AGORA</a> </p>
                </div>

            </main>

            <div className='icones-tl-cadastroDois'>

                <button className='icone-acessibilidade-tl-cadastroDois' > <RxAccessibility /> </button>


                <div> <a href='#' className='LinkSair-tl-cadastroDois'>x</a></div>

            </div>

        </div>

    )
}