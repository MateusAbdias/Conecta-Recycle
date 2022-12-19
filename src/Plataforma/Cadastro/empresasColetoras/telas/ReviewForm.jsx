import React from "react";

const ReviewForm = ({ dados }) => {
  return (
    <div className="conteiner-useForm2ec">
      <div className="form-controlec">
        <label htmlFor="linklogoec">LINK DA SUA LOGO</label>

        <input
          type="text"
          name="linklogo"
          id="linklogoec"
          placeholder="Digite o link da sua logo"
          required
        />
      </div>
      <div className="form-control-umec">
        <div className="form-controlec">
          <label htmlFor="instagramec">INSTAGRAM</label>

          <input
            type="text"
            name="instagram"
            id="instagramec"
            placeholder="Digite a sua conta do Instagram"
            required
          />
        </div>
        <div className="form-controlec">
          <label htmlFor="linkedinec">LINKEDIN</label>

          <input
            type="text"
            name="linkedin"
            id="linkedinec"
            placeholder="Digite a sua conta do Linkedin"
            required
          />
        </div>
      </div>

      <div className="form-control-doisec">
        <div className="form-controlec">
          <label htmlFor="whatsapp1ec">WHATSAPP</label>

          <input
            type="text"
            name="whatsapp1"
            id="whatsapp1ec"
            placeholder="Digite o whatsapp empresarial"
            required
          />
        </div>
        <div className="form-controlec">
          <label htmlFor="whatsapp2ec">WHATSAPP</label>

          <input
            type="text"
            name="whatsapp2"
            id="whatsapp2ec"
            placeholder="Digite o whatsapp empresarial"
            required
          />
        </div>
      </div>
    </div>
  );
};
export default ReviewForm;
