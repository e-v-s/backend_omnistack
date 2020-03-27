const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// sempre recebe dois parÂmetros, requisição e resposta
// rotas e recursos
// métodos http >>
// >> GET: buscar/listar info do backend
// >> POST: criar info no backend
// >> PUT: alterar
// >> DELETE: deletar

// parÂmetros que podem ser enviados na rota
// query: parâmetros nomeados enviados na rota pós "?", servindo pra filtrar, paginar, etc
// route params: serve pra identificar recursos
// request body: corpo da requisição usado para alterar ou criar recursos

// bancos de dados
// SQL: mysql, postgresql, oracle, microsoft, sql server, sqlite
// NoSQL: mongodb, couchdb, etc
// sqlite é salvo como arquivo na aplicação, por isso vamos usar aqui, já que não preciso instalar carai nenhum

// driver: pacote oficial do banco de dados pra nove: SELECT * FROM users
// query builder: table('users').select('*').where(), usaremos knex.js

app.listen(3333);
