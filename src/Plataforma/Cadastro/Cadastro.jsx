import "./Cadastro.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RxAccessibility } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="telaCadastro">
      <div id="mainCadastro">
        <h1 className="tituloCadastro">
          Cadastre-se na Plataforma Conecta Recycle
        </h1>

        <nav id="botoesCadastro">
          <a className="imgbotaocadastro">
            {" "}
            <img
              src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/cadastro/088df06c-80b6-465f-add6-8bb3d16dc925.png?raw=true"
              alt="Botão cadastro usuário"
              className="imagemBotaoCadastroNav"
            />
          </a>

          <a className="imgbotaocadastro">
            {" "}
            <img
              src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/cadastro/cecbbb10-bd5b-4e33-aafb-790e3a1a8c9a.png?raw=true"
              alt="Botão cadastro Empresa PEV"
              className="imagemBotaoCadastroNav"
            />{" "}
          </a>

          <a className="imgbotaocadastro">
            {" "}
            <Link to="/empresacoletora"><img
              src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/cadastro/dc37ab48-22f9-4dc4-92b0-b6c8087a3ad8.png?raw=true"
              alt="Botão cadastro Empresa coletora"
              className="imagemBotaoCadastroNav" 
            /></Link>
          </a>
        </nav>

        <p className="entreAgora">
          Já possui conta?{" "}
          <Link to="/login"><p className="linkEntreAgora">
            Entre Agora
          </p></Link>
        </p>
      </div>
      <div id="bannerCadastro">
        <h2 className="nomeCadastro">Cadastro</h2>
      </div>

      <IoIosArrowDroprightCircle className="setaCadastro" />
      <button className="botaoAcessivilidadeCadastro">
        <RxAccessibility className="iconeAcessivilidadeCadastro" />
      </button>

      <Link to="/"><p className="LinkSairCadastro"> x </p> </Link>

    </div>
  );
}
