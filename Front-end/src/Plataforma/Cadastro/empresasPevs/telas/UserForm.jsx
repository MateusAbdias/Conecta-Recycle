import React from "react";

const UserForm = ({dados, updadeFieldHandler}) => {
  return (
    <div className="conteiner-useFormpv">

      <div className='form-control-umpv'>
        <div className="form-controlpv">
          <label htmlFor="razaoSocialpv">
            RAZÃO SOCIAL
          </label>

          <input
            type="text"
            name="razaoSocial"
            id="razaosocialpv"
            placeholder="Digite a razão social da sua empresa"
            required
            value={dados.razaoSocial || "" }
            onChange={(e) => updadeFieldHandler("razaoSocial", e.target.value) }
          />
        </div>

        <div className="form-controlpv">
          <label htmlFor="ceppv">
            CEP 
          </label>

          <input
            type="text"
            name="cep"
            id="ceppv"
            placeholder="Digite o seu CEP"
            required
          />
        </div>
        <div className="form-controlpv">
          <label htmlFor="cnpjpv">
            CNPJ 
          </label>

          <input
            type="text"
            name="cnpj"
            id="cnpjpv"
            placeholder="Digite o seu CNPJ"
            required
          />
        </div>

      </div>
      
      <div className='form-control-doispv'>
        <div className="form-controlpv">
          <label htmlFor="razaoJuridicapv">
            RAZÃO JURÍDICA 
          </label>

          <input
            type="text"
            name="razaoJuridica"
            id="razaojuridicapv"
            placeholder="Digite a razão jurídica da sua empresa"
            required
          />
        </div>
        <div className="form-controlpv">
          <label htmlFor="complementopv">
            COMPLEMENTO 
          </label>

          <input
            type="text"
            name="complemento"
            id="complementopv"
            placeholder="Digite o complemento da usa localização"
            required
          />
        </div>
        <div className="form-controlpv">
          <label htmlFor="cnaepv">
            CNAE
          </label>

          <input
            type="text"
            name="cnae"
            id="cnaepv"
            placeholder="Digite o seu CNAE"
            required
          />
        </div>
      </div>

      <div className="form-emailpv">
        <label htmlFor="emailpv">
          E-MAIL
        </label>

        <input
          type="email"
          name="email"
          id="emailpv"
          placeholder="Digite o seu e-mail"
          required
        />
      </div>
    </div>

  )
}
export default UserForm