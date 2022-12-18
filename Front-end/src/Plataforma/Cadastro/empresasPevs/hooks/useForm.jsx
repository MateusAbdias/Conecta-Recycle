import { useState } from "react";

export function useForm(passo){
   //diz em qual passo esta
  const[atualPasso, setAtualPasso] = useState(0)
  
  // recebe um incide e um evento de parar 
  function alterarPasso (i, e){
    if(e) e.preventDefault();

    //vai analisar o passo que usuario esta tentando inserir

    if(i < 0 || i >= passo.length) return

    setAtualPasso(i)

  }

  return{
    atualPasso,
    atualTela: passo[atualPasso],
    alterarPasso,
    ultimoPasso: atualPasso + 1 === passo.length ? true : false,
    primeiroPasso: atualPasso === 0 ? true : false,
  }

}