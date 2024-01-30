const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('sorveteria_delivery', 'root', '179856', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

