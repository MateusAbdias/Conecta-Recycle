//Criação de QR CODE com React, desenvolvido por Mateus Abdias

// Importando a biblioteca QRCODE
import { useState } from 'react';
import QRCode from 'react-qr-code'

function QrCode() {

  // Setando o link inicial vazio e declarando o novo
  const [link, setLink] = useState('' )

  // Função que captura o valor atual do imput e ataliza o valor setado (atraves do usestate)
  function handleQrcode(e){
    setLink(e.target.value)
  }

  return (
    <div className='container'>
      <QRCode 
      value={link}
      />
      <input 
      className='input'
      placeholder='Digite o seu código...' 
      value={link}
      // recebe o evento de atualização do imput e realiza a função handleQrcode e gera o novo qrcode
      onChange={ (e)=> handleQrcode(e) }/>
    </div> 
  )
}

export default QrCode;
