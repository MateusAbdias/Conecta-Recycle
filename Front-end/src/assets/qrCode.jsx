import { useState } from 'react';
import QRCode from 'react-qr-code'
import './App.css'

function QrCode() {

  const [link, setLink] = useState('' )

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
      onChange={ (e)=> handleQrcode(e) }/>
    </div> 
  )
}

export default QrCode;
