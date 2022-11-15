//requerimientos
const {Router} = require("express");
const {defaul:mongoose} = require("mongoose");
const router =Router()
const PersonaCrl = require('../controller/Persona.controllers');

//rutas y endspoints
router.post("/crearPersona",PersonaCrl.crearPersona)

module.exports = router;