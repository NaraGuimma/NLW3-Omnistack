// Rota = conjunto
// Recurso = usuário
// Métodos HTTP: GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação

// PUT = Editando uma informação
// DELETE = Excluindo uma informação

// Query Params: http://localhost:3333/users?search=casa
// Route Params: http://localhost:333/users/1 (identificar um recurso, registro)
// Body: http://localhost:3333/users (identificar um recurso grande quantidade de dados)

import express from 'express';

import path from 'path';

import cors from 'cors';

import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handlers';
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);
