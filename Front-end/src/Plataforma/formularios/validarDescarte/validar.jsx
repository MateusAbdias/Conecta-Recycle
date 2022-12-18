import "./validar.css"
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
    data: yup.string().required("A data é obrigatória*"),
    local: yup.string().required("O local é obrigatório*"),
    hora: yup.string().required("A hora é obrigatória*"),
    senha: yup.string().required("A senha é obrigatória*"),
    codigo: yup.string().required("O código é obrigatório*"),
    

})

function ValidacaoDescarte() {

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
                        <img src={Menubento} /></button>

                </div>
                <span className="logo"> <img src={Logo} alt="logo" className="imgvd" /></span>

            </div>

            <main className="conteiner-main">
                <div className="titulo-form">
                    <button className="btn-arrow">
                        < BsArrowLeft className="icon-arrow" />
                    </button>
                    <h2 className="titulo-validar">Validar descarte</h2>
                </div>

                <form className="formulario-valid" onSubmit={handleSubmit(addDados)}>

                    <div className="form-grup-1-2">
                        <div className="form-grup1">
                            <div className="div-inp">
                                <label >
                                    DATA DO DESCARTE
                                </label>
                                <input
                                    type="date"
                                    name="data" {...register("data")}
                                />
                                <p className="errors-mensagem">{errors.data?.message}</p>
                            </div>

                            <div className="div-inp">
                                <label>
                                    LOCAL DE DESCARTE
                                </label>
                                <input
                                    type="text"
                                    name="local" {...register("local")}
                                />
                                <p className="errors-mensagem">{errors.local?.message}</p>
                            </div>
                        </div>


                        <div className="form-grup2">
                            <div className="div-inp">
                                <label>
                                    HORA DO DESCARTE
                                </label>
                                <input
                                    type="time"
                                    name="hora" {...register("hora")}
                                />
                                <p className="errors-mensagem">{errors.hora?.message}</p>
                            </div>
                            <div className="div-inp">
                                <label>
                                    SENHA
                                </label>
                                <input
                                    type="password"
                                    name="senha" {...register("senha")}
                                />
                                <p className="errors-mensagem">{errors.senha?.message}</p>
                            </div>
                        </div>
                    </div>

                    <div className="form-grup3">
                        <div className="div-inp">
                            <label>
                                CÓDIGO DO DESCARTADOR
                            </label>
                            <input
                                type="text"
                                name="codigo" {...register("codigo")}
                            />
                            <p className="errors-mensagem">{errors.codigo?.message}</p>
                        </div>

                        <div className="div-inp">
                            <label>
                                OBSERVAÇÕES
                            </label>
                            <input
                                type="text"
                                name="observacao" {...register("observacao")}
                            />
                            <p className="errors-mensagem">{errors.observacao?.message}</p>
                        </div>
                    </div>

                    <div className="div-btn">
                        <button type="submit" className="btn-validar">VALIDAR</button>
                    </div>

                </form>
            </main>


        </div>
    )
}

export default ValidacaoDescarte