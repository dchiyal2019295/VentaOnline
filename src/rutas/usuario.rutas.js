'use strict'
const { Router } = require("express");
var express = require("express");
var usuarioController = require("../controladores/usuario.controller");

//MIDDLEWARES

var md_autorizacion = require("../middlewares/authenticated");

//RUTAS 

var api = express.Router();

api.post('/AgregarUsuario',md_autorizacion.ensureAuth, usuarioController.AgregarUsuario)
api.post('/login', usuarioController.login)
api.put('/ModificarRol/:id', md_autorizacion.ensureAuth, usuarioController.modificarRol)
api.put('/EditarUsuario/:id', md_autorizacion.ensureAuth, usuarioController.EditarUsuario)
api.delete('/EliminarUsuario/:id', md_autorizacion.ensureAuth, usuarioController.eliminarUsuario)


module.exports = api;