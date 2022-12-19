import './Footer.css';
import ImagemLogo from"./imagens/ImagemLogo.png"


import{TfiEmail} from'react-icons/tfi'
import{BsInstagram} from'react-icons/bs'
import{AiOutlineLinkedin} from'react-icons/ai'
import{AiOutlineGithub} from'react-icons/ai'
import{RiCodeView} from 'react-icons/ri'


function FooterPeca() {

    return(
        <div className = 'FooterStyle'>
          <h1 className ="TFooter01">Mapa do Site</h1>
          <h1 className="TFooter02">Contato</h1>
          <h1 className='TFooter03'>Blog</h1>
          <a href="#" className= "LinkFooter01">Home</a>
          <a href="#" className= "LinkFooter02">Nosso Blog</a>
          <a href="#" className= "LinkFooter03">Quem Somos</a>
          <a href="#" className= "LinkFooter04">Parcerias</a>
          <a href="#" className= "LinkFooter05">Fale conosco</a>
          <TfiEmail className='IconeEmailFooter'/> 
          <BsInstagram className='IconeInstaFooter'/>
          <AiOutlineLinkedin className='IconeLinkedFooter'/>
          <AiOutlineGithub className='IconeGitFooter'/>
          <RiCodeView className='IconeDevFooter'/>
          <a href='#' className='LinkFooter06'>conectarecycle@gmail.com</a>
          <a href='#' className='LinkFooter07'>Conecta Recycle</a>
          <a href='#' className='LinkFooter08'>Conecta Recycle</a>
          <a href='#' className='LinkFooter09'>ConectaRecycle</a>
          <a href='#' className='LinkFooter10'>Desenvolvedores</a>
          <p className='TFooter04'>Se inscreva agora no nosso Blog</p>
          <input type="text" placeholder='Digite seu e-mail' className='InputFooter'></input>
          <button type='submit' className='BotãoFooter01'>INSCREVER</button>
          <button href="#" className='BotãoFooter02'>ACESSE O BLOG</button>
          <img src={ImagemLogo} className="ImagemFooter"/>
          
          
        </div>
    )
}

export default FooterPeca