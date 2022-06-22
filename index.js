"use strict;"


/* let users = [];

for(let cont=0;cont<10;cont++){
    users.push({name:`Usuário ${cont}`,email:"wwagner2345@hotmail.com",age:47,ativo:true});

   // users(cont) = {name:`Usuário ${cont}`,email:"wwagner2345@hotmail.com",age:47,ativo:true};
    //{atributo:valor,atributo:valor} -> Objeto Literal do Javascript ou Objeto Javascript
}

/* users.forEach((valor) => {
    console.log("valor do elemento:",JSON.stringfyvalor);
    
});

for (let index in users){
    console.log("O valor do elemento é: ",users[index]);
}

/* 
Estrutura de uma Pilha
push()  - Coloca na pilha
pop()   - Lê e remove elemento da pilha
ABC ->      -> CBA
     0 | C |
     1 | B |
     2 | A | */

     /**
      * Aplicação para Testes em Sala de aula
      * @author Wellington Wagner F. Sarmento
      * @lisense GPLv3.0 or Later
      */

    const express = require("express");
    const app = express();
    const routes = require("./routes");

    const port = 3030;
    const address = "localhost";

    const expressLayouts = require('express-ejs-layouts');




    app.use(express.static('public'));
    

    app.set('view engine','ejs');
    app.use(expressLayouts);

    app.use('/',routes);

     const server = app.listen(port,address,function () {
        let host = server.address().address;
        let port = server.address().port;
        console.log(`Servidor executando no endereço ${host} e na porta ${port}`);
     });