import React from "react";

const UserForm = ({dados, updadeFieldHandler}) => {
  return (
    <div className="conteiner-useFormec">

      <div className='form-control-umec'>
        <div className="form-controlec">
          <label htmlFor="razaoSocialec">
            RAZÃO SOCIAL
          </label>

          <input
            type="text"
            name="razaoSocial"
            id="razaosocialec"
            placeholder="Digite a razão social da sua empresa"
            required
            value={dados.razaoSocial || "" }
            onChange={(e) => updadeFieldHandler("razaoSocial", e.target.value) }
          />
        </div>

        <div className="form-controlec">
          <label htmlFor="cepec">
            CEP 
          </label>

          <input
            type="text"
            name="cep"
            id="cepec"
            placeholder="Digite o seu CEP"
            required
          />
        </div>
        <div className="form-controlec">
          <label htmlFor="cnpjec">
            CNPJ 
          </label>

          <input
            type="text"
            name="cnpj"
            id="cnpjec"
            placeholder="Digite o seu CNPJ"
            required
          />
        </div>

      </div>
      
      <div className='form-control-doisec'>
        <div className="form-controlec">
          <label htmlFor="razaoJuridicaec">
            RAZÃO JURÍDICA 
          </label>

          <input
            type="text"
            name="razaoJuridica"
            id="razaojuridicaec"
            placeholder="Digite a razão jurídica da sua empresa"
            required
          />
        </div>
        <div className="form-controlec">
          <label htmlFor="complementoec">
            COMPLEMENTO 
          </label>

          <input
            type="text"
            name="complemento"
            id="complementoec"
            placeholder="Digite o complemento da usa localização"
            required
          />
        </div>
        <div className="form-controlec">
          <label htmlFor="cnaeec">
            CNAE
          </label>

          <input
            type="text"
            name="cnae"
            id="cnaeec"
            placeholder="Digite o seu CNAE"
            required
          />
        </div>
      </div>

      <div className="form-emailec">
        <label htmlFor="emailec">
          E-MAIL
        </label>

        <input
          type="email"
          name="email"
          id="emailec"
          placeholder="Digite o seu e-mail"
          required
        />
      </div>
    </div>

  )
}
export default UserForm