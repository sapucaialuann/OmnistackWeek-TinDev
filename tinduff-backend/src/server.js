const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://<userName>:<password>@omnistack-ydlhp.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors()); 
server.use(express.json());
server.use(routes); 

server.listen(3333);


//mongoose serve para utilizar a linguagem javascript para a manipulação do banco de dados
//cors serve para permitir a conexão entre back e front
