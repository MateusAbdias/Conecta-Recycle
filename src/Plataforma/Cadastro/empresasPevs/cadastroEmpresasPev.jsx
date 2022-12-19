import { Link } from "react-router-dom";
import "./styles/cadastroEmpresasPev.css";
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

const CadastroEmpresaPev = () => {
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
    <div className="telaCadastropv">
      <div className="banner-cadastropv">
        <h1 className="txt-bannerpv">Cadastro</h1>
        <span>
          <IoIosArrowDroprightCircle className="icon-setapv" />
        </span>
      </div>

      <div className="mainpv">
        <div className="titulopv">
          <h1>Cadastre-se na Plataforma Coneta Recycle</h1>
          <p>Quero ser um Ponto de Coleta</p>
        </div>

        <div className="form-containerpv">
          <form onSubmit={(e) => alterarPasso(atualPasso + 1, e)}>
            <div className="inputs-containerpv">{atualTela}</div>

            <div className="botoes-acoespv">
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

        <div className="link-loguin">
          <p>Ja possui uma conta?</p>
          <a href="/">ENTRE AGORA</a>
        </div>
      </div>

      <div className="icons">
        <button className="botao-sair">
          <TbLetterX id="x" />
        </button>

        <button className="botao-acess">
          <RxAccessibility id="bt-accpv" />
        </button>
      </div>
    </div>
  );
};
export default CadastroEmpresaPev;
