const express = require('express');

// const JogosController = require('./controllers/JogosController')

// const router = express.Router(); 

// router.get('/jogos', JogosController.index);

// module.exports = rout

const app = express();

app.use(express.static(__dirname))

app.get('/', function(req,res){
    res.sendFile("../"+__dirname + '/index.html')
});

app.listen('8080');