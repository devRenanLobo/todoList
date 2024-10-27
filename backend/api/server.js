const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./databaseConfig')

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (require, response) => {
    response.send('Bem vindo ao server do Renan!!!');
});

server.get('/todoList', async (require, response) => {
    //GET all todos
    try{
    const todoList = db('todoList');
    response.json(todoList);
    }catch(err){
        console.log(err);
    }
});

server.post('/todoList:id', (require, response) => {
    //POST a todos
});

server.delete('/todoList:id', (require, repsonse) => {
    //DELETE a todo
});

module.exports = server;