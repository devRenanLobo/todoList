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
    try{
    const todoList = await db('todoList');
    response.json(todoList);
    }catch(err){
        console.log(err);
    }
});

server.post('/todoList:id', async (require, response) => {
    const {message} = require.body
    if (!message){
        return response.status(400).json({
            message: 'Você deveria colocar um Todo no seu request'
        })
    }

    try {
        await db('todoList').insert({message})
        response.json({message: 'TodoList successfully stored'})
    }catch(err) {
        console.log(err);
    }
});

server.delete('/todoList:id', async (require, response) => {
    const {id} = require.params;
    try {
        await db('tododList').where({id}).del();
        response.status(200).json({message: 'Deletado com sucesso'})
    } catch (err) {
        console.log(err)
    }
});

module.exports = server;