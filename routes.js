const express = require("express");
const router = express.Router();
router.use(express.static('public'));
router.get('/',(req,res)=>{
    //res.send("Minha primeira mensagem para o cliente web!!");
    res.render("pages/home");
});

module.exports = router;