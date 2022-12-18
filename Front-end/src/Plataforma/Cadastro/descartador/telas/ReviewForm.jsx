import React from "react";


const ReviewForm = ({cadastro, handleChange}) => {
  return (
    <div className="conteiner-useForm">

      <div className='form-control-um'>
        <div className="form-control">
          <label htmlFor="cpf">
            CPF
          </label>

          <input
            type="text"
            name="cpf"
            id="cpf"
            placeholder="Digite o seu cpf"
            value={cadastro.cpf}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="data-nasc">
            DATA DE NASCIMENTO
          </label>

          <input
            type="date"
            name="dataNasc"
            id="data-nasc"
            placeholder="Digite a sua data de nascimento"
            value={cadastro.dataNasc}
            onChange={handleChange}
            required
          />
        </div>

      </div>

      <div className='form-control-dois'>
        <div id = "cep1" className="form-control">
          <label htmlFor="cep">
            CEP
          </label>

          <input
            type="text"
            name="cep"
            id="cep"
            placeholder="Digite o seu cep"
            value={cadastro.cep}
            onChange={handleChange}
            required
          />
        </div>
        <div id="telefone1" className="form-control">
          <label htmlFor="telefone">
            TELEFONE
          </label>

          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Digite o telefone"
            value={cadastro.telefone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="termos">
        <div className="msg-email">
          <input
            type="checkbox"
            name="recebEmail"
            id="receb-email"
          />

          <label htmlFor='receb-email' className="label-termos ">
            Concordo em receber informações pelo e-mail?
          </label>
        
        </div>
        
        <div className="termos-privacidade" >
          <input
            type="checkbox"
            name="privacidade"
            id="termos-priv"
          />

          <label htmlFor="termos-priv"  className="label-termos">
            Concordo com os <a href="/" className="link-termos"> termos de serviços </a> e políticas de <a href="/" className="link-privacidade" > privacidade.</a>
          </label>
        </div>
      </div>
    </div>

  )
}
export default ReviewForm