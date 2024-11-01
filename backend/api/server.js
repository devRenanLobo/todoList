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

server.post('/todoList', async (require, response) => {
    const {message} = require.body;
    const currentDate = new Date().toISOString();

    if (!message){
        return response.status(400).json({
            message: 'Você deveria colocar um Todo no seu request'
        })
    }

    try {
        await db('todoList').insert({message, data: currentDate});
        response.json({message: 'TodoList successfully stored'})
    }catch(err) {
        console.log(err);
    }
});

// server.delete('/todoList/:id', async (require, response) => {
//     const {id} = require.params;
//     try {
//         await db('todoList').where({id}).del();
//         response.status(200).json({message: 'Deletado com sucesso'})
//     } catch (err) {
//         console.log(err)
//     }
// });

server.delete('/todoList/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await db('todoList').where({ id }).del();
        
        if (deleted) {
            res.status(200).json({ message: 'Deletado com sucesso' });
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Erro ao deletar a tarefa' });
    }
})

module.exports = server;