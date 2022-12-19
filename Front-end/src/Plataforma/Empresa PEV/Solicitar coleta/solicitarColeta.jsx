import "./solicitarColeta.css"
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
    dataUltima: yup.string().required("A data é obrigatória*"),  
    codigoPev: yup.string().required("O código é obrigatório*"),
    dataDisp: yup.string().required("A data é obrigatória*"),
    senha: yup.string().required("A senha é obrigatória*"),
    

})

function SolicitarColeta() {

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
                        <img src={Menubento} className="imgsc" /></button>

                </div>
                <span className="logo"> <img src={Logo} alt="logo" className="imgsc" /></span>

            </div>

            <main className="conteiner-main">
                <div className="titulo-form">
                    <button className="btn-arrow">
                        < BsArrowLeft className="icon-arrow" />
                    </button>
                    <h2 className="titulo-validar">Solicitar coleta</h2>
                </div>

                <form className="formulario-valid" onSubmit={handleSubmit(addDados)}>

                    <div className="form-grup-1-2">
                        <div className="form-grup1">
                            <div className="div-inp">
                                <label >
                                    CEP
                                </label>
                                <input
                                    type="text"
                                    placeholder="Digite o cep do seu PEV"
                                    name="cep" {...register("cep")}
                                />                                
                                <p className="errors-mensagem">{errors.cep?.message}</p>
                            </div>

                            <div className="div-inp">
                                <label>
                                   DATA DA ULTIMA COLETA 
                                </label>
                                <input
                                    type="date"
                                    name="dataUltima" {...register("dataUltima")}
                                />
                                <p className="errors-mensagem">{errors.dataUltima?.message}</p>
                            </div>
                        </div>


                        <div className="form-grup2">
                            <div className="div-inp">
                                <label>
                                    CÓDIGO DA PEV
                                </label>
                                <input
                                    type="text"
                                    placeholder="Digite o código do PEV"
                                    name="codigoPev" {...register("codigoPev")}
                                />
                                <p className="errors-mensagem">{errors.codigoPev?.message}</p>
                            </div>
                            <div className="div-inp">
                                <label>
                                    DATA DISPONÍVEL PARA COLETA
                                </label>
                                <input
                                    type="date"
                                    name="dataDisp" {...register("dataDisp")}
                                />
                                <p className="errors-mensagem">{errors.dataDisp?.message}</p>
                            </div>
                        </div>
                    </div>

                    <div className="form-grup3">
                        <div className="div-inp">
                            <label>
                              OBSERVAÇÃO
                            </label>
                            <input
                                type="text"
                                placeholder="Informe se tiver alguma observação a ser feita"
                                name="observacao" {...register("observacao")}
                            />
                            
                        </div>

                        <div className="div-inp">
                            <label>
                                CONFIRME SUA SENHA
                            </label>
                            <input
                                type="password"
                                name="senha" {...register("senha")}
                            />
                            <p className="errors-mensagem">{errors.senha?.message}</p>
                        </div>
                    </div>

                    <div className="div-btn">
                        <button type="submit" className="btn-validar">SOLICITAR</button>
                    </div>

                </form>
            </main>


        </div>
    )
}

export default SolicitarColeta