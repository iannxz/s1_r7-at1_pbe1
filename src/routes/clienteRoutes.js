const express = require('express');
const clienteRoutes = express.Router();
const {clienteController} = require ('../controllers/clienteController')

clienteRoutes.post('/cliente', clienteController.incluiCliente);
clienteRoutes.get('/cliente', clienteController.selecionaTodos);
clienteRoutes.put('/cliente/:idCliente', clienteController.alteraCliente);
clienteRoutes.delete('/cliente/:idCliente', clienteController.deleteCliente);

module.exports = clienteRoutes;

