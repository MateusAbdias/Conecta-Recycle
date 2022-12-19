export default function solicitar() {
    return (
      <div>
        <img
          className="menubento"
          src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/147ec461-cdc1-49ba-98cb-ad7e9b120732.png?raw=true"
        />
        <img
          className="logo"
          src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/logo.png?raw=true"
        />
        <div className="main">
          <img
            className="seta"
            src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/cf8c4a55-cc28-40da-a42d-ecf1e578e20e.png?raw=true"
          />
          <p className="text-1">Solicitar coleta</p>
          <div className="form">
            <p className="box">
              Sua coleta foi solicitada para o dia 27/12, enviaremos mais detalhes
              para o seu e-mail.
            </p>
            <input type="button" value="Concluído" />
          </div>
        </div>
      </div>
    );
  }
  