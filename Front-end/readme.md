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
**Paleta de cores**
**Fontes**
**Logo**
**Mascote**
**Protótipo**

link para nosso protótipo no figma:


## ReactJS
<p> Utilizamos como a ferramenta para construção de nossa aplicação react, visto que ele é uma das ferramentas mais utilizadas atualmente, devido esse empacotador ser mais leve que gerar uma aplicação react do zero pelo padrão da própria biblioteca <p>

<p> No desenvolvimento da aplicação da Conecta Recycle utilizamos o React na sua mais nova versão (17.0.2), contamos também com um sistema de rotas na plataforma, para gerar mais comodidade ao usuário. <p>
  
<p> O desenvolvimento da aplicação foi feita em 2 momentos, o primeiro foi o site principal (o qual intitulamos de: parte fora da plataforma) que é o nosso home, blog, quem somos, pevs, parcerias e fale conosco, foi desenvolvido obedecendo os padrões de uma SPA (single page application), pois todas essas telas e suas ramificações, obedecem uma padronização no formato header-body-footer. Então, visto essa padrozinação, escolhemos utilizar esse sistema de arquitetura de projeto. Essa parte da nossa aplicação todos os usuários podem acessar e consumir os conteúdos, sem necessáriamente se cadastrar na Conecta Recycle. Escolhemos fazer dessa forma, pois os usuários possam consumir nossos conteúdos da aplicação sem necessáriamente fazer parte dela. <p> <br>
  
<p> A segunda parte de nossa aplicação é onde funciona a parte interna da nossa aplicação, ou seja, todas as nossas funcionalidades internas só são dispónível para os ussuários que estão cadastrados e logados na nossa plataforma (parte interna).<p>
  
<p> Dentro da plataforma temos 3 tipos de usuários:<p>
  1. A pessoa que quer realizar um descarte <br>
  2. A empresa que quer ser um de nossos pontos de coletas e quer receber uma de nossas pevs <br>
  3. A empresa que quer ser coletora em nossos pontos <br><br>
  
<p> Todos os usuários possuem funcionalidades exlusivas de acordo com o seu tipo de login, a para organização dessas páginas usamos essa organização em nosso repositório <p> 
   
#### React router DOM

Na aplicação do sistema de rotas utilizamos a biblioteca react-router-dom (v6) com o seguinte código para a instalação:
  
 ~~~git
npx create-react-app react-rotas
~~~  

Depois fazemos a importação do sistema de rotas:
  
~~~react
import { Routes, Route } from "react-router-dom";
~~~

Em seguida fazemos a aplicação deles no projeto normalmente.
 
#### Axios
<p> Utilizamos a biblioteca Axios (v1.2) para facilitar na integração do front-end com o back-end e banco de dados<p>
<p> Comandos utilizados: <p>
