create database recycle;

use recycle;

create table Empresa(
id_empresa int auto_increment not null unique,
nome_emp varchar(50) not null,
cnpj char(14) primary key not null,
cnae char(7),
email varchar(256) unique not null,
senha varchar(30) not null,
telefone1 varchar(13) unique not null,
telefone2 varchar(13),
logradouro varchar(100) not null,
numero varchar(5) not null,
bairro varchar(100) not null,
cidade varchar(100) not null,
Estado varchar(100) not null,
cep char(8) not null,
instagram varchar(300) unique,
linkedin varchar(300) unique,
tipo smallint not null,
logo varchar(500) not null
);


create table gerente(
id_gerente int auto_increment unique,
cpf char(14) not null primary key,
fk_cnpj_empresa int not null unique,
nome_ger varchar(100) not null,
departamento varchar(50) not null,
email varchar(256) not null,
telefone1 varchar(13) unique not null,
telefone2 varchar(13)
);

create table contrato(
id_contrato int auto_increment not null unique,
fk_cnpj_empresa int not null,
data_inicio date not null,
data_fim date not null
);

create table coleta(
id_coleta int auto_increment not null unique,
fk_id_ponto int not null,
`data` datetime not null,
relatorio text not null
);

create table ponto_coleta(
id_ponto int auto_increment not null primary key,
fk_cnpj_empresa int not null,
logradouro varchar(100) not null,
numero varchar(5) not null,
bairro varchar(50) not null,
cidade varchar(50) not null,
Estado varchar(50) not null,
cep char(8) not null
);

create table descarte(
id_descarte int auto_increment not null primary key,
fk_cpf_usuario int not null,
fk_id_ponto int not null,
`data` datetime not null
);

create table usuario(
id_usuario int auto_increment not null unique,
cpf char(14) primary key not null,
nome_usu varchar(100) not null,
data_nascimento date not null,
email varchar(256) not null unique,
telefone1 varchar(13) not null unique,
telefone2 varchar(13),
logradouro varchar(50) not null,
numero varchar(5),
bairo varchar(50),
cidade varchar(50),
estado varchar(50),
cep char(8) not null,
pontuacao int not null);

insert into usuario values(1,87878787878787, "Akyssa", 20020418, "akyssa@gmail.com", 819827389, 239283746, "Rua senac", 
22, "Senac", "Recife", "Pernambuco", 38297188,0 );

alter table usuario add column senha varchar(100) not null;
select*from usuario;

alter table gerente add foreign key (fk_cnpj_empresa) references Empresa(id_empresa);
alter table contrato add foreign key (fk_cnpj_empresa) references Empresa(id_empresa);
alter table ponto_coleta add foreign key (fk_cnpj_empresa) references Empresa(id_empresa);
alter table coleta add foreign key (fk_cnpj_empresa) references Empresa(id_empresa);
alter table coleta add foreign key (fk_id_ponto) references ponto_coleta(id_ponto);
alter table descarte add foreign key (fk_cpf_usuario) references usuario(id_usuario);


alter table descarte add foreign key (fk_id_ponto) references ponto_coleta(id_ponto);


create table blog(
id_postagem int auto_increment primary key,
fk_id_autor int not null,
tipo tinyint not null,
titulo varchar(100) not null unique,
subtitulo varchar(100) not null,
texto text not null,
data_postagem date not null);

create table autor(
id_autor int auto_increment primary key,
nome varchar(100) not null,
data_nascimento date not null,
formacao varchar(30));

alter table blog add foreign key (fk_id_autor) references autor(id_autor);


