import './VerificarColeta.css';
import MenuBento from "./MenuBento";

function VerificarColeta(){
    return(
        <div>

            <MenuBento />

            <img className="menubento"
                src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/147ec461-cdc1-49ba-98cb-ad7e9b120732.png?raw=true">
            </img>

            <img className="logo" 
                    src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/logo.png?raw=true">
                </img>
                
            <div className="main">
                <img className="seta"
                    src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/cf8c4a55-cc28-40da-a42d-ecf1e578e20e.png?raw=true">
                </img>
                <h4 className="verificacao">
                    Verificar coletas
                </h4>

                <h4 className="coletashoje"> Coletas para hoje </h4>
                    <img className="senac"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/2f342bce-f258-42ed-8992-fe939550afb1.png?raw=true">
                    </img>

                    <img className="santacruz"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/80df8a7b-259d-4d6a-bf2e-2c2e26ec5e9b.png?raw=true">
                    </img>

                    <img className="sport"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/e1ae254c-2212-4e8a-8d94-68134c84d02a.png?raw=true">
                    </img>

                    <img className="candle"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/3b5975a6-28cb-4f65-b9ec-4a416087d53a.png?raw=true">
                    </img>

                    <img className="gemstone"
                        src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/e147f7f1-ab85-4805-b199-19383be23a9f.png?raw=true">
                    </img>
                <h4 className="titulorota"> Rota sugerida: </h4>
                <div>
                    <a href="https://www.google.com.br/maps/place/Faculdade+Senac+Pernambuco/@-8.0524945,-34.8874193,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab1997eb26b1bb:0x38559aaa17ddef7c!8m2!3d-8.0524945!4d-34.8852306">
                        <img className="imgmapa" src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/9a8d5c03-6cb3-4da7-a823-bf735b6da101.png?raw=true"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VerificarColeta;