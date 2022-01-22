const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const itens = require('../models/itemVenda');



router.get('/getAll', bodyParser.json() ,(req, res, next)=>{

    if(!itens){
        res.send("A lista de itens está vazia!");
    }
    else{
        let listaItens = itens.retornarTudo();

        res.send(JSON.parse(JSON.stringify(listaItens)));

    }


})

router.post('/postItem', bodyParser.json() ,(req,res, next)=>{

    let body = req.body;

    let titulo = body.titulo;
    let descricao = body.descricao;
    let listaFotos = body.listaFotos;
    let telefone = body.telefone;
    let email = body.email;

    
    // let listaItens = itens.retornarTudo();
    // console.log(listaItens);
    itens.adicionarItens(titulo,descricao,listaFotos,telefone,email);
    // listaItens = itens.retornarTudo();
    // console.log(listaItens);
    
    res.send("Objeto Postado com sucesso!");


})

router.post('/postMultipleItems',bodyParser.json(), (req, res,next)=>{




})


module.exports = router;

