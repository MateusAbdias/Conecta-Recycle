function Vouchers(){
    return(
        <div>
            <div>
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
                    Meus vouchers
                </h4>

                <div className="voucher1">
                    <p className="desconto"> 10% de desconto na<br></br>
                        próxima compra </p>

                    <p className="alterar"><a href="#"> Alterar </a></p>
                </div>

                <div className="addvoucher">
                    <p> Adicionar novo voucher</p>
                </div>

                    <div>
                        <p className="info1">Nosso sistema de voucher é realizado pelas próprias empresas que possuem nossas PEVs,<br></br>
                        e serve como uma forma de marketing para a sua empresa, pois dessa forma você atrai<br></br> 
                        mais clientes para a sua loja.</p>

                        <p className="info2"> Para mais informações envie um email para consultoria@conectarecycle.com<br></br>
                        ou entre em contato pelo nosso whatsapp (81) 99956-8871. </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Vouchers;