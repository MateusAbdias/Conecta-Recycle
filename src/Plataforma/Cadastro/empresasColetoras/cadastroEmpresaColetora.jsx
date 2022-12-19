import { Link } from "react-router-dom";
import "./styles/cadastroEmpresaColetora.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import { RxAccessibility } from "react-icons/rx";
//Telas
import UserForm from "./telas/UserForm";
import ReviewForm from "./telas/ReviewForm";
import TanksForm from "./telas/Tanks";

//Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

const formTemplate = {
  razaoSocial: "",
  cep: "",
  cnpj: "",
  razaoJuridica: "",
  complemento: "",
  cnae: "",
  email: "",
  linklogo: "",
  instagram: "",
  linkedin: "",
  whatsapp1: "",
  whatsapp2: "",
  nomeResponsavel: "",
  departamento: "",
  emailResponsavel: "",
  cpf: "",
  whatsappResponsavel: "",
  senhaResponsavel: "",
};

const CadastroEmpresaColetora = () => {
  const [dados, setDados] = useState(formTemplate);

  const updadeFieldHandler = (key, value) => {
    setDados((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formTelas = [
    <UserForm dados={dados} updadeFieldHandler={updadeFieldHandler} />,
    <ReviewForm dados={dados} updadeFieldHandler={updadeFieldHandler} />,
    <TanksForm dados={dados} updadeFieldHandler={updadeFieldHandler} />,
  ];

  const { atualPasso, atualTela, alterarPasso, ultimoPasso, primeiroPasso } =
    useForm(formTelas);

  return (
    <div className="telaCadastroec">
      <div className="banner-cadastroec">
        <h1 className="txt-bannerec">Cadastro</h1>
        <span>
          <IoIosArrowDroprightCircle className="icon-setaec" />
        </span>
      </div>

      <div className="mainec">
        <div className="tituloec">
          <h1>Cadastre-se na Plataforma Coneta Recycle</h1>
          <p>Quero ser uma Empresa Coletora</p>
        </div>

        <div className="form-containerec">
          <form onSubmit={(e) => alterarPasso(atualPasso + 1, e)}>
            <div className="inputs-containerec">{atualTela}</div>

            <div className="botoes-acoesec">
              {!primeiroPasso && (
                <button
                  type="button"
                  onClick={() => alterarPasso(atualPasso - 1)}
                >
                  <span>Voltar</span>
                </button>
              )}

              {/*condicional. Se NÃO for o ultimo passo, mostra o botão continuar. Se for o ultimo passo, mostra o botão enviar.*/}
              {!ultimoPasso ? (
                <button type="submit"> Continuar </button>
              ) : (
                <button type="button">Cadastrar</button>
              )}
            </div>
          </form>
        </div>

        <div className="link-loguinec">
          <p>Ja possui uma conta?</p>
          <a href="/">ENTRE AGORA</a>
        </div>
      </div>

      <div className="icons">
        <button className="botao-sair">
          <TbLetterX id="xec" />
        </button>

        <button className="botao-acess">
          <RxAccessibility id="bt-accec" />
        </button>
      </div>
    </div>
  );
};
export default CadastroEmpresaColetora;
