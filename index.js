const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '', //seuemail@gmail.com
        pass: '', //Senha de app nas configurações de sua conta google
    }
});

transport.sendMail({
    from: 'Testando email <>', //<email de origem, ex: seuemail@gmail.com>
    to: '', //email de destino, ex: seuemail@gmail.com
    subject: 'Enviando email com Nodemailer',
    html: '<h1>Olá, Dev!</h1> <p>Esse email foi enviando usando o Nodemailer</p>',
    text: 'Olá, Dev! Esse email foi enviado usando o Nodemailer',
})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email: ', err));
