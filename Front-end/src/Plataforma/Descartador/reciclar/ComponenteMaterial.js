import "./MaterialDescarteStyle.css"
import {BsArrowLeft} from "react-icons/bs"
import logo from "./ImagensMaterialDescarte/Logo.jpeg"
import senacimg from "./ImagensMaterialDescarte/senacagrvaipeloamordedeus.jpeg"
import senacimg2 from "./ImagensMaterialDescarte/senac2.jpeg"
import Qrcode from "./ImagensMaterialDescarte/Qrcode.jpeg"
import DangerIcon from "./ImagensMaterialDescarte/Caution.jpeg"



export default function MaterialDescarte() {
    
    return(
        <div>
            
        <img src={logo} className="ImgLogo"/>
        <div className="ContainerGrey">
       <BsArrowLeft className="ArrowIcon"/>
       <h3 className="Title1">Material a ser descartado</h3>
       <li className="List">Celular</li>
       <a href="#"><button className="Button1">DESCARTAR MAIS ITENS</button></a>
       <a href="#"><button className="Button2">Alterar</button></a>
       <h4 className="title2">PEVs Próximos a você</h4>
       <img src={senacimg} className="senacimg"/>
       <img src={senacimg2} className="senacimg2"/>
       <p className="Voucher1"><strong>Voucher :<p className="VoucherComp">5% de desconto na mensalidade</p></strong></p>
       <p className="Voucher2"><strong>Voucher :<p className="VoucherComp2">5% de desconto na mensalidade</p></strong></p>
       <p className="Desc1">Descrição da pev</p>
       <p className="Desc2">Descrição da pev</p>
       <p className="end1"><strong>Endereço :</strong>Santo Amaro,22</p>
       <p className="end2"><strong>Endereço :</strong>Santo Amaro,22</p>
       <p className="telefone01"><strong>telefone :</strong> (xx) xxxxx-xxxx</p>
       <p className="telefone02"><strong>telefone :</strong> (xx) xxxxx-xxxx</p>
       <p className="email01"><strong>E-mail:</strong>senac.pe@senac.br</p>
       <p className="email02"><strong>E-mail:</strong>senac.pe@senac.br</p>
       <button className="Button3">VER NO MAPS</button>
       <button className="Button4">VER NO MAPS</button>
       <h4 className="title3">Seu QR code</h4>
       <p className="Paragrafo1">Você consegue pontos ao descartar os eletrônicas e mostrar <br></br>
       seu QR code nas nossas PEVs e desbloquear certificados<br></br>
       dentro da nossa plataforma</p>
       <img src={Qrcode} className="ImgQr"/>
       <div className="DangerContainer01">
        <img src={DangerIcon} className="dangerimg01"/>
        <h4 className="DangerTitle1">TOME CUIDADO</h4>
        <p className="DangerP">Antes de descartar procure apagar todos os seus dados sensíveis do seu aparelho</p>
        <a href="#" className="DangerLink">Saiba como funciona nossa <br></br>politica de privacidade</a>
        </div>
       <div className="DangerContainer02">
       <img src={DangerIcon} className="dangerimg02"/>
       <h4 className="DangerTitle1">TOME CUIDADO</h4>
       <p className="DangerP">Evite contato direto com o aparelho se ele apresentar algum tipo de corrosão ou se ele estiver liberando alguma substância</p>
       <a href="#" className="DangerLink2">Saiba mais</a>
       </div>
       
       

       
       </div>

        </div>
    )

}