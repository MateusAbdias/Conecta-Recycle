import React from "react";

const TanksForm = ({ dados }) => {
  return (
    <div className="conteiner-useForm3ec">
      <div className="form-controlec">
        <label htmlFor="nomeResponsavelec">NOME DO RESPONSÁVEL</label>

        <input
          type="text"
          name="nomeResponsavel"
          id="nomeResponsavelec"
          placeholder="Digite o nome do responsável"
          required
        />
      </div>
      <div className="form-control-um3ec">
        <div className="form-control3ec">
          <label htmlFor="departamentoec">DEPARTAMENTO</label>

          <input
            type="text"
            name="departamento"
            id="departamentoec"
            placeholder="Em qual departamento você trabalha?"
            required
          />
        </div>
        <div className="form-control3ec">
          <label htmlFor="whatsappResponsavelec">WHATSAPP</label>

          <input
            type="text"
            name="whatsappResponsavel"
            id="whatsappResponsavelec"
            placeholder="Digite o seu whatsapp empresarial"
            required
          />
        </div>

        <div className="form-control3ec">
          <label htmlFor="emailResponsavelec">EMAIL</label>

          <input
            type="text"
            name="cpfResponsavel"
            id="emailResponsavelec"
            placeholder="Digite o seu e-mail"
            required
          />
        </div>
        <div className="form-control3ec">
          <label htmlFor="linkedinResponsavelec">LINKEDIN</label>

          <input
            type="text"
            name="linkedinResponsavel"
            id="linkedinResponsavelec"
            placeholder="Digite a sua conta do linkedin"
            required
          />
        </div>
      </div>

      <div className="form-controlec">
        <label htmlFor="senhaResponsavelec">SENHA</label>

        <input
          type="password"
          name="senhaResponsavel"
          id="senhaResponsavelec"
          placeholder="Digite a sua senha"
          required
        />
      </div>
    </div>
  );
};
export default TanksForm;
