const express = require("express");
const router = express.Router();

const faker = require("faker");

//Importe cada uma das funcoes presentes no arquivo de modulo users.js
//const {insertUsers,insertUser,delUser,listUsers,findUser} = require("./model/users");

let users=[];

for (let cont=0;cont<20;cont++){
    users.push(
    {
        name:faker.name.findName(),
        email:faker.internet.email(),
        address:faker.address.streetAddress(),
        age: 47,
        heigth:1.70,
        vote:true
    });
}


router.use(express.static('public')); //Você usa o USE() para inserir um middleware no Express

router.get('/',(req,res)=>{
    //REQUEST (REQ) - O que vem do forntend para o backend
    //RESPONSE (RES) - O que vai do backend para o Forntend
   
    //Criacao de minha primeira pagina dinamica
    //res.send(html);
    res.render("pages/home");


}); // ()={} sendo utilizada como callback

router.get('/about',(req,res)=>{
    let devTeam = [
    {
        name: "Wellington Wagner F. Sarmento",
        email:"meu@email.edu",
        avatar:"http://placebear.com/300/300"
    },
    {
        name: "Patrícia de Sousa Paula",
        email:"dela@email.edu",
        avatar:"http://placebear.com/400/300"
    },
    {
        name: "Matheus de sous aPaula Sarmento",
        email:"dele@email.edu",
        avatar:"http://placebear.com/500/300"
    }
    ];

    res.render('pages/about',{usuarios:devTeam})

});

router.get('/cadastro',(req,res)=>{ //callback - funcao que trata dado evento  GET

    //a funcao render pode receber um pametro na forma de objeto literal
    //no caso, ela irá receber um objeto com campo chamado users e com valor igual ao vetor users
    res.render('pages/cadastro',{users:users}); 
});

//Create - insercao de um usuario
//Read - listar/ler um ou mais usuarios
//Update - atualizar os dados de um usuario
//Delete - remover um usuario
//CRUD - conjunto de operacoes feitas sobre uma base de dados.

router.post('/cadastro/remove',(req,res)=>{
    //let item =req.body.id; //pega o valor passado através do parâmetro id e atribui a variável item. 
    let name = req.body.name;

    if(users.length==0){
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(500).json({
            status:'error',
            error:`Removed element: ${name}`
        });

    } else {
        for(let cont=0;cont<users.length;cont++){
            if(users[cont].name==name){
                users.splice(cont,1);
                console.log("Elemento Removido: ",name);
                return res.status(200).json({
                    status:'sucess',
                    data:users
                });
                //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",name);
                return res.status(400).json({
                    status:'error',
                    error:`Didn't Remove element: ${name}`
                });
            }
        }
    }
    
    
    //users.splice(item,1); //este método permite adicionar ou remover um item do vetor em uma dada posição. 
    //res.render('pages/cadastro',{users:users});
    //res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
    //console.log("Elemento Removido: ",name);
    
});


router.post('/cadastro/update',(req,res)=>{
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[req.body.id].name=req.body.name; //ID do objeto ou Tag: name
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].heigth=req.body.heigth;
    users[req.body.id].vote=req.body.vote;


    res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos
});

router.get('/cadastro/list',(req,res)=>{
    //Para fazer em casa: Como seria uma rotina para listar todos os itens cadastrados?

});

router.post('/cadastro/add',(req,res)=>{
    let user={name:"",email:"",address:"",heigth:"",age:"",vote:""};

    user.name = req.body._name;
    user.email = req.body._email;
    user.address = req.body._address;
    user.heigth = req.body._heigth;
    user.age = req.body._age;
    user.vote = req.body._vote;

    users.push(user);
    console.log("Usuário cadastrado: ",user);
    console.log("Lista dos usuários: ",users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    res.sendStatus(200);
    res.status(200).json({
        status:'sucess',
        data: `Usuário ${user} foi adiocionado com sucesso!`
    });

});
module.exports = router;