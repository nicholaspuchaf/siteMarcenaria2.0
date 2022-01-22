const PORT = 5000;


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/router');

const app = express();

app.use('/',express.static(path.join(__dirname ,'public')));

app.use('/api', router);



app.listen(PORT, (err)=>{
    if(err)console.log(err)
    else console.log("Servidor ligado na porta", PORT);
})