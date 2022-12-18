
import { Link } from 'react-router-dom';
import './styles/cadastroUsuario.css';

//icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { TbLetterX } from 'react-icons/tb';
import { RxAccessibility } from 'react-icons/rx';

//Telas
import UserForm from './telas/UserForm';
import ReviewForm from './telas/ReviewForm';

//Hooks
import { useForm } from './hooks/useForm';
import {useState, useEffect} from 'react';

//Axios
import axios from 'axios';



const CadastroUsuario = () => {
    
    //const add objetos do inp
    const [cadastro, setCadastro] = useState({
        nome:'',
        sobrenome:'',
        email:'',
        senha:'',
        cpf:'',
        dataNasc:'',
        cep:'',
        telefone:'',
    });

    //recebe o evento de modificação no campo input
    function handleChange(event){
        setCadastro({...cadastro,[event.target.name]:event.target.value})
    }

    //
    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8080/usuario", cadastro).then(()=>{
            console.log("deu tudo certo")
        })    
        .catch(()=>{
            console.log('deu tudo errado')
        });
        
    }
   
    
   //cont com as telas
    const formTelas = [
    <UserForm cadastro={cadastro}  handleChange={handleChange}/>,
     <ReviewForm cadastro={cadastro} handleChange={handleChange}/>,
      ];

    const { atualPasso, atualTela, alterarPasso, ultimoPasso, primeiroPasso  } = useForm(formTelas)

    return (
        <div className='telaCadastro'>
            <div className='banner-cadastro' >
                <h1 className='txt-banner'>Cadastro</h1>
                <span >
                <IoIosArrowDroprightCircle className='icon-seta' />
                </span>
            </div>

            <div className='main'>
                <div className='titulo'>
                    <h1 >Cadastre-se na Plataforma Coneta Recycle</h1>
                    <p>Quero descartar um material</p>
                </div>


                <div className='form-container'>
                    
                    <form onSubmit={handleSubmit}>
                        <div className='inputs-container'>
                            {atualTela}
                        </div>
                        
                        <div className='botoes-acoes'>
                            {primeiroPasso && (
                            <button type='button' onClick={(e) => alterarPasso(atualPasso + 1, e)}>
                                Continuar
                            </button>) }
                            
                            {/*condicional. Se for o ultimo passo, mostra o botão cadastrar*/}
                            {ultimoPasso && (<button type='submit'>Cadastrar</button>)}

                        </div>
                    </form>

                </div>



                <div className='link-loguin'>
                    <p>Ja possui uma conta?</p>
                    <a href='/'>ENTRE AGORA</a>
                </div>
            
            </div>

            <div className='icons'>
                <button className='botao-sair'><TbLetterX id='x' />
                </button>

                <button className='botao-acess'><RxAccessibility id='bt-acc'/></button>


            </div>



        </div>
    )
}
export default CadastroUsuario