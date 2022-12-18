import React from "react";

const TanksForm = ({dados}) => {
  return (
    <div className="conteiner-useForm3pv">


      <div className="form-controlpv">
        <label htmlFor="nomeResponsavelpv">
          NOME DO RESPONSÁVEL
        </label>

        <input
          type="text"
          name="nomeResponsavel"
          id="nomeResponsavelpv"
          placeholder="Digite o nome do responsável"
          required
        />
      </div>
      <div className='form-control-um3pv'>
        <div className="form-control3pv">
          <label htmlFor="departamentopv">
            DEPARTAMENTO
          </label>

          <input
            type="text"
            name="departamento"
            id="departamentopv"
            placeholder="Em qual departamento você trabalha?"
            required
          />
        </div>
        <div className="form-control3pv">
          <label htmlFor="emailResponsavelpv">
            E-MAIL
          </label>

          <input
            type="text"
            name="emailResponsavel"
            id="emailResponsavelpv"
            placeholder="Digite o seu e-mail"
            required
          />
        </div>

        <div className="form-control3pv">
          <label htmlFor="cpfResponsavelpv">
            CPF
          </label>

          <input
            type="text"
            name="cpfResponsavel"
            id="cpfResponsavelpv"
            placeholder="Digite o seu CPF"
            required
          />
        </div>
        <div className="form-control3pv">
          <label htmlFor="whatsappResponsavelpv">
            WHATSAPP
          </label>

          <input
            type="text"
            name="whatsappResponsavel"
            id="whatsappResponsavelpv"
            placeholder="Digite o seu whatsapp empresarial"
            required
          />
        </div>
       </div>
      
      <div className="form-controlpv">
        <label htmlFor="senhaResponsavelpv">
          SENHA
        </label>

        <input
          type="password"
          name="senhaResponsavel"
          id="senhaResponsavelpv"
          placeholder="Digite a sua senha"
          required
        />
      </div>
      
    </div>

  )
}
export default TanksForm