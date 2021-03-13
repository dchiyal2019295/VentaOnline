'use strict'

var express = require('express');
var categoriaController = require('../controladores/categoria.controller');

//IMPORTACION DE MIDDLEWARE
 
var md_autorizacion = require("../middlewares/authenticated")

//RUTAS

var api = express.Router()

api.post('/AgregarCategoria', md_autorizacion.ensureAuth, categoriaController.agregarCategoria);
api.get('/MostrarCategorias', categoriaController.MostrarCategorias);
api.put('/EditarCategoria/:id', md_autorizacion.ensureAuth, categoriaController.EditarCategoria)
api.delete('/EliminarCategoria/:id',md_autorizacion.ensureAuth, categoriaController.EliminarCategoria);
api.get('/ProductoPorCategoria',md_autorizacion.ensureAuth, categoriaController.BucarCategoria)

module.exports = api