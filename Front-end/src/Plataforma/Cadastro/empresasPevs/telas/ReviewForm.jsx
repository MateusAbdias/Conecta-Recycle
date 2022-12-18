import React from "react";

const ReviewForm = ({ dados }) => {
  return (
    <div className="conteiner-useForm2pv">
      <div className="form-controlpv">
        <label htmlFor="linklogopv">LINK DA SUA LOGO</label>

        <input
          type="text"
          name="linklogo"
          id="linklogopv"
          placeholder="Digite o link da sua logo"
          required
        />
      </div>
      <div className="form-control-umpv">
        <div className="form-controlpv">
          <label htmlFor="instagrampv">INSTAGRAM</label>

          <input
            type="text"
            name="instagram"
            id="instagrampv"
            placeholder="Digite a sua conta do Instagram"
            required
          />
        </div>
        <div className="form-controlpv">
          <label htmlFor="linkedinpv">LINKEDIN</label>

          <input
            type="text"
            name="linkedin"
            id="linkedinpv"
            placeholder="Digite a sua conta do Linkedin"
            required
          />
        </div>
      </div>

      <div className="form-control-doispv">
        <div className="form-control">
          <label htmlFor="whatsapp1pv">WHATSAPP</label>

          <input
            type="text"
            name="whatsapp1"
            id="whatsapp1pv"
            placeholder="Digite o whatsapp empresarial"
            required
          />
        </div>
        <div className="form-controlpv">
          <label htmlFor="whatsapp2pv">WHATSAPP</label>

          <input
            type="text"
            name="whatsapp2"
            id="whatsapp2pv"
            placeholder="Digite o whatsapp empresarial"
            required
          />
        </div>
      </div>
    </div>
  );
};
export default ReviewForm;
