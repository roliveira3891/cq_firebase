const express = require('express');
const AtividadeController = require('./controllers/AtividadeController');
const routes = express.Router();

routes.get('/home', AtividadeController.home);
routes.post('/create', AtividadeController.create);

module.exports = routes;