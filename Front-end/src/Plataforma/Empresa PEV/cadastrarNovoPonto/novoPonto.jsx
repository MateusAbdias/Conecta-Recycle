import "./novoPonto.css"
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import Logo from "../../../assets/images/logo.png"
import Menubento from "../../../assets/images/menubento.png"
import { useForm } from 'react-hook-form'

//yup validação
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//valida cada campo do input
const validacao = yup.object({
  cep: yup.string().required("O CEP é obrigatório*"),
  cnpj: yup.string().required("O CNPJ é obrigatório*"),
  endereco: yup.string().required("O endereço é obrigatório*"),
  email: yup.string().required("O e-mail é obrigatório*"),
  whatsapp: yup.string().required("O Whatsapp é obrigatório*"),
  senha: yup.string().required("A senha é obrigatória*")



})

function NovoPonto() {

  // importando= do react hook form
  //register= avisa qual input do formulario vai ser registrado/receber um valor
  //handleSubmit= lida com o envio das informações que estão no input
  //erros= validação de erro no input
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validacao)
  })


  //chama a função do onSubmit, pega todas as informações dos inputs e adiciona no console 
  const addDados = datas => console.log(datas)


  return (
    <div className='tela'>

      <div className="header" >
        <div className="menu-bento">
          <button className='menu-bento-b'>
            <img src={Menubento}  />
            </button>

        </div>
        <span className="logo"> <img src={Logo} alt="logo" className="imgnp" /></span>

      </div>

      <main className="conteiner-main">
        <div className="titulo-form">
          <button className="btn-arrow">
            < BsArrowLeft className="icon-arrow" />
          </button>
          <h2 className="titulo-validar">Cadastrar um novo ponto de coleta </h2>
        </div>

        <form className="formulario-valid" onSubmit={handleSubmit(addDados)}>


          <div className="form-grup1-1">
            <div className="div-inp">
              <label >
                CEP
              </label>
              <input
                type="text"
                placeholder="Digite o CEP do novo ponto"
                name="cep" {...register("cep")}
              />
              <p className="errors-mensagem">{errors.cep?.message}</p>
            </div>

            <div className="div-inp">
              <label>
                CNPJ
              </label>
              <input
                type="text"
                placeholder="Confirme seu CNPJ"
                name="cnpj" {...register("cnpj")}
              />
              <p className="errors-mensagem">{errors.cnpj?.message}</p>
            </div>
          </div>


          <div className="div-inp">
            <label>
              ENDEREÇO
            </label>
            <input
              type="text"
              placeholder="Digite o endereço do novo ponto"
              name="endereco" {...register("endereco")}
            />
            <p className="errors-mensagem">{errors.endereco?.message}</p>
          </div>

          <div className="form-grup2-2">
            <div className="div-inp">
              <label>
                EMAIL
              </label>
              <input
                type="text"
                placeholder="Digite o e-mail do novo ponto"
                name="email" {...register("email")}
              />
              <p className="errors-mensagem">{errors.email?.message}</p>
            </div>


            <div className="div-inp">
              <label>
                WHATSAPP
              </label>
              <input
                type="text"
                placeholder="Digite o whatsapp empresarial"
                name="whatsapp" {...register("whatsapp")}
              />
              <p className="errors-mensagem">{errors.whatsapp?.message}</p>
            </div>
          </div>


          <div className="div-inp">
            <label>
              CONFIRME A SUA SENHA
            </label>
            <input
              type="password"
              name="senha" {...register("senha")}
            />
            <p className="errors-mensagem">{errors.senha?.message}</p>
          </div>


          <div className="div-btn">
            <button type="submit" className="btn-validar">CADASTRAR</button>
          </div>

        </form>
      </main>


    </div>
  )
}

export default NovoPonto