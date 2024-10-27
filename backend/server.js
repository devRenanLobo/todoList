const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const HOST = 'localhost';
const PORT = 8888;

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (request, response) => {
    response.send('Bem vindo ao server');
});

server.listen(PORT, () => console.log(`Server funcionando em ${HOST}:${PORT}`));