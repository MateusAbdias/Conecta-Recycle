# Repositório do Front-End da Conecta Recycle :recycle: :black_nib:

**Como Clonar este repositório** <br><br>
Utilize no seu terminal os seguintes comandos:

Inicialmente clone o repositório:
``` git clone https://github.com/MateusAbdias/ConectaRecycle ```

Entre na pasta ConectaRecycle:
```cd ./ConectaRecycle/```

Entre na pasta Front-End:
```cd ./Front-end/```

Instale todas as dependências e bibliotecas com esse comando:
```npm install```

Rode o projeto no seu nagador:
```npm run dev```

---
## Design
**Paleta de cores** <br>
![verde musgo](https://user-images.githubusercontent.com/102550045/208309228-04ccc181-449f-4eba-8566-06319fbe490d.png)
![verde bandeira](https://user-images.githubusercontent.com/102550045/208309230-1628dec8-7386-4889-9d55-b9acb5e3de12.png)
![azul cobalto](https://user-images.githubusercontent.com/102550045/208309231-86e7e461-fa42-4b05-9e19-f6f753c89356.png)
![azul índico](https://user-images.githubusercontent.com/102550045/208309233-4903423a-1695-4dfe-b64a-136748a8c9ca.png)
![laranja](https://user-images.githubusercontent.com/102550045/208309236-2d2bda29-c85c-4e23-98fb-a31ce1a2dd5a.png)
                     
**Fontes** <br>
Abraham: https://www.dafont.com/pt/abraham-3.font <br>
Geometr415 Blk BT: https://www.fonts100.com/font+43449_Geometr415+Blk+BT.html <br>
Poppins: https://fonts.google.com/specimen/Poppins

**Logo** <br>
<img width="200px" src="https://github.com/MateusAbdias/imagensConectaRecycle/raw/main/logo.png?raw=true">

**Mascote** <br>
<img width="200px" src="https://user-images.githubusercontent.com/102550045/208309651-a1ea476d-3c35-473d-8df7-bc3887d2d4ea.png">

**Protótipo**
link para nosso protótipo no figma: https://www.figma.com/proto/PGTM28DR0tfH32ZIxMEnyv/Telas-Conecta-Recycle?scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=207%3A5103&node-id=207%3A5103

**Família de ícones**
https://phosphoricons.com/


## ReactJS
<p> Utilizamos o Vite.JS como a ferramenta para construção de nossa aplicação react, visto que ele é uma das ferramentas mais utilizadas atualmente, devido esse empacotador ser mais leve que gerar uma aplicação react do zero pelo padrão da própria biblioteca. <p>

<p> No desenvolvimento da aplicação da Conecta Recycle utilizamos o React na sua mais nova versão (17.0.2), contamos também com um sistema de rotas na plataforma, para gerar mais comodidade ao usuário. <p>
  
<p> O desenvolvimento da aplicação foi feita em 2 momentos, o primeiro foi o site principal (o qual intitulamos de: parte fora da plataforma) que é o nosso home, blog, quem somos, pevs, parcerias e fale conosco, foi desenvolvido obedecendo os padrões de uma SPA (single page application), pois todas essas telas e suas ramificações, obedecem uma padronização no formato header-body-footer. Então, visto essa padrozinação, escolhemos utilizar esse sistema de arquitetura de projeto. Essa parte da nossa aplicação todos os usuários podem acessar e consumir os conteúdos, sem necessáriamente se cadastrar na Conecta Recycle. Escolhemos fazer dessa forma, pois os usuários possam consumir nossos conteúdos da aplicação sem necessariamente fazer parte dela. <p> <br>
  
<p> A segunda parte de nossa aplicação é onde funciona a parte interna da nossa aplicação, ou seja, todas as nossas funcionalidades internas só são dispónível para os usuários que estão cadastrados e logados na nossa plataforma (parte interna).<p>
  
<p> Dentro da plataforma temos 3 tipos de usuários:<p>
  1. A pessoa que quer realizar um descarte <br>
  2. A empresa que quer ser um de nossos pontos de coletas e quer receber uma de nossas pevs <br>
  3. A empresa que quer ser coletora em nossos pontos <br><br>
  
<p> Todos os usuários possuem funcionalidades exlusivas de acordo com o seu tipo de login, a para organização dessas páginas usamos essa organização em nosso repositório. <p> 
   
#### React router DOM

Na aplicação do sistema de rotas utilizamos a biblioteca react-router-dom (v6) com o seguinte código para a instalação:
  
 ~~~git
npm install react-router-dom
~~~  

Depois fazemos a importação do sistema de rotas:
  
~~~react
import { Routes, Route } from "react-router-dom";
~~~

Em seguida fazemos a aplicação deles no projeto normalmente.
 
#### Axios
<p> Utilizamos a biblioteca Axios (v1.2) para facilitar na integração do front-end com o back-end e banco de dados.<p>
<p> Essa biblioteca utiliza uma API criada por nos e que roda na url "http://localhost:8080/usuario". Essa API armazena os dados inseridos pelo usuário e envia as informações para o servidor, e para acessá-lo usamos o método post. <p>

<p> Comandos utilizados: <p>

~~~git
npm install axios
~~~

Saiba mais: https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900

#### Envio de Email
<p> Para a construção dessa API utilziamos a biblioteca nodemailer do NodeJS e a API de envio de Email do Outlook disponibilizado pela Microsoft. <p>
<p> Utilizamos o host 'smtp.office365.com'  e a port '587'. <p>
<p> Nosso autentificador foi nosso e-mail e senha. <p>

Saiba mais: <br>
https://support.microsoft.com/pt-br/office/configura%C3%A7%C3%B5es-pop-imap-e-smtp-para-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040 <br>
https://learn.microsoft.com/en-us/graph/outlook-mail-concept-overview


#### Gerador de QRCODE
<p> Para gerar os QrCodes na plataforma utilizamos a biblioteca react-qr-code. O código pega o link digitado no imput e através do useState do react geramos o código automaticamente. <p>
<p> Futuramente iremos implementar o sistema de leitura do qrcode dentro da plataforma. <p>
