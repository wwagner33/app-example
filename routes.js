const express = require("express");
const router = express.Router();


//Importe cada uma das funcoes presentes no arquivo de modulo users.js
const {insertUsers,insertUser,delUser,listUsers,findUser} = require("./model/users");


router.use(express.static('public')); //Você usa o USE() para inserir um middleware no Express

router.get('/',(req,res)=>{
    //REQUEST (REQ) - O que vem do forntend para o backend
    //RESPONSE (RES) - O que vai do backend para o Forntend
   
    //Criacao de minha primeira pagina dinamica
    //res.send(html);
    res.render("pages/home");


}); // ()={} sendo utilizada como callback

router.get('/listUsers',(req,res)=>{
    res.render('./crud/listUsers',{listUsers: listUsers()});

});

//Create - insercao de um usuario
//Read - listar/ler um ou mais usuarios
//Update - atualizar os dados de um usuario
//Delete - remover um usuario
//CRUD - conjunto de operacoes feitas sobre uma base de dados.

router.get('/delUser',(req,res)=>{

    let target = req.query.nome;
    let list = delUser(target);

    res.render('./crud/delUser',{listUsers: list});
});

module.exports = router;