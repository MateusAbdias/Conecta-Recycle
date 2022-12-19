import "./informarEvento.css"
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
  evento: yup.string().required("O tipo é obrigatório*"),
  data: yup.string().required("A data é obrigatória*"),
  endereco: yup.string().required("O endereço é obrigatório*"),
  email: yup.string().required("O e-mail é obrigatório*"),
  whatsapp: yup.string().required("O Whatsapp é obrigatório*"),
  descricao: yup.string().required("A descrição é obrigatória*")



})

function InformarEvento() {

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
            <img src={Menubento} />
            </button>

        </div>
        <span className="logo"> <img src={Logo} alt="logo" className="imgie" /></span>

      </div>

      <main className="conteiner-main">
        <div className="titulo-form">
          <button className="btn-arrow">
            < BsArrowLeft className="icon-arrow" />
          </button>
          <h2 className="titulo-validar">Informe um evento </h2>
        </div>

        <form className="formulario-valid" onSubmit={handleSubmit(addDados)}>


          <div className="form-grup1-1">
            <div className="div-inp">
              <label >
                TIPO DE EVENTO
              </label>
              <input
                type="text"
                placeholder="Digite o tipo de evento"
                name="evento" {...register("evento")}
              />
              <p className="errors-mensagem">{errors.evento?.message}</p>
            </div>

            <div className="div-inp">
              <label>
                DATA DE REALIZAÇÃO
              </label>
              <input
                type="text"
                placeholder="Informe o periodo que acontecerá"
                name="data" {...register("data")}
              />
              <p className="errors-mensagem">{errors.data?.message}</p>
            </div>
          </div>


          <div className="div-inp">
            <label>
              LOCAL ONDE ACONTECERÁ O EVENTO
            </label>
            <input
              type="text"
              placeholder="Digite o endereço do evento"
              name="endereco" {...register("endereco")}
            />
            <p className="errors-mensagem">{errors.endereco?.message}</p>
          </div>

          <div className="form-grup2-2">
            <div className="div-inp">
              <label>
                EMAIL DO ORGANIZADOR
              </label>
              <input
                type="text"
                placeholder="Digite o e-mail do organizador"
                name="email" {...register("email")}
              />
              <p className="errors-mensagem">{errors.email?.message}</p>
            </div>


            <div className="div-inp">
              <label>
                WHATSAPP DO ORGANIZADOR
              </label>
              <input
                type="text"
                placeholder="Digite o whatsapp do organizador"
                name="whatsapp" {...register("whatsapp")}
              />
              <p className="errors-mensagem">{errors.whatsapp?.message}</p>
            </div>
          </div>


          <div className="div-inp">
            <label>
              DESCRIÇÃO DO EVENTO
            </label>
            <input
              type="text"
              name="descricao" {...register("descricao")}
            />
            <p className="errors-mensagem">{errors.descricao?.message}</p>
          </div>


          <div className="div-btn">
            <button type="submit" className="btn-validar">FINALIZAR</button>
          </div>

        </form>
      </main>


    </div>
  )
}

export default InformarEvento