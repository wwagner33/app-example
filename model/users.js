/**
 * Módulo de manipulação de usuários para serem cadastrados
 * @author Wellington Wagner Ferreira Sarmento
 */


 let users=[];

 //= [{nome:"",email:"",telefone:"",data_nascimento:"",endereco:""}];
 
 function insertUsers(paramUsers){
     for(let cont=0;cont<paramUsers.length;cont++){
         users.push(paramUsers[cont]);
     }
     //users= paramUsers;
 }
 
 function insertUser(user){
     users.push(user);
 }
 
 function findName(nUser){
     for(let cont=0;cont<users.length;cont++){
         if(users[cont].nome === nUser){
             return cont;
         } else {
             return null;
         }
     }
 }
 
 function delUser(nUser){
     let idUser = findName(nUser);
 
     if(idUser!=null){
         users.splice(idUser,1);
         return users;
     } else{
         return "";
     }
 }
 
 function listUsers(){
     return users;
 }
 function findUser(nDate){
     //find a user per Date
 }
 module.exports = {insertUsers: insertUsers,insertUser: insertUser,delUser: delUser,listUsers: listUsers,findUser: findUser};