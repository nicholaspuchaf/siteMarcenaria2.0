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


    if(!titulo || !descricao || !telefone || !email )res.send("Objeto não postado!");
    else{
        
    // let listaItens = itens.retornarTudo();
    // console.log(listaItens);
    itens.adicionarItens(titulo,descricao,listaFotos,telefone,email);
    // listaItens = itens.retornarTudo();
    // console.log(listaItens);
    
    res.send("Objeto Postado com sucesso!");

    }
    

})

router.post('/postMultipleItems',bodyParser.json(), (req, res,next)=>{

    let body = req.body //LISTA DE ITENS
    let listaDeCertos = ""
    let listaErrados = ""

    for(let i = 0; i<body.length; i++){

        let titulo = body[i].titulo;
        let descricao = body[i].descricao;
        let listaFotos = body[i].listaFotos;
        let telefone = body[i].telefone;
        let email = body[i].email;
    
    
        if(!titulo || !descricao || !telefone || !email ){
            
            //res.send("Objeto não postado!");
            listaErrados += String(i+1) + ' '

            }
        else{
            
            // let listaItens = itens.retornarTudo();
            // console.log(listaItens);
            itens.adicionarItens(titulo,descricao,listaFotos,telefone,email);
            // listaItens = itens.retornarTudo();
            // console.log(listaItens);
            
            listaDeCertos += String(i+1) + ' '
    
        }


        
        

    }


    res.send(`Objetos enviados : ${listaDeCertos} Objetos não enviados : ${listaErrados}`);
        

})


module.exports = router;

