import google from "../imagens/google.png"
import imgfacebookk from '../imagens/facebook.png'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import './LoginStyle.css'

export default function LoginRecycle() {
  return (


      <div className="RecycleLogin">
      <h2 className="TituloLogin">Login</h2>
      <IoIosArrowDroprightCircle className='IconLogin' color='' />


      <div className="LoginContainer">

        <h2 className='TLogin'>Entrar na plataforma Conecta</h2>
        <h1 className='UsuarioLogin'>USUÁRIO</h1>
        <h1 className='SenhaLogin'>SENHA</h1>




      </div>

      <input placeholder='Digite o seu e-mail' className='InputLogin' />
      <input placeholder='Digite a sua senha' className='InputSenha' />
      <a href='#' className='LinkSenha'>Esqueci minha senha</a>
      <a href='#' className='LinkSair'>x</a>
      <button type='submit' className='BotãoEntrada'>ENTRAR</button>
      <p className='AlternativaLogin'>Ou cadastre-se pelo Facebook ou pela conta Google</p>
      <p className='NaoPossuiConta01'>Não possui uma conta?</p>
      <a href='#' className='CadastroLink02'><b>CADASTRE-SE AGORA</b></a>
      <a href='#'><img src= {imgfacebookk} className='iconedofacebookk'/></a>
      <a href='#'><img src={google} className='iconedogmail'/></a>
    </div>

  )


}