// API de intergração com o email com NodeJS, desenvolvido por Mateus Abdias

// Usando a biblioteca nodemailer
const nodemailer = require('nodemailer');

// Utilizando o host, port, secure e auth do outlook (o próprio site da API disponibiliza)
const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: '587',
    secure: false,
    auth: {
        user: 'conectarecycle@outlook.com',
        pass: 'vitoriakinga13'
    }
});

// Criando e enviando um email
// JavaScript assíncrono 
// Essa função tenta enviar o e-mail, se ela não conseguir ela retorna um erro
transport.sendMail({
    from:'Conecta Recycle <conectarecycle@outlook.com>',
    to: 'adryanfelipe17@hotmail.com',
    subject: 'Blog Conecta Recycle',
    text: 'Você acaba de se inscrever no Blog da Conecta Recycle'
})
.then(() => console.log('Email enviado'))
.catch((err) => console.log('Erro ao enviar: ', err));