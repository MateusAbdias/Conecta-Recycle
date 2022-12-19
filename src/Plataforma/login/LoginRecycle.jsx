import google from "../../Pages/imgs/google.png"
import imgfacebookk from "../../Pages/imgs/facebook.png"
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import './LoginStyle.css'
import { Link } from "react-router-dom";

export default function LoginRecycle() {
  return (


      <div className="RecycleLogin">
      <div className="paredeverde">
      <h2 className="TituloLogin">Login</h2>
      <IoIosArrowDroprightCircle className='IconLogin' color='' />        
      </div>



      <div className="LoginContainer">

        <h2 className='TLogin'>Entrar na plataforma Conecta</h2>
        <h1 className='UsuarioLogin'>USUÁRIO</h1>
        <h1 className='SenhaLogin'>SENHA</h1>




      </div>

      <input placeholder='Digite o seu e-mail' className='InputLogin' />
      <input placeholder='Digite a sua senha' className='InputSenha' />
      <a href='#' className='LinkSenha'>Esqueci minha senha</a>
      <Link to="/"><p className='LinkSair'>x</p></Link>
      <button type='submit' className='BotãoEntrada'>ENTRAR</button>
      <p className='AlternativaLogin'>Ou cadastre-se pelo Facebook ou pela conta Google</p>
      <Link to="/cadastro"><p className='CadastroLink02'><b>CADASTRE-SE AGORA</b></p></Link>
      <a href='#'><img src= {imgfacebookk} className='iconedofacebookk'/></a>
      <a href='#'><img src={google} className='iconedogmail'/></a>
    </div>

  )


}